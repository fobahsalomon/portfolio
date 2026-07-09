import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { personalInfo } from "@/data/personalInfo";

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: t.nav.about, hash: "#about" },
    { label: t.nav.skills, hash: "#skills" },
    { label: t.nav.projects, hash: "#projects" },
    { label: t.nav.experience, hash: "#experience" },
    { label: t.nav.certifications, hash: "#certifications" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F5EDE0]/95 backdrop-blur-[14px] border-b border-copper/[.18] py-3"
            : "py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-serif uppercase text-[1.15rem] tracking-[0.08em] text-ink hover:text-copper transition-colors"
          >
            {personalInfo.firstName}
            <span className="text-copper">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                className="text-[0.75rem] uppercase tracking-[0.15em] text-ink/65 hover:text-copper hover:opacity-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="text-[0.7rem] font-semibold tracking-[0.1em] text-ink/60 hover:text-copper transition-colors"
              aria-label="Toggle language"
            >
              {t.lang[lang === "fr" ? "en" : "fr"]}
            </button>
            <a
              href="#contact"
              className="px-5 py-2 text-[0.72rem] uppercase tracking-[0.15em] border border-[1.5px] border-copper text-copper hover:bg-copper hover:text-paper transition-all duration-300"
              style={{ borderWidth: "1.5px" }}
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-ink"
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[60] bg-ink transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-6 p-2 text-paper"
          aria-label="Fermer le menu"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-2xl uppercase tracking-[0.1em] text-paper/80 hover:text-copper-light transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-6 py-2.5 text-xs uppercase tracking-[0.15em] border border-copper-light text-copper-light hover:bg-copper-light hover:text-ink transition-colors"
          >
            {t.nav.contact}
          </a>
          <button
            onClick={toggleLang}
            className="mt-2 text-xs font-semibold tracking-[0.1em] text-paper/50"
          >
            {t.lang[lang === "fr" ? "en" : "fr"]}
          </button>
        </div>
      </div>
    </>
  );
}
