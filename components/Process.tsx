import React from 'react';
import { useLanguage } from './LanguageContext';
import { Reveal } from './Reveal';

const Step: React.FC<{ num: string; title: string; desc: string; delay?: number }> = ({ num, title, desc, delay }) => (
  <Reveal delay={delay}>
    <div className="relative flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-2xl font-bold text-white mb-6 group-hover:border-brand-accent/50 group-hover:text-brand-accent transition-all">
        {num}
      </div>
      <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </Reveal>
);

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-32 px-6 border-y border-white/5 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block">{t('process.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">{t('process.headline')}</h2>
          </Reveal>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
          
          <Step 
            num="01"
            title={t('process.step1.title')}
            desc={t('process.step1.desc')}
            delay={0.1}
          />
          <Step 
            num="02"
            title={t('process.step2.title')}
            desc={t('process.step2.desc')}
            delay={0.2}
          />
          <Step 
            num="03"
            title={t('process.step3.title')}
            desc={t('process.step3.desc')}
            delay={0.3}
          />
          <Step 
            num="04"
            title={t('process.step4.title')}
            desc={t('process.step4.desc')}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};