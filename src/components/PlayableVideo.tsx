"use client";

import { Pause, Play, Volume2 } from "lucide-react";
import { useRef, useState } from "react";

type PlayableVideoProps = {
  src: string;
  label: string;
  className?: string;
  videoClassName?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
};

export default function PlayableVideo({
  src,
  label,
  className = "",
  videoClassName = "",
  overlayClassName = "",
  children,
}: PlayableVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  async function toggle() {
    const video = videoRef.current;
    if (!video) return;

    if (playing) {
      video.pause();
      setPlaying(false);
      return;
    }

    video.muted = false;
    video.controls = true;
    await video.play();
    setPlaying(true);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      data-cursor={playing ? "PAUSA" : "PLAY"}
      data-cursor-mode="media"
      className={`group relative block h-full w-full overflow-hidden text-left ${className}`}
      aria-label={playing ? `Pausar ${label}` : `Reproducir ${label}`}
    >
      <video
        ref={videoRef}
        className={`glitch-media h-full w-full object-cover transition duration-700 group-hover:scale-[1.035] ${videoClassName}`}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        data-parallax-media
      />
      <span className={`pointer-events-none absolute inset-0 ${overlayClassName}`} />
      <span className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="grid size-16 place-items-center rounded-full border border-white/18 bg-white/12 text-white backdrop-blur-md transition group-hover:scale-105">
          {playing ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
        </span>
      </span>
      <span className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/28 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/68 backdrop-blur-md">
        <Volume2 size={13} /> {playing ? "Reproduciendo" : "Tocar video"}
      </span>
      {children}
    </button>
  );
}
