import Link from "next/link";

import { AboutTimeline } from "@/components/about-timeline";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Mohammed-Fayaz",
    icon: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    ),
    secondPath: <path d="M9 18c-4.51 2-5-2-7-2" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammedfayazsalim/",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect height="12" width="4" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/FayazsalimMoha",
    icon: (
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    ),
  },
] as const;

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-gray-100 dark:bg-gray-800">
      <header className="w-full px-6 py-4 md:px-12 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">
          Mohammed Fayaz Salim
        </span>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href="/work">Work</Link>
          </Button>
          <div className="flex space-x-4">
            {socialLinks.map(({ label, href, icon, secondPath }) => (
              <Link
                key={label}
                aria-label={label}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-300"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {icon}
                  {secondPath}
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 w-full px-6 py-12 md:px-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <section className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Hello, I&apos;m Fayaz
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Founding engineer building LLM-powered products. I&apos;ve always
              been drawn to hard problems — competitive programming and machine
              learning in university, three years shipping at a late-stage
              startup, and now the first engineering hire at an early-stage
              company. Along the way I&apos;ve tried to get genuinely good at
              whatever I commit to.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button
                asChild
                className="bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-300 dark:text-black dark:hover:bg-indigo-200"
              >
                <Link href="mailto:fayazsalim@gmail.com">Contact me</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/work">See my work</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-8">
              The arc, in order
            </h2>
            <AboutTimeline />
          </section>
        </div>
      </main>

      <footer className="w-full px-6 py-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-300 text-sm">
          © 2026 Mohammed Fayaz Salim
        </p>
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="mailto:fayazsalim@gmail.com">Email</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/work">Work</Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}
