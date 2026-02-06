import React from 'react';
import { useLanguage } from './LanguageContext';

const ValueCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="relative overflow-hidden group p-8 bg-zinc-900/20 border border-white/5 rounded-2xl hover:border-white/20 transition-all">
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
      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="relative inline-block text-xl font-bold text-white mb-4 leading-tight group-hover:text-brand-accent transition-colors duration-300">
        <span className="relative z-10">{title}</span>
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#007DBC] rounded-full transition-all duration-300 group-hover:w-10 group-hover:shadow-[0_0_12px_rgba(0,125,188,0.35)]" />
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed font-light">
        {desc}
      </p>
    </div>
  </div>
);

const CredibilityItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="relative overflow-hidden group flex items-center gap-4 p-6 bg-zinc-900/10 border border-white/5 rounded-2xl hover:border-brand-accent/30 transition-all duration-300">
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
    <div className="relative z-10 flex items-center gap-4">
      <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(0,125,188,0.4)] flex-shrink-0" />
      <span className="text-zinc-300 text-sm font-medium leading-tight group-hover:text-brand-accent transition-colors duration-300">{text}</span>
    </div>
  </div>
);

export const Proof: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="proof" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Credibility Strip Section */}
        <div className="mb-40">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block font-bold">{t('proof.credibilityHeadline')}</span>
            <p className="text-zinc-400 max-w-xl mx-auto">{t('proof.credibilitySub')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CredibilityItem text={t('proof.credB1')} />
            <CredibilityItem text={t('proof.credB2')} />
            <CredibilityItem text={t('proof.credB3')} />
            <CredibilityItem text={t('proof.credB4')} />
          </div>
        </div>

        {/* What Working With Me Feels Like */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block font-bold">{t('proof.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">{t('proof.headline')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
              title={t('proof.card1.title')}
              desc={t('proof.card1.desc')}
            />
            <ValueCard 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
              title={t('proof.card2.title')}
              desc={t('proof.card2.desc')}
            />
            <ValueCard 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title={t('proof.card3.title')}
              desc={t('proof.card3.desc')}
            />
          </div>
        </div>

        {/* Who This Is For Section (Qualify) */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-center mb-20">
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block font-bold">{t('qualify.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">{t('qualify.headline')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
              title={t('qualify.card1.title')}
              desc={t('qualify.card1.desc')}
            />
            <ValueCard 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title={t('qualify.card2.title')}
              desc={t('qualify.card2.desc')}
            />
            <ValueCard 
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
              title={t('qualify.card3.title')}
              desc={t('qualify.card3.desc')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};