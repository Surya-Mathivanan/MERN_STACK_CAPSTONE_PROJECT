import { useState, useEffect } from 'react';
import WelcomePage from './components/WelcomePage';
import AssessmentForm from './components/assessment/AssessmentForm';
import SkillVerificationQuiz from './components/quiz/SkillVerificationQuiz';
import Dashboard from './components/Dashboard';
import PracticeProblems from './components/practice/PracticeProblems';
import VideoLearning from './components/VideoLearning';
import TheoryContent from './components/TheoryContent';
import PDFDownloader from './components/pdf/PDFDownloader';
import Navigation from './components/Navigation';
import LoginPage from './components/LoginPage';
import { UserAssessment, LearningPath } from './models';
import { apiService } from './services/api';
import { generateLearningPathFromAPI } from './services/learningPathService';
// Firebase imports would go here
// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/firebase-auth';
function App() {
  const [currentState, setCurrentState] = useState('welcome');
  const [assessment, setAssessment] = useState(null);
  const [learningPath, setLearningPath] = useState(null);
  const [hasPreviousData, setHasPreviousData] = useState(false);
  // Note: user state is loaded via apiService.getCurrentUser and stored in `assessment`/`learningPath`.
  // Keep a local placeholder only if needed later.
  const [authChecked, setAuthChecked] = useState(false);
  // Handle OAuth callback and load user data
  useEffect(() => {
    // Try to read token from either the query string (?token=...) or URL hash (#token=...)
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get('token');
    if (!token && window.location.hash) {
      // Support backends that put the token in the hash fragment: #token=...
      const hash = window.location.hash.replace(/^#/, '');
      const hashParams = new URLSearchParams(hash);
      token = hashParams.get('token');
    }
    const finishInit = () => {
      // mark that we've attempted to read auth state from the URL/localStorage
      setAuthChecked(true);
    };
    if (token) {
      apiService.setToken(token);
      // Clear the URL (remove token for cleanliness)
      window.history.replaceState({}, document.title, window.location.pathname);
      loadUserData(false).finally(finishInit);
    } else if (apiService.getToken()) {
      // User already has a token, check for their data but stay on welcome
      loadUserData(false).finally(finishInit);
    } else {
      // No token anywhere — mark check complete so login UI can show
      finishInit();
    }
  }, []);
  const loadUserData = async (goToDashboard = true) => {
    try {
      const userData = await apiService.getCurrentUser();
      // user data will be used to populate assessment/learningPath below
      // Check if user has completed assessment
      if (userData.assessment && userData.assessment.stage) {
        setHasPreviousData(true);
        if (goToDashboard) {
          setAssessment(userData.assessment);
          const path = await generateLearningPathFromAPI(userData.assessment);
          setLearningPath(path);
          setCurrentState('dashboard');
        }
      } else {
        setHasPreviousData(false);
        setCurrentState('welcome');
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      setHasPreviousData(false);
      setCurrentState('welcome');
    }
  };
  // Google OAuth authentication
  const handleGoogleSignIn = async () => {
    try {
      await apiService.googleSignIn();
    } catch (error) {
      console.error('Google sign-in failed:', error);
    }
  };
  const handleSignOut = async () => {
    try {
      await apiService.logout();
    } catch (error) {
      console.error('Sign-out failed:', error);
    } finally {
      setAssessment(null);
      setLearningPath(null);
    }
  };
  const handleStart = () => {
    setCurrentState('assessment');
  };
  const handleLoadPrevious = async () => {
    try {
      const userData = await apiService.getCurrentUser();
      if (userData.assessment && userData.assessment.stage) {
        setAssessment(userData.assessment);
        const path = await generateLearningPathFromAPI(userData.assessment);
        setLearningPath(path);
        setCurrentState('dashboard');
      }
    } catch (error) {
      console.error('Error loading previous data:', error);
      alert('Failed to load previous dashboard. Please try again.');
    }
  };
  const handleAssessmentComplete = async (userAssessment) => {
    try {
      if (userAssessment.programmingLevel === 'Beginner') 
        {
              const completedAssessment = { ...userAssessment, verified: true };
              // Save to MongoDB
              await apiService.saveAssessment(completedAssessment);
              setAssessment(completedAssessment);
              try {
                const path = await generateLearningPathFromAPI(completedAssessment);
                setLearningPath(path);
              } catch (pathError) {
                console.error('Error generating learning path:', pathError);
          // Create a default learning path
          const defaultPath = {
            title: "DSA Learning Path",
            description: "Your personalized learning journey",
            duration: "12 weeks",
            topics: ["Programming Fundamentals", "Data Structures", "Algorithms"],
            dailyPlan: []
          };
          setLearningPath(defaultPath);
        }
        setCurrentState('dashboard');
      } else {
        // Save initial assessment
        await apiService.saveAssessment(userAssessment);
        setAssessment(userAssessment);
        setCurrentState('quiz');
      }
    } catch (error) {
      console.error('Error saving assessment:', error);
      // Still proceed with the flow even if save fails
      if (userAssessment.programmingLevel === 'Beginner') {
        const completedAssessment = { ...userAssessment, verified: true };
        setAssessment(completedAssessment);
        try {
          const path = await generateLearningPathFromAPI(completedAssessment);
          setLearningPath(path);
        } catch (pathError) {
          console.error('Error generating learning path:', pathError);
          const defaultPath = {
            title: "DSA Learning Path",
            description: "Your personalized learning journey",
            duration: "12 weeks",
            topics: ["Programming Fundamentals", "Data Structures", "Algorithms"],
            dailyPlan: []
          };
          setLearningPath(defaultPath);
        }
        setCurrentState('dashboard');
      } else {
        setAssessment(userAssessment);
        setCurrentState('quiz');
      }
    }
  };
  const handleQuizComplete = async (score, passed) => {
    if (!assessment) return;
    const defaultPath = {
      title: "DSA Learning Path",
      description: "Your personalized learning journey",
      duration: "12 weeks",
      topics: ["Programming Fundamentals", "Data Structures", "Algorithms"],
      dailyPlan: []
    };
    const updatedAssessment = {
      ...assessment,
      verified: passed,
      quizScore: score,
      programmingLevel: passed ? assessment.programmingLevel :
        (assessment.programmingLevel === 'Advanced' ? 'Intermediate' : 'Beginner')
    };
    try {
      // Try to save results to backend; continue even if this fails
      await apiService.saveAssessment(updatedAssessment);
      setAssessment(updatedAssessment);
    } catch (error) {
      console.error('Error saving quiz results:', error);
      // still set local state so UI can proceed
      setAssessment(updatedAssessment);
    }
    // Always try to generate a learning path, but fall back to a default on failure
    try {
      const path = await generateLearningPathFromAPI(updatedAssessment);
      setLearningPath(path);
    } catch (error) {
      console.error('Error generating learning path after quiz:', error);
      setLearningPath(defaultPath);
    }
    // Finally navigate to dashboard regardless of upstream failures
    setCurrentState('dashboard');
  };
  const handleBackToWelcome = () => {
    setCurrentState('welcome');
    setAssessment(null);
    setLearningPath(null);
  };
  const handleNavigate = (page) => {
    switch (page) {
      case 'welcome':
        handleBackToWelcome();
        break;
      case 'dashboard':
        if (assessment && learningPath) {
          setCurrentState('dashboard');
        }
        break;
      case 'practice':
        setCurrentState('practice');
        break;
      case 'videos':
        setCurrentState('videos');
        break;
      case 'theory':
        setCurrentState('theory');
        break;
      case 'pdf':
        setCurrentState('pdf');
        break;
    }
  };
  const handleBackToAssessment = () => {
    setCurrentState('assessment');
  };
  const handleFeatureSelect = (feature) => {
    setCurrentState(feature);
  };
  const handleBackToDashboard = () => {
    setCurrentState('dashboard');
  };
  const renderCurrentState = () => {
    // Wait until we've checked URL/localStorage for a token before deciding what to show.
    if (!authChecked) {
      return null; // or a loading indicator
    }
    if (!apiService.getToken()) {
      return <LoginPage onGoogleSignIn={handleGoogleSignIn} />;
    }
    switch (currentState) {
      case 'welcome':
        return (
          <WelcomePage 
            onStart={handleStart} 
            onLoadPrevious={handleLoadPrevious}
            onSignOut={handleSignOut}
            hasPreviousData={hasPreviousData}
          />
        );
      case 'assessment':
        return (
          <AssessmentForm 
            onComplete={handleAssessmentComplete}
            onBack={handleBackToWelcome}
          />
        );
      case 'quiz':
        return (
          <SkillVerificationQuiz
            level={assessment?.programmingLevel?.toLowerCase()}
            onComplete={handleQuizComplete}
            onBack={handleBackToAssessment}
          />
        );
      case 'dashboard':
        return assessment && learningPath ? (
          <Dashboard
            assessment={assessment}
            learningPath={learningPath}
            onSelectFeature={handleFeatureSelect}
            onBack={handleBackToWelcome}
          />
        ) : null;
      case 'practice':
        return assessment ? (
          <PracticeProblems
            onBack={handleBackToDashboard}
            userLevel={assessment.programmingLevel}
          />
        ) : null;
      case 'videos':
        return <VideoLearning onBack={handleBackToDashboard} />;
      case 'theory':
        return <TheoryContent onBack={handleBackToDashboard} />;
      case 'pdf':
        return assessment && learningPath ? (
          <PDFDownloader
            onBack={handleBackToDashboard}
            assessment={assessment}
            learningPath={learningPath}
          />
        ) : null;
      default:
        return (
          <WelcomePage 
            onStart={handleStart} 
            onLoadPrevious={handleLoadPrevious}
            onSignOut={handleSignOut}
            hasPreviousData={hasPreviousData}
          />
        );
    }
  };
  const showNavigation = currentState !== 'welcome' && currentState !== 'assessment' && !!apiService.getToken();
  const showBackButton = currentState !== 'welcome' && currentState !== 'dashboard' && !!apiService.getToken();
  const userProfile = assessment ? {
    stage: assessment.stage,
    level: assessment.programmingLevel
  } : undefined;
  return (
    <div className="App min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy text-white">
      {showNavigation && (
        <Navigation
          currentPage={currentState}
          onNavigate={handleNavigate}
          showBackButton={showBackButton}
          onBack={handleBackToDashboard}
          userProfile={userProfile}
          onSignOut={handleSignOut}
          user={null}
        />
      )}
      <div className={showNavigation ? 'pt-0' : ''}>
        {renderCurrentState()}
      </div>
    </div>
  );
}
export default App;
