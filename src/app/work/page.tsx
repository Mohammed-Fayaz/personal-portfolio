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
  introduction?: string;
  projects?: React.ReactNode;
};

function WorkRole({
  company,
  title,
  period,
  children,
  skills,
  introduction,
  projects,
}: WorkRoleProps) {
  return (
    <article className="rounded-2xl border border-border/70 bg-card/80 p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
      <span className="inline-flex rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
        {period}
      </span>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{company}</p>
      {introduction && (
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
          {introduction}
        </p>
      )}
      <ul className="mt-5 list-none space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </ul>
      {projects}
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
            description="Building AI platforms and taking products from an idea through deployment and ongoing operation."
            eyebrow="Experience"
            title="Work"
          />

          <div className="space-y-6">
            <WorkRole
              company="QwikBuild / Snowmountain.ai"
              period="Aug 2023 – Present"
              introduction="Joined Snowmountain.ai at its inception and built products from zero to production across AI, enterprise workflows, and financial analysis. Today, I own the production platform around QwikBuild’s multi-agent coding system."
              skills={[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Supabase",
                "AWS",
                "Vercel",
                "LLM integrations",
                "Browser automation",
                "Puppeteer",
                "Stripe",
                "Razorpay",
              ]}
              title="Founding Engineer"
              projects={
                <section className="mt-8 border-t border-border/70 pt-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    Earlier products at Snowmountain.ai
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Most recent first.
                  </p>
                  <div className="mt-5 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                    <div>
                      <h4 className="font-medium text-foreground">Capital</h4>
                      <p className="mt-1">
                        Built an AI diligence workspace for venture investors and
                        founders to evaluate pitch decks and investment
                        opportunities, with configurable agents, multi-document
                        analysis, private knowledge vaults, deep research,
                        resumable streamed outputs, and structured investment
                        reports.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Forecast360</h4>
                      <p className="mt-1">
                        Built a banking risk-modeling and forecasting platform
                        for configuring models and scenarios, analyzing loan
                        portfolios, comparing peer banks, visualizing risk
                        outputs, and generating reports.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Autonomous Bidding Agent
                      </h4>
                      <p className="mt-1">
                        Built a Chrome and Puppeteer-based browser agent for
                        time-sensitive bidding workflows, including queued-job
                        prioritization, dynamic UI navigation, bid submission,
                        and recovery from session expiry, timeouts, and changing
                        page state.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Hemkund</h4>
                      <p className="mt-1">
                        Built a multi-tenant platform for purchase-order
                        operations, covering document intake, review and
                        approvals, vendor and retailer synchronization,
                        dashboards, notifications, and customer-specific
                        workflows.
                      </p>
                    </div>
                  </div>
                </section>
              }
            >
              <li>
                Build the multi-tenant application lifecycle around QwikBuild’s
                multi-agent coding system, from project setup, authentication,
                and user management to managed services, custom domains, and
                deployment.
              </li>
              <li>
                Implement usage metering, billing, and payment integrations with
                Stripe and Razorpay.
              </li>
              <li>
                Own full-stack delivery across frontend, backend, PostgreSQL
                data modeling, cloud infrastructure, security, observability,
                and UX.
              </li>
              <li>
                Work closely with customers to turn business requirements into
                functioning applications and support them in production.
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
