import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row md:px-10">
        <p className="text-sm text-muted-foreground">
          © 2026 Mohammed Fayaz Salim
        </p>
        <div className="flex gap-2">
          <Button asChild size="sm" variant="outline">
            <Link href="mailto:fayazsalim@gmail.com">Email</Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href="/work">Work</Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
