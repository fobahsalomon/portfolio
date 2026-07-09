import { useLanguage } from "@/i18n/LanguageContext";
import { getAllProjects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { techStack } from "@/data/techStack";
import { experiences } from "@/data/experience";
import Reveal from "@/components/ui-custom/Reveal";

export default function StatsSection() {
  const { t } = useLanguage();

  const technologiesCount = new Set(techStack.flatMap((c) => c.tools)).size;
  const professionalExperiences = experiences.filter((e) => e.id !== "ase-bachelor").length;

  const stats = [
    { value: getAllProjects().length, label: t.stats.projects },
    { value: certifications.length, label: t.stats.certifications },
    { value: technologiesCount, label: t.stats.technologies },
    { value: professionalExperiences, label: t.stats.experiences },
  ];

  return (
    <section className="bg-ink py-16 sm:py-20 px-6 sm:px-10">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-y-10">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)}
            className={`flex-1 min-w-[160px] max-w-[240px] text-center px-6 ${
              i !== stats.length - 1 ? "sm:border-r sm:border-paper/15" : ""
            }`}
          >
            <p className="font-serif font-bold text-paper" style={{ fontSize: "3.5rem", lineHeight: 1 }}>
              {stat.value}
              <span className="text-copper-light">+</span>
            </p>
            <p className="mt-3 text-[0.65rem] uppercase tracking-[0.15em] text-paper/60">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
