"use client";

import Lenis from "lenis";
import { motion } from "framer-motion";
import { Pause, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ExperienceLayerProps = {
  children: ReactNode;
};

export default function ExperienceLayer({ children }: ExperienceLayerProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const noiseRef = useRef<{
    source: AudioBufferSourceNode;
    gain: GainNode;
    filter: BiquadFilterNode;
  } | null>(null);
  const cursorLabelRef = useRef("");
  const [cursorLabel, setCursorLabel] = useState("");
  const [ambientOn, setAmbientOn] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.86,
      touchMultiplier: 0.95,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const contexts = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 42, filter: "blur(14px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        const children = gsap.utils.toArray<HTMLElement>(group.children);
        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.86,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: element.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => contexts.revert();
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const cursorX = gsap.quickTo(cursor, "x", { duration: 0.28, ease: "power3.out" });
    const cursorY = gsap.quickTo(cursor, "y", { duration: 0.28, ease: "power3.out" });
    const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });

    const onMove = (event: PointerEvent) => {
      cursorX(event.clientX);
      cursorY(event.clientY);
      dotX(event.clientX);
      dotY(event.clientY);

      const target = event.target as HTMLElement;
      const cursorTarget = target.closest<HTMLElement>("[data-cursor]");
      const magneticTarget = target.closest<HTMLElement>("[data-magnetic]");

      const nextLabel = cursorTarget?.dataset.cursor ?? "";
      if (cursorLabelRef.current !== nextLabel) {
        cursorLabelRef.current = nextLabel;
        setCursorLabel(nextLabel);
      }
      document.documentElement.dataset.cursorActive = cursorTarget ? "true" : "false";

      if (magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
        gsap.to(magneticTarget, { x, y, duration: 0.28, ease: "power3.out" });
      }
    };

    const onOut = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      const magneticTarget = target.closest<HTMLElement>("[data-magnetic]");
      if (magneticTarget) {
        gsap.to(magneticTarget, { x: 0, y: 0, duration: 0.45, ease: "elastic.out(1, 0.45)" });
      }
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerout", onOut);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onOut);
      delete document.documentElement.dataset.cursorActive;
    };
  }, []);

  function toggleAmbient() {
    if (ambientOn) {
      const context = audioRef.current;
      if (!context || !noiseRef.current) return;

      noiseRef.current.gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.5);
      window.setTimeout(() => {
        noiseRef.current?.source.stop();
        noiseRef.current = null;
      }, 560);
      setAmbientOn(false);
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const context = audioRef.current ?? new AudioContextClass();
    audioRef.current = context;

    const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < data.length; index += 1) {
      data[index] = (Math.random() * 2 - 1) * 0.34;
    }

    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const gain = context.createGain();

    source.buffer = buffer;
    source.loop = true;
    filter.type = "lowpass";
    filter.frequency.value = 460;
    gain.gain.value = 0.0001;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    source.start();
    gain.gain.exponentialRampToValueAtTime(0.018, context.currentTime + 0.6);

    noiseRef.current = { source, gain, filter };
    setAmbientOn(true);
  }

  useEffect(() => {
    return () => {
      noiseRef.current?.source.stop();
      audioRef.current?.close();
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="contents"
      >
        {children}
      </motion.div>

      <button
        type="button"
        onClick={toggleAmbient}
        data-magnetic
        className="ambient-toggle"
        aria-pressed={ambientOn}
        aria-label={ambientOn ? "Desactivar ambiente sonoro" : "Activar ambiente sonoro"}
      >
        {ambientOn ? <Pause size={16} /> : <Volume2 size={16} />}
        <span>{ambientOn ? "Ambient on" : "Ambient mode"}</span>
      </button>

      <div className="grain-overlay" aria-hidden="true" />
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
        <span>{cursorLabel}</span>
      </div>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
