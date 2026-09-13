import { experience } from "@/lib/data";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience" className="bg-navy-50 dark:bg-slate-900">
      <ol className="space-y-8">
        {experience.map((item) => (
          <li
            key={`${item.role}-${item.organization}`}
            className="relative border-l-2 border-navy pl-6"
          >
            <span
              className="absolute top-1.5 -left-[7px] h-3 w-3 rounded-full bg-navy"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-navy dark:text-navy-200">{item.dates}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
              {item.role}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {item.organization}
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {item.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-navy ring-1 ring-navy/15 dark:bg-slate-800 dark:text-navy-200 dark:ring-navy-200/20"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
