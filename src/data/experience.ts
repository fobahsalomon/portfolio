// ============================================
// EXPÉRIENCE — MODIFIEZ ICI
// ============================================

export interface Experience {
  id: string;
  period: { fr: string; en: string };
  type: { fr: string; en: string };
  role: { fr: string; en: string };
  company: string;
  description: { fr: string; en: string };
}

export const experiences: Experience[] = [
  {
    id: "ase-stage",
    period: { fr: "Juin-Juillet 2026", en: "June-July 2026" },
    type: { fr: "Stage", en: "Internship" },
    role: { fr: "Développeur — Data / Comptabilité", en: "Developer — Data / Accounting" },
    company: "African School of Economics",
    description: {
      fr: "Conception et développement d'une application de gestion comptable pour l'établissement : automatisation des livres comptables, de la balance et des états financiers.",
      en: "Design and development of an accounting management application for the institution: automation of accounting books, trial balance, and financial statements.",
    },
  },
  {
    id: "yodan-consulting",
    period: { fr: "Février-Avril 2026", en: "February-April 2026" },
    type: { fr: "Mission freelance", en: "Freelance mission" },
    role: { fr: "Analyste de données", en: "Data Analyst" },
    company: "Yodan Consulting",
    description: {
      fr: "Analyse de données psychosociales en entreprise (modèle de Karasek) et création de dashboards de suivi pour la direction des ressources humaines.",
      en: "Psychosocial risk data analysis in the workplace (Karasek model) and creation of monitoring dashboards for the HR department.",
    },
  },
  {
    id: "ase-bachelor",
    period: { fr: "2023-Aujourd'hui", en: "2023-Present" },
    type: { fr: "Formation", en: "Education" },
    role: { fr: "Bachelor en Data Science", en: "Bachelor in Data Science" },
    company: "African School of Economics",
    description: {
      fr: "4ᵉ année de Bachelor, spécialisation en science des données : statistiques, machine learning, économétrie et déploiement d'applications.",
      en: "4th-year Bachelor student, specializing in data science: statistics, machine learning, econometrics, and application deployment.",
    },
  },
];
