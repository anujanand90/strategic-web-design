import React from 'react';
import { useLanguage } from './LanguageContext';

const Card: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="relative overflow-hidden group p-8 bg-zinc-900/40 border border-white/10 rounded-2xl transition-all duration-300 hover:border-brand-accent/30 hover:-translate-y-1">
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
      <div className="w-12 h-12 mb-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="relative inline-block text-xl font-display font-bold mb-4 text-white group-hover:text-[#007DBC] transition-colors duration-300">
        <span className="relative z-10">{title}</span>
        <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#007DBC] rounded-full transition-all duration-300 group-hover:w-10 group-hover:shadow-[0_0_12px_rgba(0,125,188,0.35)]" />
      </h3>
      <p className="text-zinc-400 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  </div>
);

export const ValueDetailed: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="value-cards" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            icon="🎯"
            title={t('value.card1.title')}
            desc={t('value.card1.desc')}
          />
          <Card 
            icon="⚡"
            title={t('value.card2.title')}
            desc={t('value.card2.desc')}
          />
          <Card 
            icon="🤖"
            title={t('value.card3.title')}
            desc={t('value.card3.desc')}
          />
        </div>
      </div>
    </section>
  );
};