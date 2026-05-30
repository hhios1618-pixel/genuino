"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { useState } from "react";
import PlayableVideo from "@/components/PlayableVideo";
import { blurDataUrl } from "@/data/site";

type ProjectCardProps = {
  title: string;
  type: string;
  year: string;
  description: string;
  image: string;
  href: string;
  className?: string;
  wide?: boolean;
};

function youtubeIdFromHref(href: string) {
  try {
    const url = new URL(href);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1);
    if (url.hostname.includes("youtube.com")) return url.searchParams.get("v");
  } catch {
    return null;
  }

  return null;
}

export default function ProjectCard({
  title,
  type,
  year,
  description,
  image,
  href,
  className = "",
  wide = false,
}: ProjectCardProps) {
  const isExternal = href.startsWith("http");
  const youtubeId = youtubeIdFromHref(href);
  const [playing, setPlaying] = useState(false);

  if (image.endsWith(".mp4")) {
    return (
      <motion.article
        className={`bento-card group relative min-h-[360px] overflow-hidden rounded-[1.6rem] border hairline bg-[#0d0c0a] ${className}`}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <PlayableVideo
          src={image}
          label={title}
          className="absolute inset-0"
          videoClassName="h-[112%] opacity-90"
          overlayClassName="bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.84))]"
        >
          <span className="pointer-events-none absolute inset-x-5 top-5 z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/64">
            <span>{type}</span>
            <span>{year}</span>
          </span>
          <span className="glass-caption pointer-events-none absolute inset-x-4 bottom-4 z-10 block rounded-[1.25rem] border border-white/12 bg-black/28 p-5 backdrop-blur-xl">
            <span className="flex items-start justify-between gap-5">
              <span>
                <span className="block text-2xl font-medium text-white">{title}</span>
                <span className="mt-3 block text-sm leading-6 text-white/64">{description}</span>
              </span>
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/14 bg-black/22 text-white">
                <ArrowUpRight size={18} />
              </span>
            </span>
          </span>
        </PlayableVideo>
      </motion.article>
    );
  }

  if (youtubeId) {
    return (
      <motion.article
        className={`bento-card group relative min-h-[360px] overflow-hidden rounded-[1.6rem] border hairline bg-[#0d0c0a] ${className}`}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            data-cursor="Play"
            data-cursor-mode="media"
            className="absolute inset-0 text-left"
            aria-label={`Reproducir ${title} en el sitio`}
          >
            <motion.span
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={image}
                alt={title}
                fill
                placeholder="blur"
                blurDataURL={blurDataUrl}
                sizes={wide ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                className="glitch-media object-cover opacity-90"
                data-parallax-media
              />
            </motion.span>
            <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.84))]" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-16 place-items-center rounded-full border border-white/18 bg-white/12 text-white shadow-2xl backdrop-blur-md transition group-hover:scale-105">
                <Play size={19} fill="currentColor" />
              </span>
            </span>
            <span className="absolute inset-x-5 top-5 z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/64">
              <span>{type}</span>
              <span>{year}</span>
            </span>
            <span className="glass-caption absolute inset-x-4 bottom-4 z-10 rounded-[1.25rem] border border-white/12 bg-black/28 p-5 backdrop-blur-xl">
              <span className="flex items-start justify-between gap-5">
                <span>
                  <span className="block text-2xl font-medium text-white">{title}</span>
                  <span className="mt-3 block text-sm leading-6 text-white/64">{description}</span>
                </span>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/14 bg-black/22 text-white">
                  <Play size={17} fill="currentColor" />
                </span>
              </span>
            </span>
          </button>
        )}

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          data-cursor="YouTube"
          data-cursor-mode="link"
          className="absolute right-4 top-4 z-20 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/12 bg-black/36 px-4 text-xs font-medium text-white/72 backdrop-blur-xl transition hover:border-[#d8b76b]/36 hover:text-[#f4d489]"
        >
          YouTube <ArrowUpRight size={14} />
        </a>
      </motion.article>
    );
  }

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      data-cursor="Ver"
      data-cursor-mode="link"
      className={`bento-card group relative min-h-[360px] overflow-hidden rounded-[1.6rem] border hairline bg-[#0d0c0a] ${className}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        {image.endsWith(".mp4") ? (
          <video
            className="glitch-media h-[112%] w-full object-cover opacity-90"
            src={image}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            data-parallax-media
          />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            placeholder="blur"
            blurDataURL={blurDataUrl}
            sizes={wide ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
            className="glitch-media object-cover opacity-90"
            data-parallax-media
          />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.84))]" />
      <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/64">
        <span>{type}</span>
        <span>{year}</span>
      </div>
      <motion.div
        className="glass-caption absolute inset-x-4 bottom-4 z-10 rounded-[1.25rem] border border-white/12 bg-black/28 p-5 backdrop-blur-xl"
        initial={false}
        whileHover={{ backgroundColor: "rgba(255,255,255,0.075)" }}
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="text-2xl font-medium text-white">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/64">{description}</p>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/14 bg-black/22 text-white">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </motion.div>
    </motion.a>
  );
}
