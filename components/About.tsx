import { about } from "@/lib/data";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
        {about}
      </p>
    </Section>
  );
}
