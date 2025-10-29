import React from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="w-6 h-6 border-2 border-periwinkle/40 border-t-periwinkle rounded-full animate-spin" />
  </div>
);

export default LoadingSpinner;
