import React from 'react';
import { useLanguage } from './LanguageContext';
import { Reveal } from './Reveal';

const problemIcons: Record<string, React.ReactNode> = {
  p1: (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  p2: (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  p3: (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
    </svg>
  ),
  p4: (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-12.728 12.728" />
    </svg>
  ),
  p5: (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
};

const solutionIcons: Record<string, React.ReactNode> = {
  s1: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  s2: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  ),
  s3: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
  ),
  s4: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  s5: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" strokeWidth={2} />
      <circle cx="12" cy="12" r="6" strokeWidth={2} />
      <circle cx="12" cy="12" r="9" strokeWidth={2} />
    </svg>
  ),
  s6: (
    <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export const ProblemSolution: React.FC = () => {
  const { t, language } = useLanguage();

  const renderSolutionHeadline = () => {
    const text = t('solution.headline');
    const keyword = language === 'it' ? 'approccio' : 'approach';

    if (!text.includes(keyword)) return text;

    const parts = text.split(keyword);
    return (
      <>
        {parts[0]}
        <span className="text-brand-accent relative group cursor-default">
          {keyword}
          <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-accent rounded-full transition-all duration-300 group-hover:w-full" />
        </span>
        {parts[1]}
      </>
    );
  };

  const getProblemParts = (key: string) => {
    const fullText = t(`problem.${key}`);
    const parts = fullText.split(': ');
    return {
      title: parts[0],
      desc: parts.slice(1).join(': ')
    };
  };

  return (
    <section id="problem-solution" className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Problem Section */}
        <div className="mb-32">
          <Reveal>
            <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-6 block font-bold text-center">{t('problem.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center">{t('problem.headline')}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['p1', 'p2', 'p3', 'p4', 'p5'].map((key, i) => {
              const { title, desc } = getProblemParts(key);
              return (
                <Reveal key={key} delay={i * 0.1}>
                  <div className="group relative overflow-hidden p-10 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] hover:border-red-500/20 hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute inset-0 bg-red-500/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                      {problemIcons[key]}
                    </div>
                    <h4 className="relative inline-block text-xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                      <span className="relative z-10">{title}</span>
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 rounded-full transition-all duration-300 group-hover:w-8 group-hover:shadow-[0_0_12px_rgba(239,68,68,0.35)]" />
                    </h4>
                    <p className="text-zinc-500 text-sm leading-relaxed transition-colors group-hover:text-zinc-400">{desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <Reveal>
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-6 block font-bold text-center">{t('solution.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 text-center">{renderSolutionHeadline()}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['s1', 's2', 's3', 's4', 's5', 's6'].map((key, i) => (
              <Reveal key={key} delay={i * 0.1}>
                <div className="relative overflow-hidden group p-10 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] hover:border-brand-accent/30 hover:-translate-y-1 transition-all duration-300">
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
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                      {solutionIcons[key]}
                    </div>
                    <h4 className="relative inline-block text-xl font-bold text-white mb-4 group-hover:text-[#007DBC] transition-colors duration-300">
                      <span className="relative z-10">{t(`solution.${key}.title`)}</span>
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#007DBC] rounded-full transition-all duration-300 group-hover:w-8 group-hover:shadow-[0_0_12px_rgba(0,125,188,0.35)]" />
                    </h4>
                    <p className="text-zinc-500 text-sm leading-relaxed transition-colors group-hover:text-zinc-400">{t(`solution.${key}.desc`)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};