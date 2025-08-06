import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { Brain, CheckCircle, XCircle, Clock } from 'lucide-react';

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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className={`w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center ${
            passed ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {passed ? (
              <CheckCircle className="w-16 h-16 text-green-600" />
            ) : (
              <XCircle className="w-16 h-16 text-red-600" />
            )}
          </div>
          
          <h2 className={`text-4xl font-bold mb-4 ${passed ? 'text-green-600' : 'text-red-600'}`}>
            Quiz Complete!
          </h2>
          
          <p className="text-2xl text-gray-700 mb-4">
            Your Score: {score}/10
          </p>
          
          <div className={`p-6 rounded-xl ${passed ? 'bg-green-50' : 'bg-red-50'} mb-8`}>
            <p className={`text-lg ${passed ? 'text-green-800' : 'text-red-800'}`}>
              {passed ? (
                `Great job! You're ready for the ${level} learning path.`
              ) : (
                level === 'advanced' ? 
                  "Your current level suggests Intermediate would be better suited for you." :
                  "You're not yet ready for intermediate-level content. We recommend following the Beginner path instead."
              )}
            </p>
          </div>
          
          <div className="text-gray-600">Redirecting to your personalized learning path...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Brain className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {level.charAt(0).toUpperCase() + level.slice(1)} Level Verification
          </h1>
          <p className="text-gray-600">Answer 8 out of 10 questions correctly to proceed</p>
        </div>

        {/* Progress and Timer */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-orange-600">
            <Clock className="w-5 h-5" />
            <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
            {questions[currentQuestion].question}
          </h2>

          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  selectedAnswer === index
                    ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white hover:bg-purple-50 text-gray-700 shadow-md hover:shadow-lg border'
                }`}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            Back to Assessment
          </button>
          
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedAnswer !== null
                ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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