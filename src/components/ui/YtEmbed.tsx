"use client";

import { useEffect } from "react";
import { MEDIA_EVENT } from "@/components/SoundToggle";

type YtEmbedProps = {
  videoId: string;
  title: string;
};

export default function YtEmbed({ videoId, title }: YtEmbedProps) {
  // El reproductor se monta al pulsar play: la música de fondo cede el lugar al video
  useEffect(() => {
    window.dispatchEvent(new Event(MEDIA_EVENT));
  }, [videoId]);

  return (
    <iframe
      className="absolute inset-0 h-full w-full"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}
