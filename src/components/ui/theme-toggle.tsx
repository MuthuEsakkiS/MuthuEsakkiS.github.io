"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Deliberately setting state on mount: next-themes needs a client-only
  // render pass to avoid a server/client mismatch for the active theme icon.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border text-foreground/80 transition-colors duration-300 hover:border-accent hover:text-accent cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted ? (
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <Sun size={16} strokeWidth={2} />
            ) : (
              <Moon size={16} strokeWidth={2} />
            )}
          </motion.span>
        ) : (
          <span className="block h-4 w-4" />
        )}
      </AnimatePresence>
    </button>
  );
}
