import type { LucideIcon } from "lucide-react";

type TimelineEntryProps = {
  period: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  children: React.ReactNode;
  isLast?: boolean;
};

export function TimelineEntry({
  period,
  title,
  subtitle,
  icon: Icon,
  children,
  isLast = false,
}: TimelineEntryProps) {
  return (
    <div className="relative flex gap-5 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-sm">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-border to-transparent" />
        )}
      </div>
      <article
        className={`flex-1 ${isLast ? "pb-0" : "pb-10"} rounded-2xl border border-border/70 bg-card/80 p-5 shadow-sm transition-shadow hover:shadow-md md:p-6`}
      >
        <span className="inline-flex rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
          {period}
        </span>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
        <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
          {children}
        </div>
      </article>
    </div>
  );
}
