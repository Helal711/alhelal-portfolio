import React, { useState } from 'react';
import { CAREER_JOURNEY } from '../data/cvData';
import {
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  Building,
  CheckCircle2,
  Maximize2,
  Minimize2
} from 'lucide-react';

export const Experience: React.FC = () => {
  // Expanded state map for details
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'kido-bd': true // Default first one expanded for executive impact
  });

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    CAREER_JOURNEY.forEach(item => {
      allExpanded[item.id] = true;
    });
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-1 w-6 bg-emerald-500 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Employment History
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Career Journey
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Chronological professional trajectory across leading manufacturing, compliance, and industrial organizations.
            </p>
          </div>

          {/* Quick Toggle Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Expand All</span>
            </button>
            <button
              onClick={collapseAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>Collapse All</span>
            </button>
          </div>
        </div>

        {/* Vertical Executive Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-36 space-y-12">
          
          {CAREER_JOURNEY.map((item, idx) => {
            const isExpanded = !!expandedIds[item.id];
            const isCurrent = idx === 0;

            return (
              <div key={item.id} className="relative pl-6 md:pl-10">
                {/* Timeline Node Dot */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform ${
                    isCurrent
                      ? 'bg-emerald-500 border-white dark:border-slate-900 ring-4 ring-emerald-500/20'
                      : 'bg-white dark:bg-slate-900 border-slate-400 dark:border-slate-600'
                  }`}
                />

                {/* Left Floating Period Badge (Desktop) */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span className={`text-xs font-bold tracking-tight block ${
                    isCurrent ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {item.period}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-6 sm:p-7 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      {/* Mobile Period Indicator */}
                      <div className="md:hidden inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                        {item.role}
                        {isCurrent && (
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                            Present
                          </span>
                        )}
                      </h3>

                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                        <Building className="w-4 h-4 text-slate-400" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    {/* View Details Toggle Button */}
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Concise Summary Paragraph */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Expandable Deep Breakdown (KiDO BD Categorized Structure or Ha-Meem/Other Details) */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-6">
                      
                      {/* If Categories exist (KiDO BD 5 structured categories) */}
                      {item.categories && item.categories.length > 0 && (
                        <div className="space-y-5">
                          {item.categories.map((cat) => (
                            <div
                              key={cat.categoryName}
                              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/70"
                            >
                              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                {cat.categoryName}
                              </h4>
                              <ul className="space-y-1.5">
                                {cat.details.map((detail, dIdx) => (
                                  <li key={dIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                                    <span className="text-slate-400 dark:text-slate-600 mt-0.5">•</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* If Standard Bullet Points exist (Ha-Meem, Zaber, Advance) */}
                      {item.bulletPoints && item.bulletPoints.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                            Key Deliverables &amp; Mandates
                          </h4>
                          <ul className="space-y-2">
                            {item.bulletPoints.map((point, pIdx) => (
                              <li key={pIdx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>
                  )}

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
