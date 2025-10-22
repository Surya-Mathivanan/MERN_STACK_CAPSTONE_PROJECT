import React from 'react';
import { UserAssessment, LearningPath } from '../types';
import { BookOpen, Video, FileText, Download, Clock, Target, User, Award, ChevronRight, Sparkles } from 'lucide-react';

interface DashboardProps {
  assessment: UserAssessment;
  learningPath: LearningPath;
  onSelectFeature: (feature: 'practice' | 'videos' | 'theory' | 'pdf') => void;
  onBack?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ assessment, learningPath, onSelectFeature, onBack }) => {
  const features = [
    {
      id: 'practice' as const,
      title: 'Practice Problems',
      description: 'Curated coding challenges from LeetCode, GeeksforGeeks, and Codeforces',
      icon: BookOpen,
      gradient: 'from-periwinkle to-dark-navy',
      hoverGradient: 'hover:from-periwinkle/90 hover:to-dark-navy/90',
      bgGradient: 'from-periwinkle/10 to-dark-navy/10',
      borderColor: 'border-periwinkle/20 hover:border-periwinkle/40',
      shadowColor: 'hover:shadow-periwinkle/20'
    },
    {
      id: 'videos' as const,
      title: 'Learn with YouTube',
      description: 'Hand-picked video tutorials from top programming educators',
      icon: Video,
      gradient: 'from-dusty-rose to-pale-pink',
      hoverGradient: 'hover:from-dusty-rose/90 hover:to-pale-pink/90',
      bgGradient: 'from-dusty-rose/10 to-pale-pink/10',
      borderColor: 'border-dusty-rose/20 hover:border-dusty-rose/40',
      shadowColor: 'hover:shadow-dusty-rose/20'
    },
    {
      id: 'theory' as const,
      title: 'Theory Content',
      description: 'Comprehensive articles and documentation from trusted sources',
      icon: FileText,
      gradient: 'from-pale-pink to-periwinkle',
      hoverGradient: 'hover:from-pale-pink/90 hover:to-periwinkle/90',
      bgGradient: 'from-pale-pink/10 to-periwinkle/10',
      borderColor: 'border-pale-pink/20 hover:border-pale-pink/40',
      shadowColor: 'hover:shadow-pale-pink/20'
    },
    {
      id: 'pdf' as const,
      title: 'PDF Downloader',
      description: 'Generate comprehensive study guides for offline learning',
      icon: Download,
      gradient: 'from-periwinkle to-dusty-rose',
      hoverGradient: 'hover:from-periwinkle/90 hover:to-dusty-rose/90',
      bgGradient: 'from-periwinkle/10 to-dusty-rose/10',
      borderColor: 'border-periwinkle/20 hover:border-periwinkle/40',
      shadowColor: 'hover:shadow-periwinkle/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy py-12 px-4 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-periwinkle to-dusty-rose rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <Sparkles className="w-6 h-6 text-pale-pink animate-bounce" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Your Personalized Learning Dashboard
            </h1>
            <p className="text-xl text-pale-pink/70 max-w-2xl mx-auto">
              Welcome to your customized DSA journey. Everything you need is organized and ready for you.
            </p>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="bg-space-light/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-12 border border-periwinkle/20 animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-periwinkle to-dusty-rose rounded-lg mr-3 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            Your Learning Profile
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-periwinkle/20 to-dark-navy/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="w-6 h-6 text-periwinkle" />
              </div>
              <div>
                <p className="text-sm text-pale-pink/50">Stage</p>
                <p className="font-semibold text-white">{assessment.stage}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-dusty-rose/20 to-periwinkle/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-dusty-rose" />
              </div>
              <div>
                <p className="text-sm text-pale-pink/50">Level</p>
                <p className="font-semibold text-white flex items-center">
                  {assessment.programmingLevel}
                  {assessment.verified && (
                    <span className="ml-2 text-xs bg-gradient-to-r from-periwinkle/20 to-dusty-rose/20 text-periwinkle px-2 py-1 rounded-full border border-periwinkle/30">
                      Verified
                    </span>
                  )}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-pale-pink/20 to-periwinkle/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-pale-pink" />
              </div>
              <div>
                <p className="text-sm text-pale-pink/50">Daily Hours</p>
                <p className="font-semibold text-white">{assessment.dailyHours}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-dusty-rose/20 to-pale-pink/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-dusty-rose" />
              </div>
              <div>
                <p className="text-sm text-pale-pink/50">Goal</p>
                <p className="font-semibold text-white">{assessment.goal}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path Overview */}
        <div className="bg-gradient-to-r from-periwinkle to-dusty-rose rounded-3xl shadow-xl p-8 mb-12 text-white animate-slide-up delay-200">
          <h2 className="text-3xl font-bold mb-4">{learningPath.title}</h2>
          <p className="text-pale-pink/90 text-lg mb-6">{learningPath.description}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h4 className="font-semibold text-lg mb-2">Duration</h4>
              <p className="text-pale-pink/90">{learningPath.duration}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h4 className="font-semibold text-lg mb-2">Topics Covered</h4>
              <p className="text-pale-pink/90">{learningPath.topics.length} core topics</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <h4 className="font-semibold text-lg mb-2">Learning Mode</h4>
              <p className="text-pale-pink/90">Interactive & Practical</p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              onClick={() => onSelectFeature(feature.id)}
              className={`group cursor-pointer transform hover:-translate-y-2 transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className={`bg-space-light/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border ${feature.borderColor} ${feature.shadowColor}`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.bgGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-pale-pink/70 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className={`inline-flex items-center px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${feature.gradient} ${feature.hoverGradient} transition-all duration-300`}>
                  Explore
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Topic Overview */}
        <div className="bg-space-light/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-periwinkle/20 animate-slide-up delay-700">
          <h3 className="text-2xl font-bold text-white mb-6">Your Learning Topics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {learningPath.topics.map((topic, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-pale-pink/20 to-periwinkle/20 rounded-xl p-4 border-l-4 border-dusty-rose hover:scale-105 transition-transform duration-300 group"
                style={{ animationDelay: `${800 + index * 50}ms` }}
              >
                <span className="text-sm font-medium text-white group-hover:text-pale-pink transition-colors duration-300">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;