import React from 'react';
import { Brain, Sparkles, Zap, Target } from 'lucide-react';
const LoginPage = ({ onGoogleSignIn }) => {
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
        <div className="text-center max-w-md mx-auto animate-fade-in">
          {/* Logo and branding */}
          <div className="mb-8 relative">
            <div className="w-20 h-20 bg-gradient-to-br from-periwinkle to-dusty-rose rounded-2xl mx-auto mb-6 flex items-center justify-center animate-glow">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Sparkles className="w-6 h-6 text-pale-pink" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 animate-slide-up">
            <span className="bg-gradient-to-r from-periwinkle via-dusty-rose to-pale-pink bg-clip-text text-transparent">
              DSA Pathway
            </span>
          </h1>
          <p className="text-xl text-pale-pink/80 mb-12 max-w-md mx-auto leading-relaxed animate-slide-up delay-200">
            Your personalized journey to mastering programming with AI-powered learning paths
          </p>
          {/* Features preview */}
          <div className="grid grid-cols-3 gap-4 mb-12 animate-slide-up delay-300">
            <div className="bg-space-light/50 backdrop-blur-sm rounded-xl p-4 border border-periwinkle/20">
              <Target className="w-6 h-6 text-periwinkle mx-auto mb-2" />
              <p className="text-xs text-pale-pink/70">Personalized</p>
            </div>
            <div className="bg-space-light/50 backdrop-blur-sm rounded-xl p-4 border border-dusty-rose/20">
              <Zap className="w-6 h-6 text-dusty-rose mx-auto mb-2" />
              <p className="text-xs text-pale-pink/70">Interactive</p>
            </div>
            <div className="bg-space-light/50 backdrop-blur-sm rounded-xl p-4 border border-pale-pink/20">
              <Brain className="w-6 h-6 text-pale-pink mx-auto mb-2" />
              <p className="text-xs text-pale-pink/70">AI-Powered</p>
            </div>
          </div>
          <button
            onClick={onGoogleSignIn}
            className="group relative bg-gradient-to-r from-periwinkle to-dusty-rose hover:shadow-lg transition-all px-8 py-3 rounded-lg font-semibold"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
