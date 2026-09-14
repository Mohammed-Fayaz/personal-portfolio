import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JournalHeader, JournalFooter } from "@/components/journal-chrome";
import styles from "../journal.module.css";

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
    <article className={styles.workRole}>
      <aside className={styles.roleMargin}>
        <span className={styles.eyebrow}>{period}</span>
        <p>{title}</p>
      </aside>
      <div className={styles.roleBody}>
        <h2>{company}</h2>
        {introduction && <p className={styles.roleIntro}>{introduction}</p>}
        {projects && <h3 className={styles.responsibilityHeading}>QwikBuild · Production platform</h3>}
        <ul className={styles.responsibilities}>{children}</ul>
        {projects}
        <div className={styles.roleSkills}>
          <span className={styles.eyebrow}>Skills & tools</span>
          <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </div>
      </div>
    </article>
  );
}

export default function WorkPage() {
  return (
    <div className={styles.journal}>
      <a className={styles.skip} href="#main">Skip to content</a>
      <JournalHeader isWork />
      <main id="main">
        <section className={styles.workPageIntro} aria-labelledby="work-title">
          <span className={styles.eyebrow}>EXPERIENCE / 2019—PRESENT</span>
          <h1 id="work-title">Work<em>.</em></h1>
          <div className={styles.workPageSummary}>
            <p>Building AI platforms and taking products from an idea through deployment and ongoing operation.</p>
            <Link href="/#work">Selected projects <ArrowUpRight size={16} /></Link>
          </div>
        </section>
        <div className={styles.workRoles}>
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
                <section className={styles.earlierProducts}>
                  <h3>
                    Earlier products at Snowmountain.ai
                  </h3>
                  <p className={styles.productOrder}>
                    Most recent first.
                  </p>
                  <div className={styles.productRows}>
                    <div>
                      <h4>Capital</h4>
                      <p>
                        Built an AI diligence workspace for venture investors and
                        founders to evaluate pitch decks and investment
                        opportunities, with configurable agents, multi-document
                        analysis, private knowledge vaults, deep research,
                        resumable streamed outputs, and structured investment
                        reports.
                      </p>
                    </div>
                    <div>
                      <h4>Forecast360</h4>
                      <p>
                        Built a banking risk-modeling and forecasting platform
                        for configuring models and scenarios, analyzing loan
                        portfolios, comparing peer banks, visualizing risk
                        outputs, and generating reports.
                      </p>
                    </div>
                    <div>
                      <h4>
                        Autonomous Bidding Agent
                      </h4>
                      <p>
                        Built a Chrome and Puppeteer-based browser agent for
                        time-sensitive bidding workflows, including queued-job
                        prioritization, dynamic UI navigation, bid submission,
                        and recovery from session expiry, timeouts, and changing
                        page state.
                      </p>
                    </div>
                    <div>
                      <h4>Hemkund</h4>
                      <p>
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
        <div className={styles.workContact}>
          <p>Get in touch</p>
          <a href="mailto:fayazsalim@gmail.com">fayazsalim@gmail.com <ArrowUpRight size={20} /></a>
        </div>
      </main>
      <JournalFooter />
    </div>
  );
}
