import Link from "next/link";

// components
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <header className="w-full px-6 py-4 flex items-center justify-between">
        <div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Mohammed Fayaz Salim
          </span>
        </div>
        <div className="flex space-x-4">
          <Link
            aria-label="GitHub"
            href="https://github.com/Mohammed-Fayaz"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              className=" w-6 h-6 text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-300"
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
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
          <Link
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/mohammedfayazsalim/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              className=" w-6 h-6 text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-300"
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
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect height="12" width="4" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
          <Link
            aria-label="Twitter"
            href="https://twitter.com/FayazsalimMoha"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              className=" w-6 h-6 text-gray-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-300"
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
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </Link>
        </div>
      </header>
      <main className="flex-1 w-full max-w-4xl mx-auto mt-16 text-center flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Hello, I&apos;m Fayaz
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          I&apos;m a full-stack developer specialized in building high-quality
          websites and applications.
        </p>
        <div className="mt-8 space-x-2">
          <Button
            asChild
            className="px-6 py-2 rounded-md border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-300 dark:hover:text-black"
            variant="outline"
          >
            <Link href="mailto:fayazsalim@gmail.com">Contact Me</Link>
          </Button>
          <Button
            asChild
            className="px-6 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-300 dark:text-black dark:hover:bg-indigo-200"
          >
            <Link href="/work">See my work</Link>
          </Button>
        </div>
      </main>
      <footer className="w-full h-20 flex items-center justify-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-300">
          © 2023 Mohammed Fayaz Salim. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
