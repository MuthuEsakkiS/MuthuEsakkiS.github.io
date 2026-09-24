"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { personal, stats } from "@/data/resume";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-16 pb-16 sm:pt-20 sm:pb-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to new opportunities
          </div>

          <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-medium text-gradient sm:text-2xl">
            {personal.role}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {personal.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-sm"
            >
              <Mail size={16} />
              Get in touch
            </motion.a>
            <motion.a
              href={personal.resumeUrl}
              download
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <FileDown size={16} />
              Download Resume
            </motion.a>
            <a
              href="#experience"
              className="group inline-flex items-center gap-1.5 px-2 py-3 text-sm font-medium text-muted transition-colors duration-300 hover:text-accent"
            >
              View experience
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 text-center sm:gap-10"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs uppercase tracking-wide text-muted">
                {stat.label}
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
