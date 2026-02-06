export type Language = 'en' | 'it';

export const translations = {
  en: {
    common: {
      backToTop: "Back to Top",
      timeline: "Est. Timeline: {time}",
      bookCall: "Book a 15-min Call",
      seePackages: "See Packages",
      contactMe: "Contact Me"
    },
    nav: {
      services: "Services",
      experience: "Experience",
      process: "Process",
      pricing: "Pricing",
      faq: "FAQ",
      cta: "Book a 15-min call"
    },
    hero: {
      badge: "Available for new Q1 projects",
      headline: "Websites that turn visitors into customers",
      subheadline: "I help small businesses turn their website into a lead-generating system — with clear messaging, conversion-first structure, and fast performance.",
      trustLine: "Built personally by me — not a factory or template agency.",
      ctaPrimary: "Get clarity in 15 minutes",
      ctaSecondary: "Email Me",
      ctaHowItWorks: "View How It Works",
      benefit1: "Lightning Fast Speed",
      benefit2: "Mobile-First Design",
      benefit3: "Lead Capture Optimized"
    },
    about: {
      badge: "Meet Your Strategist",
      headline: "I help businesses communicate clearly, earn trust, and grow online.",
      p1: "For over a decade, I worked as a Communications Officer at the UN World Food Programme, supporting an organization that operates at a global scale by turning complex information into clear, actionable stories.",
      p2: "I build tools that help people understand your value and feel confident reaching out.",
      bullet1: "10+ Years UN Communications",
      bullet2: "AI Web Architecture Expert",
      bullet3: "Conversion Strategist"
    },
    experience: {
      badge: "Experience",
      headline: "The foundation behind your website",
      card1: {
        val: "01",
        title: "Clear, simple messaging",
        desc: "I structure messages so they are understood quickly, remembered, and acted on."
      },
      card2: {
        val: "02",
        title: "Simple navigation",
        desc: "I organize your information into clear, intuitive paths for your visitors."
      },
      card3: {
        val: "03",
        title: "Stories that build trust",
        desc: "I turn your data into stories that build trust and help customers choose you."
      },
      card4: {
        val: "04",
        title: "Designed around your customer",
        desc: "I design for your audience while keeping your main message front and center."
      }
    },
    value: {
      card1: {
        title: "Clear positioning",
        desc: "Customers instantly understand what you do and why to choose you."
      },
      card2: {
        title: "Fast, reliable performance",
        desc: "Your site loads quickly so people don’t leave before contacting you."
      },
      card3: {
        title: "Smart automation",
        desc: "Simple tools that save you time and handle enquiries."
      }
    },
    problem: {
      badge: "The Pain Points",
      headline: "Why most small business websites fail to grow.",
      p1: "Passive Design: Digital brochures that don't drive action.",
      p2: "Vague Messaging: Copy that fails to connect with your target.",
      p3: "Hidden from Search: Poor local SEO structure.",
      p4: "High Friction: Slow speeds and confusing navigation.",
      p5: "Zero Strategy: Built without a clear roadmap for leads."
    },
    solution: {
      badge: "The Solution",
      headline: "A different approach to web design.",
      s1: { title: "Clear strategy", desc: "Every part of the site is mapped to a specific business outcome." },
      s2: { title: "Clear, persuasive writing", desc: "Words that build trust and trigger 'the click'." },
      s3: { title: "Simple ways to contact you", desc: "Optimized forms and seamless interaction points." },
      s4: { title: "Search Visible", desc: "Foundational SEO to ensure you show up where customers look." },
      s5: { title: "Conversion-First Design", desc: "Your website is built to turn visitors into real leads through clear structure and smart user journeys." },
      s6: { title: "Local Visibility & SEO", desc: "I optimize your site to be found on Google by the people who are ready to buy near you." }
    },
    services: {
      badge: "Services & Pricing",
      headline: "Transparent, Value-Based Packages",
      sub: "Investment in your growth should be clear. Choose the path that fits your scale.",
      setupFee: "Setup",
      monthlyFee: "Monthly",
      trustNote: "Flexible monthly support — pause or cancel anytime after launch.",
      footerLines: [
        "Flexible monthly support — pause or cancel anytime after launch.",
        "Includes updates, monitoring & optimization.",
        "Peace of mind + performance tracking."
      ],
      starter: {
        title: "Starter – Launch",
        tagline: "Get a modern site that starts working for you.",
        who: "For new businesses launching a serious first website.",
        setup: "€1,200",
        monthly: "€89",
        features: ["Strategy call & positioning", "1-page or small multi-page site", "Persuasive copy", "Mobile-first design", "Contact / lead form", "Basic SEO setup", "Google indexing", "Hosting + updates", "Performance monitoring"]
      },
      growth: {
        title: "Growth – Convert",
        tagline: "A site that converts visitors into leads.",
        who: "For SMBs that want more enquiries now.",
        setup: "€2,500",
        monthly: "€179",
        features: ["Everything in Starter", "Full website (6–8 sections)", "Conversion-focused structure", "Custom CTAs & lead funnels", "Advanced copywriting", "Speed optimization", "SEO page structure", "Monthly content updates (2/mo)", "Basic analytics setup"]
      },
      scale: {
        title: "Scale – Authority",
        tagline: "A platform that scales with your business goals.",
        who: "For brands building long-term authority.",
        setup: "€4,500",
        monthly: "€349",
        features: ["Everything in Growth", "Brand positioning framework", "Multi-page (up to 12 pages)", "Conversion strategy mapping", "AI-enhanced content system", "Blog or resource hub", "Advanced SEO structure", "Monthly performance reviews", "Ongoing CRO improvements"]
      },
      select: "Select {package}"
    },
    process: {
      badge: "The Workflow",
      headline: "How we build your site.",
      step1: { title: "Understand your business", desc: "We analyze your market to find your winning message." },
      step2: { title: "Write and design", desc: "We draft high-conversion copy and layout wireframes focused on results." },
      step3: { title: "Build & test", desc: "Rapid development for unmatched performance." },
      step4: { title: "Launch & refine", desc: "We deploy and fine-tune for maximum lead generation." }
    },
    proof: {
      badge: "How I Work",
      headline: "What working with me feels like",
      card1: {
        title: "Strategy-first thinking",
        desc: "A clear message and a clean journey that guides visitors to contact you."
      },
      card2: {
        title: "Built for performance",
        desc: "Optimized for speed and mobile so you don’t lose people before they reach your offer."
      },
      card3: {
        title: "Launch-ready & simple",
        desc: "A modern site you can easily maintain, with help on what to improve over time."
      },
      credibilityHeadline: "Credibility",
      credibilitySub: "Experience operating at global scale and high accountability.",
      credB1: "UN World Food Programme experience",
      credB2: "Executive-level reporting & stakeholder communication",
      credB3: "Strategy-first messaging & clarity",
      credB4: "Bilingual delivery: English + Italian"
    },
    qualify: {
      badge: "Is this for you?",
      headline: "Who I can help best",
      card1: {
        title: "You need more enquiries",
        desc: "You’re getting traffic, but not enough calls, messages, or quote requests."
      },
      card2: {
        title: "Your site feels outdated",
        desc: "The design doesn’t reflect your quality — and people leave before contacting you."
      },
      card3: {
        title: "You need more clarity",
        desc: "You want a clear offer, better positioning, and a site that supports growth."
      }
    },
    form: {
      objectionHandler: "Not sure if this is right for you? That’s exactly what the first message is for. No pressure. No sales script. Just clarity.",
      headline: "What happens next",
      sub: "Tell me what you do and what you want to achieve. I’ll reply within 24 hours with next steps.",
      businessName: "Business Name",
      industry: "Industry",
      emailLabel: "Email address",
      emailPlaceholder: "e.g. name@company.com",
      emailHint: "So I can reply to you.",
      phoneLabel: "Phone number (optional)",
      phonePlaceholder: "e.g. +39 333 123 4567",
      phoneHint: "Only if you prefer a call.",
      packageLabel: "Package",
      packagePlaceholder: "Select a package",
      packageStarter: "Starter – Launch",
      packageGrowth: "Growth – Convert",
      packageScale: "Scale – Authority",
      sellingPoint: "What makes you different?",
      targetAudience: "Who are your customers?",
      placeholderName: "e.g. Acme Solar",
      placeholderIndustry: "e.g. Sustainable Tech",
      placeholderUSP: "e.g. Fastest installation in the city",
      placeholderAudience: "e.g. Local homeowners",
      cta: "Send Message",
      loading: "Sending...",
      successTitle: "Message Sent",
      successSub: "Thanks — I’ll reply within 24 hours with next steps.",
      ctaImplement: "Book a discovery call instead?",
      nextSteps: {
        title: "What happens next?",
        step1: "1. Quick call",
        step2: "2. You get a plan",
        step3: "3. We build & launch"
      },
      retry: "← Send another message"
    },
    finalCta: {
      headline: "Ready to get more enquiries from your website?",
      subtext: "Tell me what you do and what you want to achieve. I’ll reply within 24 hours with next steps.",
      personalLine: "I’ll be the one designing your site, writing your copy, and thinking about your customers.",
      primary: "Start your website revamp",
      secondary: "Email me",
      reassurance: "No pressure — just clarity.",
      availability: "Limited availability • Personal service • Launch-ready"
    },
    faq: {
      badge: "Questions",
      headline: "Frequently Asked",
      q1: { q: "How long does a build take?", a: "Starter sites launch in 7 days. Larger projects take 14-21 days." },
      q2: { q: "Do I own my website?", a: "Yes. 100% ownership of code, content, and domain. No vendor lock-in." },
      q3: { q: "Do you handle copywriting?", a: "Yes. I help draft the foundation, then refine it for maximum impact." },
      q4: { q: "What about hosting?", a: "I use Vercel for top performance. I can manage it or set it up on your account." },
      q5: { q: "Is the site SEO optimized?", a: "Every site has structural SEO (speed, meta, clean code) included by default." },
      q6: { q: "Can we build in Italian and English?", a: "Yes, I specialize in multilingual sites that look great in any language." }
    }
  },
  it: {
    common: {
      backToTop: "Torna su",
      timeline: "Tempistiche: {time}",
      bookCall: "Prenota Chiamata (15 min)",
      seePackages: "Vedi Pacchetti",
      contactMe: "Contattami"
    },
    nav: {
      services: "Servizi",
      experience: "Esperienza",
      process: "Processo",
      pricing: "Prezzi",
      faq: "FAQ",
      cta: "Prenota una call di 15 min"
    },
    hero: {
      badge: "Disponibile per nuovi progetti Q1",
      headline: "Siti web che trasformano i visitatori in clienti",
      subheadline: "Aiuto le piccole imprese a trasformare il sito in un sistema che genera contatti — con messaggi chiari, struttura orientata alla conversione e prestazioni rapide.",
      trustLine: "Creato personalmente da me — non da un’agenzia “a catena” o template.",
      ctaPrimary: "Chiarezza in 15 minuti",
      ctaSecondary: "Scrivimi via Email",
      ctaHowItWorks: "Scopri come funziona",
      benefit1: "Velocità Fulminea",
      benefit2: "Design Mobile-First",
      benefit3: "Ottimizzato per i Lead"
    },
    about: {
      badge: "Il Tuo Strategista",
      headline: "Aiuto le aziende a comunicare in modo chiaro, creare fiducia e crescere online.",
      p1: "Per oltre un decennio, ho lavorato come Communications Officer presso il World Food Programme delle Nazioni Unite, supportando un'organizzazione che opera su scala globale trasformando informazioni complesse in storie chiare e utili.",
      p2: "Creo strumenti che aiutano le persone a capire il tuo valore e a sentirsi sicure nel contattarti.",
      bullet1: "10+ Anni di Comunicazione ONU",
      bullet2: "Esperto Architettura Web IA",
      bullet3: "Strategista di Conversione"
    },
    experience: {
      badge: "Esperienza",
      headline: "Le basi dietro il tuo sito",
      card1: {
        val: "01",
        title: "Messaggi chiari e semplici",
        desc: "Strutturo i messaggi affinché siano chiari, memorabili e portino all’azione."
      },
      card2: {
        val: "02",
        title: "Navigazione semplice",
        desc: "Organizzo le tue informazioni in percorsi chiari e intuitivi per i tuoi visitatori."
      },
      card3: {
        val: "03",
        title: "Storie che creano fiducia",
        desc: "Trasformo i tuoi dati in narrazioni che creano fiducia e aiutano i clienti a scegliere te."
      },
      card4: {
        val: "04",
        title: "Disegnato intorno al tuo cliente",
        desc: "Progetto per il tuo pubblico mantenendo il tuo messaggio principale sempre in evidenza."
      }
    },
    value: {
      card1: {
        title: "Posizionamento chiaro",
        desc: "I clienti capiscono subito cosa fai e perché sceglierti."
      },
      card2: {
        title: "Prestazioni rapide e affidabili",
        desc: "Il sito si carica velocemente e non fa scappare i visitatori."
      },
      card3: {
        title: "Automazione intelligente",
        desc: "Strumenti semplici che ti fanno risparmiare tempo."
      }
    },
    problem: {
      badge: "I Punti Deboli",
      headline: "Perché i siti web delle PMI spesso non crescono.",
      p1: "Design Passivo: Brochure digitali che non spingono all'azione.",
      p2: "Messaggi Vaghi: Testi che non riescono a connettersi con il target.",
      p3: "Invisibile sui Motori: Scarsa struttura SEO locale.",
      p4: "Attrito Elevato: Lentezza e navigazione confusa.",
      p5: "Zero Strategia: Costruiti senza una chiara roadmap per i contatti."
    },
    solution: {
      badge: "La Soluzione",
      headline: "Un approccio diverso al web design.",
      s1: { title: "Strategia chiara", desc: "Ogni parte del sito è mappata su un obiettivo di business specifico." },
      s2: { title: "Testi chiari e persuasivi", desc: "Parole che creano fiducia e spingono al 'click'." },
      s3: { title: "Modi semplici per contattarti", desc: "Moduli ottimizzati e punti di interazione fluidi." },
      s4: { title: "Visibilità Search", desc: "SEO strutturale per assicurarti di apparire dove i clienti cercano." },
      s5: { title: "Design per Convertire", desc: "Il tuo sito è costruito per trasformare i visitatori in lead reali tramite una struttura chiara." },
      s6: { title: "Visibilità locale e SEO", desc: "Ottimizzo il tuo sito per farti trovare su Google dalle persone pronte ad acquistare vicino a te." }
    },
    services: {
      badge: "Servizi e Prezzi",
      headline: "Pacchetti Trasparenti e di Valore",
      sub: "L'investimento nella tua crescita deve essere chiaro. Scegli il percorso adatto a te.",
      setupFee: "Setup",
      monthlyFee: "Mensile",
      trustNote: "Supporto mensile flessibile — puoi mettere in pausa o annullare dopo il lancio.",
      footerLines: [
        "Supporto mensile flessibile — puoi mettere in pausa o annullare dopo il lancio.",
        "Include aggiornamenti, monitoraggio e ottimizzazione.",
        "Tranquillità + tracciamento delle performance."
      ],
      starter: {
        title: "Starter – Launch",
        tagline: "Ottieni un sito moderno che inizia a lavorare per te.",
        who: "Per nuove attività che vogliono un primo sito davvero serio.",
        setup: "€1.200",
        monthly: "€89",
        features: ["Call strategica e posizionamento", "Sito 1 pagina o multipagina small", "Copy persuasivo", "Design mobile-first", "Modulo contatti/lead", "Setup SEO base", "Indicizzazione Google", "Hosting + aggiornamenti", "Monitoraggio performance"]
      },
      growth: {
        title: "Growth – Convert",
        tagline: "Un sito che trasforma i visitatori in lead.",
        who: "Per PMI che vogliono più richieste e contatti subito.",
        setup: "€2.500",
        monthly: "€179",
        features: ["Tutto in Starter", "Sito completo (6–8 sezioni)", "Struttura orientata alla conversione", "CTA e funnel personalizzati", "Copywriting avanzato", "Ottimizzazione velocità", "Struttura pagine SEO", "Aggiornamenti contenuti (2/mese)", "Setup analytics base"]
      },
      scale: {
        title: "Scale – Authority",
        tagline: "Una piattaforma che cresce con i tuoi obiettivi di business.",
        who: "Per brand che vogliono costruire autorevolezza nel tempo.",
        setup: "€4.500",
        monthly: "€349",
        features: ["Tutto in Growth", "Framework posizionamento brand", "Multipagina (fino a 12 pagine)", "Mappatura strategia conversione", "Sistema contenuti IA", "Blog o hub risorse", "Struttura SEO avanzata", "Review performance mensili", "Miglioramenti CRO continui"]
      },
      select: "Seleziona {package}"
    },
    process: {
      badge: "Workflow",
      headline: "Come costruiamo il tuo sito.",
      step1: { title: "Capire la tua attività", desc: "Analizziamo il tuo settore per trovare il tuo messaggio vincente." },
      step2: { title: "Scrittura e design", desc: "Scriviamo testi ad alta conversione e wireframe focalizzati sui risultati." },
      step3: { title: "Sviluppo e test", desc: "Sviluppo rapido per prestazioni senza pari." },
      step4: { title: "Lancio e perfezionamento", desc: "Pubblichiamo e perfezioniamo per la massima generazione di lead." }
    },
    proof: {
      badge: "Come Lavoro",
      headline: "Com’è lavorare insieme",
      card1: {
        title: "Pensiero orientato alla strategia",
        desc: "Un messaggio chiaro e un percorso pulito che guida i visitatori a contattarti."
      },
      card2: {
        title: "Costruito per le prestazioni",
        desc: "Ottimizzato per velocità e mobile, così non perdi persone prima dell’offerta."
      },
      card3: {
        title: "Pronto al lancio e semplice",
        desc: "Un sito moderno che puoi gestire facilmente, con aiuto su cosa migliorare."
      },
      credibilityHeadline: "Credibility",
      credibilitySub: "Esperienza operativa su scala globale e alta affidabilità.",
      credB1: "Esperienza nel Programma Alimentare Mondiale ONU",
      credB2: "Comunicazione con stakeholder a livello executive",
      credB3: "Messaggistica orientata alla strategia e chiarezza",
      credB4: "Servizio bilingue: Inglese + Italiano"
    },
    qualify: {
      badge: "Fa per te?",
      headline: "Chi posso aiutare meglio",
      card1: {
        title: "Ti servono più richieste",
        desc: "Hai visite, ma poche call, messaggi o richieste di preventivo."
      },
      card2: {
        title: "Il sito sembra datato",
        desc: "Il design non rispecchia la tua qualità — e gli utenti escono prima di contattarti."
      },
      card3: {
        title: "Ti serve più chiarezza",
        desc: "Vuoi un’offerta chiara, posizionamento più forte e un sito che supporti la crescita."
      }
    },
    form: {
      objectionHandler: "Non sei sicuro che faccia per te? È proprio a questo che serve il primo messaggio. Zero pressione, niente 'copione' di vendita — solo chiarezza.",
      headline: "Cosa succede ora",
      sub: "Dimmi cosa fai e cosa vuoi ottenere. Ti rispondo entro 24 ore con i prossimi passi.",
      businessName: "Nome Azienda",
      industry: "Settore",
      emailLabel: "Indirizzo email",
      emailPlaceholder: "es. nome@azienda.com",
      emailHint: "Così posso risponderti.",
      phoneLabel: "Numero di telefono (opzionale)",
      phonePlaceholder: "es. +39 333 123 4567",
      phoneHint: "Solo se preferisci una chiamata.",
      packageLabel: "Pacchetto",
      packagePlaceholder: "Seleziona un pacchetto",
      packageStarter: "Starter – Launch",
      packageGrowth: "Growth – Convert",
      packageScale: "Scale – Authority",
      sellingPoint: "Cosa ti rende diverso?",
      targetAudience: "Who are your customers?",
      placeholderName: "es. Acme Solar",
      placeholderIndustry: "es. Tecnologia Sostenibile",
      placeholderUSP: "es. Installazione più veloce in città",
      placeholderAudience: "es. Proprietari di case locali",
      cta: "Invia Messaggio",
      loading: "Invio in corso...",
      successTitle: "Messaggio Inviato",
      successSub: "Grazie — risponderò entro 24 ore con i prossimi passi.",
      ctaImplement: "Preferisci prenotare una chiamata conoscitiva?",
      nextSteps: {
        title: "Cosa succede ora?",
        step1: "1. Call veloce",
        step2: "2. Ricevi un piano",
        step3: "3. Costruiamo & pubblichiamo"
      },
      retry: "← Invia un altro messaggio"
    },
    finalCta: {
      headline: "Pronto a ricevere più richieste dal tuo sito?",
      subtext: "Dimmi cosa fai e cosa vuoi ottenere. Ti risponderò entro 24 ore con i prossimi passi.",
      personalLine: "Sarò io a progettare il tuo sito, scrivere i testi e ragionare sui tuoi clienti.",
      primary: "Inizia il restyling del tuo sito",
      secondary: "Scrivimi via email",
      reassurance: "Zero pressione — solo chiarezza.",
      availability: "Disponibilità limitata • Servizio personale • Pronto al lancio"
    },
    faq: {
      badge: "Domande",
      headline: "Frequenti",
      q1: { q: "Quanto tempo richiede la realizzazione?", a: "I siti Starter vengono lanciati in 7 giorni. I progetti più grandi richiedono 14-21 giorni." },
      q2: { q: "Il sito sarà di mia proprietà?", a: "Sì. Proprietà al 100% di codice, contenuti e dominio. Nessun vincolo." },
      q3: { q: "Ti occupi dei testi?", a: "Sì. Aiuto a creare le basi, poi rifinisco tutto per il massimo impatto." },
      q4: { q: "E per l'hosting?", a: "Uso Vercel per prestazioni eccellenti. Posso gestirlo io o configurarlo sul tuo account." },
      q5: { q: "Is the site SEO optimized?", a: "Ogni sito include SEO strutturale (velocità, meta, codice pulito) di default." },
      q6: { q: "Can we build in Italian and English?", a: "Certamente, mi occupo di siti multilingue ottimizzati per ogni mercato." }
    }
  }
};
