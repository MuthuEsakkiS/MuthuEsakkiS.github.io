import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ObfuscatedEmail, EmailContactCard } from "@/components/ui/obfuscated-email";
import { personal } from "@/data/resume";
import { FileDown, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const socialMethods = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "esakkimuthusivaraman",
    href: personal.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "MuthuEsakkiS",
    href: personal.github,
  },
];

const cardClassName =
  "flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/5";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="Contact"
          title="Let's build something reliable together"
          description="Open to backend / product engineering roles and interesting freelance work. The fastest way to reach me is email."
        />

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface p-10 text-center">
            <div className="inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={14} />
              {personal.location} (current) · Open to opportunities anywhere
            </div>
            <ObfuscatedEmail className="text-2xl font-semibold text-gradient sm:text-3xl" />
            <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
              <ObfuscatedEmail className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5">
                <Mail size={16} />
                Email me
              </ObfuscatedEmail>
              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <FileDown size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-3">
          <Reveal delay={0}>
            <EmailContactCard className={cardClassName} />
          </Reveal>

          {socialMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Reveal key={method.label} delay={(index + 1) * 0.06}>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                >
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 text-accent">
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-muted">
                      {method.label}
                    </p>
                    <p className="truncate text-sm font-medium text-foreground">
                      {method.value}
                    </p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
