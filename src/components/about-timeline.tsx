import {
  Brain,
  Briefcase,
  Building2,
  Rocket,
  School,
  Trophy,
} from "lucide-react";

import { TimelineEntry } from "@/components/molecules/timeline-entry";
import { ProofChart } from "@/components/proof-chart";

export function AboutTimeline() {
  return (
    <div>
      <TimelineEntry icon={School} period="High School" title="Academic & Extracurricular">
        <ul className="list-none space-y-2">
          <li>
            Member of the school quizzing team and athletics team (100m, 200m,
            and 4×100m relay).
          </li>
          <li>Second-highest scorer in internal exams.</li>
          <li>
            Reached the final 100 at a nationwide spelling bee competition.
          </li>
        </ul>
      </TimelineEntry>

      <TimelineEntry
        icon={Brain}
        period="University"
        subtitle="CNN-based cervical cancer detection"
        title="Machine Learning Capstone"
      >
        <ul className="list-none space-y-2">
          <li>
            Applied convolutional neural networks to detect cervical cancer from
            pap smear images.
          </li>
          <li>
            Built a working understanding of ML architectures that I still draw
            on today.
          </li>
        </ul>
      </TimelineEntry>

      <TimelineEntry
        icon={Trophy}
        period="University"
        title="Competitive Programming & Academics"
      >
        <ul className="list-none space-y-2">
          <li>
            Best competitive programmer in my graduating year; represented the
            university at ICPC regionals in the 2018–19 season.
          </li>
          <li>
            Took graduate-level mathematics courses during undergraduate
            studies.
          </li>
          <li>
            Sole recipient of the top grade in a notoriously difficult Data
            Structures &amp; Algorithms course — the only time relative grading
            produced a single top scorer in the program&apos;s history.
          </li>
        </ul>
        <ProofChart
          imageAlt="CodeChef rating progression from late 2016 to late 2018, climbing from roughly 1200 to a peak near 2100"
          imageSrc="/images/codechef-progression.png"
          period="2017 – 2018 · CodeChef rating progression"
          stat="~1200 → ~2100 by end of 2018"
        />
      </TimelineEntry>

      <TimelineEntry
        icon={Building2}
        period="May – Jul 2019"
        subtitle="Goldman Sachs"
        title="Summer Analyst"
      >
        <ul className="list-none space-y-2">
          <li>
            Contributed to the MOSAIC platform on the Goldman Sachs Liquidity
            Solutions Portal.
          </li>
          <li>
            Implemented backend functionality to generate PDFs from dynamic tables
            displayed on a webpage.
          </li>
        </ul>
      </TimelineEntry>

      <TimelineEntry
        icon={Briefcase}
        period="Aug 2020 – Aug 2023"
        subtitle="Cleartax · late-stage startup"
        title="Software Engineer I → II"
      >
        <ul className="list-none space-y-2">
          <li>
            Three years across multiple product teams — tally, desktop, reports,
            MAX TAX, forms, and recon.
          </li>
          <li>
            Built frontends from scratch for 0→1 products and org-wide rewrites
            spanning 30+ enterprise reports as microfrontends.
          </li>
          <li>
            Designed and implemented a custom data table to replace off-the-shelf
            solutions for niche enterprise use cases.
          </li>
        </ul>
      </TimelineEntry>

      <TimelineEntry
        icon={Rocket}
        isLast
        period="Aug 2023 – Present"
        subtitle="Snowmountain.ai · first engineering hire"
        title="Founding Engineer"
      >
        <ul className="list-none space-y-2">
          <li>
            First engineering hire at an early-stage startup building products
            enabled by advances in LLMs.
          </li>
          <li>
            Own the full-stack web application — Next.js, PostgreSQL,
            authentication, performance, and security.
          </li>
          <li>
            Built a Chrome extension capable of agentic web actions: filling
            forms, clicking buttons, and navigating pages autonomously.
          </li>
        </ul>
      </TimelineEntry>
    </div>
  );
}
