
import React from 'react';
import { useLanguage } from './LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold tracking-tight text-xl">ANUJ ANAND</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">{t('footer.note')}</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-600 mb-2">Connect</span>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">Twitter</a>
            <a href="mailto:contact@anujanand.com" className="text-zinc-400 hover:text-white transition-colors">Email</a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-600 mb-2">Location</span>
            <p className="text-zinc-400">Serving global SMBs</p>
            <p className="text-zinc-400 font-mono text-xs">EN / IT Optimized</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Anuj Anand. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] font-mono text-zinc-600 hover:text-white uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-[10px] font-mono text-zinc-600 hover:text-white uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
