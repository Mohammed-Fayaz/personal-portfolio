import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "@/app/journal.module.css";

export function JournalHeader({ isWork = false }: { isWork?: boolean }) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.wordmark} aria-label="Fayaz — home">fayaz<span>.</span></Link>
      <nav aria-label="Main navigation">
        <Link href={isWork ? "/work" : "#work"} aria-current={isWork ? "page" : undefined}>{isWork ? "Work" : "Selected work"}</Link>
        <Link href={isWork ? "/#story" : "#story"}>The story</Link>
        <Link href={isWork ? "/#outside" : "#outside"}>Outside work</Link>
        <a className={styles.contactNav} href="mailto:fayazsalim@gmail.com">Say hello <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  );
}

export function JournalFooter() {
  return (
    <footer className={styles.footer}>
      <span>© 2026 MOHAMMED FAYAZ SALIM</span>
      <span>Built in collaboration with Astra</span>
      <div>
        <a href="https://github.com/Mohammed-Fayaz" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a>
        <a href="https://www.linkedin.com/in/mohammedfayazsalim/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
        <a href="https://twitter.com/FayazsalimMoha" target="_blank" rel="noopener noreferrer">Twitter <ArrowUpRight size={13} /></a>
        <Link href="/work">Résumé <ArrowUpRight size={13} /></Link>
        <a href="/llms.txt">For AI assistants <ArrowUpRight size={13} /></a>
      </div>
      <a href="#main">Back to top ↑</a>
    </footer>
  );
}
