import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { Brain, CheckCircle, XCircle, Clock, Sparkles } from 'lucide-react';

interface SkillVerificationQuizProps {
  level: 'intermediate' | 'advanced';
  onComplete: (score: number, passed: boolean) => void;
  onBack: () => void;
}

const SkillVerificationQuiz: React.FC<SkillVerificationQuizProps> = ({ level, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  React.useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleQuizComplete();
    }
  }, [timeLeft, showResult]);

  const intermediateQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the time complexity of searching in a binary search tree (average case)?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctAnswer: 1,
      difficulty: 'intermediate'
    },
    {
      id: 2,
      question: "Which data structure uses LIFO (Last In, First Out) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correctAnswer: 1,
      difficulty: 'intermediate'
    },
    {
      id: 3,
      question: "What is the space complexity of merge sort?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: 2,
      difficulty: 'intermediate'
    },
    {
      id: 4,
      question: "In a max heap, the parent node is:",
      options: ["Smaller than children", "Greater than or equal to children", "Equal to children", "None of the above"],
      correctAnswer: 1,
      difficulty: 'intermediate'
    },
    {
      id: 5,
      question: "What is the worst-case time complexity of QuickSort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
      correctAnswer: 1,
      difficulty: 'intermediate'
    },
    {
      id: 6,
      question: "Which algorithm is used for finding shortest path in a graph?",
      options: ["DFS", "BFS", "Dijkstra's", "All of the above"],
      correctAnswer: 2,
      difficulty: 'intermediate'
    },
    {
      id: 7,
      question: "What is a balanced binary tree?",
      options: ["Tree with equal left and right subtrees", "Tree where height difference between left and right subtree is at most 1", "Tree with all leaves at same level", "Complete binary tree"],
      correctAnswer: 1,
      difficulty: 'intermediate'
    },
    {
      id: 8,
      question: "Which sorting algorithm is stable?",
      options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
      correctAnswer: 2,
      difficulty: 'intermediate'
    },
    {
      id: 9,
      question: "What is the time complexity of inserting an element at the beginning of a linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 0,
      difficulty: 'intermediate'
    },
    {
      id: 10,
      question: "Which data structure is best for implementing LRU cache?",
      options: ["Array", "Stack", "Hash Table + Doubly Linked List", "Binary Tree"],
      correctAnswer: 2,
      difficulty: 'intermediate'
    }
  ];

  const advancedQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the time complexity of finding the kth smallest element using quickselect algorithm?",
      options: ["O(k)", "O(n)", "O(n log n)", "O(n²)"],
      correctAnswer: 1,
      difficulty: 'advanced'
    },
    {
      id: 2,
      question: "In a B-tree of order m, what is the maximum number of keys in a node?",
      options: ["m", "m-1", "2m-1", "m+1"],
      correctAnswer: 1,
      difficulty: 'advanced'
    },
    {
      id: 3,
      question: "Which of the following problems can be solved using dynamic programming?",
      options: ["Longest Common Subsequence", "0/1 Knapsack", "Coin Change", "All of the above"],
      correctAnswer: 3,
      difficulty: 'advanced'
    },
    {
      id: 4,
      question: "What is the space complexity of DFS traversal using recursion?",
      options: ["O(1)", "O(V)", "O(E)", "O(V + E)"],
      correctAnswer: 1,
      difficulty: 'advanced'
    },
    {
      id: 5,
      question: "In which scenario would you use a Trie data structure?",
      options: ["Sorting integers", "Auto-complete functionality", "Graph traversal", "Mathematical calculations"],
      correctAnswer: 1,
      difficulty: 'advanced'
    },
    {
      id: 6,
      question: "What is the worst-case time complexity of searching in a hash table?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: 2,
      difficulty: 'advanced'
    },
    {
      id: 7,
      question: "Which algorithm is used to detect negative weight cycles in a graph?",
      options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "Kruskal's"],
      correctAnswer: 1,
      difficulty: 'advanced'
    },
    {
      id: 8,
      question: "What is the time complexity of building a heap from an array?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
      correctAnswer: 2,
      difficulty: 'advanced'
    },
    {
      id: 9,
      question: "Which approach is most efficient for finding the median in a stream of numbers?",
      options: ["Sorting after each insertion", "Two heaps (max-heap and min-heap)", "Binary search", "Linear search"],
      correctAnswer: 1,
      difficulty: 'advanced'
    },
    {
      id: 10,
      question: "What is the optimal substructure property in dynamic programming?",
      options: ["Problem can be divided into subproblems", "Optimal solution contains optimal solutions to subproblems", "Subproblems overlap", "All of the above"],
      correctAnswer: 1,
      difficulty: 'advanced'
    }
  ];

  const questions = level === 'intermediate' ? intermediateQuestions : advancedQuestions;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers, selectedAnswer!];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleQuizComplete(newAnswers);
    }
  };

  const handleQuizComplete = (finalAnswers?: number[]) => {
    const answersToCheck = finalAnswers || answers;
    const score = answersToCheck.reduce((total, answer, index) => {
      return total + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    
    const passed = score >= 8;
    setShowResult(true);
    setTimeout(() => onComplete(score, passed), 3000);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (showResult) {
    const score = answers.reduce((total, answer, index) => {
      return total + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    const passed = score >= 8;

    return (
      <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-periwinkle rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-dusty-rose rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pale-pink rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center relative z-10 animate-fade-in">
          <div className={`w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center ${
            passed ? 'bg-gradient-to-br from-periwinkle/20 to-dusty-rose/20 border border-periwinkle/30' : 'bg-gradient-to-br from-dusty-rose/20 to-pale-pink/20 border border-dusty-rose/30'
          } backdrop-blur-sm animate-glow`}>
            {passed ? (
              <CheckCircle className="w-16 h-16 text-periwinkle" />
            ) : (
              <XCircle className="w-16 h-16 text-dusty-rose" />
            )}
          </div>
          
          <h2 className={`text-4xl font-bold mb-4 ${passed ? 'text-periwinkle' : 'text-dusty-rose'}`}>
            Quiz Complete!
          </h2>
          
          <p className="text-2xl text-white mb-4">
            Your Score: {score}/10
          </p>
          
          <div className={`p-6 rounded-xl ${passed ? 'bg-periwinkle/10 border border-periwinkle/20' : 'bg-dusty-rose/10 border border-dusty-rose/20'} mb-8 backdrop-blur-sm`}>
            <p className={`text-lg ${passed ? 'text-periwinkle' : 'text-dusty-rose'}`}>
              {passed ? (
                `Great job! You're ready for the ${level} learning path.`
              ) : (
                level === 'advanced' ? 
                  "Your current level suggests Intermediate would be better suited for you." :
                  "You're not yet ready for intermediate-level content. We recommend following the Beginner path instead."
              )}
            </p>
          </div>
          
          <div className="text-pale-pink/60 flex items-center justify-center">
            <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
            Redirecting to your personalized learning path...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-periwinkle rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-dusty-rose rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pale-pink rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-periwinkle rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-dusty-rose rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-br from-periwinkle to-dusty-rose rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {level.charAt(0).toUpperCase() + level.slice(1)} Level Verification
          </h1>
          <p className="text-pale-pink/70">Answer 8 out of 10 questions correctly to proceed</p>
        </div>

        {/* Progress and Timer */}
        <div className="flex justify-between items-center mb-8 animate-slide-down">
          <div className="flex items-center space-x-4">
            <span className="text-pale-pink/70">Question {currentQuestion + 1} of {questions.length}</span>
            <div className="w-48 bg-space-light/50 rounded-full h-2 backdrop-blur-sm">
              <div
                className="bg-gradient-to-r from-periwinkle to-dusty-rose h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-dusty-rose">
            <Clock className="w-5 h-5" />
            <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Question */}
        <div className="bg-space-light/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-periwinkle/20 animate-slide-up">
          <h2 className="text-2xl font-semibold text-white mb-8 leading-relaxed">
            {questions[currentQuestion].question}
          </h2>

          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`group p-4 rounded-xl text-left transition-all duration-300 ${
                  selectedAnswer === index
                    ? 'bg-gradient-to-r from-periwinkle/20 to-dusty-rose/20 text-white shadow-lg transform scale-105 border border-periwinkle/30'
                    : 'bg-space-light/50 hover:bg-space-light/70 text-pale-pink/80 hover:text-white border border-periwinkle/10 hover:border-periwinkle/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="font-medium mr-3 text-dusty-rose">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span>{option}</span>
                  </div>
                  {selectedAnswer === index && (
                    <Sparkles className="w-5 h-5 text-periwinkle animate-pulse" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between animate-slide-up">
          <button
            onClick={onBack}
            className="px-6 py-3 text-pale-pink/60 hover:text-white transition-colors duration-200 bg-space-light/30 hover:bg-space-light/50 rounded-xl border border-periwinkle/20"
          >
            Back to Assessment
          </button>
          
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedAnswer !== null
                ? 'bg-gradient-to-r from-periwinkle to-dusty-rose hover:from-periwinkle/90 hover:to-dusty-rose/90 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-space-light/30 text-pale-pink/50 cursor-not-allowed border border-periwinkle/10'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Complete Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillVerificationQuiz;