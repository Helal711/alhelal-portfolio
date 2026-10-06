import React from 'react';
import { X, Download, Printer, CheckCircle2, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrint: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onPrint }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-extrabold text-xs">
              CV
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-none">
                Official Curriculum Vitae · 5 Pages
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                Md. Al Helal Sarkar — Administration &amp; Operations Professional
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 rounded-lg transition-colors shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print CV</span>
            </button>

            <a
              href={SITE_CONFIG.cvFile}
              download="Md_Al_Helal_Sarkar_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body: Authentic 5-Page CV Representation */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10 text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
          
          {/* Header Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-emerald-50/20 dark:from-slate-850 dark:to-emerald-950/20 border border-slate-200 dark:border-slate-800 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Md. Al Helal Sarkar
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Present Address: Mij Miji Poschimpara, Amzad Market, Siddirganj, Narayanganj 1430
            </p>
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-mono mt-1">
              01717 845557 | alhelal711@outlook.com ; alhelal711@gmail.com
            </p>
          </div>

          {/* Section: Objective */}
          <div>
            <div className="inline-block px-3 py-1 rounded bg-sky-600 text-white font-bold text-xs uppercase tracking-wider mb-2">
              Objective
            </div>
            <p className="text-justify text-slate-600 dark:text-slate-300">
              To obtain a challenging position that offers development for a career in various sectors of education innovation or in the strategic level of an organization where I can use my potentials with ultimate competence and aptitude, which will ultimately maximize the value of organization as well as enhance my working efficiency and personal development.
            </p>
          </div>

          {/* Section: Career Summary */}
          <div>
            <div className="inline-block px-3 py-1 rounded bg-sky-600 text-white font-bold text-xs uppercase tracking-wider mb-2">
              Career Summary
            </div>
            <p className="text-justify text-slate-600 dark:text-slate-300">
              I have previously worked as a data entry operator. From there I learned how to entry and process ERP software Oracle. I worked in the HR section for one year recruiting manpower there and doing it every day in payroll software. Now in my work compliance I see keeping the factory floors away from various risks. Make everyone aware of Labor Law and see if the company pays its dues properly. And design the company`s evacuation plant and company logo with graphic design. Typing speed Bangla 25 and English 35 word per minute.
            </p>
          </div>

          {/* Section: Special Qualification */}
          <div>
            <div className="inline-block px-3 py-1 rounded bg-sky-600 text-white font-bold text-xs uppercase tracking-wider mb-2">
              Special Qualification
            </div>
            <p className="font-semibold text-slate-900 dark:text-white">
              Graphic Design
            </p>
          </div>

          {/* Section: Experience */}
          <div>
            <div className="inline-block px-3 py-1 rounded bg-sky-600 text-white font-bold text-xs uppercase tracking-wider mb-2">
              Experience / Employment History
            </div>
            <div className="text-xs font-bold text-slate-500 mb-4">
              Total Year of Experience: 9.4 yrs
            </div>

            <div className="space-y-6">
              {/* KiDO */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-sm text-slate-900 dark:text-white mb-1">
                  <span>• KiDO BD CO., LTD / KiDO Dhaka Co. Limited</span>
                  <span className="text-slate-500 font-normal text-xs">(7 Oct 2023 - Continuing)</span>
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-3">
                  Senior Officer – Administration
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                  <li><strong>&gt; Facilities &amp; Technical Maintenance:</strong> Direct comprehensive facility operations, ensuring high standards in daily housekeeping and gardening/landscaping. Oversee a diverse technical team responsible for electrical systems, AC maintenance, carpentry, masonry, plumbing, welding, and painting repairs to maintain a safe, highly functional work environment.</li>
                  <li><strong>&gt; Construction &amp; Renovation Supervision:</strong> Actively monitor and manage end-to-end site construction and facility renovation projects, ensuring all physical upgrades and structural work are completed efficiently, safely, and in alignment with company timelines.</li>
                  <li><strong>&gt; Asset Management &amp; Local Procurement:</strong> Manage the complete lifecycle of corporate furniture and facility assets, including meticulous inventory tracking. Independently execute local purchasing for general office supplies and maintenance materials, and efficiently manage the wastage store to ensure proper disposal or repurposing of materials.</li>
                  <li><strong>&gt; Performance Reporting &amp; Documentation:</strong> Track departmental workflows and compile detailed weekly and monthly administrative reports, providing actionable insights on facility operations, maintenance expenses, and project statuses to senior management.</li>
                  <li><strong>&gt; Executive Coordination:</strong> Serve as the primary liaison and central coordinator for the Head of Administration, facilitating cross-departmental communication, streamlining daily administrative workflows, and assisting in broader operational planning.</li>
                </ul>
              </div>

              {/* Ha-Meem */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-sm text-slate-900 dark:text-white mb-1">
                  <span>• Ha-Meem Denim Ltd.</span>
                  <span className="text-slate-500 font-normal text-xs">(06 September 2020 - 06 October 2023)</span>
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-3">
                  Assistant Officer - Compliance
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <li>&gt; To prepare evacuation plan, awareness poster, videos on Environment and Social compliance requirement.</li>
                  <li>&gt; To work on company brochure, product labelling tag and other related photos/ poster.</li>
                  <li>&gt; To assist on meeting and training program arrangement.</li>
                  <li>&gt; To assist during buyers’ compliance audit and visit.</li>
                  <li>&gt; To assist in preparation of Corrective Action Plan (CAP) based on audit report of buyers’ compliance audit.</li>
                  <li>&gt; To conduct internal audit at regular basis and to ensure effective monitoring and follow up system and report to management time to time on progress of each work.</li>
                  <li>&gt; To assist in compliance related document preparation.</li>
                  <li>&gt; To communicate with production department head or in-charge assigned by Supervisor.</li>
                  <li>&gt; To work on awareness poster display, MSDS display.</li>
                  <li>&gt; To perform other duties as assigned by Management. (Additional: Co-Ordinator GM Admin)</li>
                </ul>
              </div>

              {/* Zaber */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-sm text-slate-900 dark:text-white mb-1">
                  <span>• Zaber Spinning Mills</span>
                  <span className="text-slate-500 font-normal text-xs">(August 2018 - September 2020)</span>
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-2">
                  Data Entry Operator &amp; Office Management
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Using Oracle ERP Software · Create Monthly Work Schedule · Entry Daily Job Order · Entry Daily Move Order · Entry Daily Work Order · Updated Documents · Yearly Tools Inventory
                </p>
              </div>

              {/* Advance Design */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-sm text-slate-900 dark:text-white mb-1">
                  <span>• Advance Design &amp; Technology</span>
                  <span className="text-slate-500 font-normal text-xs">(June 2017 - July 2018)</span>
                </div>
                <div className="text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-1">
                  Data Entry Operator
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Entry Daily Production Data
                </p>
              </div>
            </div>
          </div>

          {/* Academic Qualifications */}
          <div>
            <div className="inline-block px-3 py-1 rounded bg-sky-600 text-white font-bold text-xs uppercase tracking-wider mb-3">
              Academic Qualification
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <strong className="block text-slate-900 dark:text-white">Pundra University</strong>
                <span className="text-xs text-slate-500">BSc in Computer Science Eng. (2022)</span>
                <span className="text-xs font-semibold text-emerald-600 block mt-1">GPA 3.19 / 4.00</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <strong className="block text-slate-900 dark:text-white">Palashbari Polytechnic</strong>
                <span className="text-xs text-slate-500">Diploma in CSE (2016)</span>
                <span className="text-xs font-semibold text-emerald-600 block mt-1">GPA 3.16 / 4.00</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                <strong className="block text-slate-900 dark:text-white">Faridpur BL High School</strong>
                <span className="text-xs text-slate-500">SSC Secondary (2012)</span>
                <span className="text-xs font-semibold text-emerald-600 block mt-1">GPA 4.50 / 5.00</span>
              </div>
            </div>
          </div>

          {/* Personal Details & References */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">Personal Details</h4>
              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p><strong>Father's Name:</strong> Md. Shaidur Rahaman</p>
                <p><strong>Mother's Name:</strong> Most. Helana Begum</p>
                <p><strong>Permanent Address:</strong> Vill: Chandkarim, Post: Ghagerbazar, P/S: Shadullapur, Dist: Gaibandha</p>
                <p><strong>NID:</strong> 8227504480 · <strong>Blood Group:</strong> O (+ve) · <strong>Marital Status:</strong> Married</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">References</h4>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <p><strong>01. Flt Lt Zevin Hasan Akash (Retd):</strong> Head of Administration, KiDO BD Co., Ltd (01781-557981, akash@kido.co.kr)</p>
                <p><strong>02. Saifur Rahman:</strong> Senior Manager, DBL Group (01608-871581, saifur-rahman@dbl-group.com)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500">
            5 Pages · Verified Official Document
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Close
            </button>
            <a
              href={SITE_CONFIG.cvFile}
              download="Md_Al_Helal_Sarkar_CV.pdf"
              className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 rounded-lg shadow-sm"
            >
              Download PDF File
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
