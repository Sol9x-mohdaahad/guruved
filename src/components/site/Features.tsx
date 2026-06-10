import { SectionTitle } from "./SectionTitle";
import { FeatureCard } from "./FeatureCard";
import { DashboardMockup } from "./DashboardMockup";

const features = [
  {
    eyebrow: "Course Planning",
    title: "Plan an entire academic year in minutes",
    description:
      "Drag-and-drop curriculum builder with prebuilt templates, learning outcome mapping and auto-scheduling powered by AI.",
    bullets: [
      "Visual term & syllabus planner",
      "Aligned to CBSE, IB, IGCSE & more",
      "Smart workload balancing per teacher",
    ],
    mockup: <DashboardMockup variant="calendar" />,
  },
  {
    eyebrow: "Customized Teaching Tools",
    title: "Every classroom, tailored to its students",
    description:
      "Interactive whiteboards, live polls, adaptive assignments and rich media libraries — built for teachers who refuse one-size-fits-all.",
    bullets: [
      "200+ ready-to-use lesson templates",
      "Live collaboration & breakout rooms",
      "Automatic differentiation by ability",
    ],
    mockup: <DashboardMockup variant="default" />,
  },
  {
    eyebrow: "Smart Attendance",
    title: "Attendance that takes itself",
    description:
      "Face-recognition, RFID, biometric or one-tap — Guruved captures attendance the way your school already operates and notifies parents instantly.",
    bullets: [
      "Multi-modal attendance capture",
      "Auto SMS / WhatsApp to parents",
      "Period-wise & event-wise tracking",
    ],
    mockup: <DashboardMockup variant="attendance" />,
  },
  {
    eyebrow: "AI-Powered Analytics",
    title: "Decisions backed by every datapoint",
    description:
      "Identify at-risk students, predict outcomes and benchmark performance across grades — without ever opening a spreadsheet.",
    bullets: [
      "Predictive learning outcomes",
      "Drill-down dashboards for principals",
      "Auto-generated parent reports",
    ],
    mockup: <DashboardMockup variant="analytics" />,
  },
];

export function Features() {
  return (
    <section id="why" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Features"
          title={
            <>
              Cutting-edge features driving{" "}
              <span className="text-emerald">modern school LMS</span>
            </>
          }
          subtitle="Everything an institution needs — from the first enrollment to the last graduation ceremony — under one elegant roof."
        />
        <div className="mt-20 space-y-28">
          {features.map((f, i) => (
            <FeatureCard key={f.eyebrow} {...f} index={i + 1} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
