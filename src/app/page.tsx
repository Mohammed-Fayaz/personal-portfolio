import Link from "next/link";
import { ArrowRight, Brain, Code2, Sparkles } from "lucide-react";

import { AboutTimeline } from "@/components/about-timeline";
import { PersonalPursuits } from "@/components/personal-pursuits";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Brain,
    label: "Machine learning",
    detail: "CNN capstone, working knowledge of modern architectures",
  },
  {
    icon: Code2,
    label: "Competitive programming",
    detail: "ICPC regionals, top programmer in my graduating year",
  },
  {
    icon: Sparkles,
    label: "Founding engineer",
    detail: "First hire building LLM-powered products end to end",
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="page-gradient pointer-events-none fixed inset-0 -z-10" />
      <SiteHeader activePath="/" />

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Founding engineer · LLM products
            </span>
            <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Hello, I&apos;m Fayaz.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              I&apos;ve always been drawn to hard problems — competitive
              programming and machine learning in university, three years shipping
              at a late-stage startup, and now the first engineering hire at an
              early-stage company. I try to get genuinely good at whatever I
              commit to.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="mailto:fayazsalim@gmail.com">Contact me</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link className="gap-2" href="/work">
                  See my work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {highlights.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="rounded-2xl border border-border/70 bg-card/70 p-5 shadow-sm backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 font-medium text-foreground">{label}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {detail}
                </p>
              </div>
            ))}
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
