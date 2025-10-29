import React from 'react';
import { BookOpen, Brain, Target, Trophy, Sparkles, Zap, ArrowLeft, LogOut } from 'lucide-react';
const WelcomePage = ({ onStart, onLoadPrevious, onSignOut, hasPreviousData }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-periwinkle rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-dusty-rose rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pale-pink rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-periwinkle rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-dusty-rose rounded-full animate-pulse delay-300"></div>
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-periwinkle/20 to-dusty-rose/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-dusty-rose/20 to-pale-pink/20 rounded-full blur-xl animate-float delay-1000"></div>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative animate-fade-in">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-dusty-rose/30 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-periwinkle/30 rounded-full opacity-40 animate-pulse delay-1000"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-periwinkle to-dusty-rose rounded-2xl mx-auto mb-6 drop-shadow-lg flex items-center justify-center animate-glow">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Sparkles className="w-6 h-6 text-pale-pink" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 animate-slide-up">
              <span className="bg-gradient-to-r from-periwinkle via-dusty-rose to-pale-pink bg-clip-text text-transparent">
                DSA Learning Pathway
              </span>
            </h1>
            <p className="text-xl text-pale-pink/80 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-200">
              Your personalized journey to master Data Structures and Algorithms. 
              Get customized learning paths, practice problems, and comprehensive resources.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up delay-300">
            <div className="group bg-space-light/50 backdrop-blur-sm rounded-3xl p-6 border border-periwinkle/20 hover:border-periwinkle/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-periwinkle/20">
              <div className="w-12 h-12 bg-gradient-to-br from-periwinkle to-dark-navy rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Personalized Path</h3>
              <p className="text-pale-pink/70 text-sm">AI-generated roadmap based on your current skill level and goals</p>
            </div>
            
            <div className="group bg-space-light/50 backdrop-blur-sm rounded-3xl p-6 border border-dusty-rose/20 hover:border-dusty-rose/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-dusty-rose/20">
              <div className="w-12 h-12 bg-gradient-to-br from-dusty-rose to-dark-navy rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Resources</h3>
              <p className="text-pale-pink/70 text-sm">Curated problems, videos, articles, and downloadable PDFs</p>
            </div>
            <div className="group bg-space-light/50 backdrop-blur-sm rounded-3xl p-6 border border-pale-pink/20 hover:border-pale-pink/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pale-pink/20">
              <div className="w-12 h-12 bg-gradient-to-br from-pale-pink to-dark-navy rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Skill Verification</h3>
              <p className="text-pale-pink/70 text-sm">Adaptive quizzes to ensure you're on the right learning track</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onStart}
              className="group relative bg-gradient-to-r from-periwinkle to-dusty-rose hover:from-periwinkle/90 hover:to-dusty-rose/90 text-white font-semibold px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg animate-slide-up delay-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-periwinkle to-dusty-rose rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Start Your Journey
              </div>
            </button>
            <button
              onClick={onLoadPrevious}
              className="group relative bg-gradient-to-r from-pale-pink to-periwinkle hover:from-pale-pink/90 hover:to-periwinkle/90 text-white font-semibold px-12 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg animate-slide-up delay-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pale-pink to-periwinkle rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous Assessment
              </div>
            </button>
            
          </div>
          {onSignOut && (
            <button
              onClick={onSignOut}
              className="mt-6 group relative bg-space-light/50 hover:bg-space-light/70 text-pale-pink hover:text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-pale-pink/20 hover:border-pale-pink/40 animate-slide-up delay-600"
            >
              <div className="relative flex items-center">
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </div>
            </button>
          )}
          <div className="mt-8 text-sm text-pale-pink/50 animate-fade-in delay-700">
            ✨📚 Trusted by thousands • 🚀 Achieve your coding goals
          </div>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
