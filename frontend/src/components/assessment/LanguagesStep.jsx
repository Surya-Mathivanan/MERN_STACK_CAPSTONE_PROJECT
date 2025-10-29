import React from 'react';
import { Code, Sparkles } from 'lucide-react';

const LanguagesStep = ({ value, onChange }) => {
  const languages = ['Python', 'Java', 'C++', 'JavaScript', 'C', 'Go', 'Rust', 'Kotlin'];

  const toggleLanguage = (lang) => {
    if (value.includes(lang)) {
      onChange(value.filter((l) => l !== lang));
    } else {
      onChange([...value, lang]);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-pale-pink to-periwinkle rounded-2xl mx-auto mb-4 flex items-center justify-center animate-glow">
          <Code className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Programming Languages</h2>
        <p className="text-pale-pink/70">Select all languages you're familiar with</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => toggleLanguage(language)}
            className={`group p-4 rounded-xl text-center transition-all duration-300 ${
              value.includes(language)
                ? 'bg-gradient-to-r from-pale-pink/20 to-periwinkle/20 text-white shadow-lg transform scale-105 border border-pale-pink/30'
                : 'bg-space-light/50 hover:bg-space-light/70 text-pale-pink/80 hover:text-white border border-periwinkle/10 hover:border-pale-pink/30'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="font-medium">{language}</span>
              {value.includes(language) && <Sparkles className="w-4 h-4 text-pale-pink animate-pulse" />}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguagesStep;
