import React from 'react';
import { User, Sparkles } from 'lucide-react';

const StageStep = ({ value, onChange }) => {
  const stages = [
    'High School Student',
    '1st Year College',
    '2nd Year College',
    '3rd Year College',
    '4th Year College',
    'Graduate/Professional'
  ];

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
        {stages.map((stage) => (
          <button
            key={stage}
            onClick={() => onChange(stage)}
            className={`group p-4 rounded-xl text-left transition-all duration-300 ${
              value === stage
                ? 'bg-gradient-to-r from-periwinkle/20 to-dusty-rose/20 text-white shadow-lg transform scale-105 border border-periwinkle/30'
                : 'bg-space-light/50 hover:bg-space-light/70 text-pale-pink/80 hover:text-white border border-periwinkle/10 hover:border-periwinkle/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{stage}</span>
              {value === stage && <Sparkles className="w-5 h-5 text-periwinkle animate-pulse" />}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StageStep;
