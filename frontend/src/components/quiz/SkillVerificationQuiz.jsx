import React, { useEffect, useMemo, useState } from 'react';
import QuizTimer from './QuizTimer';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import { getQuestionsByLevel } from '../../data/quizQuestions';

const SkillVerificationQuiz = ({ level, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  const questions = useMemo(() => getQuestionsByLevel(level), [level]);

  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleQuizComplete();
    }
  }, [timeLeft, showResult]);

  const handleNextQuestion = () => {
    if (selectedAnswer == null) return;
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((q) => q + 1);
    } else {
      handleQuizComplete(newAnswers);
    }
  };

  const handleQuizComplete = (finalAnswers) => {
    const answersToCheck = finalAnswers || answers;
    const score = answersToCheck.reduce((total, answer, index) => total + (answer === questions[index].correctAnswer ? 1 : 0), 0);
    const passed = score >= Math.ceil(questions.length * 0.8);
    setShowResult(true);
    setTimeout(() => onComplete(score, passed), 2000);
  };

  if (showResult) {
    const score = answers.reduce((total, answer, index) => total + (answer === questions[index].correctAnswer ? 1 : 0), 0);
    const passed = score >= Math.ceil(questions.length * 0.8);

    return (
      <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy flex items-center justify-center px-4 relative overflow-hidden">
        <div className="bg-space-light/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 max-w-xl w-full border border-periwinkle/20">
          <QuizResult score={score} total={questions.length} passed={passed} onContinue={() => onComplete(score, passed)} />
          <div className="text-center mt-6">
            <button onClick={onBack} className="text-pale-pink/70 hover:text-white underline">Back</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy py-12 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 bg-space-light/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-periwinkle/20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white">{level === 'intermediate' ? 'Intermediate' : 'Advanced'} Quiz</h1>
          <QuizTimer timeLeft={timeLeft} />
        </div>

        <QuizQuestion
          question={questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onSelect={setSelectedAnswer}
        />

        <div className="flex justify-between items-center mt-8">
          <button onClick={onBack} className="text-pale-pink/70 hover:text-white underline">Back</button>
          <button
            onClick={handleNextQuestion}
            className="px-6 py-3 bg-gradient-to-r from-periwinkle to-dusty-rose text-white rounded-xl hover:from-periwinkle/90 hover:to-dusty-rose/90 transition"
          >
            {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillVerificationQuiz;
