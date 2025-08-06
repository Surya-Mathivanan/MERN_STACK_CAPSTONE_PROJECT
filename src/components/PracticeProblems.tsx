import React, { useState } from 'react';
import { Resource } from '../types';
import { BookOpen, ExternalLink, Filter, Search, Star, Clock, TrendingUp, ArrowLeft } from 'lucide-react';

interface PracticeProblemsProps {
  onBack: () => void;
}

const PracticeProblems: React.FC<PracticeProblemsProps> = ({ onBack }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const problems: Resource[] = [
    {
      title: "Two Sum",
      url: "https://leetcode.com/problems/two-sum/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Binary Search",
      url: "https://leetcode.com/problems/binary-search/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Valid Parentheses",
      url: "https://leetcode.com/problems/valid-parentheses/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Merge Two Sorted Lists",
      url: "https://leetcode.com/problems/merge-two-sorted-lists/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Maximum Subarray",
      url: "https://leetcode.com/problems/maximum-subarray/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Climbing Stairs",
      url: "https://leetcode.com/problems/climbing-stairs/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Linked List Cycle",
      url: "https://leetcode.com/problems/linked-list-cycle/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Binary Tree Inorder Traversal",
      url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      platform: "LeetCode",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Add Two Numbers",
      url: "https://leetcode.com/problems/add-two-numbers/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Longest Substring Without Repeating Characters",
      url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "3Sum",
      url: "https://leetcode.com/problems/3sum/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Container With Most Water",
      url: "https://leetcode.com/problems/container-with-most-water/",
      platform: "LeetCode",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Rotate Array",
      url: "https://www.geeksforgeeks.org/problems/rotate-array-by-n-elements-1587115621/1",
      platform: "GeeksforGeeks",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Find Missing Number",
      url: "https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1",
      platform: "GeeksforGeeks",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Kadane's Algorithm",
      url: "https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "Stock Buy Sell",
      url: "https://www.geeksforgeeks.org/problems/stock-buy-and-sell-1587115621/1",
      platform: "GeeksforGeeks",
      difficulty: "Medium",
      type: "problem"
    },
    {
      title: "A+B Problem",
      url: "https://codeforces.com/problemset/problem/1/A",
      platform: "Codeforces",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Way Too Long Words",
      url: "https://codeforces.com/problemset/problem/71/A",
      platform: "Codeforces",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Team",
      url: "https://codeforces.com/problemset/problem/231/A",
      platform: "Codeforces",
      difficulty: "Easy",
      type: "problem"
    },
    {
      title: "Beautiful Matrix",
      url: "https://codeforces.com/problemset/problem/263/A",
      platform: "Codeforces",
      difficulty: "Easy",
      type: "problem"
    }
  ];

  const filteredProblems = problems.filter(problem => {
    const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty.toLowerCase() === selectedDifficulty;
    const matchesPlatform = selectedPlatform === 'all' || problem.platform.toLowerCase() === selectedPlatform;
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDifficulty && matchesPlatform && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'leetcode': return 'text-orange-600 bg-orange-50';
      case 'geeksforgeeks': return 'text-green-600 bg-green-50';
      case 'codeforces': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          
          <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Practice Problems</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated coding challenges to strengthen your DSA skills
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">{problems.length}</p>
                <p className="text-gray-600">Total Problems</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">3</p>
                <p className="text-gray-600">Platforms</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  {Math.round((problems.filter(p => p.difficulty === 'Easy').length / problems.length) * 100)}%
                </p>
                <p className="text-gray-600">Beginner Friendly</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-semibold text-gray-700">Filters:</span>
            </div>
            
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Platforms</option>
              <option value="leetcode">LeetCode</option>
              <option value="geeksforgeeks">GeeksforGeeks</option>
              <option value="codeforces">Codeforces</option>
            </select>
            
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search problems..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProblems.map((problem, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex-1 leading-tight">
                  {problem.title}
                </h3>
                <div className="ml-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPlatformColor(problem.platform)}`}>
                  {problem.platform}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  Est. 30-45 min
                </div>
              </div>
              
              <a
                href={problem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Solve Problem
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        {filteredProblems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No problems found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeProblems;