import React, { useState } from 'react';
import { Download } from 'lucide-react';
import PageHeader from '../../shared-components/PageHeader';
import BackButton from '../../shared-components/BackButton';
import LoadingSpinner from '../../shared-components/LoadingSpinner';
import PDFSectionSelector from './PDFSectionSelector';

const PDFDownloader = ({ onBack, assessment, learningPath }) => {
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

  const handleSectionToggle = (section) => {
    setSelectedSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const content = generatePDFContent();
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'DSA-Learning-Guide.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setGenerated(true);
      setTimeout(() => setGenerated(false), 2000);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const generatePDFContent = () => {
    let content = 'DSA LEARNING PATHWAY - COMPREHENSIVE GUIDE\n';
    content += '='.repeat(50) + '\n\n';

    if (selectedSections.profile && assessment) {
      content += 'LEARNER PROFILE\n-'.repeat(10) + '\n';
      content += `Stage: ${assessment.stage}\nLevel: ${assessment.programmingLevel}\n`;
      content += `Daily Hours: ${assessment.dailyHours}\nGoal: ${assessment.goal}\n`;
      content += `Languages: ${assessment.languages.join(', ')}\n\n`;
    }

    if (selectedSections.roadmap && learningPath) {
      content += 'LEARNING ROADMAP\n-'.repeat(10) + '\n';
      content += `${learningPath.title}\n${learningPath.description}\nDuration: ${learningPath.duration}\n\n`;
    }

    content += 'Good luck with your DSA learning journey!\n';
    return content;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy py-12 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <PageHeader icon={Download} title="PDF Study Guide" subtitle="Create your personalized learning guide" />

        <div className="bg-space-light/30 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-periwinkle/20 animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-6">Select Content</h2>
          <PDFSectionSelector sections={selectedSections} toggleSection={handleSectionToggle} />
        </div>

        <div className="text-center">
          <button
            onClick={generatePDF}
            disabled={isGenerating}
            className="px-8 py-4 bg-gradient-to-r from-periwinkle to-dusty-rose text-white rounded-xl hover:from-periwinkle/90 hover:to-dusty-rose/90 transition disabled:opacity-50"
          >
            {isGenerating ? 'Generating...' : 'Generate PDF'}
          </button>
          {isGenerating && <LoadingSpinner />}
          {generated && <p className="text-pale-pink/80 mt-4">PDF downloaded successfully!</p>}
        </div>

        <div className="mt-12 text-center">
          <BackButton onClick={onBack}>Back to Dashboard</BackButton>
        </div>
      </div>
    </div>
  );
};

export default PDFDownloader;
