import React from 'react';
import { SITE_CONFIG, SOCIAL_LINKS } from '../config';
import {
  Download,
  Linkedin,
  Facebook,
  Github,
  PhoneCall,
  Printer,
  ArrowUp,
  ShieldCheck
} from 'lucide-react';

interface FooterProps {
  onPrint: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onPrint }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check which social links are configured and non-empty
  const hasLinkedin = Boolean(SOCIAL_LINKS.linkedin && SOCIAL_LINKS.linkedin.trim() !== "");
  const hasFacebook = Boolean(SOCIAL_LINKS.facebook && SOCIAL_LINKS.facebook.trim() !== "");
  const hasGithub = Boolean(SOCIAL_LINKS.github && SOCIAL_LINKS.github.trim() !== "");
  const hasWhatsapp = Boolean(SOCIAL_LINKS.whatsapp && SOCIAL_LINKS.whatsapp.trim() !== "");

  const hasAnySocial = hasLinkedin || hasFacebook || hasGithub || hasWhatsapp;

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-black dark:text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="rounded-full overflow-hidden border-2 border-emerald-500 shadow-sm shrink-0 bg-slate-850"
                style={{ width: '2.5rem', height: '2.5rem', minWidth: '2.5rem', minHeight: '2.5rem', maxWidth: '2.5rem', maxHeight: '2.5rem' }}
              >
                <img
                  src={SITE_CONFIG.profileImage}
                  alt={SITE_CONFIG.name}
                  width={40}
                  height={40}
                  referrerPolicy="no-referrer"
                  style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', display: 'block' }}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-none">
                  {SITE_CONFIG.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-400 mt-1">
                  {SITE_CONFIG.title}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Corporate operations specialist delivering rigorous facility maintenance, labor compliance standards, local procurement, and enterprise ERP record administration.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.cvFile}
                download="Md_Al_Helal_Sarkar_CV.pdf"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>

              <button
                onClick={onPrint}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-750 rounded-lg transition-colors border border-slate-700"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Portfolio</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">Professional Profile</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-emerald-400 transition-colors">Career Journey Timeline</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-emerald-400 transition-colors">Core Operational Expertise</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors">Technical &amp; Creative Skills</a>
              </li>
              <li>
                <a href="#education" className="hover:text-emerald-400 transition-colors">Academic Qualifications</a>
              </li>
              <li>
                <a href="#training" className="hover:text-emerald-400 transition-colors">Professional Development</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social Links (Auto-hidden if empty) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Corporate Contacts
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div>
                <span className="text-slate-500 block text-[11px]">Direct Email</span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-200 hover:text-emerald-400 transition-colors font-mono">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Primary Phone</span>
                <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-200 hover:text-emerald-400 transition-colors font-mono">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Residency</span>
                <span className="text-slate-200">{SITE_CONFIG.location}</span>
              </div>
            </div>

            {/* Social Icons (Section 26: Only displayed if value is not empty) */}
            {hasAnySocial && (
              <div className="pt-2">
                <span className="text-[11px] font-semibold text-slate-400 block mb-2">Verified Professional Networks</span>
                <div className="flex items-center gap-2">
                  {hasLinkedin && (
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {hasFacebook && (
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      aria-label="Facebook Profile"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                  {hasGithub && (
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {hasWhatsapp && (
                    <a
                      href={SOCIAL_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                      aria-label="WhatsApp Contact"
                    >
                      <PhoneCall className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Md. Al Helal Sarkar. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Static Architecture · Ready for GitHub Pages
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Return to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
