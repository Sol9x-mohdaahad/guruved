import { Apple, Play, Sparkles, Twitter, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";

const cols = [
  {
    title: "LMS",
    items: ["Course Builder", "Virtual Classroom", "Assignments", "Gradebook"],
  },
  {
    title: "Assessment",
    items: ["Question Bank", "AI Proctoring", "Auto Grading", "Analytics"],
  },
  {
    title: "CRM",
    items: ["Admissions", "Lead Pipeline", "Parent Portal", "Communications"],
  },
  {
    title: "Mobile App",
    items: ["Teacher App", "Student App", "Parent App", "Admin App"],
  },
  {
    title: "Integration Tools",
    items: ["REST API", "Webhooks", "SSO / SAML", "Zapier"],
  },
  {
    title: "Resources",
    items: ["Blog", "Case Studies", "Help Center", "Roadmap"],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-ink/5 bg-gradient-to-b from-white to-emerald-soft/30">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* top */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <span className="grid size-10 place-content-center rounded-xl bg-gradient-to-br from-emerald to-gold text-white shadow-soft">
                <Sparkles className="size-4" />
              </span>
              <span className="text-2xl tracking-tight text-ink">Guruved</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-ink">
              The AI-native operating system for modern education. Built for institutions that
              refuse to settle.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <button className="flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-white">
                <Apple className="size-5" />
                <div className="text-left leading-tight">
                  <div className="text-[9px] opacity-75">Download</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-white">
                <Play className="size-5 fill-white" />
                <div className="text-left leading-tight">
                  <div className="text-[9px] opacity-75">Get it on</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            <div className="mt-6 flex gap-2">
              {[Twitter, Linkedin, Youtube, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-10 place-content-center rounded-full border border-ink/10 bg-white text-ink/70 transition-all hover:-translate-y-0.5 hover:border-emerald hover:text-emerald"
                  aria-label="social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-sm font-bold text-ink">{c.title}</div>
                <ul className="mt-3 space-y-2">
                  {c.items.map((i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-muted-ink hover:text-emerald">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-muted-ink">
            © {new Date().getFullYear()} Guruved Technologies. All rights reserved.
          </div>
          <div className="flex gap-5 text-xs text-muted-ink">
            <a href="#" className="hover:text-emerald">Privacy Policy</a>
            <a href="#" className="hover:text-emerald">Terms and Conditions</a>
            <a href="#" className="hover:text-emerald">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
