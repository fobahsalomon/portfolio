import { ExternalLink, Code, Play } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { personalInfo } from "@/data/personalInfo";
import { getAllProjects } from "@/data/projects";
import SectionHeading from "@/components/ui-custom/SectionHeading";
import ProjectCard from "@/components/ui-custom/ProjectCard";
import ProjectMedia from "@/components/ui-custom/ProjectMedia";
import Reveal from "@/components/ui-custom/Reveal";

export default function ProjectsSection() {
  const { t, lang } = useLanguage();
  const allProjects = getAllProjects();
  const heroIndex = allProjects.findIndex((p) => p.featured);
  const heroProject = allProjects[heroIndex === -1 ? 0 : heroIndex];
  const rest = allProjects.filter((_, i) => i !== (heroIndex === -1 ? 0 : heroIndex));

  const hasGithub = heroProject.githubUrl !== null;
  const hasDemo = heroProject.demoUrl !== null;
  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `${t.projects.viewCode} — ${heroProject.title}`
  )}`;

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-10 bg-cream-dark">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeading label={t.projects.label} title={t.projects.title} accent={t.projects.titleAccent} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured hero card, spans full width */}
          <Reveal className="md:col-span-2">
            <article className="bg-paper border border-copper/[.18] rounded-[6px] overflow-hidden grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 sm:p-12 flex flex-col justify-center order-2 md:order-1">
                <span className="text-[0.65rem] uppercase tracking-[0.15em] text-copper">
                  {heroProject.category}
                </span>
                <h3 className="mt-3 font-serif font-bold text-[1.9rem] sm:text-[2.2rem] text-ink leading-tight">
                  {heroProject.title}
                </h3>
                <p className="mt-4 text-[0.9rem] text-ink/60 leading-relaxed">
                  {heroProject.description[lang]}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {heroProject.stack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-[0.7rem] bg-cream-dark text-copper">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-5">
                  {hasGithub ? (
                    <a
                      href={heroProject.githubUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.75rem] uppercase tracking-[0.1em] text-copper hover:text-ink transition-colors"
                    >
                      <Code className="w-3.5 h-3.5" />
                      {t.projects.viewCode}
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ) : (
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-1.5 text-[0.75rem] uppercase tracking-[0.1em] text-ink/50 hover:text-copper transition-colors"
                    >
                      <Code className="w-3.5 h-3.5" />
                      {t.projects.codeOnDemand}
                    </a>
                  )}
                  {hasDemo && (
                    <a
                      href={heroProject.demoUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.75rem] uppercase tracking-[0.1em] text-copper hover:text-ink transition-colors"
                    >
                      <Play className="w-3.5 h-3.5" />
                      {t.projects.viewDemo}
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  )}
                </div>
              </div>
              <div className="relative min-h-[260px] md:min-h-full order-1 md:order-2 bg-cream-dark">
                <ProjectMedia project={heroProject} fill scaleOnHover />
              </div>
            </article>
          </Reveal>

          {/* All remaining projects */}
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={(Math.min((i % 5) + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
