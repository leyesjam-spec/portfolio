"use client";

import { useState } from "react";
import { navLinks, sectionIds, site } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  function handleNavClick() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-navy sm:text-base"
        >
          {site.shortName}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-navy-50 text-navy"
                      : "text-slate-600 hover:bg-slate-50 hover:text-navy"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-navy md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`border-t border-slate-200 bg-white md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="mx-auto flex max-w-5xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={handleNavClick}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? "bg-navy-50 text-navy"
                      : "text-slate-600 hover:bg-slate-50 hover:text-navy"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
