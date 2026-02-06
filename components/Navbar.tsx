import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

export const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const LanguageSwitcher = () => (
    <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
      <button 
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${language === 'en' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('it')}
        className={`px-3 py-1 text-[10px] font-bold rounded-full transition-all ${language === 'it' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
      >
        IT
      </button>
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 w-full z-[60] border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 group cursor-pointer" 
            onClick={() => {
              window.scrollTo({top: 0, behavior: 'smooth'});
              setIsMenuOpen(false);
            }}
          >
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-black font-bold text-xl">A</span>
            </div>
            <span className="font-display font-bold tracking-tight text-lg">ANUJ ANAND</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-white transition-colors">About</a>
            <a href="#experience" onClick={(e) => handleScroll(e, '#experience')} className="hover:text-white transition-colors">{t('nav.experience')}</a>
            <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-white transition-colors">{t('nav.services')}</a>
            <a href="#faq" onClick={(e) => handleScroll(e, '#faq')} className="hover:text-white transition-colors">{t('nav.faq')}</a>
            
            <LanguageSwitcher />

            <a 
              href="https://calendly.com/anujanand9/15-min-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95"
            >
              {t('nav.cta')}
            </a>
          </div>

          {/* Mobile Right Side */}
          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] bg-black/95 backdrop-blur-2xl md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-center p-6">
          <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="text-3xl font-display font-bold text-white hover:text-brand-accent transition-colors">About</a>
          <a href="#experience" onClick={(e) => handleScroll(e, '#experience')} className="text-3xl font-display font-bold text-white hover:text-brand-accent transition-colors">{t('nav.experience')}</a>
          <a href="#services" onClick={(e) => handleScroll(e, '#services')} className="text-3xl font-display font-bold text-white hover:text-brand-accent transition-colors">{t('nav.services')}</a>
          <a href="#faq" onClick={(e) => handleScroll(e, '#faq')} className="text-3xl font-display font-bold text-white hover:text-brand-accent transition-colors">{t('nav.faq')}</a>
          
          <a 
            href="https://calendly.com/anujanand9/15-min-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-4 bg-brand-accent text-white rounded-2xl font-bold text-xl shadow-2xl shadow-brand-accent/20 active:scale-95 transition-all"
          >
            {t('nav.cta')}
          </a>
        </div>
      </div>
    </>
  );
};