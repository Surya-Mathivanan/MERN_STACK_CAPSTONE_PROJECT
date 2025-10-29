import React from 'react';
import { Code, Sparkles } from 'lucide-react';

const ProgrammingLevelStep = ({ value, onChange }) => {
  const levels = [
    { level: 'Beginner', desc: 'Just starting out, basic syntax knowledge' },
    { level: 'Intermediate', desc: 'Comfortable with loops, functions, basic algorithms' },
    { level: 'Advanced', desc: 'Strong foundation in DSA, complex problem solving' }
  ];

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
        {levels.map(({ level, desc }) => (
          <button
            key={level}
            onClick={() => onChange(level)}
            className={`group p-6 rounded-xl text-left transition-all duration-300 ${
              value === level
                ? 'bg-gradient-to-r from-dusty-rose/20 to-periwinkle/20 text-white shadow-lg transform scale-105 border border-dusty-rose/30'
                : 'bg-space-light/50 hover:bg-space-light/70 text-pale-pink/80 hover:text-white border border-periwinkle/10 hover:border-dusty-rose/30'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-lg mb-1">{level}</div>
                <div className={`text-sm ${value === level ? 'text-pale-pink/80' : 'text-pale-pink/60'}`}>{desc}</div>
              </div>
              {value === level && <Sparkles className="w-5 h-5 text-dusty-rose animate-pulse" />}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingLevelStep;
