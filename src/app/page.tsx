import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveRight, Mountain, Waves } from "lucide-react";

import { ChartSlideshow } from "@/components/chart-slideshow";
import styles from "./journal.module.css";
import { JournalHeader, JournalFooter } from "@/components/journal-chrome";

const projects = [
  { number: "02", name: "Capital", category: "AI DILIGENCE", description: "A workspace for investors and founders to evaluate pitch decks and investment opportunities.", detail: "Configurable agents, multi-document analysis, private knowledge vaults, deep research, resumable streamed outputs, and structured investment reports." },
  { number: "03", name: "Forecast360", category: "BANKING & RISK", description: "Turning loan portfolios, models, and scenarios into something people can explore.", detail: "Built the platform for configuring risk models, comparing peer banks, visualizing forecasts, and generating reports." },
  { number: "04", name: "Autonomous Bidding Agent", category: "BROWSER AUTOMATION", description: "An agent working against the clock—and a changing web page.", detail: "Chrome and Puppeteer-based bidding workflows with queued-job prioritization, dynamic navigation, bid submission, and recovery from session expiry and timeouts." },
  { number: "05", name: "Hemkund", category: "ENTERPRISE WORKFLOWS", description: "Making purchase-order operations work across teams and businesses.", detail: "A multi-tenant platform covering document intake, review and approvals, vendor and retailer synchronization, dashboards, notifications, and customer-specific workflows." },
];

const milestones = [
  { date: "The early years", title: "Academics, quizzing, and athletics.", text: "School quizzing, a nationwide spelling bee final 100, and athletics: 100m, 200m, and the 4×100m relay.", note: "Academic & extracurricular", extra: "Second-highest scorer in internal exams." },
  { date: "University", title: "Learning how to think through a problem.", text: "Studied Computer Science at NIT Calicut. Competitive programming led to representing the institute at the 2018–19 ICPC regionals.", note: "NIT Calicut · ICPC regionals", extra: "Took graduate-level mathematics courses, earned the sole top grade in a Data Structures & Algorithms course, and applied convolutional neural networks to cervical cancer detection from pap smear images for my capstone." },
  { date: "2019", title: "A first look at software in industry.", text: "A summer at Goldman Sachs, contributing to the MOSAIC platform and building PDF generation from dynamic tables.", note: "Goldman Sachs · Summer Analyst" },
  { date: "2020—2023", title: "Products, rewrites, and everything between.", text: "Three years at Clear across web and desktop applications. Built new products, a custom enterprise data table, and microfrontends spanning more than 30 reports.", note: "Clear · Software Engineer I → II" },
  { date: "2023—now", title: "From the first hire to products in production.", text: "Joined Snowmountain.ai at its inception. Today, I own the production platform around QwikBuild’s multi-agent coding system, with earlier work across AI diligence, banking risk, browser agents, and enterprise workflows.", note: "QwikBuild / Snowmountain.ai · Founding Engineer" },
];

