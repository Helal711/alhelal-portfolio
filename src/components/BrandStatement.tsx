import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden border-y border-slate-800">
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full border border-emerald-400" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full border border-blue-400" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-emerald-400 text-xs font-semibold tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>EXECUTIVE PHILOSOPHY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Administration. Operations. Compliance. Creativity.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          &ldquo;Bridging structured physical facility governance, zero-compromise statutory compliance, and rigorous asset tracking with modern digital ERP workflows and creative operational clarity.&rdquo;
        </p>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>9+ Years Experience</span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span>BSc Computer Science Engineering</span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span>BRAC Master Safety Trainer</span>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span>Oracle ERP &amp; Procurement</span>
        </div>
      </div>
    </section>
  );
};
