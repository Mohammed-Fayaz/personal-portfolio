import Image from "next/image";
import Link from "next/link";
import { Dumbbell, ExternalLink, Mountain, Swords, Waves } from "lucide-react";

const otherPursuits = [
  {
    icon: Dumbbell,
    title: "Body recomposition",
    description: "Six-month focused cut down to roughly 10% body fat.",
  },
  {
    icon: Waves,
    title: "Open water scuba",
    description: "Certified and comfortable in open water.",
  },
  {
    icon: Mountain,
    title: "Indoor rock climbing",
    description: "Trained consistently for a stretch — still enjoy it.",
  },
] as const;

export function PersonalPursuits() {
  return (
    <section className="rounded-2xl border border-border/70 bg-card/60 p-6 md:p-8">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Beyond work
        </p>
        <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Things I do for fun
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          I tend to go deep on hobbies the same way I go deep on engineering —
          a few interests outside the job.
        </p>
      </div>

      <div className="mb-4 overflow-hidden rounded-xl border border-border/50 bg-background/70">
        <div className="flex flex-col gap-6 p-5 md:flex-row md:items-start md:p-6">
          <div className="flex gap-4 md:max-w-xs md:shrink-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Swords className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Bullet chess</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Took it seriously for three months during the pandemic (Mar–Jun
                2021) — reached a level where I could beat a Candidate Master.
              </p>
              <Link
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                href="https://lichess.org/@/Fayaz007"
                rel="noopener noreferrer"
                target="_blank"
              >
                Fayaz007 on Lichess
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Mar 2021 – Jun 2021 · three months
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">~1680</span>
                {" → "}
                <span className="font-medium text-foreground">~1940</span>
                {" peak"}
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border border-border/60 bg-muted/30">
              <Image
                alt="Lichess bullet rating progression for Fayaz007 from March to June 2021, climbing from roughly 1680 to a peak near 1940"
                className="h-auto w-full"
                height={458}
                src="/images/lichess-bullet-progression.png"
                unoptimized
                width={1024}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {otherPursuits.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group flex gap-4 rounded-xl border border-border/50 bg-background/70 p-4 transition-colors hover:border-border hover:bg-background"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
