import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  variant?: "analytics" | "calendar" | "attendance" | "ai" | "default";
}

export function DashboardMockup({ className, variant = "default" }: Props) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-soft",
        className,
      )}
    >
      {/* window chrome */}
      <div className="flex items-center gap-1.5 border-b border-ink/5 bg-muted/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400/70" />
        <span className="size-2.5 rounded-full bg-amber-400/70" />
        <span className="size-2.5 rounded-full bg-emerald/70" />
        <div className="ml-3 h-4 w-40 rounded-md bg-white/80" />
      </div>

      <div className="grid h-[calc(100%-2.75rem)] grid-cols-[80px_1fr]">
        <div className="space-y-2 border-r border-ink/5 bg-muted/30 p-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-8 rounded-lg",
                i === 1 ? "bg-emerald/15" : "bg-ink/5",
              )}
            />
          ))}
        </div>
        <div className="space-y-4 p-5">
          {variant === "analytics" && <AnalyticsBody />}
          {variant === "calendar" && <CalendarBody />}
          {variant === "attendance" && <AttendanceBody />}
          {variant === "ai" && <AIBody />}
          {variant === "default" && <AnalyticsBody />}
        </div>
      </div>
    </div>
  );
}

function AnalyticsBody() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="h-3 w-24 rounded bg-ink/10" />
          <div className="mt-2 h-6 w-40 rounded bg-ink/15" />
        </div>
        <div className="h-8 w-24 rounded-full bg-gold/70" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["12.4k", "98%", "+24%"].map((v, i) => (
          <div key={i} className="rounded-xl border border-ink/5 bg-white p-3">
            <div className="h-2 w-12 rounded bg-ink/10" />
            <div className="mt-2 text-lg font-bold text-ink">{v}</div>
          </div>
        ))}
      </div>
      <div className="relative h-32 rounded-xl border border-ink/5 bg-muted/30 p-3">
        <svg viewBox="0 0 200 80" className="h-full w-full">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--emerald)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--emerald)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 L20,50 L40,55 L60,30 L80,40 L100,20 L120,35 L140,15 L160,25 L180,10 L200,18 L200,80 L0,80 Z"
            fill="url(#g1)"
          />
          <path
            d="M0,60 L20,50 L40,55 L60,30 L80,40 L100,20 L120,35 L140,15 L160,25 L180,10 L200,18"
            fill="none"
            stroke="var(--emerald)"
            strokeWidth="2"
          />
        </svg>
      </div>
    </>
  );
}

function CalendarBody() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="h-5 w-32 rounded bg-ink/15" />
        <div className="flex gap-1.5">
          <div className="size-7 rounded-md bg-ink/10" />
          <div className="size-7 rounded-md bg-emerald/80" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "aspect-square rounded-lg text-[10px] flex items-center justify-center font-medium",
              [3, 7, 12, 18, 22].includes(i)
                ? "bg-emerald text-white"
                : [5, 14, 20].includes(i)
                  ? "bg-gold/70 text-ink"
                  : "bg-muted/60 text-ink/40",
            )}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </>
  );
}

function AttendanceBody() {
  return (
    <>
      <div className="h-5 w-40 rounded bg-ink/15" />
      <div className="space-y-2">
        {["Aarav S.", "Priya K.", "Rohan M.", "Sneha R.", "Vikram P."].map((n, i) => (
          <div
            key={n}
            className="flex items-center justify-between rounded-xl border border-ink/5 bg-white px-3 py-2"
          >
            <div className="flex items-center gap-2.5">
              <div className="size-7 rounded-full bg-gradient-to-br from-emerald to-gold" />
              <span className="text-sm font-medium text-ink">{n}</span>
            </div>
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[10px] font-semibold",
                i === 2 ? "bg-amber-100 text-amber-700" : "bg-emerald-soft text-emerald",
              )}
            >
              {i === 2 ? "Late" : "Present"}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function AIBody() {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="size-8 rounded-xl bg-gradient-to-br from-emerald to-gold" />
        <div>
          <div className="h-3 w-24 rounded bg-ink/15" />
          <div className="mt-1.5 h-2 w-16 rounded bg-ink/10" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-emerald px-3 py-2 text-xs text-white">
          Show me Class 10A&apos;s weekly progress report
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-xs text-ink/80">
          Generating insights… 94% attendance, math scores up 12%, 3 students need attention.
        </div>
        <div className="ml-auto max-w-[60%] rounded-2xl rounded-tr-sm bg-emerald px-3 py-2 text-xs text-white">
          Send to parents
        </div>
      </div>
    </>
  );
}
