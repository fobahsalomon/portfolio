// ============================================
// PROJETS — MODIFIEZ ICI
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
      fr: "Application d'analyse automatisée de questionnaires RH (Karasek, QVT, MBI) mesurant les risques psychosociaux, développée pour YODAN. Pipeline complet : nettoyage des données, calcul des scores par dimension, génération de rapports. Utilisée au quotidien par un collaborateur de YODAN pour la production de ses analyses et rapports internes. Une version démo publique est déployée sur Streamlit.",
      en: "Automated HR questionnaire analysis application (Karasek, QVT, MBI) measuring psychosocial risks, built for YODAN. Complete pipeline: data cleaning, score calculation by dimension, report generation. Used daily in production by a YODAN staff member for their internal analysis and reporting. A public demo version is deployed on Streamlit.",
    },
    stack: ["Python", "Streamlit", "Pandas", "Numpy", "Matplotlib", "Plotly"],
    githubUrl: "https://github.com/fobahsalomon/survey-analytics-platform",
    demoUrl: "https://surveylens.streamlit.app/",
    category: "RH / Analytics",
  },
  {
    id: "ipums-cps",
    title: "IPUMS CPS — Women's Labor Force Participation",
    featured: true,
    image: "assets/projects/ipums-cps-1.jpg",
    images: [
      "assets/projects/ipums-cps-1.jpg",
      "assets/projects/ipums-cps-2.jpg",
      "assets/projects/ipums-cps-3.jpg",
    ],
    description: {
      fr: "Analyse de la participation des femmes au marché du travail américain à partir des microdonnées IPUMS CPS (1994-2024). Modélisation par régression logistique avec termes d'interaction, en tenant compte des poids d'enquête (ASECWT/WTFINL) et de la distinction entre échantillons ASEC et Basic Monthly. Résultats clés : les diplômées du supérieur ont 2,12× plus de chances de participer au marché du travail ; avoir des enfants réduit cette probabilité (×0,80), avec une pénalité combinée pour les mères diplômées.",
      en: "Analysis of women's labor force participation in the US using IPUMS CPS microdata (1994-2024). Logistic regression modeling with interaction terms, accounting for survey weights (ASECWT/WTFINL) and the distinction between ASEC and Basic Monthly samples. Key findings: college graduates show 2.12× higher odds of labor force participation; having children reduces the odds (×0.80), with a compounded penalty for college-educated mothers.",
    },
    stack: ["Python", "Pandas", "Statsmodels", "Scikit-learn", "IPUMS", "Logistic Regression"],
    githubUrl: "https://github.com/fobahsalomon/Women-lfp-cps",
    demoUrl: null,
    category: "Économie / Recherche",
  },
  {
    id: "anomaly-detection",
    title: "Anomaly Detection — CICIDS2017",
    featured: true,
    image: "assets/projects/anomaly-detection-1.jpg",
    images: ["assets/projects/anomaly-detection-1.jpg", "assets/projects/anomaly-detection-2.jpg", "assets/projects/anomaly-detection-3.jpg"],
    description: {
      fr: "Système de détection d'anomalies réseau entraîné sur CICIDS2017 et testé en généralisation sur NF-CSE-CIC-IDS2018-V2. Comparaison de modèles non supervisés : autoencodeurs, autoencodeurs variationnels (VAE) et Isolation Forest. Test de généralisation cross-dataset avec échantillonnage via DuckDB pour valider la robustesse des modèles face à des données réseau inédites.",
      en: "Network intrusion detection system trained on CICIDS2017 and generalization-tested on NF-CSE-CIC-IDS2018-V2. Comparison of unsupervised models: autoencoders, variational autoencoders (VAE), and Isolation Forest. Cross-dataset generalization testing with DuckDB-based sampling to validate model robustness on unseen network data.",
    },
    stack: ["Python", "TensorFlow/Keras", "Scikit-learn", "Pandas", "DuckDB"],
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
      fr: "Étude complète de séries temporelles sur les ventes trimestrielles de voitures en Angleterre (1977-2005), suivant la méthodologie Box-Jenkins de bout en bout : diagnostics de stationnarité, décomposition STL, identification et estimation SARIMA, validation des résidus. Performance finale : RMSE 21,56, MAPE 4,66 % — mon projet technique le plus abouti.",
      en: "Full time series forecasting study on quarterly UK car sales (1977-2005), following the Box-Jenkins methodology end-to-end: stationarity diagnostics, STL decomposition, SARIMA identification and estimation, residual validation. Final performance: RMSE 21.56, MAPE 4.66% — my strongest standalone technical project.",
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
      fr: "Prédiction des loyers résidentiels à Cocody à partir d'annonces CoinAfrique : scraping de milliers d'annonces, feature engineering (surface, localisation, commodités), comparaison de modèles (Random Forest, CatBoost, régression linéaire multiple / modèle hédonique).",
      en: "Rent price prediction for Cocody (Abidjan) from CoinAfrique listings: web scraping of thousands of listings, feature engineering (area, location, amenities), model comparison (Random Forest, CatBoost, multiple linear regression / hedonic model).",
    },
    stack: ["Python", "Scrapy", "Random Forest", "CatBoost"],
    githubUrl: "https://github.com/fobahsalomon/cocody-rental-market-analysis",
    demoUrl: null,
    category: "ML / WebScrapping",
  },
  {
    id: "ohada-accounting",
    title: "Application de comptabilité OHADA",
    featured: false,
    image: "assets/projects/ohada.jpg",   // poster affiché avant chargement de la vidéo
    video: "assets/projects/ohada.mp4",   // → placez votre .mp4 / .gif / .webm ici
    description: {
      fr: "Application de gestion comptable conforme au référentiel OHADA (SYSCOHADA révisé). Génération automatique des écritures, du plan comptable, de la balance et du grand livre. Système de plan comptable paramétrable avec exports PDF et Excel. Repository privé — code disponible sur demande.",
      en: "Accounting management application compliant with the OHADA framework (revised SYSCOHADA). Automatic generation of journal entries, chart of accounts, trial balance, and general ledger. Configurable chart of accounts system with PDF and Excel exports. Private repository — code available on request.",
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
      fr: "Segmentation clients RFM par K-Means (k=4, silhouette 0,31) identifiant 4 segments — Champions, Fidèles, À risque, Perdus — pour un retailer nord-américain. Prévision des ventes par SARIMA sur les 5 principaux marchés hors UK, avec test de stationnarité ADF et sélection par grid search (ARIMA(1,1,1)).",
      en: "RFM customer segmentation via K-Means (k=4, silhouette 0.31) identifying 4 segments — Champions, Loyal, At risk, Lost — for a North American retailer. SARIMA sales forecasting on the top-5 non-UK markets, with ADF stationarity testing and grid search selection (ARIMA(1,1,1)).",
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