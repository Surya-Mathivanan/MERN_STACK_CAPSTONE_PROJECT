import React from 'react';

const QuizTimer = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-space-light/40 border border-periwinkle/20 text-pale-pink/80 text-sm">
      Time Left: {minutes}:{seconds}
    </div>
  );
};

export default QuizTimer;
