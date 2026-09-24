import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/resume";

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="Selected Work"
          title="Platforms & systems shipped to production"
          description="Enterprise and client work built under NDA — shown here as impact-focused case studies rather than public repos."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug text-foreground">
                    {project.title}
                  </h3>
                  <span className="whitespace-nowrap font-mono text-xs text-muted">
                    {project.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {project.org}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-foreground/85"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-2 px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
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
