"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

type YouTubeFeatureProps = {
  title: string;
  videoId: string;
  featured?: boolean;
};

function thumbnail(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export default function YouTubeFeature({
  title,
  videoId,
  featured = false,
}: YouTubeFeatureProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 block overflow-hidden text-left"
      aria-label={`Reproducir ${title}`}
    >
      <Image
        src={thumbnail(videoId)}
        alt=""
        fill
        sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
        className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.035]"
      />
      <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.16),rgba(0,0,0,0.5)),linear-gradient(180deg,transparent,rgba(0,0,0,0.76))]" />
      <span className="absolute left-5 top-5 rounded-full border border-white/14 bg-black/28 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/62 backdrop-blur-md">
        Reproducir aqui
      </span>
      <span className="absolute inset-0 grid place-items-center">
        <span className={`${featured ? "size-18" : "size-14"} grid place-items-center rounded-full border border-white/18 bg-white/12 text-white shadow-2xl backdrop-blur-md transition group-hover:scale-105`}>
          <Play size={featured ? 22 : 17} fill="currentColor" />
        </span>
      </span>
    </button>
  );
}
