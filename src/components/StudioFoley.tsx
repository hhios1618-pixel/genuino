"use client";

import { useEffect, useRef } from "react";

export default function StudioFoley() {
  const contextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    function getContext() {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const context = contextRef.current ?? new AudioContextClass();
      contextRef.current = context;
      return context;
    }

    function playClick() {
      const context = getContext();
      const now = context.currentTime;
      const osc = context.createOscillator();
      const gain = context.createGain();
      const filter = context.createBiquadFilter();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(1380, now);
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.055);
      filter.type = "highpass";
      filter.frequency.value = 360;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.018, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(context.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    }

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".premium-cta, .ghost-cta, button[data-magnetic], a[data-magnetic]")) {
        return;
      }

      playClick();
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      contextRef.current?.close();
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
