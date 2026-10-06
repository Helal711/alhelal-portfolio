import React from 'react';
import { SELECTED_PROJECTS } from '../data/cvData';
import { Flame, Shield, CheckCircle2, BookOpen, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1 w-6 bg-emerald-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Verified Technical Initiatives
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            Documented engineering and operational tools developed from verified field work and safety handbooks.
          </p>
        </div>

        {/* Selected Project Case Study */}
        {SELECTED_PROJECTS.map((proj) => (
          <div
            key={proj.title}
            className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Project Case Study Info */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/40 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Industrial Safety Digitalization</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {proj.title}
                </h3>

                <h4 className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-1 mb-4">
                  {proj.tagline}
                </h4>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                  {proj.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-normal">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2">
                    Scope:
                  </span>
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Abstract Technical Diagram Illustration (No fake screenshots) */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-inner relative overflow-hidden">
                  
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-emerald-500" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Knowledge Architecture
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">FSCD Based</span>
                  </div>

                  {/* Abstract Conceptual Modules Grid */}
                  <div className="space-y-3.5">
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">
                        01
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Emergency Question &amp; Answer Base</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">Synthesized from operational field hand-notes</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-xs">
                        02
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Fire Safety Drill &amp; Evacuation Index</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">Standard operating procedures for factory staff</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-xs">
                        03
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Equipment &amp; Inspection Checklists</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">Extinguisher ratings, hydrants &amp; alarm logs</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">
                      Authentic CV Project · Hand-Notes Application Concept
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};
