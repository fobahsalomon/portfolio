import { ExternalLink, Code, Play } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { personalInfo } from "@/data/personalInfo";
import type { Project } from "@/data/projects";
import ProjectMedia from "@/components/ui-custom/ProjectMedia";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, lang } = useLanguage();

  const emailSubject = `${t.projects.viewCode} — ${project.title}`;
  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(emailSubject)}`;

  const hasGithub = project.githubUrl !== null;
  const hasDemo = project.demoUrl !== null;

  return (
    <article className="group bg-paper border border-copper/[.18] rounded-[6px] overflow-hidden hover:border-copper/40 hover:shadow-lg transition-all duration-300">
      {/* Media (image / video / carousel) */}
      <div className="relative h-[200px] overflow-hidden bg-cream-dark">
        <span className="absolute top-3 left-3 z-10 bg-ink text-paper text-[0.6rem] uppercase tracking-[0.1em] px-2.5 py-1">
          {project.category}
        </span>
        <ProjectMedia project={project} scaleOnHover />
      </div>

      {/* Body */}
      <div className="px-6 py-6 sm:px-7">
        <h3 className="font-serif font-bold text-[1.35rem] text-ink group-hover:text-copper transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="mt-2 text-[0.82rem] text-ink/60 leading-relaxed line-clamp-3">
          {project.description[lang]}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[0.7rem] bg-cream-dark text-copper"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-5">
          {hasGithub ? (
            <a
              href={project.githubUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-[0.75rem] uppercase tracking-[0.1em] text-copper hover:text-ink transition-colors"
            >
              <Code className="w-3.5 h-3.5" />
              {t.projects.viewCode}
              <ExternalLink className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-60 group-hover/link:translate-x-0 transition-all" />
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
              href={project.demoUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-[0.75rem] uppercase tracking-[0.1em] text-copper hover:text-ink transition-colors"
            >
              <Play className="w-3.5 h-3.5" />
              {t.projects.viewDemo}
              <ExternalLink className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-60 group-hover/link:translate-x-0 transition-all" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
