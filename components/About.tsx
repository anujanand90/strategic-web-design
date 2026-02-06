import React from 'react';
import { useLanguage } from './LanguageContext';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  const { t, language } = useLanguage();

  const renderHeadline = () => {
    const text = t('about.headline');
    const keyword = language === 'it' ? 'chiaro' : 'clearly';

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
    <section id="about" className="py-40 px-6 relative overflow-hidden bg-zinc-950/20">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-accent to-brand-hover rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-1000"></div>
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-brand-accent/30 group-hover:-translate-y-1">
              <img 
                src="https://i.ibb.co/6Rj0qzVH/IMG-7799-6-1.jpg" 
                alt="Anuj Anand" 
                className="w-full h-full object-cover object-[50%_5%] grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <span className="text-white font-display font-bold text-2xl tracking-tight">Anuj Anand</span>
                <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest mt-1">Founder & Strategist</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.2}>
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6 block font-bold">{t('about.badge')}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-10 leading-[1.15]">
              {renderHeadline()}
            </h2>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="space-y-8 text-zinc-400 text-lg leading-relaxed font-light">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="mt-12 space-y-4">
              {[t('about.bullet1'), t('about.bullet2'), t('about.bullet3')].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(0,125,188,0.5)]" />
                  {bullet}
                </div>
              ))}
            </div>
          </Reveal>
          
          <Reveal delay={0.5}>
            <div className="mt-16">
              <a 
                href="mailto:anujanand9@gmail.com" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all transform hover:-translate-y-0.5"
              >
                {t('common.contactMe')}
                <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};