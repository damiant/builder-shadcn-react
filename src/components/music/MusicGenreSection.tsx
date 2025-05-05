import React from "react";
import { Track, TrackCard } from "./TrackCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MusicGenreSectionProps {
  title: string;
  tracks: Track[];
  className?: string;
}

export function MusicGenreSection({ title, tracks, className }: MusicGenreSectionProps) {
  return (
    <section className={className}>
      <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-permanent-marker)]">{title}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {tracks.map((track) => (
            <CarouselItem key={track.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <TrackCard track={track} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-4" />
        <CarouselNext className="hidden sm:flex -right-4" />
      </Carousel>
    </section>
  );
}