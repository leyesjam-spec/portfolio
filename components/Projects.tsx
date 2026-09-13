import { projects } from "@/lib/data";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={`${project.title}-${project.dates}`}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-medium text-navy">{project.title}</p>
              {project.badge ? (
                <span className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-medium text-navy">
                  {project.badge}
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              {project.role} · {project.dates}
            </p>
            {project.name ? (
              <h3 className="mt-3 text-base font-semibold leading-snug text-slate-900">
                {project.name}
              </h3>
            ) : null}
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              {project.description}
            </p>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center justify-center rounded-md bg-navy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-800"
              >
                Live Site
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
