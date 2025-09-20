import React, { useState } from 'react';
import { UserAssessment } from '../types';
import { ChevronRight, ChevronLeft, User, Clock, Target, Code, Sparkles } from 'lucide-react';

interface AssessmentFormProps {
  onComplete: (assessment: UserAssessment) => void;
  onBack: () => void;
}

const AssessmentForm: React.FC<AssessmentFormProps> = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessment, setAssessment] = useState<UserAssessment>({
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
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-periwinkle to-dusty-rose rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
                <User className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">What's your current stage?</h2>
              <p className="text-pale-pink/70">Help us understand your academic/professional background</p>
            </div>
            <div className="grid gap-4">
              {[
                'High School Student',
                '1st Year College',
                '2nd Year College', 
                '3rd Year College',
                '4th Year College',
                'Graduate/Professional'
              ].map((stage) => (
                <button
                  key={stage}
                  onClick={() => setAssessment({ ...assessment, stage })}
                  className={`group p-4 rounded-xl text-left transition-all duration-300 ${
                    assessment.stage === stage
                      ? 'bg-gradient-to-r from-periwinkle/20 to-dusty-rose/20 text-white shadow-lg transform scale-105 border border-periwinkle/30'
                      : 'bg-space-light/50 hover:bg-space-light/70 text-pale-pink/80 hover:text-white border border-periwinkle/10 hover:border-periwinkle/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{stage}</span>
                    {assessment.stage === stage && (
                      <Sparkles className="w-5 h-5 text-periwinkle animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-dusty-rose to-periwinkle rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Programming Experience Level?</h2>
              <p className="text-pale-pink/70">Be honest - we'll verify your level with a quick assessment</p>
            </div>
            <div className="grid gap-4">
              {[
                { level: 'Beginner', desc: 'Just starting out, basic syntax knowledge' },
                { level: 'Intermediate', desc: 'Comfortable with loops, functions, basic algorithms' },
                { level: 'Advanced', desc: 'Strong foundation in DSA, complex problem solving' }
              ].map(({ level, desc }) => (
                <button
                  key={level}
                  onClick={() => setAssessment({ ...assessment, programmingLevel: level })}
                  className={`group p-6 rounded-xl text-left transition-all duration-300 ${
                    assessment.programmingLevel === level
                      ? 'bg-gradient-to-r from-dusty-rose/20 to-periwinkle/20 text-white shadow-lg transform scale-105 border border-dusty-rose/30'
                      : 'bg-space-light/50 hover:bg-space-light/70 text-pale-pink/80 hover:text-white border border-periwinkle/10 hover:border-dusty-rose/30'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold text-lg mb-1">{level}</div>
                      <div className={`text-sm ${assessment.programmingLevel === level ? 'text-pale-pink/80' : 'text-pale-pink/60'}`}>
                        {desc}
                      </div>
                    </div>
                    {assessment.programmingLevel === level && (
                      <Sparkles className="w-5 h-5 text-dusty-rose animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-periwinkle to-pale-pink rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Daily Study Time?</h2>
              <p className="text-pale-pink/70">How many hours can you dedicate to DSA learning daily?</p>
            </div>
            <div className="grid gap-4">
              {[
                '1-2 hours',
                '2-3 hours',
                '3-4 hours',
                '4+ hours'
              ].map((hours) => (
                <button
                  key={hours}
                  onClick={() => setAssessment({ ...assessment, dailyHours: hours })}
                  className={`group p-4 rounded-xl text-left transition-all duration-300 ${
                    assessment.dailyHours === hours
                      ? 'bg-gradient-to-r from-periwinkle/20 to-pale-pink/20 text-white shadow-lg transform scale-105 border border-periwinkle/30'
                      : 'bg-space-light/50 hover:bg-space-light/70 text-pale-pink/80 hover:text-white border border-periwinkle/10 hover:border-pale-pink/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{hours}</span>
                    {assessment.dailyHours === hours && (
                      <Sparkles className="w-5 h-5 text-periwinkle animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-dusty-rose to-pale-pink rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">What's your main goal?</h2>
              <p className="text-pale-pink/70">This helps us customize your learning path</p>
            </div>
            <div className="grid gap-4">
              {[
                'Job Placements/Interviews',
                'Competitive Programming',
                'Academic Learning',
                'Personal Skill Development'
              ].map((goal) => (
                <button
                  key={goal}
                  onClick={() => setAssessment({ ...assessment, goal })}
                  className={`group p-4 rounded-xl text-left transition-all duration-300 ${
                    assessment.goal === goal
                      ? 'bg-gradient-to-r from-dusty-rose/20 to-pale-pink/20 text-white shadow-lg transform scale-105 border border-dusty-rose/30'
                      : 'bg-space-light/50 hover:bg-space-light/70 text-pale-pink/80 hover:text-white border border-periwinkle/10 hover:border-dusty-rose/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{goal}</span>
                    {assessment.goal === goal && (
                      <Sparkles className="w-5 h-5 text-dusty-rose animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pale-pink to-periwinkle rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Programming Languages</h2>
              <p className="text-pale-pink/70">Select all languages you're familiar with</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Python', 'Java', 'C++', 'JavaScript',
                'C', 'Go', 'Rust', 'Kotlin'
              ].map((language) => (
                <button
                  key={language}
                  onClick={() => {
                    const languages = assessment.languages.includes(language)
                      ? assessment.languages.filter(l => l !== language)
                      : [...assessment.languages, language];
                    setAssessment({ ...assessment, languages });
                  }}
                  className={`group p-4 rounded-xl text-center transition-all duration-300 ${
                    assessment.languages.includes(language)
                      ? 'bg-gradient-to-r from-pale-pink/20 to-periwinkle/20 text-white shadow-lg transform scale-105 border border-pale-pink/30'
                      : 'bg-space-light/50 hover:bg-space-light/70 text-pale-pink/80 hover:text-white border border-periwinkle/10 hover:border-pale-pink/30'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span className="font-medium">{language}</span>
                    {assessment.languages.includes(language) && (
                      <Sparkles className="w-4 h-4 text-pale-pink animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-periwinkle rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-dusty-rose rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pale-pink rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-periwinkle rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-dusty-rose rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Progress Bar */}
        <div className="mb-8 animate-slide-down">
          <div className="flex justify-between text-sm text-pale-pink/60 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-space-light/50 rounded-full h-2 backdrop-blur-sm">
            <div
              className="bg-gradient-to-r from-periwinkle to-dusty-rose h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-space-light/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-periwinkle/20">
          {renderStep()}
        </div>

        {/* Navigation */}
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