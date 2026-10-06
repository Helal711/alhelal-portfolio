import React from 'react';
import { ACHIEVEMENTS_LIST } from '../data/cvData';
import { Award, ShieldCheck, Cpu, CheckCircle } from 'lucide-react';

const achievementIcons = [
  <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" key="0" />,
  <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" key="1" />,
  <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" key="2" />,
  <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" key="3" />
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1 w-6 bg-emerald-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Verified Honors
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Achievements &amp; Recognition
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            Professional accolades, state government digital recognitions, and certified master trainer appointments.
          </p>
        </div>

        {/* Certificate-Style Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS_LIST.map((ach, idx) => (
            <div
              key={ach.title}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/50 dark:border-emerald-800/40 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {achievementIcons[idx] || <Award className="w-6 h-6 text-emerald-600" />}
                </div>

                <span className="text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 block mb-1">
                  {ach.issuer}
                </span>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {ach.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                <span>Official Certification</span>
                <span className="text-emerald-500">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
