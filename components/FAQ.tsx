import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-brand-accent'}`}>
          {question}
        </span>
        <svg 
          className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-accent' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-zinc-500 leading-relaxed font-light">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4 block">{t('faq.badge')}</span>
          <h2 className="text-4xl font-display font-bold text-white">{t('faq.headline')}</h2>
        </div>
        
        <div className="space-y-2">
          <AccordionItem 
            question={t('faq.q1.q')} 
            answer={t('faq.q1.a')}
          />
          <AccordionItem 
            question={t('faq.q2.q')} 
            answer={t('faq.q2.a')}
          />
          <AccordionItem 
            question={t('faq.q3.q')} 
            answer={t('faq.q3.a')}
          />
          <AccordionItem 
            question={t('faq.q4.q')} 
            answer={t('faq.q4.a')}
          />
          <AccordionItem 
            question={t('faq.q5.q')} 
            answer={t('faq.q5.a')}
          />
          <AccordionItem 
            question={t('faq.q6.q')} 
            answer={t('faq.q6.a')}
          />
        </div>
      </div>
    </section>
  );
};