// ============================================
// CERTIFICATIONS — MODIFIEZ ICI
// ============================================

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  description: { fr: string; en: string };
  url?: string; // Lien vers la certification
}

export const certifications: Certification[] = [
  {
    id: "wqu-adsl",
    name: "Applied Data Science Lab",
    issuer: "WorldQuant University",
    year: "2025",
    description: {
      fr: "8 projets end-to-end couvrant régression, classification, clustering, séries temporelles (GARCH), et A/B testing",
      en: "8 end-to-end projects covering regression, classification, clustering, time series (GARCH), and A/B testing",
    },
    url: "https://www.credly.com/badges/063ae1e0-e2f0-4ae0-8a30-b552cad08c89/public_url",
  },
  {
    id: "oracle-oci",
    name: "OCI 2025 Certified Data Science Professional",
    issuer: "Oracle",
    year: "2025",
    description: {
      fr: "Certification professionnelle en data science sur Oracle Cloud Infrastructure",
      en: "Professional certification in data science on Oracle Cloud Infrastructure",
    },
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3C43A9F9C5A92D468604B8204E53980940CD05B4CAFDFDDA02B2DC09D8FCA7A8",
  },
  {
    id: "umich-python",
    name: "Applied Data Science with Python",
    issuer: "University of Michigan",
    year: "2024",
    description: {
      fr: "Spécialisation complète en data science avec Python (pandas, matplotlib, scikit-learn, NLTK, network analysis)",
      en: "Complete specialization in data science with Python (pandas, matplotlib, scikit-learn, NLTK, network analysis)",
    },
    url: "https://www.coursera.org/account/accomplishments/specialization/Y23L3G8K0SNF",
  },
  {
    id: "google-r",
    name: "Data Analysis with R Programming",
    issuer: "Google",
    year: "2024",
    description: {
      fr: "Analyse de données avec R : manipulation, visualisation, statistiques et reporting",
      en: "Data analysis with R: manipulation, visualization, statistics, and reporting",
    },
    url: "https://www.coursera.org/account/accomplishments/verify/9ZHZVU8I0F5H",
  },
  {
    id: "cisco-learnathon",
    name: "Networking Academy Learn-A-Thon 2025",
    issuer: "Cisco",
    year: "2025",
    description: {
      fr: "Décerné aux étudiants et instructeurs ayant participé à un événement Learn-A-Thon organisé par une Networking Academy locale",
      en: "Awarded to students and instructors who participated in a Learn-A-Thon event organized by a local Networking Academy",
    },
    url: "https://www.credly.com/badges/ab1474d8-796e-405b-85e7-e33965d3ac44/public_url",
  },
  {
    id: "cisco-apply-ai",
    name: "Apply AI: Analyze Customer Reviews",
    issuer: "Cisco",
    year: "2025",
    description: {
      fr: "Application de l'analyse thématique sur des données textuelles à l'aide d'outils d'IA et de tableurs, avec sélection de l'outil adapté à chaque tâche",
      en: "Applied thematic analysis to text data using AI and spreadsheet tools, with the right AI or non-AI tool chosen for each task",
    },
    url: "https://www.credly.com/badges/aa72462f-15db-44db-8f34-ad3cecff25c0/public_url",
  },
  {
    id: "cisco-cybersecurity",
    name: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco",
    year: "2025",
    description: {
      fr: "Techniques de surveillance et de protection réseau (pare-feu, cloud, cryptographie), alertes de sécurité, évaluation des vulnérabilités et plan de gestion des risques",
      en: "Network monitoring and protection techniques (firewalls, cloud security, cryptography), security alerts, vulnerability assessment, and risk management planning",
    },
    url: "https://www.credly.com/badges/31bde11a-b438-43fc-afcd-725660153503/public_url",
  },
  {
    id: "cisco-network-tech",
    name: "Network Technician Career Path",
    issuer: "Cisco",
    year: "2025",
    description: {
      fr: "Fondamentaux réseau, câblage, adressage, configuration d'équipements Cisco, dépannage et support niveau help desk",
      en: "Networking fundamentals, cabling, addressing, Cisco device configuration, troubleshooting and help-desk level support",
    },
    url: "https://www.credly.com/badges/9f7f3f49-852d-4f60-959a-e021eb2ffd53/public_url",
  },
  {
    id: "deloitte-data-analytics",
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    year: "2026",
    description: {
      fr: "Simulation d'emploi en analyse de données et technologie forensique : création d'un dashboard sous Tableau et utilisation d'Excel pour classifier des données et en tirer des conclusions business",
      en: "Job simulation in data analysis and forensic technology: built a data dashboard using Tableau and used Excel to classify data and draw business conclusions",
    },
    url: "/public/assets/Deloitte_internship.pdf",
  },
];


