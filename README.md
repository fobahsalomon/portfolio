# Portfolio — Salomon Fobah N'Gouan

Portfolio personnel bilingue (FR/EN) — Data Science & Analytics.

## Stack

- **React 19** + TypeScript + Vite
- **Tailwind CSS** + shadcn/ui (Radix UI)
- **Typographies** : Cormorant Garamond · Great Vibes · Syne (Google Fonts)
- **Icônes** : Lucide React + react-icons
- Navigation hash one-page (`#hero`, `#about`, `#skills`, `#projects`, `#experience`, `#certifications`, `#contact`)

## Commandes

```bash
npm run dev      # serveur local → http://localhost:3000
npm run build    # build de production → dist/
npm run preview  # prévisualiser le build
```

## Personnaliser le contenu

### Informations personnelles
**`src/data/personalInfo.ts`**

- `firstName`, `lastName`, `fullName` — identité
- `email`, `location` — contact
- `github` — lien GitHub
- `photo` — chemin vers votre photo (`public/assets/images/photo-pro.jpg`)
- `cvPdf` — chemin vers le CV PDF (`public/assets/cv.pdf`)
- `tagline.fr` / `tagline.en` — accroche du hero
- `bio.fr` / `bio.en` — paragraphes de la section À propos

### Projets
**`src/data/projects.ts`**

```ts
{
  id: "mon-projet",
  title: "Nom du projet",
  featured: true,                          // true = carte hero (grande)
  image: "assets/projects/poster.jpg",     // image principale / poster vidéo
  images: [                                // optionnel — active le diaporama
    "assets/projects/screen-1.jpg",
    "assets/projects/screen-2.jpg",
  ],
  video: "assets/projects/demo.mp4",       // optionnel — .mp4 / .webm / .gif
  description: { fr: "...", en: "..." },
  stack: ["Python", "Streamlit"],
  githubUrl: "https://github.com/...",     // null si repo privé
  demoUrl: "https://...",                  // null si pas de démo
  category: "Analytics"
}
```

**Règles médias :**
| Champ | Effet |
|-------|-------|
| `image` seul | photo statique |
| `images` (≥ 2 entrées) | diaporama auto (3,5 s), pause au survol, flèches + dots |
| `video` (.mp4/.webm) | `<video>` autoplay loop muted |
| `video` (.gif) | `<img>` (lecture auto native) |

Placez vos fichiers dans **`public/assets/projects/`**.

### Expériences
**`src/data/experience.ts`**

### Certifications
**`src/data/certifications.ts`**

### Stack technique (section Skills)
**`src/data/techStack.ts`**

### Traductions UI
**`src/i18n/translations.ts`** — toutes les chaînes de l'interface en FR et EN.

## Déploiement GitHub Pages

```bash
npm run build
# Pousser le contenu de dist/ sur la branche gh-pages
# ou configurer GitHub Actions pour déployer automatiquement
```

Le site est entièrement statique — compatible avec GitHub Pages, Netlify, Vercel, etc.
