import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { personal } from "@/data/resume";
import { ShieldCheck, Sparkles, Workflow } from "lucide-react";

const highlights = [
  {
    icon: Workflow,
    title: "Backend Architecture",
    description:
      "Multi-tenant RBAC, event-driven design, and RESTful APIs built to hold up under real production load.",
  },
  {
    icon: Sparkles,
    title: "AI / LLM Workflows",
    description:
      "Practical GenAI integrations — evidence auto-mapping, document extraction, and policy-aware automation.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability & Compliance",
    description:
      "Idempotent payment flows, async task pipelines, and systems built for regulated, audit-ready domains.",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="About"
          title="Backend engineering with product-level thinking"
          description={personal.summary}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
