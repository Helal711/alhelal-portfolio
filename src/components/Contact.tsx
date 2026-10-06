import React, { useState } from 'react';
import { SITE_CONFIG, CONFIDENTIAL_INFO } from '../config';
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Lock,
  Unlock,
  Shield,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [showConfidential, setShowConfidential] = useState(SITE_CONFIG.showPrivateInformation);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1 w-6 bg-emerald-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Direct Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            For professional opportunities, corporate operational leadership, facility management roles, or consulting discussions.
          </p>
        </div>

        {/* Executive Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Email Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Direct Email
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Immediate response for recruitment inquiries
              </p>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 break-all select-all font-mono">
                {SITE_CONFIG.email}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <span>Email Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {copiedEmail ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Telephone Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Direct Phone
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Business hours contact number
              </p>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-mono">
                {SITE_CONFIG.phone}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <span>Call Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Corporate Location & Document Download */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Location &amp; Document
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Primary residency and official CV dossier
              </p>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <span>{SITE_CONFIG.location}</span>
                <span className="text-[11px] font-normal text-emerald-600 dark:text-emerald-400">(Available for Corporate Relocation)</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
              <a
                href={SITE_CONFIG.cvFile}
                download="Md_Al_Helal_Sarkar_CV.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official CV</span>
              </a>
            </div>
          </div>

        </div>

        {/* MANDATORY: Private Information Protection Container (Section 17) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/40 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                {showConfidential ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Privacy Protection Shield</span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    GDPR / Policy Guard
                  </span>
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Personal identifiers (NID, Blood Group, Father's Name, DOB, etc.) are protected from public scraping by default.
                </p>
              </div>
            </div>

            {/* Privacy Override Toggle for Authorized Reviewers */}
            <button
              onClick={() => setShowConfidential(!showConfidential)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 rounded-lg transition-colors shadow-2xs cursor-pointer self-start sm:self-auto"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>{showConfidential ? 'Hide Protected Details' : 'Verify Protected Details Policy'}</span>
            </button>
          </div>

          {/* Conditional Protected Details Grid (Controlled strictly by showPrivateInformation) */}
          {showConfidential && (
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-4 text-xs text-slate-600 dark:text-slate-400">
                <strong className="font-semibold text-slate-900 dark:text-white">Note to HR &amp; Hiring Executives:</strong> Full statutory background records (including National ID card copy, attested educational certificates, and employment release certificates) are provided upon formal background check request.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-850">
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">National ID (NID):</span>
                  <span className="font-mono font-medium text-slate-800 dark:text-slate-200">{CONFIDENTIAL_INFO.nationalId}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-850">
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Blood Group:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{CONFIDENTIAL_INFO.bloodGroup}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-850">
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Date of Birth:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{CONFIDENTIAL_INFO.dateOfBirth}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-850">
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Father's Name:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{CONFIDENTIAL_INFO.fatherName}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-850">
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Mother's Name:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{CONFIDENTIAL_INFO.motherName}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-100/70 dark:bg-slate-850">
                  <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Marital Status / Religion:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">{CONFIDENTIAL_INFO.maritalStatus}</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
