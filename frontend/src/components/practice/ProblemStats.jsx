import React from 'react';
import { TrendingUp, Star } from 'lucide-react';

const StatCard = ({ title, value, subtitle, icon: Icon }) => (
  <div className="bg-space-light/30 backdrop-blur-sm rounded-2xl p-6 border border-periwinkle/20">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm text-pale-pink/70">{title}</h3>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        {subtitle && <p className="text-pale-pink/70 text-sm mt-1">{subtitle}</p>}
      </div>
      <div className="w-12 h-12 bg-gradient-to-br from-pale-pink/20 to-periwinkle/20 rounded-full flex items-center justify-center">
        {Icon ? <Icon className="w-6 h-6 text-pale-pink" /> : <Star className="w-6 h-6 text-pale-pink" />}
      </div>
    </div>
  </div>
);

const ProblemStats = ({ total, easy, medium, hard }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <StatCard title="Total Problems" value={total} subtitle="Available" icon={TrendingUp} />
      <StatCard title="Beginner Friendly" value={`${Math.round((easy / total) * 100)}%`} subtitle={`${easy} Easy`} />
      <StatCard title="Intermediate/Advanced" value={`${Math.round(((medium + hard) / total) * 100)}%`} subtitle={`${medium} Medium • ${hard} Hard`} />
    </div>
  );
};

export default ProblemStats;
