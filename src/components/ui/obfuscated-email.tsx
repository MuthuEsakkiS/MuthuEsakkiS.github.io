"use client";

import { Mail } from "lucide-react";
import { type ReactNode, useEffect, useState } from "react";

// Kept as two separate constants (rather than one literal address string) so
// the address never appears as a single scrapable token in either the
// server-rendered HTML or the shipped JS source — it's only assembled here,
// in the browser, at runtime. This isn't bulletproof (nothing shown to a
// human is), but it stops the overwhelming majority of low-effort bots that
// scan static HTML/PDF text for email patterns.
const EMAIL_USER = "esakkimuthu.sivaraman";
const EMAIL_DOMAIN = "gmail.com";
const DEFAULT_SUBJECT = "Job opportunity / Let's connect";

function getEmail() {
  return `${EMAIL_USER}@${EMAIL_DOMAIN}`;
}

function getMailtoHref(subject: string) {
  return `mailto:${getEmail()}?subject=${encodeURIComponent(subject)}`;
}

/** A small pulsing placeholder shown in place of the address before reveal. */
export function EmailSkeleton() {
  return (
    <span
      aria-hidden
      className="inline-block h-[1em] w-[13ch] max-w-full animate-pulse rounded-full bg-current/15 align-middle"
    />
  );
}

/**
 * Hydration-safe hook (same pattern as ThemeToggle's `mounted` flag): the
 * real address is only assembled after mount, never during the static
 * export/SSR pass.
 */
function useRevealedEmail(): { ready: boolean; email: string } {
  const [ready, setReady] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setReady(true), []);

  return { ready, email: ready ? getEmail() : "" };
}

type ObfuscatedEmailProps = {
  className?: string;
  subject?: string;
  "aria-label"?: string;
  /**
   * Omit to reveal the address itself as the link text (with a skeleton
   * placeholder before mount). Pass a fixed node (e.g. an icon, or
   * "Email me") for a static label instead.
   */
  children?: ReactNode;
};

export function ObfuscatedEmail({
  className,
  subject = DEFAULT_SUBJECT,
  "aria-label": ariaLabel,
  children,
}: ObfuscatedEmailProps) {
  const { ready, email } = useRevealedEmail();

  const content = children ?? (ready ? email : <EmailSkeleton />);

  return (
    <a
      href={ready ? getMailtoHref(subject) : undefined}
      aria-disabled={!ready}
      aria-label={ariaLabel}
      rel="nofollow"
      className={className}
    >
      {content}
    </a>
  );
}

/**
 * Self-contained "Email" contact-card tile. Kept as its own client component
 * (rather than a render-prop passed in from a Server Component) because
 * functions cannot cross the server → client boundary as props.
 */
export function EmailContactCard({ className }: { className?: string }) {
  const { ready, email } = useRevealedEmail();

  return (
    <a
      href={ready ? getMailtoHref(DEFAULT_SUBJECT) : undefined}
      aria-disabled={!ready}
      rel="nofollow"
      className={className}
    >
      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 text-accent">
        <Mail size={16} />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-muted">Email</p>
        <p className="truncate text-sm font-medium text-foreground">
          {ready ? email : <EmailSkeleton />}
        </p>
      </div>
    </a>
  );
}
