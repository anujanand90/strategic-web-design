import React from 'react';
import { useLanguage } from './LanguageContext';
import { BusinessForm } from './BusinessForm';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-accent font-mono text-sm tracking-[0.3em] uppercase mb-8 block font-bold">Contact</span>
          
          {/* Objection Handler Box */}
          <div className="max-w-xl mx-auto mb-16 p-8 bg-zinc-900/30 border border-brand-accent/10 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent/40 group-hover:bg-brand-accent transition-colors" />
            <p className="text-zinc-300 font-medium leading-relaxed">
              {t('form.objectionHandler')}
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white leading-tight">
            {t('form.headline')}
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {t('form.sub')}
          </p>
        </div>

        <BusinessForm />

        <div className="mt-20 text-center">
          <p className="text-zinc-500 text-sm mb-6 font-light">{t('form.ctaImplement')}</p>
          <a 
            href="https://calendly.com/anujanand9/15-min-consultation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-accent transition-colors underline decoration-brand-light/30 underline-offset-8"
          >
            {t('common.bookCall')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};