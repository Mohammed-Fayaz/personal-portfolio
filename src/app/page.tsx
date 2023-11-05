"use client";

// constants
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <header className="w-full px-6 py-4 flex items-center justify-between">
        <div>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Mohammed Fayaz Salim
          </span>
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
            className="px-6 py-2 rounded-md border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-300 dark:hover:text-black"
            variant="outline"
          >
            Contact Me
          </Button>
          <Button
            className="px-6 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 dark:bg-indigo-300 dark:text-black dark:hover:bg-indigo-200"
            onClick={() => router.push("/work")}
          >
            See my work
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
