import React from 'react';
import { useLanguage } from './LanguageContext';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  const handleScrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('process');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderHeadline = () => {
    const text = t('hero.headline');
    const keyword = language === 'it' ? 'clienti' : 'customers';

    if (!text.includes(keyword)) return text;

    const parts = text.split(keyword);
    return (
      <>
        {parts[0]}
        <span className="relative inline-block text-[#007DBC] group cursor-default">
          <span className="relative z-10 transition-all duration-300" style={{ textShadow: '0 0 12px rgba(0,125,188,0.2)' }}>{keyword}</span>
          <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[3px] bg-[#007DBC] rounded-full scale-x-100 origin-left transition-transform duration-500" />
          <span className="absolute inset-0 bg-[#007DBC]/10 blur-2xl -z-10 scale-150 pointer-events-none" />
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-[95vh] flex flex-col items-center justify-center bg-[#050505]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[40rem] bg-brand-accent/10 blur-[160px] -z-10 rounded-full opacity-60" />
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-brand-accent/5 blur-[120px] -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-hover opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            {t('hero.badge')}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tight mb-8 leading-[1.05] text-white">
            {renderHeadline()}
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-4 font-light leading-relaxed">
            {t('hero.subheadline')}
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-sm text-zinc-500 mb-14 font-mono uppercase tracking-[0.1em] opacity-60">
            {t('hero.trustLine')}
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <a 
              href="https://calendly.com/anujanand9/15-min-consultation" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-brand-accent text-white font-bold rounded-2xl hover:bg-brand-hover transition-all transform hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 text-center"
            >
              {t('hero.ctaPrimary')}
            </a>
            <button 
              type="button"
              onClick={handleScrollToProcess}
              className="w-full sm:w-auto px-10 py-5 bg-zinc-900/50 text-white border border-white/10 font-bold rounded-2xl hover:bg-zinc-800 hover:border-brand-accent transition-all transform hover:-translate-y-0.5 active:scale-95 text-center backdrop-blur-sm cursor-pointer"
            >
              {t('hero.ctaHowItWorks')}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em]">
            <span className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(0,125,188,0.5)]" />
              {t('hero.benefit1')}
            </span>
            <span className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(0,125,188,0.5)]" />
              {t('hero.benefit2')}
            </span>
            <span className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(0,125,188,0.5)]" />
              {t('hero.benefit3')}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};