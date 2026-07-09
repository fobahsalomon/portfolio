# Portfolio — Salomon Fobah N'Gouan

Site statique multilingue (FR/EN) deployé sur GitHub Pages.

## URL de demo

https://jc4mgiixsizsq.kimi.page

## Stack technique

- React 19 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- react-router-dom (HashRouter pour GitHub Pages)
- Lucide React (icones)

## Structure des fichiers modifiables

### 1. Informations personnelles
**Fichier :** `src/data/personalInfo.ts`

Modifiez :
- `firstName`, `lastName`, `title` — identite
- `email`, `phone`, `location` — contact
- `github`, `linkedin` — liens sociaux
- `cvPdf` — chemin vers le CV PDF (placez le fichier dans `public/assets/cv.pdf`)
- `bio.fr` / `bio.en` — biographie (tableau de paragraphes)
- `tagline.fr` / `tagline.en` — accroche du hero

### 2. Projets
**Fichier :** `src/data/projects.ts`

Chaque projet a cette structure :
```ts
{
  id: "identifiant-unique",
  title: "Nom du projet",
  featured: true,        // true = visible sur la page d'accueil
  image: "/assets/projects/nom-image.jpg",  // 16:9 recommande
  description: {
    fr: "Description en francais (3-4 lignes max)",
    en: "Description in English (3-4 lines max)"
  },
  stack: ["Python", "Pandas", "Scikit-learn"],
  githubUrl: "https://github.com/fobahsalomon/mon-repo",  // null si privé
  demoUrl: "https://mon-demo.streamlit.app",              // null si pas de demo
  category: "Categorie"
}
```

**Regles pour les liens :**
- Repo public : `githubUrl: "https://github.com/..."` → bouton "Voir le code"
- Repo privé/inexistant : `githubUrl: null` → bouton "Code sur demande" (mailto:)
- Demo live : `demoUrl: "https://..."` → bouton "Voir la demo" s'affiche

**Images des projets :** Placez vos captures d'ecran dans `public/assets/projects/`
(les images actuelles sont des placeholders generees par IA)

### 3. Certifications
**Fichier :** `src/data/certifications.ts`

### 4. Stack technique
**Fichier :** `src/data/techStack.ts`

Organise par categorie : Modelisation, Deploiement, Data Engineering, Visualisation.

### 5. Traductions
**Fichier :** `src/i18n/translations.ts`

Ajoutez/modifiez les textes en francais et anglais. Les deux langues doivent avoir les memes cles.

### 6. Photo professionnelle
Placez votre photo dans `public/assets/images/photo-pro.jpg`

## Deployer sur GitHub Pages

### Etape 1 : Build
```bash
cd /mnt/agents/output/app
npm run build
```

Le dossier `dist/` contient le site statique.

### Etape 2 : Pousser sur GitHub
```bash
# Si vous partez de zero
git init
git remote add origin https://github.com/fobahsalomon/fobahsalomon.github.io.git
git add .
git commit -m "Initial portfolio"
git push -u origin main
```

Ou si vous utilisez la branche `gh-pages` :
```bash
npm install -D gh-pages
# Ajoutez dans package.json :
# "homepage": "https://fobahsalomon.github.io",
# "scripts": { "deploy": "gh-pages -d dist" }
npm run build
npm run deploy
```

## Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de developpement |
| `npm run build` | Build de production (dossier `dist/`) |
| `npm run preview` | Previsualiser le build |

## Notes importantes

- Le site utilise **HashRouter** (`/#/projects`, `/#/about`) pour la compatibilite GitHub Pages
- Les images dans `public/` sont copiees telles quelles dans `dist/` lors du build
- Le CV PDF doit etre place dans `public/assets/cv.pdf`
- Le bouton "Telecharger mon CV" pointe vers `/assets/cv.pdf`
