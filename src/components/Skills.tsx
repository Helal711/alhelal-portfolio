import React from 'react';
import { SKILL_GROUPS } from '../data/cvData';
import { Palette, FileSpreadsheet, Server, Video, Check } from 'lucide-react';

const groupIcons: Record<string, React.ReactNode> = {
  "DESIGN & CREATIVE COLLATERAL": <Palette className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  "OFFICE & PRODUCTIVITY SUITE": <FileSpreadsheet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  "IT, ERP & DATA MANAGEMENT": <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  "MEDIA & CONTENT CREATIVE": <Video className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1 w-6 bg-emerald-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Technical Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical &amp; Creative Skills
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            Validated tools, office suites, enterprise ERP solutions, and creative design platforms based strictly on verified records.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  {groupIcons[group.category] || <Check className="w-5 h-5 text-emerald-600" />}
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                    {group.category}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {group.skills.length} Competencies
                  </span>
                </div>
              </div>

              {/* Clean Skill Tags (Zero-Fake Percentages) */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
