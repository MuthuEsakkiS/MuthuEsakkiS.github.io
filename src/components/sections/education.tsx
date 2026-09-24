import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { education } from "@/data/resume";
import { GraduationCap, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="Education" title="Academic background" />

        <div className="mx-auto mt-12 max-w-2xl">
          {education.map((item) => (
            <Reveal key={item.school}>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
                <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 text-accent">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                    <MapPin size={12} />
                    {item.location}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
