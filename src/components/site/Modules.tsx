"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ScanFace,
  ClipboardCheck,
  UserPlus,
  Video,
  Wallet,
  MessagesSquare,
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { cn } from "@/lib/utils";

const modules = [
  { icon: Globe, name: "Website Builder", desc: "Launch a beautiful institutional site in minutes." },
  { icon: ScanFace, name: "AI Proctoring", desc: "Secure remote exams with face & gaze tracking." },
  { icon: ClipboardCheck, name: "Smart Attendance", desc: "Auto capture across face, RFID & biometric." },
  { icon: UserPlus, name: "Digital Enrollment", desc: "Paperless admissions with auto-verification." },
  { icon: Video, name: "Virtual Learning", desc: "Live classes, recordings & breakout rooms." },
  { icon: Wallet, name: "Digital Finance", desc: "Fees, payroll & accounting in one ledger." },
  { icon: MessagesSquare, name: "Unified Comms", desc: "Reach parents on SMS, WhatsApp & email." },
];

export function Modules() {
  const [active, setActive] = useState(0);
  const Current = modules[active];
  return (
    <section id="modules" className="py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Modules"
          title={
            <>
              One platform.{" "}
              <span className="text-emerald">Infinite solutions.</span> Tailored for you.
            </>
          }
          subtitle="Switch on what you need today. Add more as your institution grows."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
          {modules.map((m, i) => (
            <button
              key={m.name}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={cn(
                "group flex flex-col items-center gap-3 rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1",
                active === i
                  ? "border-emerald/30 bg-emerald-soft/40 shadow-soft"
                  : "border-ink/5 bg-white hover:shadow-soft",
              )}
            >
              <div
                className={cn(
                  "grid size-12 place-content-center rounded-2xl transition-colors",
                  active === i
                    ? "bg-emerald text-white"
                    : "bg-muted text-ink/70 group-hover:bg-gold/80 group-hover:text-ink",
                )}
              >
                <m.icon className="size-5" />
              </div>
              <span className="text-center text-xs font-semibold leading-tight text-ink">
                {m.name}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mt-12 max-w-2xl rounded-3xl border border-ink/5 bg-white p-8 text-center shadow-soft"
        >
          <div className="mx-auto grid size-14 place-content-center rounded-2xl bg-gradient-to-br from-emerald to-gold text-white">
            <Current.icon className="size-6" />
          </div>
          <h3 className="mt-4 text-2xl font-bold text-ink">{Current.name}</h3>
          <p className="mt-2 text-muted-ink">{Current.desc}</p>
        </motion.div>
      </div>
    </section>
  );
}
