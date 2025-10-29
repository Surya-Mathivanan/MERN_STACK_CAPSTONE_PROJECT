import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

const DailyHoursStep = ({ value, onChange }) => {
  const hours = ['1-2 hours', '2-3 hours', '3-4 hours', '4+ hours'];

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
        {hours.map((h) => (
          <button
            key={h}
            onClick={() => onChange(h)}
            className={`group p-4 rounded-xl text-left transition-all duration-300 ${
              value === h
                ? 'bg-gradient-to-r from-periwinkle/20 to-pale-pink/20 text-white shadow-lg transform scale-105 border border-periwinkle/30'
                : 'bg-space-light/50 hover:bg-space-light/70 text-pale-pink/80 hover:text-white border border-periwinkle/10 hover:border-pale-pink/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{h}</span>
              {value === h && <Sparkles className="w-5 h-5 text-periwinkle animate-pulse" />}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DailyHoursStep;
