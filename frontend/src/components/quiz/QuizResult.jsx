import React from 'react';
import { CheckCircle } from 'lucide-react';

const QuizResult = ({ score, total, passed, onContinue }) => {
  return (
    <div className="text-center space-y-4">
      <div className="w-20 h-20 bg-gradient-to-br from-periwinkle to-dusty-rose rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
        <CheckCircle className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-white">Your Score: {score} / {total}</h2>
      <p className="text-pale-pink/80">{passed ? 'Great job! You passed the quiz.' : 'You did well! We adjusted your level to help you learn better.'}</p>
      <button
        onClick={onContinue}
        className="px-6 py-3 bg-gradient-to-r from-periwinkle to-dusty-rose text-white rounded-xl hover:from-periwinkle/90 hover:to-dusty-rose/90 transition"
      >
        Continue
      </button>
    </div>
  );
};

export default QuizResult;
