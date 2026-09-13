import { isPlaceholderUrl, site } from "@/lib/data";
import { Section } from "./Section";

const contactItems = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    label: "Location",
    value: site.location,
  },
] as const;

const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
] as const;

export function Contact() {
  return (
    <Section id="contact" title="Contact" className="bg-navy-50">
      <div className="grid gap-4 sm:grid-cols-2">
        {contactItems.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-navy">
              {item.label}
            </p>
            {"href" in item && item.href ? (
              <a
                href={item.href}
                className="mt-2 block text-sm text-slate-700 underline-offset-2 hover:text-navy hover:underline"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-2 text-sm text-slate-700">{item.value}</p>
            )}
          </div>
        ))}
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-navy">
            Social
          </p>
          <ul className="mt-2 flex flex-wrap gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  {...(isPlaceholderUrl(social.href)
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="text-sm font-medium text-slate-700 underline-offset-2 hover:text-navy hover:underline"
                  title={
                    isPlaceholderUrl(social.href)
                      ? `Add your ${social.label} URL in lib/data.ts`
                      : undefined
                  }
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
