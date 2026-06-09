"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export type ChartImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  blurred?: boolean;
};

type ChartSlideshowProps = {
  images: ChartImage[];
};

export function ChartSlideshow({ images }: ChartSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [unblurredSlides, setUnblurredSlides] = useState<Set<number>>(
    () => new Set(),
  );
  const current = images[index];
  const isBlurred = Boolean(current.blurred && !unblurredSlides.has(index));

  const goToPrevious = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const revealImage = () => {
    if (!current.blurred || unblurredSlides.has(index)) return;
    setUnblurredSlides((prev) => new Set(prev).add(index));
  };

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-xs font-medium text-muted-foreground">
          {current.caption}
        </p>
        <p className="text-xs text-muted-foreground">
          {index + 1} / {images.length}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          aria-label="Previous chart"
          className="shrink-0"
          onClick={goToPrevious}
          size="icon"
          type="button"
          variant="outline"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="min-w-0 flex-1 overflow-hidden rounded-lg border border-border/60 bg-muted/30">
          {isBlurred ? (
            <button
              aria-label="Click to reveal progress photo"
              className="relative block w-full cursor-pointer"
              onClick={revealImage}
              type="button"
            >
              <Image
                alt={current.alt}
                className="h-auto w-full scale-105 blur-xl"
                height={current.height}
                src={current.src}
                unoptimized
                width={current.width}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-background/30 px-4 text-center text-sm font-medium text-foreground backdrop-blur-[2px]">
                Click to reveal
              </span>
            </button>
          ) : (
            <Image
              alt={current.alt}
              className="h-auto w-full"
              height={current.height}
              key={current.src}
              src={current.src}
              unoptimized
              width={current.width}
            />
          )}
        </div>
        <Button
          aria-label="Next chart"
          className="shrink-0"
          onClick={goToNext}
          size="icon"
          type="button"
          variant="outline"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
