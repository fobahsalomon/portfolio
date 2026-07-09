import { ExternalLink, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { certifications } from "@/data/certifications";
import SectionHeading from "@/components/ui-custom/SectionHeading";
import Reveal from "@/components/ui-custom/Reveal";

export default function CertificationsSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="certifications" className="py-24 sm:py-32 px-6 sm:px-10 bg-ink">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading
          label={t.certifications.label}
          title={t.certifications.title}
          accent={t.certifications.titleAccent}
          dark
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={(Math.min((i % 5) + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full bg-paper/[.04] border border-paper/[.1] rounded-[6px] p-7 hover:bg-paper/[.07] hover:-translate-y-[3px] transition-all duration-300"
              >
                <span className="inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.15em] text-copper-light">
                  <span className="w-5 h-px bg-copper-light/50" />
                  {cert.issuer}
                </span>
                <h3 className="mt-3 font-serif font-semibold text-[1.15rem] text-paper leading-snug">
                  {cert.name}
                </h3>
                <p className="mt-2 text-[0.78rem] text-paper/50 leading-relaxed">
                  {cert.description[lang]}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[0.65rem] uppercase tracking-[0.1em] text-paper/40">{cert.year}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-paper/30 group-hover:text-copper-light transition-colors" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Banner */}
        <Reveal delay={3}>
          <div className="mt-10 bg-copper/[.12] border border-copper/[.3] rounded-[6px] p-8 sm:p-10 flex flex-wrap items-center gap-6">
            <div className="w-14 h-14 flex-shrink-0 bg-copper flex items-center justify-center rounded-[4px]">
              <Award className="w-6 h-6 text-paper" />
            </div>
            <p className="text-[0.9rem] text-paper/70 leading-relaxed">
              <strong className="text-paper font-semibold">{t.certifications.bannerStrong}</strong>{" "}
              {t.certifications.bannerText}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
