// components
import Skills from "./Skills";

export default function Component() {
  return (
    <div className="w-full min-h-screen p-6 md:p-12 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">
        Work Experience
      </h1>
      <div className="space-y-8">
        <div className="border-2 border-indigo-200 dark:border-indigo-700 rounded-lg p-4 shadow-lg bg-white dark:bg-gray-900">
          <h2 className="text-2xl font-semibold text-indigo-500 dark:text-indigo-300">
            Founding Engineer at Snowmountain.ai
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">Aug 2023 - Present</p>
          <ul className="list-disc list-inside">
            <li>
              Leading full-stack development efforts to build out the web app
              from scratch; handling <span className="font-bold">features</span>
              , <span className="font-bold">performance</span>,{" "}
              <span className="font-bold">authentication</span> &{" "}
              <span className="font-bold">security</span>
            </li>
            <li>
              Handling <span className="font-bold">next.js</span> applications
              hosted on diverse environments (
              <span className="font-bold">vercel</span> and{" "}
              <span className="font-bold">AWS Amplify</span>)
            </li>{" "}
            <li>
              Maintaining{" "}
              <span className="font-bold">postgreSQL databases</span> hosted on
              supabase and AWS RDS (handling{" "}
              <span className="font-bold">db indexing</span>,{" "}
              <span className="font-bold">migrations</span>,{" "}
              <span className="font-bold">triggers</span>,{" "}
              <span className="font-bold">functions</span> &{" "}
              <span className="font-bold">RLS Policies</span>).
            </li>{" "}
            <li>
              Building out <span className="font-bold">chrome extensions</span>{" "}
              augmented with <span className="font-bold">LLMs</span> to serve as
              autonomous web agents.
            </li>{" "}
            <li>
              {" "}
              Working extensively with AWS offerings including{" "}
              <span className="font-bold">Amplify</span>,{" "}
              <span className="font-bold">SES</span>,
              <span className="font-bold"> S3</span>,{" "}
              <span className="font-bold">Cognito</span>,{" "}
              <span className="font-bold">RDS</span>,{" "}
              <span className="font-bold">EC2</span>,{" "}
              <span className="font-bold">Route53</span> &{" "}
              <span className="font-bold">Cloudwatch</span>
            </li>
          </ul>
          <Skills
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
          />
        </div>
        <div className="border-2 border-indigo-200 dark:border-indigo-700 rounded-lg p-4 shadow-lg bg-white dark:bg-gray-900">
          <h2 className="text-2xl font-semibold text-indigo-500 dark:text-indigo-300">
            Software Engineer II at Cleartax
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Feb 2022 - Aug 2023
          </p>
          <ul className="list-disc list-inside">
            <li>
              Worked with the forms team as part of the ongoing org-wide rewrite
              to rebuild the frontend for the forms product as a separate{" "}
              <span className="font-bold">microfrontend</span>.
            </li>
            <li>
              Worked to help build a custom table from scratch to replace
              currently used off-the-shelf solutions (such as{" "}
              <span className="font-bold">handsontable / glide-table</span>) in
              order to better serve our specific niche use-cases.
            </li>
            <li>
              Worked with the recon team to revamp the frontend (built out using
              the <span className="font-bold">BFF pattern</span>) as part of a
              re-write to shore up the recon product.
            </li>
          </ul>
          <Skills
            skills={[
              "React.js",
              "TypeScript",
              "Webpack",
              "Module federation",
              "Amazon S3",
              "Amazon CloudFront",
            ]}
          />
        </div>
        <div className="border-2 border-indigo-200 dark:border-indigo-700 rounded-lg p-4 shadow-lg bg-white dark:bg-gray-900">
          <h2 className="text-2xl font-semibold text-indigo-500 dark:text-indigo-300">
            Software Engineer I at Cleartax
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Aug 2020 - Feb 2022
          </p>
          <ul className="list-disc list-inside">
            <li>
              Worked with the tally team to build out error correction in the
              frontend as part of the import flow (using{" "}
              <span className="font-bold">React.js</span>)
            </li>
            <li>
              Worked with the desktop team and built out features for the
              desktop app (using <span className="font-bold">Electron.js</span>{" "}
              and <span className="font-bold">puppeteer</span>).
            </li>
            <li>
              Worked with the reports team to build out the frontend for various
              reports used by enterprises (monolithic frontend using{" "}
              <span className="font-bold">Next.js</span> and{" "}
              <span className="font-bold">graphQL</span>) and supporting issues
              raised with the reporting BE server (using{" "}
              <span className="font-bold">Node.js</span>).
            </li>
            <li>
              Worked with the MAX TAX team to build out the frontend from
              scratch for the reports aspect of the new MAX TAX product (0 - 1
              project built out as a microfrontend using{" "}
              <span className="font-bold">webpack module federation</span>).
            </li>
            <li>
              Worked with the reports team as part of the ongoing org-wide
              rewrite to rebuild the frontend for the reports product
              (comprising of over 30 reports and built out as a separate{" "}
              <span className="font-bold">microfrontend</span>).
            </li>
          </ul>
          <Skills
            skills={[
              "Next.js",
              "React.js",
              "TypeScript",
              "Jenkins",
              "Jira",
              "Electron.js",
              "Node.js",
            ]}
          />
        </div>
        <div className="border-2 border-indigo-200 dark:border-indigo-700 rounded-lg p-4 shadow-lg bg-white dark:bg-gray-900">
          <h2 className="text-2xl font-semibold text-indigo-500 dark:text-indigo-300">
            Summer Analyst at Goldman Sachs
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            May 2019 - July 2019
          </p>
          <ul className="list-disc list-inside">
            <li>
              Was part of the team involved in building out functionalities for
              the MOSAIC platform of the Goldman Sachs Liquidity Solutions
              Portal.
            </li>
            <li>
              Implemented the Backend functionality to generate a{" "}
              <span className="font-bold">PDF</span> using{" "}
              <span className="font-bold">iText</span> corresponding to a
              dynamic table displayed on a webpage
            </li>
          </ul>
          <Skills skills={["iText", "Java"]} />
        </div>
      </div>
    </div>
  );
}
