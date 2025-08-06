import React, { useState } from 'react';
import { Video, ExternalLink, Filter, Search, Play, Clock, User, ArrowLeft } from 'lucide-react';

interface VideoLearningProps {
  onBack: () => void;
}

const VideoLearning: React.FC<VideoLearningProps> = ({ onBack }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedCreator, setSelectedCreator] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const videos = [
    {
      title: "Complete DSA Course for Beginners",
      creator: "Striver",
      topic: "Introduction",
      duration: "12:45",
      url: "https://www.youtube.com/watch?v=WQoB2z67hvY",
      thumbnail: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Arrays in Data Structures",
      creator: "Apna College",
      topic: "Arrays",
      duration: "25:30",
      url: "https://www.youtube.com/watch?v=55l-aZ7_F24",
      thumbnail: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Linked Lists Complete Tutorial",
      creator: "CodeWithHarry",
      topic: "Linked Lists",
      duration: "35:20",
      url: "https://www.youtube.com/watch?v=R9PTBwOzceo",
      thumbnail: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Stack and Queue Data Structures",
      creator: "Striver",
      topic: "Stacks & Queues",
      duration: "42:15",
      url: "https://www.youtube.com/watch?v=sFVxsglODoo",
      thumbnail: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Binary Trees Explained",
      creator: "Apna College",
      topic: "Trees",
      duration: "52:10",
      url: "https://www.youtube.com/watch?v=fAAZixBzIAI",
      thumbnail: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Graph Theory Complete Course",
      creator: "Abdul Bari",
      topic: "Graphs",
      duration: "1:15:30",
      url: "https://www.youtube.com/watch?v=09_LlHjoEiY",
      thumbnail: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Dynamic Programming Mastery",
      creator: "Striver",
      topic: "Dynamic Programming",
      duration: "1:05:45",
      url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
      thumbnail: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Sorting Algorithms Visualized",
      creator: "CodeWithHarry",
      topic: "Sorting",
      duration: "38:25",
      url: "https://www.youtube.com/watch?v=pkkFqlG0Hds",
      thumbnail: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Binary Search Deep Dive",
      creator: "Apna College",
      topic: "Searching",
      duration: "28:15",
      url: "https://www.youtube.com/watch?v=f6UU7V3szVw",
      thumbnail: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Recursion and Backtracking",
      creator: "Abdul Bari",
      topic: "Recursion",
      duration: "45:50",
      url: "https://www.youtube.com/watch?v=kHi1DUhp9kM",
      thumbnail: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Heap Data Structure",
      creator: "Striver",
      topic: "Heaps",
      duration: "32:40",
      url: "https://www.youtube.com/watch?v=HqPJF2L5h9U",
      thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Hashing Complete Guide",
      creator: "CodeWithHarry",
      topic: "Hashing",
      duration: "40:20",
      url: "https://www.youtube.com/watch?v=shs0KM3wKv8",
      thumbnail: "https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesTopic = selectedTopic === 'all' || video.topic.toLowerCase() === selectedTopic;
    const matchesCreator = selectedCreator === 'all' || video.creator.toLowerCase() === selectedCreator;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         video.topic.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTopic && matchesCreator && matchesSearch;
  });

  const topics = Array.from(new Set(videos.map(v => v.topic)));
  const creators = Array.from(new Set(videos.map(v => v.creator)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-pink-50 py-12 px-4">
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
          
          <Video className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Learn with YouTube</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated video tutorials from top programming educators
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">{videos.length}</p>
                <p className="text-gray-600">Total Videos</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">{creators.length}</p>
                <p className="text-gray-600">Expert Creators</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-gray-900">{topics.length}</p>
                <p className="text-gray-600">Topics Covered</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Video className="w-6 h-6 text-green-600" />
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
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="all">All Topics</option>
              {topics.map(topic => (
                <option key={topic} value={topic.toLowerCase()}>{topic}</option>
              ))}
            </select>
            
            <select
              value={selectedCreator}
              onChange={(e) => setSelectedCreator(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="all">All Creators</option>
              {creators.map(creator => (
                <option key={creator} value={creator.toLowerCase()}>{creator}</option>
              ))}
            </select>
            
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">
                    {video.topic}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {video.duration}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {video.title}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span className="text-sm">{video.creator}</span>
                </div>
                
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Watch Video
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No videos found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoLearning;