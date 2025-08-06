import React, { useState } from 'react';
import { UserAssessment } from '../types';
import { ChevronRight, ChevronLeft, User, Clock, Target, Code } from 'lucide-react';

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
          <div className="space-y-6">
            <div className="text-center mb-8">
              <User className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What's your current stage?</h2>
              <p className="text-gray-600">Help us understand your academic/professional background</p>
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
                  className={`p-4 rounded-xl text-left transition-all duration-300 ${
                    assessment.stage === stage
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white hover:bg-blue-50 text-gray-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Code className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Programming Experience Level?</h2>
              <p className="text-gray-600">Be honest - we'll verify your level with a quick assessment</p>
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
                  className={`p-6 rounded-xl text-left transition-all duration-300 ${
                    assessment.programmingLevel === level
                      ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-white hover:bg-purple-50 text-gray-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="font-semibold text-lg">{level}</div>
                  <div className={`text-sm ${assessment.programmingLevel === level ? 'text-purple-100' : 'text-gray-500'}`}>
                    {desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Clock className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Daily Study Time?</h2>
              <p className="text-gray-600">How many hours can you dedicate to DSA learning daily?</p>
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
                  className={`p-4 rounded-xl text-left transition-all duration-300 ${
                    assessment.dailyHours === hours
                      ? 'bg-green-600 text-white shadow-lg transform scale-105'
                      : 'bg-white hover:bg-green-50 text-gray-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  {hours}
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Target className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">What's your main goal?</h2>
              <p className="text-gray-600">This helps us customize your learning path</p>
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
                  className={`p-4 rounded-xl text-left transition-all duration-300 ${
                    assessment.goal === goal
                      ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                      : 'bg-white hover:bg-orange-50 text-gray-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Code className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Programming Languages</h2>
              <p className="text-gray-600">Select all languages you're familiar with</p>
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
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    assessment.languages.includes(language)
                      ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                      : 'bg-white hover:bg-indigo-50 text-gray-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  {language}
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`flex items-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isStepValid()
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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