import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Props extends ButtonProps {
  tone?: "gold" | "emerald" | "ghost" | "outline";
  withArrow?: boolean;
}

export function CTAButton({
  className,
  tone = "gold",
  withArrow,
  children,
  size = "lg",
  ...props
}: Props) {
  const toneCls =
    tone === "gold"
      ? "bg-gold text-ink hover:bg-gold/90 shadow-gold"
      : tone === "emerald"
        ? "bg-emerald text-white hover:bg-emerald/90 shadow-soft"
        : tone === "outline"
          ? "border border-ink/15 bg-white text-ink hover:bg-muted"
          : "bg-transparent text-ink hover:bg-muted";

  return (
    <Button
      size={size}
      className={cn(
        "group h-12 rounded-full px-7 text-base font-semibold transition-all hover:-translate-y-0.5",
        toneCls,
        className,
      )}
      {...props}
    >
      {children}
      {withArrow && (
        <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
      )}
    </Button>
  );
}
