"use client";

import { Pause, Volume2, Waves } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AmbientPlayer() {
  const audioRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{
    bass: OscillatorNode;
    lead: OscillatorNode;
    hat: OscillatorNode;
    leadGain: GainNode;
    bassGain: GainNode;
    hatGain: GainNode;
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
      nodes.lead.stop();
      nodes.hat.stop();
      nodesRef.current = null;
      document.documentElement.style.removeProperty("--pulse-intensity");
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
    const leadGain = context.createGain();
    const filter = context.createBiquadFilter();
    const leadFilter = context.createBiquadFilter();
    const bass = context.createOscillator();
    const hat = context.createOscillator();
    const lead = context.createOscillator();

    bass.type = "sine";
    bass.frequency.value = 55;
    hat.type = "triangle";
    hat.frequency.value = 880;
    lead.type = "sawtooth";
    lead.frequency.value = 220;
    filter.type = "lowpass";
    filter.frequency.value = 520;
    leadFilter.type = "bandpass";
    leadFilter.frequency.value = 1180;
    leadFilter.Q.value = 4.8;
    master.gain.value = 0.0001;
    bassGain.gain.value = 0.0001;
    hatGain.gain.value = 0.0001;
    leadGain.gain.value = 0.0001;

    bass.connect(bassGain);
    bassGain.connect(filter);
    hat.connect(hatGain);
    hatGain.connect(filter);
    lead.connect(leadGain);
    leadGain.connect(leadFilter);
    leadFilter.connect(filter);
    filter.connect(master);
    master.connect(context.destination);

    bass.start();
    hat.start();
    lead.start();
    master.gain.exponentialRampToValueAtTime(0.07, context.currentTime + 0.65);

    const bpm = 92;
    const beatMs = 60000 / bpm / 2;
    const bassPattern = [55, 42, 49, 42, 55, 65, 49, 42];
    const leadPattern = [220, 246.94, 293.66, 329.63, 293.66, 246.94, 196, 220];
    let step = 0;
    const timer = window.setInterval(() => {
      const now = context.currentTime;
      const isKick = step % 4 === 0 || step % 8 === 6;
      const intensity = isKick ? "1" : step % 2 === 0 ? "0.68" : "0.42";
      document.documentElement.style.setProperty("--pulse-intensity", intensity);

      bass.frequency.setValueAtTime(bassPattern[step % bassPattern.length], now);
      bassGain.gain.cancelScheduledValues(now);
      bassGain.gain.setValueAtTime(isKick ? 0.7 : 0.22, now);
      bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

      hatGain.gain.cancelScheduledValues(now);
      hatGain.gain.setValueAtTime(step % 2 === 0 ? 0.045 : 0.022, now);
      hatGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

      if (step % 2 === 0) {
        lead.frequency.setValueAtTime(leadPattern[step % leadPattern.length], now);
        leadGain.gain.cancelScheduledValues(now);
        leadGain.gain.setValueAtTime(0.035, now);
        leadGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);
      }
      step += 1;
    }, beatMs);

    nodesRef.current = { bass, lead, hat, leadGain, bassGain, hatGain, master, timer };
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
        nodes.lead.stop();
        nodes.hat.stop();
        nodesRef.current = null;
      }
      document.documentElement.dataset.ambient = "off";
      document.documentElement.style.removeProperty("--pulse-intensity");
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
      title={playing ? "Pausar pulso de estudio" : "Activar pulso de estudio"}
      aria-label={playing ? "Pausar pulso de estudio" : "Activar pulso de estudio"}
    >
      {playing ? <Pause size={15} /> : <Volume2 size={15} />}
      <span className="ambient-bars" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <Waves className="hidden text-[#d8b76b] sm:block" size={14} aria-hidden="true" />
      <span>{playing ? "Pulso activo" : "Pulso de estudio"}</span>
    </button>
  );
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}
