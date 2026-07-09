import { useLanguage } from "@/i18n/LanguageContext";
import { techStack } from "@/data/techStack";
import { TechIcon } from "@/data/techIcons";
import SectionHeading from "@/components/ui-custom/SectionHeading";
import Reveal from "@/components/ui-custom/Reveal";

export default function SkillsSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-10 bg-paper">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading label={t.skills.label} title={t.skills.title} accent={t.skills.titleAccent} centered />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category, i) => (
            <Reveal key={category.category[lang]} delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
              <div className="h-full bg-cream border border-copper/[.18] rounded-[6px] p-8">
                <h3 className="text-[0.65rem] uppercase tracking-[0.15em] text-copper pb-4 mb-5 border-b border-copper/[.18]">
                  {category.category[lang]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[0.72rem] bg-paper border border-copper/[.18] text-ink/70 hover:bg-copper hover:text-paper hover:border-copper transition-colors duration-300"
                    >
                      <TechIcon tool={tool} className="w-3.5 h-3.5" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
