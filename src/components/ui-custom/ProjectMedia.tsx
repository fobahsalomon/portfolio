import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { Project } from "@/data/projects";

const AUTO_DELAY = 5500;

interface Props {
  project: Project;
  fill?: boolean;
  scaleOnHover?: boolean;
}

export default function ProjectMedia({ project, fill = false, scaleOnHover = false }: Props) {
  const imgs = project.images && project.images.length > 1 ? project.images : null;
  const [slide, setSlide]           = useState(0);
  const [hovered, setHovered]       = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx]   = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const lightboxImages = imgs ?? [project.image];
  const isVideo = !!project.video && !project.video.toLowerCase().endsWith(".gif");

  // ── Auto-avance carousel ─────────────────────────────────────────────────
  const startTimer = (len: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setSlide((s) => (s + 1) % len), AUTO_DELAY);
  };

  useEffect(() => {
    if (!imgs || hovered) return;
    startTimer(imgs.length);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [imgs, hovered]);

  const goTo = (i: number) => {
    setSlide(i);
    if (imgs) startTimer(imgs.length);
  };

  // ── Clavier + scroll lock (lightbox) ─────────────────────────────────────
  useEffect(() => {
    if (!lightboxOpen) return;
    const len = lightboxImages.length;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setLightboxOpen(false); return; }
      if (len > 1) {
        if (e.key === "ArrowRight") setLightboxIdx((i) => (i + 1) % len);
        if (e.key === "ArrowLeft")  setLightboxIdx((i) => (i - 1 + len) % len);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, lightboxImages.length]);

  const openLightbox = (idx: number) => { setLightboxIdx(idx); setLightboxOpen(true); };

  // ── Lightbox (style Bing) ─────────────────────────────────────────────────
  // - Clic sur le fond sombre → ferme
  // - Clic sur l'image        → ne ferme PAS
  // - X toujours visible en haut à droite
  // - Flèches sur les côtés du fond sombre
  const lightbox = lightboxOpen ? (
    <div
      className="lightbox-overlay fixed inset-0 z-[9999] bg-black/88 flex items-center justify-center"
      onClick={() => setLightboxOpen(false)}
    >
      {/* ── Bouton fermer — haut-droite du viewport ── */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
        className="absolute top-5 right-5 z-20 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/12 rounded-full transition-all duration-150"
        aria-label="Fermer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* ── Flèches — côtés du viewport (pas sur l'image) ── */}
      {!isVideo && lightboxImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i - 1 + lightboxImages.length) % lightboxImages.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-150"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i + 1) % lightboxImages.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-150"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Compteur */}
          <span className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-white/40 text-[0.72rem] tracking-[0.12em]">
            {lightboxIdx + 1} / {lightboxImages.length}
          </span>
        </>
      )}

      {/* ── Image / Vidéo — stopPropagation : clic ici ne ferme pas ── */}
      <div
        className="lightbox-img relative"
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo ? (
          <video
            src={project.video}
            poster={project.image}
            autoPlay loop muted playsInline
            className="max-h-[88vh] max-w-[80vw] shadow-2xl"
          />
        ) : (
          <img
            src={lightboxImages[lightboxIdx]}
            alt={project.title}
            draggable={false}
            className="max-h-[88vh] max-w-[80vw] object-contain shadow-2xl select-none"
          />
        )}
      </div>
    </div>
  ) : null;

  // ── Hint zoom (loupe au survol) ──────────────────────────────────────────
  const zoomHint = (
    <div className="absolute top-2 right-2 w-6 h-6 bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 pointer-events-none">
      <ZoomIn className="w-3.5 h-3.5" />
    </div>
  );

  // ── Classes de base ──────────────────────────────────────────────────────
  const wrapBase = fill ? "absolute inset-0" : "relative w-full h-full";
  const imgClass = `w-full h-full object-cover object-center ${
    scaleOnHover ? "group-hover:scale-[1.04] transition-transform duration-500" : ""
  }`;

  // ── Video / GIF ──────────────────────────────────────────────────────────
  if (project.video) {
    const isGif = project.video.toLowerCase().endsWith(".gif");
    return (
      <>
        <div className={`${wrapBase} group cursor-zoom-in overflow-hidden`} onClick={() => openLightbox(0)}>
          {isGif
            ? <img src={project.video} alt={project.title} className={imgClass} />
            : <video src={project.video} poster={project.image} autoPlay loop muted playsInline className="w-full h-full object-cover object-center" />
          }
          {zoomHint}
        </div>
        {lightbox}
      </>
    );
  }

  // ── Carousel ──────────────────────────────────────────────────────────────
  if (imgs) {
    return (
      <>
        <div
          className={`${wrapBase} group overflow-hidden cursor-zoom-in`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => openLightbox(slide)}
        >
          <img
            key={`${project.id}-${slide}`}
            src={imgs[slide]}
            alt={`${project.title} — ${slide + 1}`}
            className="slide-fade-in w-full h-full object-cover object-center"
            onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
          />

          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

          {zoomHint}

          {/* Flèches carousel — visibles au survol */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goTo((slide - 1 + imgs.length) % imgs.length); }}
            className={`absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/40 text-white hover:bg-black/65 transition-all duration-200 z-10 ${
              hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
            }`}
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goTo((slide + 1) % imgs.length); }}
            className={`absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/40 text-white hover:bg-black/65 transition-all duration-200 z-10 ${
              hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"
            }`}
            aria-label="Image suivante"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {imgs.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); goTo(i); }}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === slide ? "w-5 bg-white" : "w-[3px] bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </div>
        {lightbox}
      </>
    );
  }

  // ── Image unique ──────────────────────────────────────────────────────────
  return (
    <>
      <div className={`${wrapBase} group cursor-zoom-in overflow-hidden`} onClick={() => openLightbox(0)}>
        <img
          src={project.image}
          alt={project.title}
          className={imgClass}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full flex items-center justify-center text-ink/25">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                </div>
              `;
            }
          }}
        />
        {zoomHint}
      </div>
      {lightbox}
    </>
  );
}
