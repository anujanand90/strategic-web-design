import React from 'react';
import { useLanguage } from './LanguageContext';
import { Reveal } from './Reveal';

const Achievement: React.FC<{ metric: string; label: string; detail: string; delay?: number }> = ({ metric, label, detail, delay }) => (
  <Reveal delay={delay}>
    <div className="relative overflow-hidden group p-8 bg-zinc-900/30 border border-white/5 rounded-3xl transition-all hover:border-brand-accent/30 hover:-translate-y-1">
      {/* Layer A - Soft radial spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: "radial-gradient(600px circle at 50% 45%, rgba(0,125,188,0.14) 0%, rgba(0,125,188,0.08) 35%, rgba(0,125,188,0) 70%)"
        }}
      />
      {/* Layer B - Very soft bloom */}
      <div
        className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl z-0"
        style={{
          background: "radial-gradient(700px circle at 50% 50%, rgba(0,125,188,0.12) 0%, rgba(0,125,188,0) 65%)"
        }}
      />
      <div className="relative z-10">
        <div className="text-4xl font-display font-black text-brand-accent mb-2 group-hover:scale-110 transition-transform origin-left">
          {metric}
        </div>
        <div className="text-white font-bold text-lg mb-2 group-hover:text-brand-accent transition-colors duration-300">{label}</div>
        <p className="text-zinc-500 text-sm leading-relaxed">{detail}</p>
      </div>
    </div>
  </Reveal>
);

export const Experience: React.FC = () => {
  const { t, language } = useLanguage();

  const renderHeadline = () => {
    const text = t('experience.headline');
    const keyword = language === 'it' ? 'basi' : 'foundation';

    if (!text.includes(keyword)) return text;

    const parts = text.split(keyword);
    return (
      <>
        {parts[0]}
        <span className="text-brand-accent relative group cursor-default">
          {keyword}
          <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-brand-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section id="experience" className="py-40 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-brand-accent/5 blur-[150px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6 block font-bold">
              {t('experience.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mx-auto max-w-4xl">
              {renderHeadline()}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Achievement 
            metric={t('experience.card1.val')} 
            label={t('experience.card1.title')} 
            detail={t('experience.card1.desc')} 
            delay={0.1}
          />
          <Achievement 
            metric={t('experience.card2.val')} 
            label={t('experience.card2.title')} 
            detail={t('experience.card2.desc')} 
            delay={0.2}
          />
          <Achievement 
            metric={t('experience.card3.val')} 
            label={t('experience.card3.title')} 
            detail={t('experience.card3.desc')} 
            delay={0.3}
          />
          <Achievement 
            metric={t('experience.card4.val')} 
            label={t('experience.card4.title')} 
            detail={t('experience.card4.desc')} 
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};