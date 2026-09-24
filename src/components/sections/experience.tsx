import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/resume";
import { Briefcase, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="Experience"
          title="Where I've built things"
          description="4.5+ years delivering production backends across compliance, healthcare, hospitality, EdTech, and banking."
        />

        <div className="relative mt-12">
          <div className="absolute left-1.75 top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block" />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <Reveal key={job.company} delay={index * 0.08}>
                <div className="relative sm:pl-10">
                  <span className="absolute left-0 top-1.5 hidden h-4 w-4 rounded-full border-2 border-accent bg-background sm:block" />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.role} · {job.company}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-muted">
                      {job.start} — {job.end}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                    <MapPin size={13} />
                    {job.location}
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-foreground/85"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
