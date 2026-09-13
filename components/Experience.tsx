import { experience } from "@/lib/data";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience" className="bg-navy-50">
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
            <p className="text-sm font-medium text-navy">{item.dates}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">
              {item.role}
            </h3>
            <p className="text-sm text-slate-500">{item.organization}</p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {item.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-navy ring-1 ring-navy/15"
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
