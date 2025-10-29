import React from 'react';
import { Filter } from 'lucide-react';

const ProblemFilters = ({ selectedDifficulty, setSelectedDifficulty, selectedPlatform, setSelectedPlatform, availableDifficulties }) => {
  return (
    <div className="bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-periwinkle/20 mb-8 animate-slide-up delay-300">
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-pale-pink/60" />
          <span className="font-semibold text-white">Filters:</span>
        </div>

        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="px-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white focus:outline-none focus:ring-2 focus:ring-periwinkle/50 backdrop-blur-sm"
        >
          <option value="all">All Available Difficulties</option>
          {availableDifficulties.includes('easy') && <option value="easy">Easy</option>}
          {availableDifficulties.includes('medium') && <option value="medium">Medium</option>}
          {availableDifficulties.includes('hard') && <option value="hard">Hard</option>}
        </select>

        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="px-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white focus:outline-none focus:ring-2 focus:ring-periwinkle/50 backdrop-blur-sm"
        >
          <option value="all">All Platforms</option>
          <option value="leetcode">LeetCode</option>
          <option value="geeksforgeeks">GeeksforGeeks</option>
          <option value="codeforces">Codeforces</option>
        </select>
      </div>
    </div>
  );
};

export default ProblemFilters;
