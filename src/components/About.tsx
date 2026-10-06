import React from 'react';
import { PROFESSIONAL_SUMMARY } from '../data/cvData';
import {
  Building2,
  Wrench,
  ShieldCheck,
  ShoppingBag,
  Layers,
  Palette,
  Cpu,
  FileText,
  Briefcase,
  CheckCircle,
  Award
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Wrench: <Wrench className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Layers: <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Palette: <Palette className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Cpu: <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  FileText: <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1 w-6 bg-emerald-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Executive Overview
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Profile
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            A verified record of corporate administrative governance, cross-functional facility supervision, statutory compliance, and digital systems management.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* LEFT: Professional Narrative */}
          <div className="lg:col-span-6 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                {PROFESSIONAL_SUMMARY.headline}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Grounded in operational discipline, physical facility oversight, and measurable compliance outcomes.
              </p>
            </div>

            {PROFESSIONAL_SUMMARY.narrative.map((paragraph, index) => (
              <p key={index} className="text-slate-600 dark:text-slate-300 text-justify">
                {paragraph}
              </p>
            ))}

            {/* Key Operational Strengths */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                Core Operating Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">Zero-defect statutory audit readiness</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">Stringent facility uptime &amp; safety</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">Cost-conscious local procurement</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">Verified asset traceability &amp; audit</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Professional Focus Cards (8 Disciplines) */}
          <div className="lg:col-span-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Professional Focus
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                8 Core Operating Pillars
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROFESSIONAL_SUMMARY.focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-white dark:hover:bg-slate-900 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/50 dark:border-emerald-800/40 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {iconMap[area.icon] || <Award className="w-5 h-5 text-emerald-600" />}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
