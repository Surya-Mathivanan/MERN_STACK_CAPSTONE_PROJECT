import React from 'react';
import { Settings, Calendar, CheckCircle } from 'lucide-react';

const PDFSectionSelector = ({ sections, toggleSection, iconMap }) => {
  const sectionConfigs = [
    { id: 'profile', title: 'Learner Profile', description: 'Your assessment results and preferences', icon: Settings },
    { id: 'roadmap', title: 'Learning Roadmap', description: 'Personalized learning path and topics', icon: Calendar },
    { id: 'schedule', title: 'Daily Schedule', description: 'Day-wise learning plan with tasks', icon: Calendar },
    { id: 'problems', title: 'Practice Problems', description: 'Curated coding challenges with links', icon: Settings },
    { id: 'videos', title: 'Video Resources', description: 'YouTube tutorial recommendations', icon: Calendar },
    { id: 'theory', title: 'Theory Articles', description: 'Reference materials and documentation', icon: Settings }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {sectionConfigs.map((section, index) => {
        const Icon = section.icon;
        return (
          <div
            key={section.id}
            onClick={() => toggleSection(section.id)}
            className={`group border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 animate-slide-up ${
              sections[section.id]
                ? 'border-periwinkle/40 bg-gradient-to-br from-periwinkle/10 to-dusty-rose/10 shadow-lg'
                : 'border-periwinkle/20 bg-space-light/30 hover:bg-space-light/50'
            }`}
            style={{ animationDelay: `${200 + index * 100}ms` }}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  sections[section.id]
                    ? 'bg-gradient-to-br from-periwinkle to-dusty-rose text-white shadow-lg'
                    : 'bg-space-light/50 text-pale-pink/70 group-hover:bg-space-light/70'
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white group-hover:text-periwinkle transition-colors duration-300">
                    {section.title}
                  </h3>
                  {sections[section.id] && <CheckCircle className="w-5 h-5 text-periwinkle animate-pulse" />}
                </div>
                <p className="text-sm text-pale-pink/70">{section.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PDFSectionSelector;
