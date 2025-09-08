import React, { useState } from 'react';
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
import { generateLearningPath } from './data/learningPaths';
import { auth, googleProvider, signInWithPopup, signOut as firebaseSignOut } from './firebase';

// Firebase imports would go here
// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/firebase-auth';

type AppState = 'welcome' | 'assessment' | 'quiz' | 'dashboard' | 'practice' | 'videos' | 'theory' | 'pdf';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [assessment, setAssessment] = useState<UserAssessment | null>(null);
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null);
  const [user, setUser] = useState<any>(null);

  // Firebase Google authentication
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { displayName, email, photoURL, uid } = result.user;
      setUser({ displayName, email, photoURL, uid });
      setCurrentState('welcome');
    } catch (error) {
      console.error('Google sign-in failed (popup likely blocked):', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Sign-out failed:', error);
    } finally {
      setUser(null);
      setCurrentState('welcome');
      setAssessment(null);
      setLearningPath(null);
    }
  };

  const handleStart = () => {
    setCurrentState('assessment');
  };

  const handleAssessmentComplete = (userAssessment: UserAssessment) => {
    if (userAssessment.programmingLevel === 'Beginner') {
      const completedAssessment = { ...userAssessment, verified: true };
      setAssessment(completedAssessment);
      const path = generateLearningPath(completedAssessment);
      setLearningPath(path);
      setCurrentState('dashboard');
    } else {
      setAssessment(userAssessment);
      setCurrentState('quiz');
    }
  };

  const handleQuizComplete = (score: number, passed: boolean) => {
    if (assessment) {
      const updatedAssessment = {
        ...assessment,
        verified: passed,
        quizScore: score,
        programmingLevel: passed ? assessment.programmingLevel : 
          (assessment.programmingLevel === 'Advanced' ? 'Intermediate' : 'Beginner')
      };
      setAssessment(updatedAssessment);
      const path = generateLearningPath(updatedAssessment);
      setLearningPath(path);
      setCurrentState('dashboard');
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
    if (!user) {
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
        return <PracticeProblems onBack={handleBackToDashboard} />;
      
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

  const showNavigation = currentState !== 'welcome' && currentState !== 'assessment' && user;
  const showBackButton = currentState !== 'welcome' && currentState !== 'dashboard' && user;
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
          user={user}
        />
      )}
      <div className={showNavigation ? 'pt-0' : ''}>
        {renderCurrentState()}
      </div>
    </div>
  );
}

export default App;