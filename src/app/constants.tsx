import { ExperienceCardProps } from "@/components/molecules/experienceCard";

export const EXPERIENCES: Array<ExperienceCardProps> = [
  {
    orgName: "Snowmountain.ai",
    role: "Founding Engineer",
    startDate: "Aug 2023",
    endDate: "Present",
    description: (
      <ul className="list-disc">
        <li>
          Responsible for the entire web app built on top of next.js and
          postgreSQL (deployed through vercel and supabase respectively).
        </li>
        <li>
          Responsible for building a chrome extension capable of carrying out
          agentic actions (such as filling out forms, clicking buttons, etc.)
        </li>
      </ul>
    ),
  },
  {
    orgName: "Cleartax",
    role: "Software Engineer II",
    startDate: "Feb 2022",
    endDate: "Aug 2023",
    description: (
      <ul className="list-disc">
        <li>
          Worked with the forms team as part of the ongoing org-wide rewrite to
          rebuild the frontend for the forms product as a separate microfrontend
        </li>
        <li>
          Worked to help build a custom table from scratch to replace currently
          used off-the-shelf solutions (such as handsontable / glide-table) in
          order to better serve our specific niche use-cases
        </li>
        <li>
          Working with the recon team to revamp the frontend (built out using
          the BFF pattern) as part of a re-write to shore up the recon product
        </li>
      </ul>
    ),
  },
  {
    orgName: "Cleartax",
    role: "Software Engineer I",
    startDate: "Aug 2020",
    endDate: "Feb 2022",
    description: (
      <ul className="list-disc">
        <li>
          Worked with the tally team to build out error correction in the
          frontend as part of the import flow (using ReactJS)
        </li>
        <li>
          Worked with the desktop team and built out features for the desktop
          app (using electronJS and puppeteer)
        </li>
        <li>
          Worked with the reports team to build out the frontend for various
          reports used by enterprises (monolithic frontend using nextJS and
          graphQL) and supporting issues raised with the reporting BE server
          (using nodeJS)
        </li>
        <li>
          Worked with the MAX TAX team to build out the frontend from scratch
          for the reports aspect of the new MAX TAX product (0 - 1 project built
          out as a microfrontend using webpack module federation)
        </li>
        <li>
          Worked with the reports team as part of the ongoing org-wide rewrite
          to rebuild the frontend for the reports product (comprising of over 30
          reports and built out as a separate microfrontend)
        </li>
      </ul>
    ),
  },
  {
    orgName: "Goldman Sachs",
    role: "Summer Analyst",
    startDate: "May 2019",
    endDate: "July 2019",
    description: (
      <ul className="list-disc">
        <li>
          Was part of the team involved in building out functionalities for the
          MOSAIC platform of the Goldman Sachs Liquidity Solutions Portal
        </li>
        <li>
          Implemented the Backend functionality to generate a PDF corresponding
          to a dynamic table displayed on a webpage
        </li>
      </ul>
    ),
  },
];
