import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroStats } from './components/HeroStats';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Expertise } from './components/Expertise';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Training } from './components/Training';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PhotoPreviewModal } from './components/PhotoPreviewModal';
import { CvModal } from './components/CvModal';

export default function App() {
  // Theme management with localStorage persistence and system fallback
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme_preference');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Modal States
  const [isPhotoPreviewOpen, setIsPhotoPreviewOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);

  // Sync dark mode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme_preference', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme_preference', 'light');
    }
  }, [darkMode]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Sticky Executive Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenPhotoPreview={() => setIsPhotoPreviewOpen(true)}
        onPrint={handlePrint}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        <Hero
          onOpenPhotoPreview={() => setIsPhotoPreviewOpen(true)}
          customPhotoUrl={customPhotoUrl}
        />
        <HeroStats />
        <About />
        <Experience />
        <Expertise />
        <Skills />
        <Education />
        <Training />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Executive Footer */}
      <Footer onPrint={handlePrint} />

      {/* Local Photo Preview Modal Tool */}
      <PhotoPreviewModal
        isOpen={isPhotoPreviewOpen}
        onClose={() => setIsPhotoPreviewOpen(false)}
        onPhotoSelected={(url) => setCustomPhotoUrl(url)}
        currentCustomPhoto={customPhotoUrl}
      />

      {/* Authentic 5-Page Official CV Modal Viewer */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        onPrint={handlePrint}
      />
    </div>
  );
}
