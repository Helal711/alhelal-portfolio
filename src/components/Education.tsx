import React from 'react';
import { EDUCATION_LIST } from '../data/cvData';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1 w-6 bg-emerald-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Academic Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            Formal technical degrees and academic milestones verified from institutional documentation.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={edu.degree}
              className={`p-6 sm:p-7 rounded-2xl border transition-all relative flex flex-col justify-between ${
                idx === 0
                  ? 'bg-gradient-to-b from-white to-emerald-50/20 dark:from-slate-900 dark:to-emerald-950/20 border-emerald-500/40 dark:border-emerald-500/30 shadow-md ring-1 ring-emerald-500/20'
                  : 'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    idx === 0
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}>
                    {idx === 0 ? <GraduationCap className="w-5 h-5" /> : idx === 1 ? <Award className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <Calendar className="w-3 h-3 text-emerald-500" />
                    <span>{edu.year}</span>
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                  {edu.degree}
                </h3>

                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                  {edu.institution}
                </p>

                {edu.field && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Discipline: {edu.field}
                  </p>
                )}

                {edu.grade && (
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1 font-mono">
                    {edu.grade}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                <span>Verified Degree</span>
                <span className="text-emerald-500 font-medium">Official Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
