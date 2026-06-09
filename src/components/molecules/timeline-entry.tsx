type TimelineEntryProps = {
  period: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  isLast?: boolean;
};

export function TimelineEntry({
  period,
  title,
  subtitle,
  children,
  isLast = false,
}: TimelineEntryProps) {
  return (
    <div className="relative flex gap-6 md:gap-8">
      <div className="flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-indigo-500 dark:bg-indigo-400 shrink-0 mt-2" />
        {!isLast && (
          <div className="w-px flex-1 bg-indigo-200 dark:bg-indigo-700 mt-2" />
        )}
      </div>
      <div
        className={`flex-1 pb-10 ${isLast ? "pb-0" : ""} border-2 border-indigo-200 dark:border-indigo-700 rounded-lg p-4 md:p-6 shadow-lg bg-white dark:bg-gray-900 -mt-1`}
      >
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {period}
        </p>
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-500 dark:text-indigo-300 mt-1">
          {title}
        </h2>
        {subtitle && (
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">{subtitle}</p>
        )}
        <div className="mt-4 text-gray-700 dark:text-gray-300">{children}</div>
      </div>
    </div>
  );
}
