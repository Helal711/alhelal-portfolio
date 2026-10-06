import React from 'react';
import { HERO_STATS } from '../data/cvData';

export const HeroStats: React.FC = () => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col text-center sm:text-left ${
                idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6 md:pl-8' : ''
              }`}
            >
              <span className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white font-mono tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="font-bold text-sm text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
