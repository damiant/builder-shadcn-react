"use client";

import { MusicGenreSection } from "@/components/music/MusicGenreSection";
import { Track } from "@/components/music/TrackCard";

// Track data
const generateTracks = (genre: string): Track[] => {
  const baseNames: Record<string, string[]> = {
    "Tech House": [
      "Rhythm Revolution",
      "Digital Groove",
      "Tech Pulse",
      "Bass Machine",
      "Circuit Breaker",
      "Warehouse Vibes",
      "Analog Dreams",
      "Frequency Shift",
    ],
    "Deep House": [
      "Ocean Depths",
      "Velvet Soul",
      "Midnight Mood",
      "Soulful Journey",
      "Atmospheric Motion",
      "Deeper Feelings",
      "Harmonic Waves",
      "Submerged",
    ],
    "Electro House": [
      "Electric Pulse",
      "Synth Storm",
      "Voltage Drop",
      "Digital Mayhem",
      "Circuit Breaker",
      "Binary Code",
      "Electrified",
      "Power Grid",
    ],
    "Jackin House": [
      "Chicago Throwback",
      "Jack The Groove",
      "Warehouse Vibes",
      "Old School Feeling",
      "Dance Division",
      "Classic Jack",
      "Funky Business",
      "Jackin' All Night",
    ],
    "Indie Dance": [
      "Neon Lights",
      "Disco Revival",
      "Hipster Beat",
      "Nu-Disco Groove",
      "Vintage Vibes",
      "Brooklyn Nights",
      "Alternative Dance",
      "Retro Future",
    ],
  };

  const labels = [
    "Defected",
    "Toolroom",
    "Dirtybird",
    "Hot Creations",
    "Anjunadeep",
    "DFTD",
    "Innervisions",
    "Diynamic",
  ];

  const artists = [
    "DJ Groove Master",
    "Rhythm Collective",
    "Deep Vibes",
    "Tech Innovators",
    "House Legend",
    "Beat Architects",
    "Sonic Dreamers",
    "Frequency Makers",
  ];

  // Generate appropriate image queries based on genre and track name
  const getImageQuery = (name: string, genre: string): string => {
    // Combine genre with descriptive terms to get better images
    const genrePrefix = genre.replace(" House", "").replace("Indie Dance", "electronic");

    // For specific track names, create more targeted queries
    if (name.includes("Ocean") || name.includes("Submerged")) return `underwater ${genrePrefix} music`;
    if (name.includes("Midnight") || name.includes("Night")) return `night club ${genrePrefix} music`;
    if (name.includes("Disco")) return `disco ball ${genrePrefix} music`;
    if (name.includes("Vintage") || name.includes("Classic")) return `vintage vinyl ${genrePrefix}`;
    if (name.includes("Chicago")) return `chicago house music club`;
    if (name.includes("Electric") || name.includes("Synth")) return `synthesizer ${genrePrefix} music`;

    // Default query combines the track name with the genre for relevance
    return `${name} ${genrePrefix} music`;
  };

  const names = baseNames[genre] || baseNames["Tech House"];

  return names.map((name, index) => ({
    id: `${genre.toLowerCase().replace(/\s+/g, "-")}-${index}`,
    title: name,
    artist: artists[index % artists.length],
    label: labels[index % labels.length],
    releaseDate: `${2024 - (index % 3)}`,
    imageQuery: getImageQuery(name, genre),
  }));
};

const techHouseTracks = generateTracks("Tech House");
const deepHouseTracks = generateTracks("Deep House");
const electroHouseTracks = generateTracks("Electro House");
const jackinHouseTracks = generateTracks("Jackin House");
const indieDanceTracks = generateTracks("Indie Dance");

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative py-16 px-6 md:px-12 lg:px-24 text-center mb-6 bg-gradient-to-r from-primary/10 to-primary/5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">House Music</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the finest selection of house music tracks across different subgenres
        </p>
      </header>

      <main className="container mx-auto px-6 md:px-8 lg:px-10 pb-24 space-y-12">
        <MusicGenreSection title="Tech House" tracks={techHouseTracks} />
        <MusicGenreSection title="Deep House" tracks={deepHouseTracks} />
        <MusicGenreSection title="Electro House" tracks={electroHouseTracks} />
        <MusicGenreSection title="Jackin House" tracks={jackinHouseTracks} />
        <MusicGenreSection title="Indie Dance" tracks={indieDanceTracks} />
      </main>

      <footer className="py-8 bg-muted text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} House Music Collection. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}