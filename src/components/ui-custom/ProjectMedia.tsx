import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

const AUTO_DELAY = 3500; // ms entre chaque slide

interface Props {
  project: Project;
  fill?: boolean;
  scaleOnHover?: boolean;
}

export default function ProjectMedia({ project, fill = false, scaleOnHover = false }: Props) {
  const imgs = project.images && project.images.length > 1 ? project.images : null;
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const hoverScale = scaleOnHover
    ? "group-hover:scale-[1.04] transition-transform duration-500"
    : "";
  const baseImgClass = `w-full h-full object-cover ${fill ? "absolute inset-0" : ""} ${hoverScale}`;

  // Auto-advance pour le carousel
  useEffect(() => {
    if (!imgs || paused) return;
    timerRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % imgs.length);
    }, AUTO_DELAY);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [imgs, paused, imgs?.length]);

  const goTo = (i: number) => {
    setSlide(i);
    // Réinitialise le timer après un clic manuel
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % (imgs?.length ?? 1));
    }, AUTO_DELAY);
  };

  // ── Video / GIF ──────────────────────────────────────────────────────────
  if (project.video) {
    const isGif = project.video.toLowerCase().endsWith(".gif");
    if (isGif) {
      return <img src={project.video} alt={project.title} className={baseImgClass} />;
    }
    return (
      <video
        src={project.video}
        poster={project.image}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover ${fill ? "absolute inset-0" : ""}`}
      />
    );
  }

  // ── Carousel ─────────────────────────────────────────────────────────────
  if (imgs) {
    const wrapClass = fill
      ? "absolute inset-0 overflow-hidden"
      : "relative w-full h-full overflow-hidden";

    return (
      <div
        className={wrapClass}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <img
          src={imgs[slide]}
          alt={`${project.title} — ${slide + 1}`}
          className={`w-full h-full object-cover transition-all duration-500 ${hoverScale}`}
          onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
        />

        {/* Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); goTo((slide - 1 + imgs.length) % imgs.length); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-ink/70 text-paper hover:bg-ink transition-colors z-10"
          aria-label="Image précédente"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); goTo((slide + 1) % imgs.length); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-ink/70 text-paper hover:bg-ink transition-colors z-10"
          aria-label="Image suivante"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Dots + barre de progression */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === slide ? "w-5 bg-paper" : "w-1.5 bg-paper/40 hover:bg-paper/70"
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // ── Single image ──────────────────────────────────────────────────────────
  return (
    <img
      src={project.image}
      alt={project.title}
      className={baseImgClass}
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
  );
}
