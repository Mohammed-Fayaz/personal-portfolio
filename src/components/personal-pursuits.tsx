import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Dumbbell,
  ExternalLink,
  Mountain,
  Swords,
  Trophy,
  Waves,
} from "lucide-react";

import {
  ChartSlideshow,
  type ChartImage,
} from "@/components/chart-slideshow";

const otherPursuits = [
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

type PursuitChartCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  period: string;
  stat: React.ReactNode;
  images: ChartImage[];
  profileHref?: string;
  profileLabel?: string;
  slideshow?: boolean;
  disclaimer?: string;
};

function ChartImages({ images }: { images: ChartImage[] }) {
  const showCaptions = images.length > 1;

  return (
    <div className="space-y-4">
      {images.map(({ src, alt, width, height, caption }) => (
        <div key={src}>
          {showCaptions && (
            <p className="mb-2 text-xs font-medium text-muted-foreground">
              {caption}
            </p>
          )}
          <div className="overflow-hidden rounded-lg border border-border/60 bg-muted/30">
            <Image
              alt={alt}
              className="h-auto w-full"
              height={height}
              src={src}
              unoptimized
              width={width}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function PursuitChartCard({
  icon: Icon,
  title,
  description,
  period,
  stat,
  images,
  profileHref,
  profileLabel,
  slideshow = false,
  disclaimer,
}: PursuitChartCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/50 bg-background/70">
      <div className="flex flex-col gap-6 p-5 md:flex-row md:items-start md:p-6">
        <div className="flex gap-4 md:max-w-xs md:shrink-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
            {disclaimer && (
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground/80">
                {disclaimer}
              </p>
            )}
            {profileHref && profileLabel && (
              <Link
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                href={profileHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                {profileLabel}
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {period}
            </p>
            <p className="text-sm text-muted-foreground">{stat}</p>
          </div>
          {slideshow ? (
            <ChartSlideshow images={images} />
          ) : (
            <ChartImages images={images} />
          )}
        </div>
      </div>
    </div>
  );
}

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

      <div className="mb-4 space-y-4">
        <PursuitChartCard
          description="Best competitive programmer in my graduating year; represented the university at ICPC regionals in the 2018–19 season."
          icon={Trophy}
          images={[
            {
              alt: "CodeChef rating progression from late 2016 to late 2018, climbing from roughly 1200 to a peak near 2100",
              caption: "CodeChef rating",
              height: 599,
              src: "/images/codechef-rating-progression.png",
              width: 1024,
            },
          ]}
          period="2017 – 2018 · CodeChef"
          profileHref="https://www.codechef.com/users/fayaz_007"
          profileLabel="fayaz_007 on CodeChef (5★)"
          stat={
            <>
              <span className="font-medium text-foreground">~1200</span>
              {" → "}
              <span className="font-medium text-foreground">2076</span>
              {" peak (5★)"}
            </>
          }
          title="Competitive programming"
        />
        <PursuitChartCard
          description="Took it seriously for three months during the pandemic — reached a level where I could beat a Candidate Master."
          icon={Swords}
          images={[
            {
              alt: "Lichess bullet rating progression for Fayaz007 from March to June 2021, climbing from roughly 1680 to a peak near 1940",
              caption: "Bullet rating",
              height: 458,
              src: "/images/lichess-bullet-progression.png",
              width: 1024,
            },
          ]}
          period="Mar 2021 – Jun 2021 · three months"
          profileHref="https://lichess.org/@/Fayaz007"
          profileLabel="Fayaz007 on Lichess"
          stat={
            <>
              <span className="font-medium text-foreground">~1680</span>
              {" → "}
              <span className="font-medium text-foreground">~1940</span>
              {" peak"}
            </>
          }
          title="Bullet chess"
        />
        <PursuitChartCard
          description="Six-month focused cut — tracked weight and body fat weekly."
          disclaimer="Body fat readings are from bioimpedance on a weighing scale — I suspect actual body fat was closer to ~10% based on how I looked."
          slideshow
          icon={Dumbbell}
          images={[
            {
              alt: "Weight progression from March to August 2023, declining from 73 kg to 63 kg",
              caption: "Weight (kg)",
              height: 300,
              src: "/images/body-recomp-weight.png",
              width: 472,
            },
            {
              alt: "Body fat percentage progression from March to August 2023, declining from 22% to 18%",
              caption: "Body fat (%)",
              height: 320,
              src: "/images/body-recomp-bodyfat.png",
              width: 472,
            },
            {
              alt: "Progress photo from body recomposition, August 2023",
              blurred: true,
              caption: "Progress photo",
              height: 300,
              src: "/images/body-recomp-progress.png",
              width: 280,
            },
          ]}
          period="Mar 2023 – Aug 2023 · six months"
          stat={
            <>
              <span className="font-medium text-foreground">73 → 63 kg</span>
              {" · "}
              <span className="font-medium text-foreground">22 → 18% bf</span>
            </>
          }
          title="Body recomposition"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
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
