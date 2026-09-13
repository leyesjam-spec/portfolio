"use client";

import Image from "next/image";
import { site } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

export function Hero() {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="home"
      ref={ref}
      className="scroll-mt-16 bg-navy-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div
        className={`mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-10 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 md:flex-row md:items-center md:justify-between ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-wider text-navy">
            {site.title}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {site.tagline}
          </p>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4 text-navy"
              aria-hidden="true"
            >
              <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.2" />
            </svg>
            {site.location}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-800"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-navy px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-2xl shadow-lg ring-4 ring-white sm:h-56 sm:w-56 md:h-64 md:w-64">
          <Image
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            fill
            sizes="(min-width: 768px) 256px, (min-width: 640px) 224px, 176px"
            className="object-cover object-[center_18%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
