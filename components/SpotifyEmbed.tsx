// components/SpotifyEmbed.tsx
"use client";

interface SpotifyEmbedProps {
  type: "album" | "track" | "artist" | "playlist";
  id: string;
  width?: string | number;
  height?: string | number;
  compact?: boolean;
}

const SpotifyEmbed = ({ type, id, width = "100%", height, compact = false }: SpotifyEmbedProps) => {
  // Default heights based on type if not provided
  const defaultHeight = compact ? "80" : type === "album" || type === "playlist" ? "380" : "152";
  const finalHeight = height || defaultHeight;

  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator`}
      width={width}
      height={finalHeight}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyEmbed;
