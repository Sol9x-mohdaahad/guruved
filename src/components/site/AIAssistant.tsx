"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap, Workflow, ShieldCheck, BrainCircuit, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "simplify",
    icon: Zap,
    title: "Simplify",
    user: "How do I generate a fee defaulter report?",
    bot: "I've prepared one for you — 23 students, totalling ₹4.2L pending. Want me to send polite reminders on WhatsApp?",
  },
  {
    id: "streamline",
    icon: Workflow,
    title: "Streamline",
    user: "Auto-assign substitute teachers for tomorrow's leaves",
    bot: "Done. 4 absences detected, substitutes assigned based on subject expertise and availability. Notified all teachers.",
  },
  {
    id: "secure",
    icon: ShieldCheck,
    title: "Secure",
    user: "Run a security audit on student data access",
    bot: "All systems clean. 0 anomalies in the last 30 days. RBAC, MFA and audit logs all healthy.",
  },
  {
    id: "smart",
    icon: BrainCircuit,
    title: "Smart",
    user: "Which students need extra Math support?",
    bot: "I've flagged 7 students whose scores dropped over 3 assessments. Suggested interventions sent to their teachers.",
  },
  {
    id: "start",
    icon: Rocket,
    title: "Start",
    user: "Onboard a new batch of 60 students",
    bot: "Bulk import ready. I'll auto-generate IDs, parent logins, assign to sections and send welcome emails. Confirm?",
  },
];

export function AIAssistant() {
  const [active, setActive] = useState(0);
  const current = tabs[active];
  return (
    <section className="px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-ink/5 bg-white shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
            {/* left sidebar */}
            <div className="border-b border-ink/5 bg-gradient-to-br from-emerald-soft/40 to-white p-6 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-2.5">
                <div className="grid size-11 place-content-center rounded-2xl bg-gradient-to-br from-emerald to-gold text-white shadow-soft">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-ink">hi 5</div>
                  <div className="text-xs text-muted-ink">Your Green Cape Saviour</div>
                </div>
              </div>
              <div className="mt-6 flex gap-1.5 overflow-x-auto lg:flex-col">
                {tabs.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold whitespace-nowrap transition-all",
                      active === i
                        ? "bg-emerald text-white shadow-soft"
                        : "text-ink/70 hover:bg-white",
                    )}
                  >
                    <t.icon className="size-4" />
                    {t.title}
                  </button>
                ))}
              </div>
            </div>

            {/* chat panel */}
            <div className="bg-gradient-to-br from-white to-muted/40 p-6 md:p-10">
              <div className="mx-auto max-w-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="ml-auto max-w-[85%] rounded-3xl rounded-tr-md bg-emerald px-5 py-3 text-white shadow-soft">
                      {current.user}
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="grid size-8 place-content-center rounded-xl bg-gradient-to-br from-emerald to-gold text-white">
                        <Sparkles className="size-3.5" />
                      </div>
                      <div className="max-w-[85%] rounded-3xl rounded-tl-md border border-ink/5 bg-white px-5 py-3 shadow-soft">
                        {current.bot}
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-1.5 pl-10 text-xs text-muted-ink"
                    >
                      <span className="size-1.5 animate-pulse rounded-full bg-emerald" />
                      hi 5 is thinking…
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center gap-2 rounded-full border border-ink/10 bg-white p-2 pl-5 shadow-sm">
                  <input
                    placeholder="Ask hi 5 anything about your school…"
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-ink"
                  />
                  <button className="rounded-full bg-emerald p-2.5 text-white hover:bg-emerald/90">
                    <Sparkles className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
