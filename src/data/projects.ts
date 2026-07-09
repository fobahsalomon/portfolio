// ============================================
// PROJETS  MODIFIEZ ICI
// ============================================
// Structure de chaque projet :
//   id: identifiant unique
//   title: nom du projet
//   featured: true si projet en vedette (page d'accueil)
//   image: chemin vers la capture d'écran (16:9 recommandé)
//          Placez vos images dans public/assets/projects/
//   description.fr / description.en: description courte (3-4 lignes max)
//   stack: tableau de tags techniques
//   githubUrl: URL du repo GitHub (null si privé/inexistant)
//   demoUrl: URL de la démo live (null si pas de démo)
//   category: catégorie du projet

export interface Project {
  id: string;
  title: string;
  featured: boolean;
  image: string;           // image principale (ou poster si video est défini)
  video?: string;          // chemin vers .mp4 / .webm / .gif dans public/assets/projects/
  images?: string[];       // diaporama : tableau de chemins d'images (remplace image si > 1)
  description: { fr: string; en: string };
  stack: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  category: string;
}

export const projects: Project[] = [
  // ========== PROJETS EN VEDETTE ==========
  {
    id: "surveylens",
    title: "SurveyLens",
    featured: true,
    image: "assets/projects/surveylens-1.jpg",
    images: [
      "assets/projects/surveylens-1.jpg",
      "assets/projects/surveylens-2.jpg",
      "assets/projects/surveylens-3.jpg",
    ],
    description: {
      fr: "Application d'analyse automatisée de questionnaires RH basée sur le modèle de Karasek. Traitement complet des données : nettoyage, scoring, calcul d'indicateurs de risques psychosociaux. Déploiement via Streamlit avec visualisations interactives des scores par dimension et rapports exportables pour les directions RH.",
      en: "Automated HR questionnaire analysis application based on the Karasek model. Complete data processing: cleaning, scoring, psychosocial risk indicator calculation. Deployed via Streamlit with interactive visualizations of scores by dimension and exportable reports for HR departments.",
    },
    stack: ["Python", "Streamlit", "Pandas", "Numpy","Matplotlib", "Plotly"],
    githubUrl: "https://github.com/fobahsalomon/survey-analytics-platform",
    demoUrl: "https://surveylens.streamlit.app/", 
    category: "RH / Analytics",
  },
  {
    id: "ipums-cps",
    title: "IPUMS CPS  Women's Labor Force Participation",
    featured: true,
    image: "assets/projects/ipums-cps-1.jpg",
    images: [
      "assets/projects/ipums-cps-1.jpg",
      "assets/projects/ipums-cps-2.jpg",
      "assets/projects/ipums-cps-3.jpg",
    ],
    description: {
      fr: "Analyse longitudinale de la participation des femmes au marché du travail américain à partir des données IPUMS CPS (1980-2023). Modélisation par régression logistique multinomiale et séries temporelles pour identifier les facteurs structurels et cycliques. Visualisations interactives des tendances par cohorte, niveau d'éducation et statut matrimonial.",
      en: "Longitudinal analysis of women's labor force participation in the US using IPUMS CPS data (1980-2023). Modeling via multinomial logistic regression and time series to identify structural and cyclical factors. Interactive visualizations of trends by cohort, education level, and marital status.",
    },
    stack: ["R", "IPUMS", "Tidyverse", "ggplot2", "Logistic Regression"],
    githubUrl: "https://github.com/fobahsalomon/Women-lfp-cps",
    demoUrl: null,
    category: "Économie / Recherche",
  },
  {
    id: "anomaly-detection",
    title: "Anomaly Detection  CICIDS2017",
    featured: true,
    image: "assets/projects/anomaly-detection-1.jpg",
    images:["assets/projects/anomaly-detection-1.jpg","assets/projects/anomaly-detection-2.jpg","assets/projects/anomaly-detection-3.jpg"],
    description: {
      fr: "Système de détection d'intrusions réseau utilisant les datasets CICIDS2017 et NF-CSE-CIC-IDS2018-V2. Pipeline complet : prétraitement des flux réseau, sélection de caractéristiques, entraînement de modèles (Isolation Forest, One-Class SVM, Autoencoder). Évaluation sur métriques F1-score et AUC-ROC avec comparaison des approches supervisées et non supervisées.",
      en: "Network intrusion detection system using CICIDS2017 and NF-CSE-CIC-IDS2018-V2 datasets. Complete pipeline: network flow preprocessing, feature selection, model training (Isolation Forest, One-Class SVM, Autoencoder). Evaluation on F1-score and AUC-ROC metrics with comparison of supervised and unsupervised approaches.",
    },
    stack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Network Analysis"],
    githubUrl: "https://github.com/fobahsalomon/Anomaly-Detection",
    demoUrl: null,
    category: "Cybersécurité / ML",
  },

  // ========== PROJETS SECONDAIRES ==========
  {
    id: "sarima-uk-sales",
    title: "SARIMA UK Auto Sales Forecasting",
    featured: false,
    image: "assets/projects/sarima-uk-1.jpg",
    images: ["assets/projects/sarima-uk-1.jpg", "assets/projects/sarima-uk-2.jpg"],
    description: {
      fr: "Étude complète de séries temporelles sur les ventes trimestrielles de voitures en Angleterre (1977-2005), suivant la méthodologie Box-Jenkins de bout en bout : diagnostics de stationnarité, décomposition STL, identification et estimation SARIMA, validation des résidus et comparaison avec des benchmarks.",
      en: "Full time series forecasting study on quarterly UK car sales (1977-2005), following the Box-Jenkins methodology end-to-end: stationarity diagnostics, STL decomposition, SARIMA identification and estimation, residual validation, and benchmark comparison.",
    },
    stack: ["Python", "Statsmodels", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/fobahsalomon/time-series-sarima-forecasting",
    demoUrl: null,
    category: "Séries temporelles",
  },
  {
    id: "rent-prediction",
    title: "Cocody Rental Market Analysis",
    featured: false,
    image: "assets/projects/rent-prediction-1.jpg",
    images: ["assets/projects/rent-prediction-1.jpg", "assets/projects/rent-prediction-2.jpg"],
    description: {
      fr: "Prédiction des loyers résidentiels à Cocody à partir d'annonces CoinAfrique : scraping de milliers d'annonces, feature engineering (surface, localisation, commodités), comparaison de modèles (Random Forest, CatBoost, Régression linéaire multiple (modèle hédonique)).",
      en: "Rent price prediction for Cocody (Abidjan) from CoinAfrique listings: web scraping of thousands of listings, feature engineering (area, location, amenities), model comparison (Random Forest, CatBoost, Multiple Linear Regression (hedonic model)).",
    },
    stack: ["Python", "Scrapy", "Random Forest","CatBoost"],
    githubUrl: "https://github.com/fobahsalomon/cocody-rental-market-analysis",
    demoUrl: null,
    category: "ML / WebScrapping",
  },
  {
    id: "ohada-accounting",
    title: "Application de comptabilité OHADA",
    featured: false,
    image: "assets/projects/ohada.jpg",   // poster affiché avant chargement de la vidéo
    video: "assets/projects/ohada.mp4",   //  placez votre .mp4 / .gif / .webm ici
    description: {
      fr: "Application de gestion comptable conforme au référentiel OHADA (SYSCOHADA révisé). Génération automatique des livres comptables, balance, grand livre et états financiers. Système de plan comptable paramétrable avec exports PDF et Excel. Repository privé  code disponible sur demande.",
      en: "Accounting management application compliant with the OHADA framework (revised SYSCOHADA). Automatic generation of accounting books, trial balance, general ledger, and financial statements. Configurable chart of accounts system with PDF and Excel exports. Private repository  code available on request.",
    },
    stack: ["Python", "Django", "Docker", "PostgreSQL"],
    githubUrl: null, // Repo privé
    demoUrl: null,
    category: "Finance / Comptabilité",
  },
  {
    id: "northmart-rfm",
    title: "NorthMart RFM (Recency, Frequency, Monetary) Customer Segmentation",
    featured: false,
    image: "assets/projects/northmart-1.jpg",
    images: ["assets/projects/northmart-1.jpg", "assets/projects/northmart-2.jpg"],
    description: {
      fr: "Segmentation clients RFM (Récence, Fréquence, Montant) couplée à une prévision des ventes par modèle SARIMA pour un retailer nord-américain. Identification des segments à haute valeur, activation des clients dormants et optimisation des campagnes marketing ciblées. Dashboard interactif de suivi des KPIs commerciaux.",
      en: "RFM customer segmentation (Recency, Frequency, Monetary) combined with SARIMA sales forecasting for a North American retailer. Identification of high-value segments, dormant customer reactivation, and optimization of targeted marketing campaigns. Interactive dashboard for tracking commercial KPIs.",
    },
    stack: ["Python", "Streamlit", "Scikit-learn", "Statsmodels"],
    githubUrl: "https://github.com/fobahsalomon/NorthMart_RFM",
    demoUrl: null,
    category: "Retail / Analytics",
  },
  {
    id: "colony-registration",
    title: "Colony Registration Analytics",
    featured: false,
    image: "assets/projects/colony-registration-1.jpg",
    images: ["assets/projects/colony-registration-1.jpg", "assets/projects/colony-registration-2.jpg"],
    description: {
      fr: "Analyse des données d'enregistrement de colonies de réfugiés pour le HCR. Nettoyage et harmonisation de bases de données multi-sources, création d'indicateurs démographiques et géographiques. Rapports automatisés et visualisations cartographiques pour orienter la planification des interventions humanitaires.",
      en: "Analysis of refugee camp registration data for UNHCR. Cleaning and harmonization of multi-source databases, creation of demographic and geographic indicators. Automated reports and cartographic visualizations to guide humanitarian intervention planning.",
    },
    stack: ["Kobo ToolBox", "Google Sheets", "Looker Studio"],
    githubUrl: "https://github.com/fobahsalomon/colony-registration-analytics",
    demoUrl: "https://lookerstudio.google.com/reporting/78e4dbfe-1ee5-4dc0-8d80-fd33e0355545",
    category: "Humanitaire / Data",
  },
  
];

// Helper pour récupérer les projets en vedette
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

// Helper pour récupérer tous les projets
export const getAllProjects = () => projects;
