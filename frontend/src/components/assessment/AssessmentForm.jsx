import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import PageHeader from '../../shared-components/PageHeader';
import BackButton from '../../shared-components/BackButton';
import StageStep from './StageStep';
import ProgrammingLevelStep from './ProgrammingLevelStep';
import DailyHoursStep from './DailyHoursStep';
import GoalStep from './GoalStep';
import LanguagesStep from './LanguagesStep';

const AssessmentForm = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessment, setAssessment] = useState({
    stage: '',
    programmingLevel: '',
    dailyHours: '',
    goal: '',
    languages: []
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(assessment);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return assessment.stage !== '';
      case 2: return assessment.programmingLevel !== '';
      case 3: return assessment.dailyHours !== '';
      case 4: return assessment.goal !== '';
      case 5: return assessment.languages.length > 0;
      default: return false;
    }
  };

  const renderStep = () => {
    const steps = [
      <StageStep key="stage" value={assessment.stage} onChange={(val) => setAssessment({ ...assessment, stage: val })} />,
      <ProgrammingLevelStep key="level" value={assessment.programmingLevel} onChange={(val) => setAssessment({ ...assessment, programmingLevel: val })} />,
      <DailyHoursStep key="hours" value={assessment.dailyHours} onChange={(val) => setAssessment({ ...assessment, dailyHours: val })} />,
      <GoalStep key="goal" value={assessment.goal} onChange={(val) => setAssessment({ ...assessment, goal: val })} />,
      <LanguagesStep key="languages" value={assessment.languages} onChange={(val) => setAssessment({ ...assessment, languages: val })} />
    ];
    return steps[currentStep - 1];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy py-12 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <PageHeader title={`Step ${currentStep} of ${totalSteps}`} subtitle="Tell us about yourself" />

        <div className="mb-8 animate-slide-down">
          <div className="flex justify-between text-sm text-pale-pink/60 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-space-light/50 rounded-full h-2 backdrop-blur-sm">
            <div
              className="bg-gradient-to-r from-periwinkle to-dusty-rose h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-space-light/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-periwinkle/20">
          {renderStep()}
        </div>

        <div className="flex justify-between animate-slide-up">
          <button
            onClick={handlePrevious}
            className="flex items-center px-6 py-3 text-pale-pink/60 hover:text-white transition-colors duration-200 bg-space-light/30 hover:bg-space-light/50 rounded-xl border border-periwinkle/20 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`flex items-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isStepValid()
                ? 'bg-gradient-to-r from-periwinkle to-dusty-rose hover:from-periwinkle/90 hover:to-dusty-rose/90 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-space-light/30 text-pale-pink/50 cursor-not-allowed border border-periwinkle/10'
            }`}
          >
            {currentStep === totalSteps ? 'Complete' : 'Next'}
            {currentStep < totalSteps && <ChevronRight className="w-5 h-5 ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentForm;
