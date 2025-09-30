import React from 'react';
import { Brain, Sparkles, Zap, Target } from 'lucide-react';

interface LoginPageProps {
  onGoogleSignIn: () => Promise<void>;
}

const LoginPage: React.FC<LoginPageProps> = ({ onGoogleSignIn }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-periwinkle rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-dusty-rose rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pale-pink rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-periwinkle rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-dusty-rose rounded-full animate-pulse delay-300"></div>
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
            className="group relative bg-gradient-to-r from-periwinkle to-dusty-rose hover:from-periwinkle/90 hover:to-dusty-rose/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-slide-up delay-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-periwinkle to-dusty-rose rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative flex items-center">
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </div>
          </button>

          <div className="mt-8 text-sm text-pale-pink/50 animate-fade-in delay-700">
            ✨ Join thousands of learners • 🚀 Achieve your coding goals
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;