"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  mockup: React.ReactNode;
  reverse?: boolean;
}

export function FeatureCard({ index, eyebrow, title, description, bullets, mockup, reverse }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20",
        reverse && "lg:[&>div:first-child]:order-2",
      )}
    >
      <div className="relative">
        <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-radial-gold opacity-60" />
        {mockup}
      </div>
      <div>
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-content-center rounded-full bg-emerald text-sm font-bold text-white">
            0{index}
          </span>
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald">
            {eyebrow}
          </span>
        </div>
        <h3 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-ink">{description}</p>
        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="mt-0.5 grid size-6 shrink-0 place-content-center rounded-full bg-emerald-soft">
                <Check className="size-3.5 text-emerald" strokeWidth={3} />
              </span>
              <span className="text-ink/80">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
