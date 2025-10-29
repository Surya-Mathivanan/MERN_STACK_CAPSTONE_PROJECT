import React from 'react';
import { Target, Sparkles } from 'lucide-react';

const GoalStep = ({ value, onChange }) => {
  const goals = ['Job Placements/Interviews', 'Competitive Programming', 'Academic Learning', 'Personal Skill Development'];

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
        {goals.map((goal) => (
          <button
            key={goal}
            onClick={() => onChange(goal)}
            className={`group p-4 rounded-xl text-left transition-all duration-300 ${
              value === goal
                ? 'bg-gradient-to-r from-dusty-rose/20 to-pale-pink/20 text-white shadow-lg transform scale-105 border border-dusty-rose/30'
                : 'bg-space-light/50 hover:bg-space-light/70 text-pale-pink/80 hover:text-white border border-periwinkle/10 hover:border-dusty-rose/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{goal}</span>
              {value === goal && <Sparkles className="w-5 h-5 text-dusty-rose animate-pulse" />}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GoalStep;
