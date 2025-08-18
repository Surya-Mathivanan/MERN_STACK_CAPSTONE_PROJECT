import React, { useState } from 'react';
import { Download, FileText, Calendar, CheckCircle, Settings, ArrowLeft, BookOpen, Video, ExternalLink } from 'lucide-react';

// Mock types for demonstration
interface UserAssessment {
  stage: string;
  programmingLevel: string;
  dailyHours: string;
  goal: string;
  languages: string[];
}

interface DayPlan {
  day: number;
  topic: string;
  theory: string[];
  practice: string[];
  videos: string[];
}

interface LearningPath {
  title: string;
  description: string;
  duration: string;
  topics: string[];
  dailyPlan: DayPlan[];
}

interface PDFDownloaderProps {
  onBack: () => void;
  assessment: UserAssessment;
  learningPath: LearningPath;
}

const PDFDownloader: React.FC<PDFDownloaderProps> = ({ onBack, assessment, learningPath }) => {
  const [selectedSections, setSelectedSections] = useState({
    profile: true,
    roadmap: true,
    problems: true,
    videos: true,
    theory: true,
    schedule: true
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleSectionToggle = (section: keyof typeof selectedSections) => {
    setSelectedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate PDF generation with proper async handling
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Create a mock PDF content
      const pdfContent = generatePDFContent();
      const blob = new Blob([pdfContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'DSA-Learning-Guide.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setGenerated(true);
      setTimeout(() => setGenerated(false), 3000);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const generatePDFContent = (): string => {
    let content = "DSA LEARNING PATHWAY - COMPREHENSIVE GUIDE\n";
    content += "=".repeat(50) + "\n\n";
    
    if (selectedSections.profile) {
      content += "LEARNER PROFILE\n";
      content += "-".repeat(20) + "\n";
      content += `Stage: ${assessment.stage}\n`;
      content += `Programming Level: ${assessment.programmingLevel}\n`;
      content += `Daily Hours: ${assessment.dailyHours}\n`;
      content += `Goal: ${assessment.goal}\n`;
      content += `Languages: ${assessment.languages.join(', ')}\n\n`;
    }
    
    if (selectedSections.roadmap) {
      content += "LEARNING ROADMAP\n";
      content += "-".repeat(20) + "\n";
      content += `Title: ${learningPath.title}\n`;
      content += `Description: ${learningPath.description}\n`;
      content += `Duration: ${learningPath.duration}\n\n`;
      content += "Topics Covered:\n";
      learningPath.topics.forEach((topic, index) => {
        content += `${index + 1}. ${topic}\n`;
      });
      content += "\n";
    }
    
    if (selectedSections.schedule) {
      content += "DAILY LEARNING SCHEDULE\n";
      content += "-".repeat(20) + "\n";
      learningPath.dailyPlan.forEach(day => {
        content += `Day ${day.day}: ${day.topic}\n`;
        content += `Theory: ${day.theory.join(', ')}\n`;
        content += `Practice: ${day.practice.join(', ')}\n`;
        content += `Videos: ${day.videos.join(', ')}\n\n`;
      });
    }
    
    if (selectedSections.problems) {
      content += "RECOMMENDED PRACTICE PROBLEMS\n";
      content += "-".repeat(20) + "\n";
      content += "1. Two Sum - https://leetcode.com/problems/two-sum/\n";
      content += "2. Binary Search - https://leetcode.com/problems/binary-search/\n";
      content += "3. Valid Parentheses - https://leetcode.com/problems/valid-parentheses/\n";
      content += "4. Merge Two Sorted Lists - https://leetcode.com/problems/merge-two-sorted-lists/\n";
      content += "5. Maximum Subarray - https://leetcode.com/problems/maximum-subarray/\n";
      content += "... and many more\n\n";
    }
    
    if (selectedSections.videos) {
      content += "RECOMMENDED VIDEOS\n";
      content += "-".repeat(20) + "\n";
      content += "1. Complete DSA Course - Striver\n";
      content += "2. Arrays Tutorial - Apna College\n";
      content += "3. Linked Lists - CodeWithHarry\n";
      content += "4. Binary Trees - Apna College\n";
      content += "5. Dynamic Programming - Striver\n";
      content += "... and many more\n\n";
    }
    
    if (selectedSections.theory) {
      content += "THEORY RESOURCES\n";
      content += "-".repeat(20) + "\n";
      content += "1. GeeksforGeeks - Data Structures\n";
      content += "2. JavaTPoint - Algorithm Tutorials\n";
      content += "3. W3Schools - DSA Reference\n";
      content += "... and many more\n\n";
    }
    
    content += "Good luck with your DSA learning journey!\n";
    content += "Generated by DSA Learning Pathway App";
    
    return content;
  };

  const sections = [
    { id: 'profile', title: 'Learner Profile', description: 'Your assessment results and preferences', icon: Settings },
    { id: 'roadmap', title: 'Learning Roadmap', description: 'Personalized learning path and topics', icon: Calendar },
    { id: 'schedule', title: 'Daily Schedule', description: 'Day-wise learning plan with tasks', icon: Calendar },
    { id: 'problems', title: 'Practice Problems', description: 'Curated coding challenges with links', icon: BookOpen },
    { id: 'videos', title: 'Video Resources', description: 'YouTube tutorial recommendations', icon: Video },
    { id: 'theory', title: 'Theory Articles', description: 'Reference materials and documentation', icon: FileText }
  ] as const;

  const hasSelectedSections = Object.values(selectedSections).some(v => v);
  const allSectionsDeselected = Object.values(selectedSections).every(v => !v);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-violet-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </button>
          
          <Download className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">PDF Study Guide Generator</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create a comprehensive offline study guide with your personalized learning path
          </p>
        </div>

        {/* PDF Preview */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="w-8 h-8 mr-3 text-purple-600" />
            PDF Content Selection
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedSections[section.id]
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 bg-white hover:border-purple-300'
                }`}
                onClick={() => handleSectionToggle(section.id)}
                role="checkbox"
                aria-checked={selectedSections[section.id]}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSectionToggle(section.id);
                  }
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    selectedSections[section.id]
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{section.title}</h3>
                      {selectedSections[section.id] && (
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{section.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PDF Features */}
        <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">What's Included in Your PDF</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Complete day-wise learning schedule</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Direct links to practice problems</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>YouTube video recommendations</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Theory articles and references</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Progress tracking checklist</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Offline access for study anywhere</span>
              </div>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          {!isGenerating && !generated && (
            <button
              onClick={generatePDF}
              disabled={allSectionsDeselected}
              className={`inline-flex items-center px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                hasSelectedSections
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Download className="w-6 h-6 mr-3" />
              Generate PDF Study Guide
            </button>
          )}
          
          {isGenerating && (
            <div className="inline-flex items-center px-12 py-4 bg-purple-600 text-white rounded-2xl font-bold text-lg">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
              Generating Your PDF...
            </div>
          )}
          
          {generated && (
            <div className="inline-flex items-center px-12 py-4 bg-green-600 text-white rounded-2xl font-bold text-lg">
              <CheckCircle className="w-6 h-6 mr-3" />
              PDF Generated Successfully!
            </div>
          )}
          
          {allSectionsDeselected && (
            <p className="text-gray-500 mt-4">Please select at least one section to generate PDF</p>
          )}
        </div>

        {/* Info Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8">
          <div className="flex items-start space-x-3">
            <ExternalLink className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Note about External Links</h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                The generated PDF will contain direct links to practice problems, videos, and articles. 
                While the PDF can be used offline, you'll need an internet connection to access the linked resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo component with mock data for testing
const PDFDownloaderDemo = () => {
  const mockAssessment: UserAssessment = {
    stage: "Beginner",
    programmingLevel: "Intermediate",
    dailyHours: "2-3 hours",
    goal: "Get job ready",
    languages: ["JavaScript", "Python"]
  };

  const mockLearningPath: LearningPath = {
    title: "Complete DSA Mastery Path",
    description: "Comprehensive data structures and algorithms learning journey",
    duration: "12 weeks",
    topics: ["Arrays", "Linked Lists", "Stacks & Queues", "Trees", "Graphs", "Dynamic Programming"],
    dailyPlan: [
      {
        day: 1,
        topic: "Introduction to Arrays",
        theory: ["Array basics", "Memory allocation"],
        practice: ["Two Sum", "Find Maximum"],
        videos: ["Array fundamentals", "Common patterns"]
      },
      {
        day: 2,
        topic: "Array Manipulation",
        theory: ["Sorting algorithms", "Searching techniques"],
        practice: ["Binary Search", "Merge Sort"],
        videos: ["Sorting visualized", "Search techniques"]
      }
    ]
  };

  const [showDemo, setShowDemo] = useState(true);

  if (showDemo) {
    return <PDFDownloader 
      onBack={() => setShowDemo(false)} 
      assessment={mockAssessment} 
      learningPath={mockLearningPath} 
    />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button 
        onClick={() => setShowDemo(true)}
        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
      >
        Show PDF Downloader Demo
      </button>
    </div>
  );
};

export default PDFDownloaderDemo;