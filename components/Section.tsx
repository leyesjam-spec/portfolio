"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = "" }: SectionProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 ${className}`}
    >
      <div
        className={`mx-auto w-full max-w-5xl transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
          {title}
        </h2>
        <div className="mt-3 h-1 w-12 rounded-full bg-navy" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
