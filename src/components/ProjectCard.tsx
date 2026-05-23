"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
  return (
    <motion.a
      href={href}
      data-cursor="PLAY"
      data-cursor-mode="media"
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
