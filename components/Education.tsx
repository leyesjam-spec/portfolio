import { education } from "@/lib/data";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="relative border-l-2 border-navy pl-6">
        <span
          className="absolute top-1.5 -left-[7px] h-3 w-3 rounded-full bg-navy"
          aria-hidden="true"
        />
        <p className="text-sm font-medium text-navy">{education.years}</p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">
          {education.degree}
        </h3>
        <p className="text-sm text-slate-500">{education.school}</p>
      </div>
    </Section>
  );
}
