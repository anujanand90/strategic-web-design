
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessForm } from './components/BusinessForm';
import { About } from './components/About';
import { ProblemSolution } from './components/ProblemSolution';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CustomCursor } from './components/CustomCursor';
import { useLanguage } from './components/LanguageContext';

export const LandingPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen font-sans bg-[#050505] text-zinc-200 selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <BackgroundEffects />
      <CustomCursor />
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main>
          {/* Section 1: Hero */}
          <Hero />
          
          {/* Section 2: Meet Anuj */}
          <About />

          {/* Section 3: Problem / Pain Points */}
          <ProblemSolution />

          {/* Section 4: Services & Pricing */}
          <Services />

          {/* Section 5: Process */}
          <Process />

          {/* Section 6: Lead Magnet / Strategy Generator */}
          <section id="strategy" className="py-40 px-6 relative">
             <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="text-brand-accent font-mono text-sm tracking-[0.3em] uppercase mb-6 block font-bold">Free Roadmap</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white leading-tight">
                {t('form.headline')}
              </h2>
            </div>
            <BusinessForm />
          </section>

          {/* Section 7: FAQ */}
          <FAQ />
          
          {/* Section 8: Final CTA */}
          <FinalCTA />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};
