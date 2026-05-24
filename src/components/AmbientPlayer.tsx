"use client";

import { Pause, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AmbientPlayer() {
  const audioRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{
    bass: OscillatorNode;
    hat: OscillatorNode;
    master: GainNode;
    timer: number;
  } | null>(null);
  const [playing, setPlaying] = useState(false);

  function stopPulse() {
    const context = audioRef.current;
    const nodes = nodesRef.current;
    if (!context || !nodes) return;

    nodes.master.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.35);
    window.clearInterval(nodes.timer);
    window.setTimeout(() => {
      nodes.bass.stop();
      nodes.hat.stop();
      nodesRef.current = null;
    }, 420);
    document.documentElement.dataset.ambient = "off";
    setPlaying(false);
  }

  function startPulse() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const context = audioRef.current ?? new AudioContextClass();
    audioRef.current = context;

    const master = context.createGain();
    const bassGain = context.createGain();
    const hatGain = context.createGain();
    const filter = context.createBiquadFilter();
    const bass = context.createOscillator();
    const hat = context.createOscillator();

    bass.type = "sine";
    bass.frequency.value = 55;
    hat.type = "triangle";
    hat.frequency.value = 880;
    filter.type = "lowpass";
    filter.frequency.value = 520;
    master.gain.value = 0.0001;
    bassGain.gain.value = 0.0001;
    hatGain.gain.value = 0.0001;

    bass.connect(bassGain);
    bassGain.connect(filter);
    hat.connect(hatGain);
    hatGain.connect(filter);
    filter.connect(master);
    master.connect(context.destination);

    bass.start();
    hat.start();
    master.gain.exponentialRampToValueAtTime(0.055, context.currentTime + 0.45);

    const bpm = 92;
    const beatMs = 60000 / bpm;
    let step = 0;
    const timer = window.setInterval(() => {
      const now = context.currentTime;
      const isKick = step % 4 === 0;
      bass.frequency.setValueAtTime(isKick ? 55 : 42, now);
      bassGain.gain.cancelScheduledValues(now);
      bassGain.gain.setValueAtTime(isKick ? 0.7 : 0.22, now);
      bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

      hatGain.gain.cancelScheduledValues(now);
      hatGain.gain.setValueAtTime(step % 2 === 0 ? 0.045 : 0.022, now);
      hatGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      step += 1;
    }, beatMs);

    nodesRef.current = { bass, hat, master, timer };
    document.documentElement.dataset.ambient = "on";
    setPlaying(true);
  }

  function toggle() {
    if (playing) {
      stopPulse();
      return;
    }

    startPulse();
  }

  useEffect(() => {
    return () => {
      const nodes = nodesRef.current;
      if (nodes) {
        window.clearInterval(nodes.timer);
        nodes.bass.stop();
        nodes.hat.stop();
        nodesRef.current = null;
      }
      document.documentElement.dataset.ambient = "off";
      audioRef.current?.close();
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      data-magnetic
      data-cursor="Audio"
      data-cursor-mode="link"
      className="ambient-toggle"
      aria-pressed={playing}
      aria-label={playing ? "Pausar pulso de estudio" : "Activar pulso de estudio"}
    >
      {playing ? <Pause size={15} /> : <Volume2 size={15} />}
      <span className="ambient-bars" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>{playing ? "Pulso activo" : "Pulso de estudio"}</span>
    </button>
  );
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
