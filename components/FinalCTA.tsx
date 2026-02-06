import React from 'react';
import { useLanguage } from './LanguageContext';
import { Reveal } from './Reveal';

export const FinalCTA: React.FC = () => {
  const { t, language } = useLanguage();

  const renderHeadline = () => {
    const text = t('finalCta.headline');
    const keyword = language === 'it' ? 'richieste' : 'enquiries';

    if (!text.includes(keyword)) return text;

    const parts = text.split(keyword);
    return (
      <>
        {parts[0]}
        <span className="text-brand-accent relative group cursor-default">
          {keyword}
          <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-accent rounded-full transition-all duration-300 group-hover:w-full" />
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow - Blue Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-accent/20 blur-[150px] -z-10 rounded-full" />
      
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter">
            {renderHeadline()}
          </h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="text-xl text-zinc-400 mb-6 max-w-2xl mx-auto font-light leading-relaxed">
            {t('finalCta.subtext')}
          </p>
        </Reveal>

        {/* New Personal Line */}
        <Reveal delay={0.2}>
          <p className="text-zinc-500 text-sm mb-12 font-medium">
            {t('finalCta.personalLine')}
          </p>
        </Reveal>
        
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://calendly.com/anujanand9/15-min-consultation" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all text-center"
            >
              {t('finalCta.primary')}
            </a>
            <a 
              href="mailto:anujanand9@gmail.com" 
              className="px-10 py-5 bg-zinc-900 text-white border border-white/10 font-bold rounded-2xl hover:bg-zinc-800 transition-all flex items-center gap-3"
            >
              {t('finalCta.secondary')}
              <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </Reveal>
        
        <Reveal delay={0.4}>
          <p className="mt-6 text-zinc-500 font-sans text-sm italic">
            {t('finalCta.reassurance')}
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="mt-12 text-zinc-600 font-mono text-xs uppercase tracking-[0.3em]">
            {t('finalCta.availability')}
          </p>
        </Reveal>
      </div>
    </section>
  );
};