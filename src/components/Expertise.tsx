import React from 'react';
import { CORE_EXPERTISE } from '../data/cvData';
import {
  Briefcase,
  Building,
  ShieldAlert,
  ShoppingCart,
  Database,
  MonitorCheck,
  PenTool,
  ClipboardList
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  Building: <Building className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  ShoppingCart: <ShoppingCart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  Database: <Database className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  MonitorCheck: <MonitorCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  PenTool: <PenTool className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  ClipboardList: <ClipboardList className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
};

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1 w-6 bg-emerald-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Functional Competencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Expertise
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            Disciplined operational execution across institutional administration, safety compliance, facility engineering, and digital systems.
          </p>
        </div>

        {/* 8 Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_EXPERTISE.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-white dark:hover:bg-slate-900 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {iconMap[item.iconName] || <Briefcase className="w-6 h-6 text-emerald-600" />}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mt-0.5 mb-3">
                  {item.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                <span>Verified CV Skill</span>
                <span className="text-emerald-500 font-bold">● Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
