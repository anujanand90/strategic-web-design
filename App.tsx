import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueDetailed } from './components/ValueDetailed';
import { Proof } from './components/Proof';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CustomCursor } from './components/CustomCursor';
import { ProblemSolution } from './components/ProblemSolution';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { PackageProvider } from './components/PackageContext';

const BackToTop: React.FC = () => {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-[100] p-4 bg-brand-accent text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-fade-in group"
      aria-label={t('common.backToTop')}
    >
      <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

const LandingPageContent: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-accent/30 selection:text-white bg-[#050505] text-zinc-200">
      <BackgroundEffects />
      <CustomCursor />
      <BackToTop />
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main>
          {/* Section 1: Hero - Hook and Main Outcome */}
          <Hero />
          
          {/* Section 2: Trust - Meet Anuj */}
          <About />

          {/* Section 3: Performance & CV Highlights */}
          <Experience />

          {/* Section 4: Value Prop - The Growth Engine Philosophy */}
          <ValueDetailed />

          {/* Section 5: Problem / Solution */}
          <ProblemSolution />

          {/* Section 6: The Build Process */}
          <Process />

          {/* Section 8: Packages & Transparent Pricing */}
          <Services />

          {/* Section 7: Contact & Booking */}
          <Contact />

          {/* Section 9: Proof - Testimonials & Success Stories */}
          <Proof />

          {/* Section 10: FAQ */}
          <FAQ />
          
          {/* Section 11: Final CTA */}
          <FinalCTA />
        </main>
        
        <footer className="py-12 text-center text-zinc-600 font-mono text-[10px] uppercase tracking-widest border-t border-white/5 bg-black">
          &copy; {new Date().getFullYear()} Anuj Anand. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <PackageProvider>
        <LandingPageContent />
      </PackageProvider>
    </LanguageProvider>
  );
};

export default App;