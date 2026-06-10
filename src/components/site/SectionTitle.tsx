"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionTitle({ eyebrow, title, subtitle, align = "center", className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-emerald-soft/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-muted-ink text-balance">{subtitle}</p>
      )}
    </motion.div>
  );
}
