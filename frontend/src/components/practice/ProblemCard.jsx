import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { getDifficultyColor, getPlatformColor } from '../../data/practiceProblems';

const ProblemCard = ({ problem }) => {
  return (
    <div className="group bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-periwinkle/20 hover:border-periwinkle/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-periwinkle/10 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-periwinkle transition-colors duration-300">
          {problem.title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(problem.difficulty)}`}>
          {problem.difficulty}
        </span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPlatformColor(problem.platform)}`}>
          {problem.platform}
        </span>
        <div className="flex items-center text-pale-pink/60 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          Est. {problem.estimatedTime || '30-45 min'}
        </div>
      </div>

      <a
        href={problem.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-periwinkle to-dusty-rose hover:from-periwinkle/90 hover:to-dusty-rose/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
      >
        Solve Problem
        <ExternalLink className="w-4 h-4 ml-2" />
      </a>
    </div>
  );
};

export default ProblemCard;
