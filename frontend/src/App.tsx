import React, { useState, useEffect } from 'react';
import WelcomePage from './components/WelcomePage';
import AssessmentForm from './components/AssessmentForm';
import SkillVerificationQuiz from './components/SkillVerificationQuiz';
import Dashboard from './components/Dashboard';
import PracticeProblems from './components/PracticeProblems';
import VideoLearning from './components/VideoLearning';
import TheoryContent from './components/TheoryContent';
import PDFDownloader from './components/PDFDownloader';
import Navigation from './components/Navigation';
import LoginPage from './components/LoginPage';
import { UserAssessment, LearningPath } from './types';
import { apiService } from './services/api';
import { generateLearningPathFromAPI } from './services/learningPathService';

// Firebase imports would go here
// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/firebase-auth';

type AppState = 'welcome' | 'assessment' | 'quiz' | 'dashboard' | 'practice' | 'videos' | 'theory' | 'pdf';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [assessment, setAssessment] = useState<UserAssessment | null>(null);
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null);
  const [user, setUser] = useState<any>(null);

  // Handle OAuth callback and load user data
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      apiService.setToken(token);
      // Clear the URL
      window.history.replaceState({}, document.title, window.location.pathname);
      loadUserData();
    } else if (apiService.getToken()) {
      // User already has a token, load their data
      loadUserData();
    }
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await apiService.getCurrentUser();
      setUser(userData);
      
      // Check if user has completed assessment
      if (userData.assessment && userData.assessment.stage) {
        setAssessment(userData.assessment);
        const path = await generateLearningPathFromAPI(userData.assessment);
        setLearningPath(path);
        setCurrentState('dashboard');
      } else {
        setCurrentState('welcome');
      }
    } catch (error) {
      console.error('Error loading user data:', error);
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
      setUser(null);
      setAssessment(null);
      setLearningPath(null);
    }
  };

  const handleStart = () => {
    setCurrentState('assessment');
  };

  const handleAssessmentComplete = async (userAssessment: UserAssessment) => {
    try {
      if (userAssessment.programmingLevel === 'Beginner') {
        const completedAssessment = { ...userAssessment, verified: true };
        // Save to MongoDB
        await apiService.saveAssessment(completedAssessment);
        setAssessment(completedAssessment);
        const path = await generateLearningPathFromAPI(completedAssessment);
        setLearningPath(path);
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
        const path = await generateLearningPathFromAPI(completedAssessment);
        setLearningPath(path);
        setCurrentState('dashboard');
      } else {
        setAssessment(userAssessment);
        setCurrentState('quiz');
      }
    }
  };

  const handleQuizComplete = async (score: number, passed: boolean) => {
    if (assessment) {
      try {
        const updatedAssessment = {
          ...assessment,
          verified: passed,
          quizScore: score,
          programmingLevel: passed ? assessment.programmingLevel :
            (assessment.programmingLevel === 'Advanced' ? 'Intermediate' : 'Beginner')
        };
        // Save updated assessment to MongoDB
        await apiService.saveAssessment(updatedAssessment);
        setAssessment(updatedAssessment);
        const path = await generateLearningPathFromAPI(updatedAssessment);
        setLearningPath(path);
        setCurrentState('dashboard');
      } catch (error) {
        console.error('Error saving quiz results:', error);
        // Still proceed with the flow even if save fails
        const updatedAssessment = {
          ...assessment,
          verified: passed,
          quizScore: score,
          programmingLevel: passed ? assessment.programmingLevel :
            (assessment.programmingLevel === 'Advanced' ? 'Intermediate' : 'Beginner')
        };
        setAssessment(updatedAssessment);
        const path = await generateLearningPathFromAPI(updatedAssessment);
        setLearningPath(path);
        setCurrentState('dashboard');
      }
    }
  };

  const handleBackToWelcome = () => {
    setCurrentState('welcome');
    setAssessment(null);
    setLearningPath(null);
  };

  const handleNavigate = (page: string) => {
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

  const handleFeatureSelect = (feature: 'practice' | 'videos' | 'theory' | 'pdf') => {
    setCurrentState(feature);
  };

  const handleBackToDashboard = () => {
    setCurrentState('dashboard');
  };

  const renderCurrentState = () => {
    if (!apiService.getToken()) {
      return <LoginPage onGoogleSignIn={handleGoogleSignIn} />;
    }

    switch (currentState) {
      case 'welcome':
        return <WelcomePage onStart={handleStart} />;
      
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
            level={assessment?.programmingLevel.toLowerCase() as 'intermediate' | 'advanced'}
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
        return <WelcomePage onStart={handleStart} />;
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