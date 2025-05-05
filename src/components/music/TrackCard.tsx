import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Track {
  id: string;
  title: string;
  artist: string;
  label?: string;
  releaseDate?: string;
}

interface TrackCardProps {
  track: Track;
  className?: string;
}

export function TrackCard({ track, className }: TrackCardProps) {
  return (
    <Card className={cn("w-full h-40 flex flex-col hover:shadow-lg transition-shadow", className)}>
      <CardContent className="p-4 flex flex-col justify-between h-full">
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