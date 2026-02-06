export type Language = 'en' | 'it';

export const translations = {
  en: {
    nav: {
      services: "Services",
      process: "Process",
      pricing: "Pricing",
      faq: "FAQ",
      cta: "Book a 15-min Call"
    },
    hero: {
      headline: "Websites that turn visitors into customers",
      subheadline: "AI-assisted, conversion-first websites for small businesses. Stop losing revenue to an outdated digital presence.",
      ctaPrimary: "Book a 15-min Call",
      ctaSecondary: "Email Me",
      benefit1: "Fast",
      benefit2: "Mobile-first",
      benefit3: "Lead capture"
    },
    about: {
      badge: "Meet Anuj",
      bio: "Hi, I’m Anuj. I help small businesses turn their websites into customer engines. With a background in strategic communication and digital storytelling, I design websites that don’t just look good — they convert.",
      bullet1: "10+ years strategic communication",
      bullet2: "Conversion-first architecture",
      bullet3: "AI-driven growth tools"
    },
    problem: {
      badge: "The Problem",
      headline: "Why most SMB websites fail",
      p1: "Slow loading speeds that drive customers away",
      p2: "Unclear messaging that confuses visitors",
      p3: "No clear Call to Action (CTA)",
      p4: "Poor mobile experience on smartphones",
      p5: "Not optimized for local search visibility"
    },
    solution: {
      badge: "The Solution",
      headline: "A different approach to web design",
      s1: { title: "Strategy", desc: "Data-driven roadmaps before the first pixel is drawn." },
      s2: { title: "Copy", desc: "Persuasive writing that speaks directly to your customers." },
      s3: { title: "UX", desc: "User experiences designed for effortless navigation." },
      s4: { title: "Performance", desc: "Lightning-fast builds that keep visitors on the page." },
      s5: { title: "Conversion-First Design", desc: "Your website isn’t just meant to look good — it’s built to turn visitors into real leads and customers through clear structure, strong calls-to-action, and smart user journeys." },
      s6: { title: "Local Visibility & SEO", desc: "I optimize your site to be found on Google by the people who matter most — the ones near you, ready to buy, and searching for your services right now." }
    },
    services: {
      starter: { title: "Starter", price: "€499", desc: "Best for new businesses", features: ["1-page site", "Lead form", "Basic analytics"] },
      growth: { title: "Growth", price: "€999", desc: "Best for growing SMBs", features: ["Multi-page site", "Local SEO structure", "Booking/Contact flow"] },
      scale: { title: "Scale", price: "€1499", desc: "Best for market leaders", features: ["Landing pages", "Conversion optimization", "Lead follow-up guide"] },
      cta: "Select {package}"
    },
    process: {
      badge: "Process",
      step1: { title: "Audit", desc: "Analyzing your market and current presence." },
      step2: { title: "Mockup", desc: "Strategic wireframes and messaging flow." },
      step3: { title: "Build", desc: "Development with a focus on speed." },
      step4: { title: "Launch", desc: "Optimization and go-live." }
    },
    form: {
      headline: "What happens next",
      sub: "Tell me what you do and what you want to achieve. I’ll reply within 24 hours with next steps.",
      businessName: "Business Name",
      industry: "Industry",
      sellingPoint: "Unique Selling Point",
      targetAudience: "Target Audience",
      cta: "Email Me",
      loading: "Sending...",
      bookCall: "Book a 15-min call",
      seePackages: "See packages"
    },
    faq: {
      q1: { q: "How long does it take?", a: "Most projects launch in 7-14 days." },
      q2: { q: "Who owns the site?", a: "You do. 100% ownership from day one." },
      q3: { q: "Can I edit it later?", a: "Yes, I build on platforms that are easy for you to manage." },
      q4: { q: "Is hosting included?", a: "I help you set up the best performant hosting for your needs." }
    },
    footer: {
      note: "Serving SMBs in English and Italian.",
      rights: "All rights reserved."
    }
  },
  it: {
    nav: {
      services: "Servizi",
      process: "Processo",
      pricing: "Prezzi",
      faq: "FAQ",
      cta: "Prenota una call di 15 min"
    },
    hero: {
      headline: "Siti web che trasformano i visitatori in clienti",
      subheadline: "Siti web basati sull'IA, orientati alla conversione per piccole imprese. Smetti di perdere fatturato con una presenza digitale datata.",
      ctaPrimary: "Prenota una call di 15 min",
      ctaSecondary: "Scrivimi via Email",
      benefit1: "Veloce",
      benefit2: "Mobile-first",
      benefit3: "Cattura lead"
    },
    about: {
      badge: "Incontra Anuj",
      bio: "Ciao, sono Anuj. Aiuto le piccole imprese a trasformare i loro siti web in motori di acquisizione clienti. Con un background in comunicazione strategica e storytelling digitale, progetto siti che non sono solo belli, ma che convertono.",
      bullet1: "Oltre 10 anni di comunicazione strategica",
      bullet2: "Architettura orientata alla conversione",
      bullet3: "Strumenti di crescita guidati dall'IA"
    },
    problem: {
      badge: "Il Problema",
      headline: "Perché i siti web delle PMI falliscono",
      p1: "Velocità di caricamento lente che allontanano i clienti",
      p2: "Messaggi poco chiari che confondono i visitatori",
      p3: "Mancanza di una chiara Call to Action (CTA)",
      p4: "Scarsa esperienza mobile sugli smartphone",
      p5: "Non ottimizzati per la visibilità nelle ricerche locali"
    },
    solution: {
      badge: "La Soluzione",
      headline: "Un approccio diverso al web design",
      s1: { title: "Strategia", desc: "Roadmap basate sui dati prima ancora di disegnare un singolo pixel." },
      s2: { title: "Copy", desc: "Scrittura persuasiva che parla direttamente ai tuoi clienti." },
      s3: { title: "UX", desc: "Esperienze utente progettate per una navigazione senza sforzo." },
      s4: { title: "Performance", desc: "Siti velocissimi che mantengono i visitatori sulla pagina." },
      s5: { title: "Design orientato alla conversione", desc: "Il tuo sito non serve solo a “fare bella figura”, ma a trasformare i visitatori in contatti e clienti reali, grazie a una struttura chiara, call-to-action efficaci e percorsi studiati." },
      s6: { title: "Visibilità locale e SEO", desc: "Ottimizzo il tuo sito per farti trovare su Google dalle persone giuste — quelle vicine a te, pronte ad acquistare e già in cerca dei tuoi servizi." }
    },
    services: {
      starter: { title: "Starter", price: "€499", desc: "Ideale per nuove attività", features: ["Sito a pagina singola", "Modulo lead", "Analytics di base"] },
      growth: { title: "Growth", price: "€999", desc: "Ideale per PMI in crescita", features: ["Sito multipagina", "Struttura SEO locale", "Sistema di prenotazione/contatto"] },
      scale: { title: "Scale", price: "€1499", desc: "Ideale per leader di mercato", features: ["Landing pages", "Ottimizzazione conversioni", "Guida follow-up lead"] },
      cta: "Seleziona {package}"
    },
    process: {
      badge: "Processo",
      step1: { title: "Audit", desc: "Analisi del mercato e della presenza attuale." },
      step2: { title: "Mockup", desc: "Wireframe strategici e flusso dei messaggi." },
      step3: { title: "Build", desc: "Sviluppo focalizzato sulla velocità." },
      step4: { title: "Lancio", desc: "Ottimizzazione e messa online." }
    },
    form: {
      headline: "Cosa succede ora",
      sub: "Dimmi cosa fai e cosa vuoi ottenere. Ti rispondo entro 24 ore con i prossimi passi.",
      businessName: "Nome Azienda",
      industry: "Settore",
      sellingPoint: "Punto di forza unico",
      targetAudience: "Target di riferimento",
      cta: "Scrivimi un'Email",
      loading: "Invio in corso...",
      bookCall: "Prenota chiamata (15 min)",
      seePackages: "Vedi pacchetti"
    },
    faq: {
      q1: { q: "Quanto tempo ci vuole?", a: "La maggior parte dei progetti viene lanciata in 7-14 giorni." },
      q2: { q: "Di chi è il sito?", a: "Tuo. Proprietà al 100% dal primo giorno." },
      q3: { q: "Potrò modificarlo?", a: "Sì, utilizzo piattaforme facili da gestire in autonomia." },
      q4: { q: "L'hosting è incluso?", a: "Ti aiuto a configurare l'hosting più performante per le tue esigenze." }
    },
    footer: {
      note: "Al servizio delle PMI in inglese e italiano.",
      rights: "Tutti i diritti riservati."
    }
  }
};