import { useLanguage } from "@/i18n/LanguageContext";
import { personalInfo } from "@/data/personalInfo";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-12 sm:py-14 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">
        <a href="#" className="font-serif uppercase text-[1.05rem] tracking-[0.08em] text-paper">
          {personalInfo.firstName}
          <span className="text-copper-light">.</span>
        </a>

        <p className="text-[0.7rem] text-paper/40 uppercase tracking-[0.1em] order-3 sm:order-2">
          &copy; {new Date().getFullYear()} {personalInfo.fullName}. {t.footer.rights}
        </p>

        <div className="flex items-center gap-7 order-2 sm:order-3">
          <a
            href="#projects"
            className="text-[0.65rem] uppercase tracking-[0.15em] text-paper/40 hover:text-copper-light transition-colors"
          >
            {t.nav.projects}
          </a>
          <a
            href="#contact"
            className="text-[0.65rem] uppercase tracking-[0.15em] text-paper/40 hover:text-copper-light transition-colors"
          >
            {t.nav.contact}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.65rem] uppercase tracking-[0.15em] text-paper/40 hover:text-copper-light transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
