import { personal } from "@/data/resume";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-xs text-muted">
          © {year} {personal.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