export default function Home() {
  return (
    <div className={styles.journal}>
      <a className={styles.skip} href="#main">Skip to content</a>
      <JournalHeader />

      <main id="main">
        <section className={styles.hero} aria-labelledby="intro-title">
          <div className={styles.eyebrow}>MOHAMMED FAYAZ SALIM <span>SOFTWARE ENGINEER</span></div>
          <div className={styles.heroGrid}>
            <div>
              <h1 id="intro-title">I like building<br /><em>things.</em></h1>
              <p className={styles.intro}>I’m a founding engineer at QwikBuild / Snowmountain.ai. I build AI platforms and the systems that take them into production.</p>
              <a className={styles.textLink} href="#work">Selected work <ArrowDown size={17} /></a>
            </div>
          </div>
          <div className={styles.current}>
            <span className={styles.eyebrow}>CURRENTLY</span>
            <p>Founding Engineer at <strong>QwikBuild / Snowmountain.ai</strong></p>
            <Link href="/work">Full experience <ArrowUpRight size={16} /></Link>
          </div>
        </section>

        <section id="work" className={styles.work} aria-labelledby="work-title">
          <div className={styles.sectionHead}>
            <div><span className={styles.eyebrow}>01 / PROJECTS</span><h2 id="work-title">Selected work</h2></div>
            <p>AI platforms, browser automation,<br />and enterprise software.</p>
          </div>
          <article className={styles.feature}>
            <div className={styles.featureCopy}>
              <span className={styles.eyebrow}>CURRENT WORK · AI PLATFORMS</span>
              <h3>QwikBuild</h3>
              <p className={styles.featureLead}>The production platform behind QwikBuild.</p>
              <p>I build the production platform around our multi-agent coding system: the authentication, deployment, billing, and infrastructure that help AI-generated applications become usable products.</p>
              <Link className={styles.textLink} href="/work">Explore my role <ArrowUpRight size={17} /></Link>
              <div className={styles.featureFoot}>PLATFORM ENGINEERING <span>2023—PRESENT / SNOWMOUNTAIN.AI</span></div>
            </div>
            <div className={styles.fieldDiagram} role="img" aria-label="QwikBuild application lifecycle: an idea, a multi-agent coding system, then the production platform covering identity, deployment, billing, and operation.">
              <div className={styles.diagramTop}><span>QWIKBUILD</span><span>FIELD NOTE / 001</span></div>
              <div className={styles.diagramStart}>An idea</div>
              <div className={styles.connector} />
              <div className={styles.agentStep}>Multi-agent coding system</div>
              <div className={styles.connector} />
              <div className={styles.platform}>
                <div className={styles.platformLabel}>THE PRODUCTION PLATFORM <span>MY FOCUS</span></div>
                <div className={styles.platformGrid}><span>Identity</span><span>Deployment</span><span>Billing</span><span>Operation</span></div>
              </div>
              <p className={styles.diagramCaption}>From generation to production.<br /><em>Authentication, deployment, and ongoing operation.</em></p>
            </div>
          </article>
          <div className={styles.projectList}>
            {projects.map((project) => (
              <details className={styles.project} key={project.number}>
                <summary><span className={styles.projectNumber}>{project.number}</span><div><span className={styles.eyebrow}>{project.category}</span><h3>{project.name}</h3></div><p>{project.description}</p><span className={styles.expand} aria-hidden="true">+</span></summary>
                <div className={styles.projectDetail}><p>{project.detail}</p><Link href="/work">More about this work <ArrowUpRight size={15} /></Link></div>
              </details>
            ))}
          </div>
        </section>

        <section id="story" className={styles.story} aria-labelledby="story-title">
          <div className={styles.storyIntro}><span className={styles.eyebrow}>02 / BACKGROUND</span><h2 id="story-title">The story<br /><em>so far.</em></h2><p>A few moments that shaped<br />how I think and what I build.</p></div>
          <div className={styles.timeline}>
            {milestones.map((item) => (
              <article className={styles.milestone} key={item.date}>
                <span className={styles.eyebrow}>{item.date}</span><h3>{item.title}</h3><p>{item.text}</p><span className={styles.milestoneNote}>{item.note}</span>
                {item.extra && <details className={styles.moreNotes}><summary>A little more</summary><p>{item.extra}</p></details>}
              </article>
            ))}
          </div>
        </section>

        <section id="outside" className={styles.outside} aria-labelledby="outside-title">
          <div className={styles.sectionHead}><div><span className={styles.eyebrow}>03 / PERSONAL INTERESTS</span><h2 id="outside-title">Outside work</h2></div><p>Competitive programming, chess,<br />and strength training.</p></div>
          <div className={styles.pursuits}>
            <article className={styles.pursuit}>
              <div className={styles.pursuitLabel}><span>01 / COMPETITIVE PROGRAMMING</span><span>2017—18</span></div>
              <h3>Thinking against<br />the clock.</h3><div className={styles.metric}>2076<span>peak CodeChef rating · 5★</span></div>
              <div className={styles.chartImage}><Image src="/images/codechef-rating-progression.png" width={1024} height={599} alt="CodeChef rating progression from about 1200 to a peak of 2076 between 2016 and 2018" /></div>
              <p>From practice problems to representing NIT Calicut at the 2018–19 ICPC regionals.</p>
              <a className={styles.smallLink} href="https://www.codechef.com/users/fayaz_007" target="_blank" rel="noopener noreferrer">The CodeChef record <ArrowUpRight size={15} /></a>
            </article>
            <article className={styles.pursuit}>
              <div className={styles.pursuitLabel}><span>02 / BULLET CHESS</span><span>2021</span></div>
              <h3>One minute.<br />A lot of decisions.</h3><div className={styles.metric}>~1940<span>peak Lichess bullet rating</span></div>
              <div className={styles.chartImage}><Image src="/images/lichess-bullet-progression.png" width={1024} height={458} alt="Lichess bullet rating rising from about 1680 to about 1940 between March and June 2021" /></div>
              <p>Three months of regular play during the pandemic, from March to June 2021.</p>
              <a className={styles.smallLink} href="https://lichess.org/@/Fayaz007" target="_blank" rel="noopener noreferrer">The Lichess record <ArrowUpRight size={15} /></a>
            </article>
            <article className={styles.pursuit}>
              <div className={styles.pursuitLabel}><span>03 / STRENGTH & NUTRITION</span><span>2023</span></div>
              <h3>Showing up.<br />Keeping track.</h3><div className={styles.metric}>73 → 63<span>kilograms · six months</span></div>
              <div className={styles.fitnessCharts}><ChartSlideshow images={[
                {src:"/images/body-recomp-weight.png", width:472, height:300, alt:"Weight declining from 73 to 63 kilograms, March to August 2023", caption:"Weight (kg)"},
                {src:"/images/body-recomp-bodyfat.png", width:472, height:320, alt:"Scale body fat readings declining from 22 to 18 percent", caption:"Body fat (%)"},
                {src:"/images/body-recomp-progress.png", width:280, height:300, alt:"Body recomposition progress photo from August 2023", caption:"Progress photo", blurred:true},
              ]} /></div>
              <p>A focused cut, with weight and body fat tracked weekly from March to August.</p>
              <details className={styles.moreNotes}><summary>A note on the measurements</summary><p>Body fat readings came from a bioimpedance scale, which recorded 22% to 18%. These are scale estimates, not precise measurements.</p></details>
            </article>
          </div>
          <div className={styles.also}><span className={styles.eyebrow}>ALSO, AWAY FROM A SCREEN</span><span><Mountain size={19} /> Indoor climbing</span><span><Waves size={19} /> Open water scuba</span></div>
        </section>

        <section className={styles.closing} aria-labelledby="contact-title"><span className={styles.eyebrow}>04 / KEEP IN TOUCH</span><h2 id="contact-title">Get in<br /><em>touch.</em></h2><a href="mailto:fayazsalim@gmail.com">Let’s talk <MoveRight size={36} strokeWidth={1} /></a></section>
      </main>
      <JournalFooter />
    </div>
  );
}
