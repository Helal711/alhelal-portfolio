import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config';
import { Download, Moon, Sun, Menu, X, Printer, Shield, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenPhotoPreview: () => void;
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenPhotoPreview,
  onPrint
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'expertise', 'skills', 'education', 'training', 'projects', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Training', href: '#training', id: 'training' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single Element in Display Face) */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-slate-900 dark:text-white transition-opacity hover:opacity-90"
          aria-label="Md. Al Helal Sarkar Home"
        >
          <div
            className="rounded-full overflow-hidden border-2 border-emerald-500 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-400 shrink-0 bg-slate-900"
            style={{ width: '2.25rem', height: '2.25rem', minWidth: '2.25rem', minHeight: '2.25rem', maxWidth: '2.25rem', maxHeight: '2.25rem' }}
          >
            <img
              src={SITE_CONFIG.profileImage}
              alt="Md. Al Helal Sarkar"
              width={36}
              height={36}
              referrerPolicy="no-referrer"
              style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', display: 'block' }}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight leading-none text-slate-900 dark:text-white">
              MD. AL HELAL SARKAR
            </span>
            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 tracking-wide mt-0.5">
              Administration & Operations
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Clean Text with Active/Hover Indicators) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative py-1 transition-colors hover:text-slate-900 dark:hover:text-white ${
                activeSection === link.id
                  ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                  : ''
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Print Portfolio Button */}
          <button
            onClick={onPrint}
            title="Print Executive CV Portfolio"
            aria-label="Print Executive CV"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Color Theme"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Download CV Button */}
          <a
            href={SITE_CONFIG.cvFile}
            download="Md_Al_Helal_Sarkar_CV.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 dark:hover:bg-emerald-500 rounded-lg transition-all shadow-sm active:scale-95 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-900/98 px-6 pt-4 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 px-3 rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <a
                href={SITE_CONFIG.cvFile}
                download="Md_Al_Helal_Sarkar_CV.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 dark:bg-emerald-600 hover:bg-slate-800 rounded-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPhotoPreview();
                }}
                className="w-full text-center text-xs text-slate-500 dark:text-slate-400 py-1.5 hover:underline"
              >
                Photo Preview Utility
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
