import React from 'react';
import { UserAssessment, LearningPath } from '../types';
import { BookOpen, Video, FileText, Download, Clock, Target, User, Award, ChevronRight } from 'lucide-react';

interface DashboardProps {
  assessment: UserAssessment;
  learningPath: LearningPath;
  onSelectFeature: (feature: 'practice' | 'videos' | 'theory' | 'pdf') => void;
  onBack: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ assessment, learningPath, onSelectFeature, onBack }) => {
  const features = [
    {
      id: 'practice' as const,
      title: 'Practice Problems',
      description: 'Curated coding challenges from LeetCode, GeeksforGeeks, and Codeforces',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'videos' as const,
      title: 'Learn with YouTube',
      description: 'Hand-picked video tutorials from top programming educators',
      icon: Video,
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      id: 'theory' as const,
      title: 'Theory Content',
      description: 'Comprehensive articles and documentation from trusted sources',
      icon: FileText,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      id: 'pdf' as const,
      title: 'PDF Downloader',
      description: 'Generate comprehensive study guides for offline learning',
      icon: Download,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Your Personalized Learning Dashboard
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Welcome to your customized DSA journey. Everything you need is organized and ready for you.
            </p>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <User className="w-8 h-8 mr-3 text-blue-600" />
            Your Learning Profile
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Stage</p>
                <p className="font-semibold text-gray-900">{assessment.stage}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Level</p>
                <p className="font-semibold text-gray-900">
                  {assessment.programmingLevel}
                  {assessment.verified && (
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Verified
                    </span>
                  )}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Daily Hours</p>
                <p className="font-semibold text-gray-900">{assessment.dailyHours}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Goal</p>
                <p className="font-semibold text-gray-900">{assessment.goal}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path Overview */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl shadow-xl p-8 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-4">{learningPath.title}</h2>
          <p className="text-indigo-100 text-lg mb-6">{learningPath.description}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-2">Duration</h4>
              <p className="text-indigo-100">{learningPath.duration}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-2">Topics Covered</h4>
              <p className="text-indigo-100">{learningPath.topics.length} core topics</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-2">Learning Mode</h4>
              <p className="text-indigo-100">Interactive & Practical</p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => onSelectFeature(feature.id)}
              className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.textColor}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className={`inline-flex items-center px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${feature.color} ${feature.hoverColor} transition-all duration-300`}>
                  Explore
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Topic Overview */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Learning Topics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {learningPath.topics.map((topic, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-l-4 border-blue-500"
              >
                <span className="text-sm font-medium text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={onBack}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            ← Back to Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;