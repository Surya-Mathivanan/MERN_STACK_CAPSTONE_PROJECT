import React from 'react';

const QuizQuestion = ({ question, selectedAnswer, onSelect }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">{question.question}</h2>
      <div className="grid gap-3 mt-4">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
              selectedAnswer === idx
                ? 'border-periwinkle/50 bg-periwinkle/10 text-white'
                : 'border-periwinkle/20 bg-space-light/30 text-pale-pink/80 hover:bg-space-light/50 hover:text-white'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
