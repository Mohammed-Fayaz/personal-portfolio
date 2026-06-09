import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AboutTimeline } from "@/components/about-timeline";
import { PersonalPursuits } from "@/components/personal-pursuits";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="page-gradient pointer-events-none fixed inset-0 -z-10" />
      <SiteHeader activePath="/" />

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Hello, I&apos;m Fayaz.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              I built this site to chronicle my achievements in life (both for
              myself and others) — academic, professional, and personal — in
              order, with proof where I have it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="mailto:fayazsalim@gmail.com">Contact me</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link className="gap-2" href="/work">
                  For a more traditional resume
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-16 md:px-10 md:pb-24">
          <SectionHeading
            description="Education, competition wins, and the roles that shaped how I build."
            eyebrow="Timeline"
            title="The arc, in order"
          />
          <AboutTimeline />
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10 md:pb-28">
          <PersonalPursuits />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
