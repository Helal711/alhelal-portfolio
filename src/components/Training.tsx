import React, { useState } from 'react';
import { TRAINING_LIST } from '../data/cvData';
import { Award, ShieldAlert, Users, Compass, Flame, Factory, MapPin, Clock } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Fire Safety": <Flame className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  "Compliance": <ShieldAlert className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  "Communication": <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  "Corporate Skills": <Compass className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  "Creative Skills": <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  "Industrial Training": <Factory className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
};

export const Training: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Fire Safety',
    'Compliance',
    'Communication',
    'Corporate Skills',
    'Creative Skills',
    'Industrial Training'
  ];

  const filteredTrainings = selectedCategory === 'All'
    ? TRAINING_LIST
    : TRAINING_LIST.filter(item => item.category === selectedCategory);

  return (
    <section id="training" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1 w-6 bg-emerald-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Certifications &amp; Courses
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Development
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            Specialized industrial, compliance, safety, and managerial certifications acquired from authorized bodies.
          </p>
        </div>

        {/* Filter Controls (Segmented clean buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-white shadow-2xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrainings.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-sm hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-200/40 dark:border-emerald-800/40">
                    {categoryIcons[item.category] || <Award className="w-3.5 h-3.5" />}
                    <span>{item.category}</span>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {item.institution}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                {item.duration && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.duration}</span>
                  </div>
                )}
                {item.location && (
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
