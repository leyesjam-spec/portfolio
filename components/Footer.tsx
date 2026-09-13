import { site } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:text-left">
        <p>
          © {year} {site.name}
        </p>
        <p>{site.title}</p>
      </div>
    </footer>
  );
}
