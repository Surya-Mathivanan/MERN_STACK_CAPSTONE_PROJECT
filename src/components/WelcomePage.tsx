import React from 'react';
import { BookOpen, Brain, Target, Trophy } from 'lucide-react';

interface WelcomePageProps {
  onStart: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <Brain className="w-20 h-20 text-blue-600 mx-auto mb-6 drop-shadow-lg" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            DSA Learning Pathway
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your personalized journey to master Data Structures and Algorithms. 
            Get customized learning paths, practice problems, and comprehensive resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Path</h3>
            <p className="text-gray-600 text-sm">AI-generated roadmap based on your current skill level and goals</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Resources</h3>
            <p className="text-gray-600 text-sm">Curated problems, videos, articles, and downloadable PDFs</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Skill Verification</h3>
            <p className="text-gray-600 text-sm">Adaptive quizzes to ensure you're on the right learning track</p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
        >
          Start Your Journey
        </button>

        <div className="mt-8 text-sm text-gray-500">
          ✨📚 Trusted by thousands • 🚀 Achieve your coding goals
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;