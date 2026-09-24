import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="Tech Stack"
          title="Tools I use to ship reliable software"
          description="A pragmatic toolkit spanning backend frameworks, data stores, cloud infrastructure, and AI integrations."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/5">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface-2 px-3 py-1 text-sm text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
