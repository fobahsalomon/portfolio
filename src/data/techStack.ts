// ============================================
// STACK TECHNIQUE — MODIFIEZ ICI
// ============================================
// Organisé par usage, sans barres de pourcentage

export interface TechCategory {
  category: { fr: string; en: string };
  tools: string[];
}

export const techStack: TechCategory[] = [
  {
    category: { fr: "Modélisation", en: "Modeling" },
    tools: ["Pandas", "NumPy", "SciPy", "Statsmodels", "Scikit-learn", "TensorFlow", "Keras", "PyTorch"],
  },
  {
    category: { fr: "Déploiement", en: "Deployment" },
    tools: ["Streamlit", "Docker", "Flask", "FastAPI"],
  },
  {
    category: { fr: "Data Engineering", en: "Data Engineering" },
    tools: ["MySQL","PostgreSQL","MongoDB", "DuckDB", "R", "Stata", "Excel", "Google Sheets", "Jupyter Notebook"],
  },
  {
    category: { fr: "Visualisation", en: "Visualization" },
    tools: ["Power BI","Looker Studio", "Matplotlib", "Seaborn", "Plotly", "Tableau"],
  },
];
