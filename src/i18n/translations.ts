// ============================================
// TRADUCTIONS — AJOUTEZ/MODIFIEZ ICI
// ============================================
// Clés utilisées dans tout le portfolio

export type Language = "fr" | "en";

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    certifications: string;
    contact: string;
  };
  hero: {
    label: string;
    script: string;
    ctaProjects: string;
    ctaCv: string;
    scrollHint: string;
    badge: string;
  };
  about: {
    label: string;
    title: string;
    titleAccent: string;
    location: string;
    email: string;
    availability: string;
    education: string;
    languages: string;
    degree: string;
    school: string;
    period: string;
    langFrench: string;
    langEnglish: string;
    calloutLabel: string;
  };
  stats: {
    projects: string;
    certifications: string;
    technologies: string;
    experiences: string;
  };
  skills: {
    label: string;
    title: string;
    titleAccent: string;
  };
  projects: {
    label: string;
    title: string;
    titleAccent: string;
    viewCode: string;
    codeOnDemand: string;
    viewDemo: string;
  };
  experience: {
    label: string;
    title: string;
    titleAccent: string;
  };
  certifications: {
    label: string;
    title: string;
    titleAccent: string;
    bannerStrong: string;
    bannerText: string;
  };
  contact: {
    label: string;
    title: string;
    titleAccent: string;
    description: string;
    linkEmail: string;
    linkPhone: string;
    linkLocation: string;
    linkGithub: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    formSending: string;
    formSuccessTitle: string;
    formSuccessText: string;
    formErrorText: string;
  };
  footer: {
    madeWith: string;
    by: string;
    rights: string;
  };
  lang: {
    fr: string;
    en: string;
  };
}

type TranslationData = Record<Language, Translations>;

export const translations: TranslationData = {
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      label: "Data Science & Analytics",
      script: "Data Scientist",
      ctaProjects: "Voir mes projets",
      ctaCv: "Télécharger le CV",
      scrollHint: "Défiler",
      badge: "Basé à Abidjan",
    },
    about: {
      label: "À propos",
      title: "Transformer la donnée en",
      titleAccent: "décisions",
      location: "Localisation",
      email: "Email",
      availability: "Disponibilité",
      education: "Formation",
      languages: "Langues",
      degree: "Bachelor en Data Science",
      school: "African School of Economics",
      period: "2023 - Aujourd'hui",
      langFrench: "Français — Courant",
      langEnglish: "Anglais — B1",
      calloutLabel: "Formation en cours",
    },
    stats: {
      projects: "Projets réalisés",
      certifications: "Certifications",
      technologies: "Technologies maîtrisées",
      experiences: "Expériences professionnelles",
    },
    skills: {
      label: "Compétences",
      title: "Un stack pensé pour la",
      titleAccent: "production",
    },
    projects: {
      label: "Projets",
      title: "Projets en",
      titleAccent: "vedette",
      viewCode: "Voir le code",
      codeOnDemand: "Code sur demande",
      viewDemo: "Voir la démo",
    },
    experience: {
      label: "Parcours",
      title: "Expérience &",
      titleAccent: "formation",
    },
    certifications: {
      label: "Certifications",
      title: "Formation",
      titleAccent: "continue",
      bannerStrong: "9 certifications",
      bannerText: "obtenues auprès d'organismes reconnus (WorldQuant University, Oracle, Google, Cisco...)",
    },
    contact: {
      label: "Contact",
      title: "Discutons de votre",
      titleAccent: "projet",
      description:
        "Disponible pour des missions freelance, des stages ou toute collaboration autour de la donnée. N'hésitez pas à me contacter.",
      linkEmail: "Email",
      linkPhone: "Téléphone",
      linkLocation: "Localisation",
      linkGithub: "GitHub",
      formName: "Nom",
      formEmail: "Email",
      formSubject: "Sujet",
      formMessage: "Message",
      formSubmit: "Envoyer le message",
      formSending: "Envoi en cours...",
      formSuccessTitle: "Message envoyé !",
      formSuccessText: "Merci pour votre message, je vous répondrai rapidement.",
      formErrorText: "Une erreur est survenue. Merci de réessayer ou de m'écrire directement par email.",
    },
    footer: {
      madeWith: "Conçu et développé par",
      by: "par",
      rights: "Tous droits réservés.",
    },
    lang: {
      fr: "FR",
      en: "EN",
    },
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      label: "Data Science & Analytics",
      script: "Data Scientist",
      ctaProjects: "View my projects",
      ctaCv: "Download CV",
      scrollHint: "Scroll",
      badge: "Based in Abidjan",
    },
    about: {
      label: "About",
      title: "Turning data into",
      titleAccent: "decisions",
      location: "Location",
      email: "Email",
      availability: "Availability",
      education: "Education",
      languages: "Languages",
      degree: "Bachelor in Data Science",
      school: "African School of Economics",
      period: "2023 - Present",
      langFrench: "French — Fluent",
      langEnglish: "English — B1",
      calloutLabel: "Currently studying",
    },
    stats: {
      projects: "Completed projects",
      certifications: "Certifications",
      technologies: "Technologies mastered",
      experiences: "Professional experiences",
    },
    skills: {
      label: "Skills",
      title: "A stack built for",
      titleAccent: "production",
    },
    projects: {
      label: "Projects",
      title: "Featured",
      titleAccent: "projects",
      viewCode: "View code",
      codeOnDemand: "Code on request",
      viewDemo: "View demo",
    },
    experience: {
      label: "Background",
      title: "Experience &",
      titleAccent: "education",
    },
    certifications: {
      label: "Certifications",
      title: "Continuous",
      titleAccent: "learning",
      bannerStrong: "9 certifications",
      bannerText: "earned from recognized organizations (WorldQuant University, Oracle, Google, Cisco...)",
    },
    contact: {
      label: "Contact",
      title: "Let's talk about your",
      titleAccent: "project",
      description:
        "Available for freelance missions, internships, or any data-related collaboration. Feel free to reach out.",
      linkEmail: "Email",
      linkPhone: "Phone",
      linkLocation: "Location",
      linkGithub: "GitHub",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      formSubmit: "Send message",
      formSending: "Sending...",
      formSuccessTitle: "Message sent!",
      formSuccessText: "Thanks for reaching out, I'll get back to you shortly.",
      formErrorText: "Something went wrong. Please try again or email me directly.",
    },
    footer: {
      madeWith: "Designed and developed by",
      by: "by",
      rights: "All rights reserved.",
    },
    lang: {
      fr: "FR",
      en: "EN",
    },
  },
};
