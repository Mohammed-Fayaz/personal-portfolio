import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import Skills from "./Skills";

type WorkRoleProps = {
  company: string;
  title: string;
  period: string;
  children: React.ReactNode;
  skills: string[];
};

function WorkRole({ company, title, period, children, skills }: WorkRoleProps) {
  return (
    <article className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
      <span className="inline-flex rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
        {period}
      </span>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{company}</p>
      <ul className="mt-5 list-none space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </ul>
      <Skills skills={skills} />
    </article>
  );
}

export default function WorkPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="page-gradient pointer-events-none fixed inset-0 -z-10" />
      <SiteHeader activePath="/work" />

      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-20">
          <SectionHeading
            description="Detailed breakdown of roles, responsibilities, and the technologies I worked with."
            eyebrow="Experience"
            title="Work"
          />

          <div className="space-y-6">
            <WorkRole
              company="Snowmountain.ai"
              period="Aug 2023 – Present"
              skills={[
                "Next.js",
                "Supabase",
                "PostgreSQL",
                "TypeScript",
                "Vite",
                "Amazon S3",
                "Puppeteer",
                "Large Language Models (LLM)",
                "Chrome Extensions",
                "React Server Components",
                "React Query",
                "Amazon SES",
                "Amazon RDS",
                "Amazon Route53",
                "Amazon Cloudwatch",
                "Amazon Cognito",
              ]}
              title="Founding Engineer"
            >
              <li>
                Leading full-stack development to build the web app from scratch —
                features, performance, authentication, and security.
              </li>
              <li>
                Next.js applications on Vercel and AWS Amplify.
              </li>
              <li>
                PostgreSQL on Supabase and AWS RDS — indexing, migrations,
                triggers, functions, and RLS policies.
              </li>
              <li>
                Chrome extensions augmented with LLMs to serve as autonomous web
                agents.
              </li>
              <li>
                AWS: Amplify, SES, S3, Cognito, RDS, EC2, Route53, and
                CloudWatch.
              </li>
            </WorkRole>

            <WorkRole
              company="Cleartax"
              period="Feb 2022 – Aug 2023"
              skills={[
                "React.js",
                "TypeScript",
                "Webpack",
                "Module federation",
                "Amazon S3",
                "Amazon CloudFront",
              ]}
              title="Software Engineer II"
            >
              <li>
                Rebuilt the forms product frontend as a separate microfrontend
                during an org-wide rewrite.
              </li>
              <li>
                Built a custom data table from scratch to replace handsontable /
                glide-table for niche enterprise use cases.
              </li>
              <li>
                Revamped the recon product frontend using the BFF pattern.
              </li>
            </WorkRole>

            <WorkRole
              company="Cleartax"
              period="Aug 2020 – Feb 2022"
              skills={[
                "Next.js",
                "React.js",
                "TypeScript",
                "Jenkins",
                "Jira",
                "Electron.js",
                "Node.js",
              ]}
              title="Software Engineer I"
            >
              <li>
                Error correction in the tally import flow (React.js).
              </li>
              <li>Desktop app features with Electron.js and Puppeteer.</li>
              <li>
                Enterprise reporting frontends with Next.js and GraphQL; backend
                support with Node.js.
              </li>
              <li>
                0→1 MAX TAX reports frontend via webpack module federation.
              </li>
              <li>
                Org-wide reports rewrite — 30+ reports as a separate
                microfrontend.
              </li>
            </WorkRole>

            <WorkRole
              company="Goldman Sachs"
              period="May – Jul 2019"
              skills={["iText", "Java"]}
              title="Summer Analyst"
            >
              <li>
                Built functionality for the MOSAIC platform on the Liquidity
                Solutions Portal.
              </li>
              <li>
                Backend PDF generation with iText from dynamic tables on a
                webpage.
              </li>
            </WorkRole>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
