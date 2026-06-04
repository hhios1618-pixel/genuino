"use client";

import { motion } from "framer-motion";

const items = [
  "Producción",
  "Mezcla",
  "Mastering",
  "Booking",
  "Radio",
  "Televisión",
  "Prensa",
  "Medios",
  "Videoclips",
  "Marketing",
  "LATAM",
  "Chile",
];

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-0">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 text-xs font-medium uppercase tracking-[0.32em] text-white/38">
            {item}
          </span>
          <span className="text-[#d8b76b]/40 text-xs">·</span>
        </span>
      ))}
    </div>
  );
}

export default function MarqueeTicker() {
  return (
    <div className="overflow-hidden border-y hairline bg-[#070706] py-4">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        <Track />
        <Track />
      </motion.div>
    </div>
  );
}
