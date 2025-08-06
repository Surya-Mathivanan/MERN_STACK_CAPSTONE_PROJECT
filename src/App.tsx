import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import AssessmentForm from './components/AssessmentForm';
import SkillVerificationQuiz from './components/SkillVerificationQuiz';
import Dashboard from './components/Dashboard';
import PracticeProblems from './components/PracticeProblems';
import VideoLearning from './components/VideoLearning';
import TheoryContent from './components/TheoryContent';
import PDFDownloader from './components/PDFDownloader';
import { UserAssessment, LearningPath } from './types';
import { generateLearningPath } from './data/learningPaths';

type AppState = 'welcome' | 'assessment' | 'quiz' | 'dashboard' | 'practice' | 'videos' | 'theory' | 'pdf';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('welcome');
  const [assessment, setAssessment] = useState<UserAssessment | null>(null);
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null);

  const handleStart = () => {
    setCurrentState('assessment');
  };

  const handleAssessmentComplete = (userAssessment: UserAssessment) => {
    if (userAssessment.programmingLevel === 'Beginner') {
      // Skip quiz for beginners
      const completedAssessment = { ...userAssessment, verified: true };
      setAssessment(completedAssessment);
      const path = generateLearningPath(completedAssessment);
      setLearningPath(path);
      setCurrentState('dashboard');
    } else {
      // Require quiz for intermediate/advanced
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
        // Downgrade level if failed
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

  return (
    <div className="App">
      {renderCurrentState()}
    </div>
  );
}

export default App;