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
      case 'geeksforgeeks': return 'text-periwinkle bg-periwinkle/20 border border-periwinkle/30';
      case 'javatpoint': return 'text-dusty-rose bg-dusty-rose/20 border border-dusty-rose/30';
      case 'w3schools': return 'text-pale-pink bg-pale-pink/20 border border-pale-pink/30';
      default: return 'text-pale-pink/60 bg-space-light/30 border border-pale-pink/20';
    }
  };

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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">

          <div className="w-16 h-16 bg-gradient-to-br from-pale-pink to-periwinkle rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Theory Content</h1>
          <p className="text-xl text-pale-pink/70 max-w-2xl mx-auto">
            Comprehensive articles and documentation from trusted educational sources
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-pale-pink/20 animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{articles.length}</p>
                <p className="text-pale-pink/70">Total Articles</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-pale-pink/20 to-periwinkle/20 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-pale-pink" />
              </div>
            </div>
          </div>
          
          <div className="bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-periwinkle/20 animate-slide-up delay-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{sources.length}</p>
                <p className="text-pale-pink/70">Trusted Sources</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-periwinkle/20 to-dusty-rose/20 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-periwinkle" />
              </div>
            </div>
          </div>
          
          <div className="bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-dusty-rose/20 animate-slide-up delay-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">{topics.length}</p>
                <p className="text-pale-pink/70">Topics Covered</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-dusty-rose/20 to-pale-pink/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-dusty-rose" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-periwinkle/20 mb-8 animate-slide-up delay-300">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-pale-pink/60" />
              <span className="font-semibold text-white">Filters:</span>
            </div>
            
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white focus:outline-none focus:ring-2 focus:ring-pale-pink/50 backdrop-blur-sm"
            >
              <option value="all">All Topics</option>
              {topics.map(topic => (
                <option key={topic} value={topic.toLowerCase()}>{topic}</option>
              ))}
            </select>
            
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="px-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white focus:outline-none focus:ring-2 focus:ring-pale-pink/50 backdrop-blur-sm"
            >
              <option value="all">All Sources</option>
              {sources.map(source => (
                <option key={source} value={source.toLowerCase()}>{source}</option>
              ))}
            </select>
            
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="w-5 h-5 text-pale-pink/60 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white placeholder-pale-pink/50 focus:outline-none focus:ring-2 focus:ring-pale-pink/50 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className="group bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-periwinkle/20 hover:border-pale-pink/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pale-pink/10 animate-slide-up"
              style={{ animationDelay: `${400 + index * 50}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSourceColor(article.source)}`}>
                  {article.source}
                </span>
                <span className="text-sm text-pale-pink/60">{article.readTime} read</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-pale-pink transition-colors duration-300">
                {article.title}
              </h3>
              
              <p className="text-pale-pink/70 text-sm mb-4 leading-relaxed">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-space-light/50 text-pale-pink/80 rounded-full text-xs font-medium border border-periwinkle/20">
                  {article.topic}
                </span>
                <BookOpen className="w-4 h-4 text-pale-pink/60" />
              </div>
              
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-pale-pink to-periwinkle hover:from-pale-pink/90 hover:to-periwinkle/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Read Article
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="w-24 h-24 bg-space-light/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-periwinkle/20">
              <Search className="w-8 h-8 text-pale-pink/60" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
            <p className="text-pale-pink/70">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TheoryContent;