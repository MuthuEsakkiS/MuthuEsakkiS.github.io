import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
};

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {kicker}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}
