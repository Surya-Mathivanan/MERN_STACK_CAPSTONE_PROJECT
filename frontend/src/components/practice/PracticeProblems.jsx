import React, { useMemo, useState } from 'react';
import { BookOpen } from 'lucide-react';
import PageHeader from '../../shared-components/PageHeader';
import BackButton from '../../shared-components/BackButton';
import ProblemFilters from './ProblemFilters';
import ProblemStats from './ProblemStats';
import ProblemSearchBar from './ProblemSearchBar';
import ProblemCard from './ProblemCard';
import { problemsData, getAvailableDifficulties } from '../../data/practiceProblems';

const PracticeProblems = ({ onBack, userLevel }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const availableDifficulties = useMemo(() => getAvailableDifficulties(userLevel), [userLevel]);

  const filteredProblems = useMemo(() => {
    return problemsData.filter((problem) => {
      const matchesDifficulty = selectedDifficulty === 'all' || problem.difficulty.toLowerCase() === selectedDifficulty;
      const matchesPlatform = selectedPlatform === 'all' || problem.platform.toLowerCase() === selectedPlatform;
      const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesUserLevel = availableDifficulties.includes(problem.difficulty.toLowerCase());
      return matchesDifficulty && matchesPlatform && matchesSearch && matchesUserLevel;
    });
  }, [selectedDifficulty, selectedPlatform, searchTerm, availableDifficulties]);

  const stats = useMemo(() => {
    const total = filteredProblems.length || problemsData.length;
    const easy = problemsData.filter((p) => p.difficulty.toLowerCase() === 'easy').length;
    const medium = problemsData.filter((p) => p.difficulty.toLowerCase() === 'medium').length;
    const hard = problemsData.filter((p) => p.difficulty.toLowerCase() === 'hard').length;
    return { total, easy, medium, hard };
  }, [filteredProblems]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-space-dark via-space-blue to-dark-navy py-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <PageHeader
          icon={BookOpen}
          title="Practice Problems"
          subtitle="Curated coding challenges to strengthen your DSA skills"
        />

        <ProblemStats {...stats} />

        <ProblemFilters
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
          availableDifficulties={availableDifficulties}
        />

        <ProblemSearchBar value={searchTerm} onChange={setSearchTerm} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProblems.map((problem, idx) => (
            <ProblemCard key={`${problem.title}-${idx}`} problem={problem} />
          ))}
        </div>

        {filteredProblems.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <h3 className="text-xl font-semibold text-white mb-2">No problems found</h3>
            <p className="text-pale-pink/70">Try adjusting your filters or search terms</p>
          </div>
        )}

        <div className="mt-12 text-center animate-fade-in">
          <BackButton onClick={onBack}>Back to Dashboard</BackButton>
        </div>
      </div>
    </div>
  );
};

export default PracticeProblems;
