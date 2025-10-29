import React from 'react';

const PageHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="text-center mb-12 animate-fade-in">
    <div className="w-16 h-16 bg-gradient-to-br from-periwinkle to-dusty-rose rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
      {Icon ? <Icon className="w-10 h-10 text-white" /> : null}
    </div>
    <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
    {subtitle && (
      <p className="text-xl text-pale-pink/70 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default PageHeader;
