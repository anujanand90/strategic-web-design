import React from 'react';
import { useLanguage } from './LanguageContext';
import { usePackage } from './PackageContext';
import { Reveal } from './Reveal';

const PackageCard: React.FC<{ 
  id: 'starter' | 'growth' | 'scale';
  title: string; 
  tagline: string;
  who: string;
  setupPrice: string; 
  monthlyPrice: string;
  features: string[]; 
  isFeatured?: boolean;
  delay?: number;
}> = ({ id, title, tagline, who, setupPrice, monthlyPrice, features, isFeatured, delay }) => {
  const { t } = useLanguage();
  const { setSelectedPackage } = usePackage();

  const handleStart = () => {
    setSelectedPackage(id);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Reveal delay={delay}>
      <div className={`relative group p-8 rounded-3xl border flex flex-col transition-all hover:-translate-y-2 ${isFeatured ? 'bg-zinc-900 border-brand-accent ring-1 ring-brand-accent/50 shadow-2xl shadow-brand-accent/5 scale-105' : 'bg-zinc-950 border-white/5'}`}>
        {isFeatured && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full bg-zinc-950 border border-[#007DBC]/40 text-[#007DBC] backdrop-blur z-20 whitespace-nowrap">
            {t('language') === 'it' ? 'Più Popolare' : 'Most Popular'}
          </span>
        )}
        
        {/* Dedicated overflow-hidden container for glow effects to allow border-overlapping elements */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
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
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-accent transition-colors duration-300">{title}</h3>
          <p className="text-[10px] font-mono text-brand-accent/80 uppercase tracking-widest mb-6">
            {who}
          </p>
          
          <div className="space-y-4 mb-10">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">{t('services.setupFee')}</span>
              <span className="text-4xl font-bold text-white">{setupPrice}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">{t('services.monthlyFee')}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">{monthlyPrice}</span>
                <span className="text-zinc-500 font-mono text-xs">/ {t('language') === 'it' ? 'mese' : 'month'}</span>
              </div>
            </div>
            
            <p className="text-sm text-zinc-400 font-light leading-relaxed pt-2">
              {tagline}
            </p>
          </div>
          
          <ul className="space-y-4 mb-10 flex-grow border-t border-white/5 pt-8">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm leading-snug">
                <svg className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          
          <div className="space-y-4">
            <button 
              onClick={handleStart}
              className={`w-full py-4 rounded-xl font-bold transition-all transform active:scale-95 ${isFeatured ? 'bg-brand-accent text-white hover:bg-brand-hover shadow-xl shadow-brand-accent/20' : 'bg-white text-black hover:bg-zinc-200'}`}
            >
              {t('language') === 'it' ? `Scegli ${title.split(' – ')[1]}` : `Choose ${title.split(' – ')[1]}`}
            </button>

            <div className="space-y-1.5 pt-4">
              {t('services.footerLines').map((line: string, i: number) => (
                <p key={i} className="text-[9px] text-zinc-600 font-mono uppercase tracking-widest text-center">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-32 px-6 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block font-bold">{t('services.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">{t('services.headline')}</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">{t('services.sub')}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PackageCard 
            id="starter"
            title={t('services.starter.title')}
            tagline={t('services.starter.tagline')}
            who={t('services.starter.who')}
            setupPrice={t('services.starter.setup')}
            monthlyPrice={t('services.starter.monthly')}
            features={t('services.starter.features')}
            delay={0.1}
          />
          <PackageCard 
            id="growth"
            isFeatured
            title={t('services.growth.title')}
            tagline={t('services.growth.tagline')}
            who={t('services.growth.who')}
            setupPrice={t('services.growth.setup')}
            monthlyPrice={t('services.growth.monthly')}
            features={t('services.growth.features')}
            delay={0.2}
          />
          <PackageCard 
            id="scale"
            title={t('services.scale.title')}
            tagline={t('services.scale.tagline')}
            who={t('services.scale.who')}
            setupPrice={t('services.scale.setup')}
            monthlyPrice={t('services.scale.monthly')}
            features={t('services.scale.features')}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};