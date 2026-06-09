import { TimelineEntry } from "@/components/molecules/timeline-entry";

export function AboutTimeline() {
  return (
    <div className="space-y-0">
      <TimelineEntry period="High School" title="Academic & Extracurricular">
        <ul className="list-disc list-inside space-y-2">
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
        period="University"
        title="Machine Learning Capstone"
        subtitle="CNN-based cervical cancer detection"
      >
        <ul className="list-disc list-inside space-y-2">
          <li>
            University project: applied convolutional neural networks to detect
            cervical cancer from pap smear images.
          </li>
          <li>
            Built a working understanding of ML architectures that I still draw
            on today.
          </li>
        </ul>
      </TimelineEntry>

      <TimelineEntry
        period="University"
        title="Competitive Programming & Academics"
      >
        <ul className="list-disc list-inside space-y-2">
          <li>
            Became the best competitive programmer in my graduating year;
            represented the university at ICPC regionals in the 2018–19 season.
          </li>
          <li>
            Took graduate-level mathematics courses during undergraduate studies.
          </li>
          <li>
            Sole recipient of the top grade in a notoriously difficult Data
            Structures &amp; Algorithms course — the only time relative grading
            produced a single top scorer in the program&apos;s history.
          </li>
        </ul>
      </TimelineEntry>

      <TimelineEntry
        period="May – Jul 2019"
        title="Summer Analyst"
        subtitle="Goldman Sachs"
      >
        <ul className="list-disc list-inside space-y-2">
          <li>
            Contributed to the MOSAIC platform on the Goldman Sachs Liquidity
            Solutions Portal.
          </li>
          <li>
            Implemented backend functionality to generate PDFs from dynamic
            tables displayed on a webpage.
          </li>
        </ul>
      </TimelineEntry>

      <TimelineEntry
        period="Aug 2020 – Aug 2023"
        title="Software Engineer I → II"
        subtitle="Cleartax (late-stage startup)"
      >
        <ul className="list-disc list-inside space-y-2">
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
        period="Aug 2023 – Present"
        title="Founding Engineer"
        subtitle="Snowmountain.ai (first engineering hire)"
      >
        <ul className="list-disc list-inside space-y-2">
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

      <TimelineEntry period="Along the way" title="Personal pursuits" isLast>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Took bullet chess seriously during the pandemic — reached a level
            where I could beat a Candidate Master.
          </li>
          <li>
            Six-month focused body recomposition, dieting down to roughly 10%
            body fat.
          </li>
          <li>Open water scuba certification and indoor rock climbing.</li>
        </ul>
      </TimelineEntry>
    </div>
  );
}
