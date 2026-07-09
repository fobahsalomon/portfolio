import { GraduationCap, MapPin, Mail, CheckCircle2, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { personalInfo } from "@/data/personalInfo";
import { techStack } from "@/data/techStack";
import { TechIcon } from "@/data/techIcons";
import SectionHeading from "@/components/ui-custom/SectionHeading";
import Reveal from "@/components/ui-custom/Reveal";

export default function AboutSection() {
  const { t, lang } = useLanguage();
  const allSkills = Array.from(new Set(techStack.flatMap((c) => c.tools)));

  const infoRows = [
    { label: t.about.location, value: personalInfo.location, icon: MapPin },
    { label: t.about.email, value: personalInfo.email, icon: Mail },
    { label: t.about.availability, value: personalInfo.availability[lang], icon: CheckCircle2 },
    { label: t.about.languages, value: `${t.about.langFrench} · ${t.about.langEnglish}`, icon: Globe },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 bg-cream">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <div>
          <SectionHeading label={t.about.label} title={t.about.title} accent={t.about.titleAccent} />

          <div className="space-y-5">
            {personalInfo.bio[lang].map((p, i) => (
              <Reveal key={i} delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
                <p className="text-[0.95rem] leading-[1.8] text-ink/65">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.08em] border border-copper/[.3] text-copper hover:bg-copper hover:text-paper transition-colors duration-300"
                >
                  <TechIcon tool={skill} className="w-3.5 h-3.5" />
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right */}
        <div>
          <Reveal delay={2}>
            <div className="bg-paper border border-copper/[.18] rounded-[6px] p-8 sm:p-10">
              {infoRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-4 py-4 border-b border-copper/[.12] last:border-b-0 last:pb-0 first:pt-0"
                >
                  <row.icon className="w-4 h-4 text-copper flex-shrink-0" />
                  <span className="text-[0.65rem] uppercase tracking-[0.12em] text-copper min-w-[110px]">
                    {row.label}
                  </span>
                  <span className="text-[0.88rem] text-ink/75">{row.value}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-6 bg-ink px-7 py-6 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-copper flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-paper" />
              </div>
              <div>
                <p className="text-[0.75rem] uppercase tracking-[0.1em] text-paper">
                  {t.about.degree}
                </p>
                <p className="text-[0.7rem] text-paper/50 mt-0.5">
                  {t.about.school} — {t.about.period}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
