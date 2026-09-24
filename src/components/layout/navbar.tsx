"use client";

import { personal } from "@/data/resume";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function SocialLinks() {
  return (
    <>
      <a
        href={personal.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-foreground/70 transition-colors hover:text-accent"
      >
        <GithubIcon size={18} />
      </a>
      <a
        href={personal.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-foreground/70 transition-colors hover:text-accent"
      >
        <LinkedinIcon size={18} />
      </a>
    </>
  );
}

function ResumeButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={personal.resumeUrl}
      download
      className={`inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-85 ${className}`}
    >
      <FileDown size={14} />
      Resume
    </a>
  );
}

export function Navbar() {
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.querySelector(item.href),
    ).filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-background" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          ES<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="relative py-1">
              <a
                href={item.href}
                className={`text-sm transition-colors duration-300 hover:text-accent ${
                  activeId === item.href ? "text-accent" : "text-foreground/70"
                }`}
              >
                {item.label}
              </a>
              {activeId === item.href ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 -bottom-1 h-px bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <SocialLinks />
          <ThemeToggle />
          <ResumeButton />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="px-6 py-4">
              <ul className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block text-sm text-foreground/80 transition-colors duration-300 hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-4">
                <SocialLinks />
                <ThemeToggle />
                <ResumeButton className="ml-auto" />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
