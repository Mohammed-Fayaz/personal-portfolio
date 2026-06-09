import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type ProofChartProps = {
  period: string;
  stat?: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  href?: string;
  linkLabel?: string;
};

export function ProofChart({
  period,
  stat,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  href,
  linkLabel,
}: ProofChartProps) {
  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-border/60 bg-muted/20">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/60 px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {period}
        </p>
        {stat && <p className="text-sm text-muted-foreground">{stat}</p>}
      </div>
      <Image
        alt={imageAlt}
        className="h-auto w-full"
        height={imageHeight}
        src={imageSrc}
        unoptimized
        width={imageWidth}
      />
      {href && linkLabel && (
        <div className="border-t border-border/60 px-4 py-3">
          <Link
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {linkLabel}
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
