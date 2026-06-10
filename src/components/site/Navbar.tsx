"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";

const megaMenu = [
  {
    title: "Learning",
    items: ["LMS", "Virtual Classrooms", "Assessment Engine", "Course Builder"],
  },
  {
    title: "Operations",
    items: ["CRM", "Digital Enrollment", "Smart Attendance", "Digital Finance"],
  },
  {
    title: "Engagement",
    items: ["Mobile App", "Parent Portal", "Unified Communication", "Notifications"],
  },
  {
    title: "Build & Extend",
    items: ["Website Builder", "Integration Tools", "AI Proctoring", "Resources"],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-ink/5 px-4 py-2.5 transition-all md:px-6",
            scrolled ? "glass shadow-soft" : "bg-white/70 backdrop-blur-md",
          )}
        >
          <a href="#" className="flex items-center gap-2 font-bold">
            <span className="grid size-9 place-content-center rounded-xl bg-gradient-to-br from-emerald to-gold text-white shadow-soft">
              <Sparkles className="size-4" />
            </span>
            <span className="text-xl tracking-tight text-ink">Guruved</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            <a className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 hover:bg-muted" href="#why">
              Why Guruved
            </a>
            <div
              className="relative"
              onMouseEnter={() => setMenu(true)}
              onMouseLeave={() => setMenu(false)}
            >
              <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/80 hover:bg-muted">
                Solutions <ChevronDown className="size-4" />
              </button>
              <AnimatePresence>
                {menu && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-3"
                  >
                    <div className="grid grid-cols-4 gap-6 rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
                      {megaMenu.map((col) => (
                        <div key={col.title}>
                          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald">
                            {col.title}
                          </div>
                          <ul className="space-y-2">
                            {col.items.map((it) => (
                              <li key={it}>
                                <a className="text-sm text-ink/75 hover:text-emerald" href="#">
                                  {it}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 hover:bg-muted" href="#about">
              Company
            </a>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button className="rounded-full px-4 py-2 text-sm font-semibold text-ink/80 hover:bg-muted">
              Request Live Demo
            </button>
            <CTAButton tone="gold" size="default" className="h-10 px-5">
              Get Started Free
            </CTAButton>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="grid size-10 place-content-center rounded-full bg-muted lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 rounded-3xl border border-ink/5 bg-white p-5 shadow-soft lg:hidden"
            >
              <a className="block py-2 font-medium" href="#why">Why Guruved</a>
              <a className="block py-2 font-medium" href="#modules">Solutions</a>
              <a className="block py-2 font-medium" href="#about">Company</a>
              <div className="mt-3 flex flex-col gap-2 border-t border-ink/5 pt-3">
                <button className="rounded-full bg-muted px-4 py-2.5 text-sm font-semibold">
                  Request Live Demo
                </button>
                <CTAButton tone="gold" size="default" className="h-11">
                  Get Started Free
                </CTAButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
