"use client";

import Image from "next/image";
import { useState } from "react";
import { blurDataUrl } from "@/data/site";

type YtImageProps = {
  videoId: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

const qualities = ["maxresdefault", "sddefault", "hqdefault"] as const;

/* Miniatura de YouTube con caída a menor calidad si la máxima no existe */
export default function YtImage({ videoId, alt, sizes, className = "", priority = false }: YtImageProps) {
  const [quality, setQuality] = useState(0);

  return (
    <Image
      src={`https://i.ytimg.com/vi/${videoId}/${qualities[quality]}.jpg`}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={blurDataUrl}
      onError={() => setQuality((value) => Math.min(value + 1, qualities.length - 1))}
      className={`object-cover ${className}`}
    />
  );
}
