import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <span className="font-mono text-sm uppercase tracking-[0.25em] text-accent">
        404
      </span>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </div>
  );
}
