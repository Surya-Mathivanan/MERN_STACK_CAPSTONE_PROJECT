import React from 'react';
import { Search } from 'lucide-react';

const ProblemSearchBar = ({ value, onChange }) => (
  <div className="flex-1 min-w-64 mb-6">
    <div className="relative">
      <Search className="w-5 h-5 text-pale-pink/60 absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search problems..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white placeholder-pale-pink/50 focus:outline-none focus:ring-2 focus:ring-periwinkle/50 backdrop-blur-sm"
      />
    </div>
  </div>
);

export default ProblemSearchBar;
