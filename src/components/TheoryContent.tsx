import React, { useState } from 'react';
import { FileText, ExternalLink, Filter, Search, BookOpen, Globe, ArrowLeft } from 'lucide-react';

interface TheoryContentProps {
  onBack: () => void;
}

const TheoryContent: React.FC<TheoryContentProps> = ({ onBack }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedSource, setSelectedSource] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const articles = [
    {
      title: "Introduction to Data Structures",
      source: "GeeksforGeeks",
      topic: "Introduction",
      description: "A comprehensive guide to understanding data structures and their importance in programming.",
      url: "https://www.geeksforgeeks.org/data-structures/",
      readTime: "10 min"
    },
    {
      title: "Array Data Structure",
      source: "JavaTPoint",
      topic: "Arrays",
      description: "Complete tutorial on arrays including operations, implementations, and applications.",
      url: "https://www.javatpoint.com/data-structure-array",
      readTime: "15 min"
    },
    {
      title: "Linked List Data Structure",
      source: "GeeksforGeeks",
      topic: "Linked Lists",
      description: "Detailed explanation of linked lists, types, operations, and implementation.",
      url: "https://www.geeksforgeeks.org/data-structures/linked-list/",
      readTime: "20 min"
    },
    {
      title: "Stack Data Structure",
      source: "W3Schools",
      topic: "Stacks",
      description: "Learn about stack data structure with examples and practical applications.",
      url: "https://www.w3schools.com/dsa/dsa_data_stacks.php",
      readTime: "12 min"
    },
    {
      title: "Queue Data Structure",
      source: "JavaTPoint",
      topic: "Queues",
      description: "Understanding queue operations, types, and implementation details.",
      url: "https://www.javatpoint.com/data-structure-queue",
      readTime: "14 min"
    },
    {
      title: "Binary Trees",
      source: "GeeksforGeeks",
      topic: "Trees",
      description: "Complete guide to binary trees including traversals and properties.",
      url: "https://www.geeksforgeeks.org/binary-tree-data-structure/",
      readTime: "25 min"
    },
    {
      title: "Graph Data Structure",
      source: "JavaTPoint",
      topic: "Graphs",
      description: "Introduction to graphs, representations, and traversal algorithms.",
      url: "https://www.javatpoint.com/graph",
      readTime: "30 min"
    },
    {
      title: "Hash Tables",
      source: "W3Schools",
      topic: "Hashing",
      description: "Understanding hash functions, collision resolution, and applications.",
      url: "https://www.w3schools.com/dsa/dsa_data_hashtables.php",
      readTime: "18 min"
    },
    {
      title: "Sorting Algorithms",
      source: "GeeksforGeeks",
      topic: "Sorting",
      description: "Comprehensive guide to various sorting algorithms and their complexities.",
      url: "https://www.geeksforgeeks.org/sorting-algorithms/",
      readTime: "35 min"
    },
    {
      title: "Searching Algorithms",
      source: "JavaTPoint",
      topic: "Searching",
      description: "Linear and binary search algorithms with implementations and analysis.",
      url: "https://www.javatpoint.com/daa-searching-algorithm",
      readTime: "16 min"
    },
    {
      title: "Dynamic Programming",
      source: "GeeksforGeeks",
      topic: "Dynamic Programming",
      description: "Master dynamic programming concepts with examples and practice problems.",
      url: "https://www.geeksforgeeks.org/dynamic-programming/",
      readTime: "40 min"
    },
    {
      title: "Recursion and Backtracking",
      source: "JavaTPoint",
      topic: "Recursion",
      description: "Understanding recursion, backtracking techniques, and problem-solving strategies.",
      url: "https://www.javatpoint.com/recursion-in-data-structure",
      readTime: "22 min"
    },
    {
      title: "Heap Data Structure",
      source: "W3Schools",
      topic: "Heaps",
      description: "Complete tutorial on heap properties, operations, and heap sort algorithm.",
      url: "https://www.w3schools.com/dsa/dsa_data_heaps.php",
      readTime: "20 min"
    },
    {
      title: "Time and Space Complexity",
      source: "GeeksforGeeks",
      topic: "Complexity Analysis",
      description: "Learn to analyze algorithms using Big O notation and complexity measures.",
      url: "https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/",
      readTime: "18 min"
    },
    {
      title: "Greedy Algorithms",
      source: "JavaTPoint",
      topic: "Greedy Algorithms",
      description: "Understanding greedy approach with classic problems and solutions.",
      url: "https://www.javatpoint.com/daa-greedy-algorithm",
      readTime: "28 min"
    },
    {
      title: "Divide and Conquer",
      source: "GeeksforGeeks",
      topic: "Divide & Conquer",
      description: "Master divide and conquer strategy with merge sort, quick sort examples.",
      url: "https://www.geeksforgeeks.org/divide-and-conquer/",
      readTime: "24 min"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesTopic = selectedTopic === 'all' || article.topic.toLowerCase() === selectedTopic;
    const matchesSource = selectedSource === 'all' || article.source.toLowerCase() === selectedSource;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTopic && matchesSource && matchesSearch;
  });

  const topics = Array.from(new Set(articles.map(a => a.topic)));
  const sources = Array.from(new Set(articles.map(a => a.source)));

  const getSourceColor = (source: string) => {
    switch (source.toLowerCase()) {
      case 'geeksforgeeks': return 'text-green-600 bg-green-50';
      case 'javatpoint': return 'text-blue-600 bg-blue-50';
      case 'w3schools': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 py-12 px-4">
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
          
          <FileText className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Theory Content</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive articles and documentation from trusted educational sources
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">{articles.length}</p>
                <p className="text-gray-600">Total Articles</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">{sources.length}</p>
                <p className="text-gray-600">Trusted Sources</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">{topics.length}</p>
                <p className="text-gray-600">Topics Covered</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
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
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Topics</option>
              {topics.map(topic => (
                <option key={topic} value={topic.toLowerCase()}>{topic}</option>
              ))}
            </select>
            
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Sources</option>
              {sources.map(source => (
                <option key={source} value={source.toLowerCase()}>{source}</option>
              ))}
            </select>
            
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSourceColor(article.source)}`}>
                  {article.source}
                </span>
                <span className="text-sm text-gray-500">{article.readTime} read</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                {article.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                  {article.topic}
                </span>
                <BookOpen className="w-4 h-4 text-gray-400" />
              </div>
              
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Read Article
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TheoryContent;