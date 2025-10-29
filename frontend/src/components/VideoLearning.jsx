import React, { useState } from 'react';
import { Video, ExternalLink, Filter, Search, Play, Clock, User, ArrowLeft } from 'lucide-react';
const VideoLearning = ({ onBack }) => {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedCreator, setSelectedCreator] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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
          <div className="w-16 h-16 bg-gradient-to-br from-dusty-rose to-pale-pink rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
            <Video className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Learn with YouTube</h1>
          <p className="text-xl text-pale-pink/70 max-w-2xl mx-auto">
            Curated video tutorials from top programming educators
          </p>
        </div>
        {/* Filter Section */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white focus:outline-none focus:ring-2 focus:ring-dusty-rose/50 backdrop-blur-sm"
            >
              <option value="all">All Topics</option>
              {topics.map(topic => (
                <option key={topic} value={topic.toLowerCase()}>{topic}</option>
              ))}
            </select>
            <select
              value={selectedCreator}
              onChange={(e) => setSelectedCreator(e.target.value)}
              className="px-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white focus:outline-none focus:ring-2 focus:ring-dusty-rose/50 backdrop-blur-sm"
            >
              <option value="all">All Creators</option>
              {creators.map(creator => (
                <option key={creator} value={creator.toLowerCase()}>{creator}</option>
              ))}
            </select>
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="w-5 h-5 text-pale-pink/60 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-space-light/50 border border-periwinkle/30 text-white placeholder-pale-pink/50 focus:outline-none focus:ring-2 focus:ring-dusty-rose/50 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredVideos.map((video, index) => (
            <div
              key={index}
              className="group bg-space-light/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-periwinkle/20 hover:border-dusty-rose/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent flex items-center justify-center">
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-dusty-rose rounded-full flex items-center justify-center hover:bg-dusty-rose/90 transition-colors duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </a>
                </div>
                <span className="absolute top-2 right-2 bg-space-dark/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">{video.duration}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2 py-1 rounded-lg text-dusty-rose bg-dusty-rose/20 border border-dusty-rose/30">{video.creator}</span>
                  <span className="text-sm text-pale-pink/60">{video.topic}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-dusty-rose transition-colors duration-300">{video.title}</h3>
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-dusty-rose to-pale-pink hover:from-dusty-rose/90 hover:to-pale-pink/90 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                  Watch Video
                  <Play className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        {filteredVideos.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="w-24 h-24 bg-space-light/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-periwinkle/20">
              <Search className="w-8 h-8 text-pale-pink/60" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No videos found</h3>
            <p className="text-pale-pink/70">Try adjusting your filters or search terms</p>
          </div>
        )}
        {/* Back Button */}
        <div className="mt-12 text-center animate-fade-in">
          <button
            onClick={onBack}
            className="inline-flex items-center px-6 py-3 bg-space-light/50 hover:bg-space-light/70 text-white rounded-xl transition-all duration-200 border border-periwinkle/20 hover:border-periwinkle/40 backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoLearning;
