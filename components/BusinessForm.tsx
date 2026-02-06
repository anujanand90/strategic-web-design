import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { usePackage } from './PackageContext';

export const BusinessForm: React.FC = () => {
  const { t } = useLanguage();
  const { selectedPackage, setSelectedPackage } = usePackage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    sellingPoint: '',
    targetAudience: '',
    selectedPackage: selectedPackage || '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData(prev => ({ ...prev, selectedPackage: selectedPackage }));
  }, [selectedPackage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData();
    data.append('Business Name', formData.businessName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('Industry', formData.industry);
    data.append('Package Selected', formData.selectedPackage);
    data.append('Unique Selling Point', formData.sellingPoint);
    data.append('Target Audience', formData.targetAudience);

    try {
      const response = await fetch('https://formspree.io/f/mojlkzkb', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-zinc-900/40 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-2xl relative shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] -z-10" />
        
        {!submitted ? (
          <>
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">{t('form.businessName')}</label>
                  <input 
                    required
                    type="text" 
                    placeholder={t('form.placeholderName')}
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all placeholder:text-zinc-800"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">{t('form.emailLabel')}</label>
                  <input 
                    required
                    type="email" 
                    placeholder={t('form.emailPlaceholder')}
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all placeholder:text-zinc-800"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest pl-1">{t('form.emailHint')}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">{t('form.phoneLabel')}</label>
                  <input 
                    type="tel" 
                    placeholder={t('form.phonePlaceholder')}
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all placeholder:text-zinc-800"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest pl-1">{t('form.phoneHint')}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">{t('form.industry')}</label>
                  <input 
                    required
                    type="text" 
                    placeholder={t('form.placeholderIndustry')}
                    className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all placeholder:text-zinc-800"
                    value={formData.industry}
                    onChange={(e) => setFormData({...formData, industry: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">{t('form.packageLabel')}</label>
                <select 
                  required
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all appearance-none cursor-pointer"
                  value={formData.selectedPackage}
                  onChange={(e) => {
                    setFormData({...formData, selectedPackage: e.target.value});
                    setSelectedPackage(e.target.value as any);
                  }}
                >
                  <option value="" disabled className="bg-zinc-900">{t('form.packagePlaceholder')}</option>
                  <option value="starter" className="bg-zinc-900">{t('form.packageStarter')}</option>
                  <option value="growth" className="bg-zinc-900">{t('form.packageGrowth')}</option>
                  <option value="scale" className="bg-zinc-900">{t('form.packageScale')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">{t('form.sellingPoint')}</label>
                <textarea 
                  required
                  rows={3}
                  placeholder={t('form.placeholderUSP')}
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all placeholder:text-zinc-800"
                  value={formData.sellingPoint}
                  onChange={(e) => setFormData({...formData, sellingPoint: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">{t('form.targetAudience')}</label>
                <input 
                  required
                  type="text" 
                  placeholder={t('form.placeholderAudience')}
                  className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all placeholder:text-zinc-800"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm font-medium animate-pulse">{error}</p>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="group relative w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007DBC] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    {t('form.loading')}
                  </>
                ) : (
                  <>
                    {t('form.cta')}
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-12 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-6 text-[10px] font-mono uppercase tracking-[0.1em] text-zinc-500">
              <span>{t('form.nextSteps.step1')}</span>
              <span className="opacity-40">{t('form.nextSteps.step2')}</span>
              <span className="opacity-40">{t('form.nextSteps.step3')}</span>
            </div>
          </>
        ) : (
          <div className="animate-fade-in text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center border border-brand-accent/20">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">{t('form.successTitle')}</h3>
              </div>
            </div>
            
            <div className="bg-black/60 p-8 rounded-3xl border border-white/5 mb-10 shadow-inner">
              <p className="whitespace-pre-wrap text-zinc-200 font-light leading-relaxed text-lg">
                {t('form.successSub')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-brand-accent/5 border border-brand-accent/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-white font-medium text-center md:text-left">{t('form.ctaImplement')}</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a 
                    href="https://calendly.com/anujanand9/15-min-consultation" 
                    target="_blank" 
                    className="px-6 py-3 bg-brand-accent text-white font-bold rounded-xl hover:bg-brand-hover transition-all transform hover:-translate-y-0.5 shadow-xl shadow-brand-accent/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007DBC] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  >
                    {t('common.bookCall')}
                  </a>
                </div>
              </div>
              
              <button 
                onClick={() => setSubmitted(false)}
                className="w-full text-center text-xs text-zinc-600 hover:text-white transition-colors py-4 font-mono uppercase tracking-widest focus-visible:outline-none focus-visible:underline"
              >
                {t('form.retry')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};