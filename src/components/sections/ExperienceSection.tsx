import { useLanguage } from "@/i18n/LanguageContext";
import { experiences } from "@/data/experience";
import SectionHeading from "@/components/ui-custom/SectionHeading";
import Reveal from "@/components/ui-custom/Reveal";

export default function ExperienceSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-10 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading label={t.experience.label} title={t.experience.title} accent={t.experience.titleAccent} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
              <div className="relative h-full bg-ink rounded-[6px] p-9 overflow-hidden hover:-translate-y-[5px] transition-transform duration-300">
                <span
                  aria-hidden
                  className="absolute -top-3 right-3 font-serif font-bold text-paper/[.06] leading-none select-none"
                  style={{ fontSize: "6rem" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <p className="text-[0.6rem] uppercase tracking-[0.15em] text-copper-light">
                    {exp.period[lang]}
                  </p>
                  <p className="mt-2 text-[1.05rem] text-paper/60">{exp.type[lang]}</p>
                  <h3 className="mt-1 font-serif font-bold text-[1.7rem] text-paper leading-tight">
                    {exp.company}
                  </h3>
                  <p className="mt-3 text-[0.82rem] leading-[1.7] text-paper/55">
                    {exp.description[lang]}
                  </p>
                  <span className="mt-5 inline-block px-3 py-1 text-[0.6rem] uppercase tracking-[0.12em] border border-copper-light/40 text-copper-light">
                    {exp.role[lang]}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
