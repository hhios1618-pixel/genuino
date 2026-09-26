"use client";

import { useState } from "react";
import YtEmbed from "@/components/ui/YtEmbed";
import YtImage from "@/components/ui/YtImage";

type YouTubeFeatureProps = {
  title: string;
  videoId: string;
  sizes?: string;
  priority?: boolean;
};

/* Portada de video que se reproduce en la misma página */
export default function YouTubeFeature({
  title,
  videoId,
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
}: YouTubeFeatureProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) return <YtEmbed videoId={videoId} title={title} />;

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      data-cursor="Play"
      className="group absolute inset-0 block overflow-hidden text-left"
      aria-label={`Reproducir ${title}`}
    >
      <YtImage
        videoId={videoId}
        alt=""
        sizes={sizes}
        priority={priority}
        className="media-dim transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-full bg-bone px-3.5 py-2 text-xs font-medium text-ink transition-colors duration-500 group-hover:bg-signal group-hover:text-bone">
        <svg viewBox="0 0 10 12" className="size-2.5" fill="currentColor" aria-hidden="true">
          <path d="M0 0v12l10-6z" />
        </svg>
        Reproducir
      </span>
    </button>
  );
}
