import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ onClick, children = 'Back' }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center px-6 py-3 bg-space-light/50 hover:bg-space-light/70 text-white rounded-xl transition-all duration-200 border border-periwinkle/20 hover:border-periwinkle/40 backdrop-blur-sm"
  >
    <ArrowLeft className="w-5 h-5 mr-2" />
    {children}
  </button>
);

export default BackButton;
