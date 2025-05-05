import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Track {
  id: string;
  title: string;
  artist: string;
  label?: string;
  releaseDate?: string;
  imageQuery?: string;
}

interface TrackCardProps {
  track: Track;
  className?: string;
}

export function TrackCard({ track, className }: TrackCardProps) {
  const imageUrl = `https://api.webnative.dev/images?query=${encodeURIComponent(track.imageQuery || track.title)}`;
  const [imgError, setImgError] = React.useState(false);

  return (
    <Card className={cn("w-full h-64 flex flex-col hover:shadow-lg transition-shadow", className)}>
      <div className="relative h-32 w-full overflow-hidden rounded-t-xl bg-muted/30">
        {!imgError ? (
          <Image
            src={imageUrl}
            alt={`Cover art for ${track.title}`}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex items-center justify-center h-full w-full bg-muted/50">
            <p className="text-sm text-muted-foreground">🎵 {track.title}</p>
          </div>
        )}
      </div>
      <CardContent className="p-4 flex flex-col justify-between h-full flex-grow">
        <div>
          <CardTitle className="text-lg mb-2 line-clamp-2">{track.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{track.artist}</p>
        </div>
        {track.label && (
          <div className="mt-auto">
            <p className="text-xs text-muted-foreground">
              {track.label} {track.releaseDate && `· ${track.releaseDate}`}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}