"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

/*
  Música de fondo del sitio.
  Los navegadores no dejan sonar audio hasta que la persona interactúa, así que parte con el primer
  toque, clic o tecla. El botón la silencia y la elección queda guardada en este navegador.
  Cuando empieza un video con sonido (evento MEDIA_EVENT) la música se pausa y no vuelve sola.

  SoundProvider vive en el layout para que la música siga al cambiar de página;
  SoundButton va en la barra, que se monta de nuevo en cada página.
*/
const STORAGE_KEY = "genuino-sound";
const VOLUME = 0.45;
export const MEDIA_EVENT = "genuino:media";

type SoundState = { playing: boolean; toggle: () => void };

const SoundContext = createContext<SoundState>({ playing: false, toggle: () => {} });

export function SoundProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeRef = useRef(0);
  const resumeRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  const fadeTo = useCallback((target: number, duration: number, done?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;
    cancelAnimationFrame(fadeRef.current);
    const from = audio.volume;
    const startedAt = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      audio.volume = from + (target - from) * progress;
      if (progress < 1) fadeRef.current = requestAnimationFrame(step);
      else done?.();
    };
    fadeRef.current = requestAnimationFrame(step);
  }, []);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;
    audio.volume = 0;
    try {
      await audio.play();
    } catch {
      return false;
    }
    fadeTo(VOLUME, 1400);
    return true;
  }, [fadeTo]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;
    fadeTo(0, 350, () => audio.pause());
  }, [fadeTo]);

  // Primera interacción: arranca la música si la persona no la silenció antes
  useEffect(() => {
    let muted = false;
    try {
      muted = localStorage.getItem(STORAGE_KEY) === "off";
    } catch {
      muted = false;
    }
    if (muted) return;

    const onGesture = async (event: Event) => {
      if ((event.target as Element | null)?.closest?.("[data-sound-toggle]")) return;
      if (await play()) stopListening();
    };
    const stopListening = () => {
      window.removeEventListener("pointerdown", onGesture, true);
      window.removeEventListener("keydown", onGesture, true);
    };
    window.addEventListener("pointerdown", onGesture, true);
    window.addEventListener("keydown", onGesture, true);
    return stopListening;
  }, [play]);

  // Un video con sonido pausa la música; al ocultar la pestaña también, y vuelve al regresar
  useEffect(() => {
    const onMedia = () => {
      resumeRef.current = false;
      pause();
    };
    const onVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (document.hidden) {
        resumeRef.current = !audio.paused;
        audio.pause();
      } else if (resumeRef.current) {
        resumeRef.current = false;
        void play();
      }
    };
    window.addEventListener(MEDIA_EVENT, onMedia);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener(MEDIA_EVENT, onMedia);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [pause, play]);

  const toggle = useCallback(() => {
    const next = playing ? "off" : "on";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Sin almacenamiento (modo privado): la preferencia dura solo esta visita */
    }
    if (playing) pause();
    else void play();
  }, [pause, play, playing]);

  return (
    <SoundContext.Provider value={{ playing, toggle }}>
      {children}
      <audio
        ref={audioRef}
        src="/audio/ambiente.mp3"
        preload="none"
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </SoundContext.Provider>
  );
}

/* Botón de la barra: círculo en celular, con etiqueta desde sm */
export function SoundButton() {
  const { playing, toggle } = useContext(SoundContext);
  const label = playing ? "Silenciar música" : "Activar música";
  return (
    <button
      type="button"
      data-sound-toggle
      onClick={toggle}
      aria-pressed={playing}
      aria-label={label}
      title={label}
      className="sound-toggle grid size-11 place-items-center rounded-full border border-bone/20 transition-colors duration-500 hover:border-bone/60 sm:flex sm:w-auto sm:gap-3 sm:px-4"
    >
      <span className={`eq ${playing ? "eq-on" : ""}`} aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="label hidden text-bone/80 sm:inline">{playing ? "Sonido" : "Sin sonido"}</span>
    </button>
  );
}
