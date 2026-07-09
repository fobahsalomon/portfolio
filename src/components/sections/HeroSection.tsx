import { Github, Mail, FileText } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { personalInfo } from "@/data/personalInfo";

export default function HeroSection() {
  const { t, lang } = useLanguage();

  const socials = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream" style={{ minHeight: "680px" }}>
      {/* Background watermark text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-serif font-bold uppercase leading-none whitespace-nowrap"
        style={{
          fontSize: "18vw",
          color: "transparent",
          WebkitTextStroke: "1px rgba(139,99,71,0.14)",
        }}
      >
        {t.hero.script}
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-copper/[.06] rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-copper/[.05] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] w-full mx-auto px-6 sm:px-10 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Left: text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-copper font-medium">
              <span className="w-8 h-px bg-copper/50" />
              {t.hero.label}
            </span>

            <h1
              className="mt-6 font-serif font-bold text-ink leading-[1.05]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
            >
              {personalInfo.firstName} <em className="italic text-copper">{personalInfo.lastName}</em>
            </h1>

            <p
              className="mt-2 font-script text-copper/70"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)" }}
            >
              {t.hero.script}
            </p>

            <p className="mt-6 text-[0.95rem] leading-[1.75] text-ink/65 max-w-[480px] mx-auto lg:mx-0">
              {personalInfo.tagline[lang]}
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center justify-center lg:justify-start gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-[38px] h-[38px] flex items-center justify-center border border-copper/[.35] text-copper hover:bg-copper hover:text-paper transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3 bg-ink text-paper text-[0.75rem] uppercase tracking-[0.15em] hover:bg-copper transition-colors duration-300"
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href={personalInfo.cvPdf}
                download
                className="inline-flex items-center gap-2 px-7 py-3 border border-copper/40 text-ink text-[0.75rem] uppercase tracking-[0.15em] hover:border-copper hover:text-copper transition-colors duration-300"
              >
                <FileText className="w-3.5 h-3.5" />
                {t.hero.ctaCv}
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px]">
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-copper/25 rounded-[4px] -z-10" />
              <div className="w-full h-full rounded-[4px] overflow-hidden bg-cream-dark">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center text-ink/30 gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          <span class="text-xs font-medium uppercase tracking-wide">${lang === "fr" ? "Votre photo" : "Your photo"}</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 left-4 bg-ink text-paper px-4 py-2.5 text-[0.65rem] uppercase tracking-[0.15em]">
                {t.hero.badge}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-copper/60 hover:text-copper transition-colors animate-bounce-hint"
        aria-label={t.hero.scrollHint}
      >
        <span className="text-[0.6rem] uppercase tracking-[0.2em]">{t.hero.scrollHint}</span>
        <span className="w-px h-8 bg-copper/40" />
      </a>
    </section>
  );
}
