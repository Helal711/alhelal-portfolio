import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { Download, ArrowRight, Mail, Camera, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenPhotoPreview: () => void;
  customPhotoUrl: string | null;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPhotoPreview, customPhotoUrl }) => {
  const [imageError, setImageError] = useState(false);

  const displayImage = customPhotoUrl || SITE_CONFIG.profileImage;

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-100/60 via-slate-50 to-white dark:from-slate-900/60 dark:via-slate-950 dark:to-slate-950"
    >
      {/* Background Architectural Accent Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-20">
        <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Executive Identity & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                {SITE_CONFIG.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-3 text-balance">
              {SITE_CONFIG.name}
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 tracking-tight mb-6">
              {SITE_CONFIG.title}
            </h2>

            {/* Supporting Text from Verified CV */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-normal">
              Seasoned corporate operations specialist with <strong className="font-semibold text-slate-900 dark:text-white">9+ years of documented track record</strong> managing high-uptime facilities, statutory &amp; social compliance audits, local procurement cycles, fixed-asset lifecycles, and enterprise ERP data administration across premier industrial organizations.
            </p>

            {/* Core Competency Badges - Clean Unboxed Text with Separators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xs font-medium text-slate-500 dark:text-slate-400 mb-8">
              <span>Facility Management</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Social &amp; Fire Compliance</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Local Procurement</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Asset Registry</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Oracle ERP</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Graphic Design</span>
            </div>

            {/* The Three Required CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* 1. Explore Experience */}
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 rounded-xl transition-all shadow-sm hover:shadow active:scale-95 group"
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* 2. Download CV */}
              <a
                href={SITE_CONFIG.cvFile}
                download="Md_Al_Helal_Sarkar_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 rounded-xl transition-all shadow-sm active:scale-95 group"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Download CV</span>
              </a>

              {/* 3. Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Candidate Credential Tagline */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Verified CV Records
              </span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Immediate Corporate Availability
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Executive Portrait with Double Border Frame & Fallback */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Outer Subtle Geometric Frame & Shadow */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-tr from-slate-200 to-emerald-500/20 dark:from-slate-800 dark:to-emerald-500/30 blur-sm -z-10 group-hover:blur transition-all" />
              
              {/* Decorative Frame */}
              <div className="relative p-2 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88">
                
                {/* Profile Image with Resilient Fallback */}
                {!imageError ? (
                  <img
                    src={displayImage}
                    alt="Md. Al Helal Sarkar - Administration & Operations Specialist"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  /* Elegant Executive Monogram & Silhouette Fallback */
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl" />
                    <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-3xl font-extrabold text-emerald-400 mb-3 shadow-inner">
                      AH
                    </div>
                    <span className="text-base font-bold text-slate-100">Md. Al Helal Sarkar</span>
                    <span className="text-xs text-emerald-400 font-medium mt-1">Administration &amp; Operations</span>
                    <span className="text-[10px] text-slate-400 mt-3 px-2 py-1 bg-slate-800/80 rounded border border-slate-700/60">
                      Executive Personal Brand
                    </span>
                  </div>
                )}

                {/* Corner Status Badge */}
                <div className="absolute bottom-4 right-4 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-700/60 rounded-lg px-2.5 py-1 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-semibold text-slate-200">Active</span>
                </div>
              </div>

              {/* Local Photo Preview Tool Trigger Button */}
              <div className="mt-4 flex items-center justify-center">
                <button
                  onClick={onOpenPhotoPreview}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                  title="Preview a different photo from your computer without uploading to server"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Test Photo Preview Tool</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
