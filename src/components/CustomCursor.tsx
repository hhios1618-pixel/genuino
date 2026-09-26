"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

/*
  Cursor del sitio.
  data-cursor="Play"  → círculo con etiqueta (media)
  a / button          → anillo fino
  data-magnetic       → el elemento sigue levemente al puntero
*/
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef("");
  const [label, setLabel] = useState("");

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cursor = cursorRef.current;
    if (!finePointer || reduceMotion || !cursor) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");

    const moveX = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
    const moveY = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });
    let magnetic: HTMLElement | null = null;

    const onMove = (event: PointerEvent) => {
      root.dataset.cursor = "visible";
      moveX(event.clientX);
      moveY(event.clientY);

      const target = event.target as HTMLElement;
      const labelled = target.closest<HTMLElement>("[data-cursor]");
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, label");
      const nextLabel = labelled?.dataset.cursor ?? "";

      if (labelRef.current !== nextLabel) {
        labelRef.current = nextLabel;
        setLabel(nextLabel);
      }

      root.dataset.cursorState = nextLabel ? "label" : interactive ? "link" : "default";

      const nextMagnetic = target.closest<HTMLElement>("[data-magnetic]");
      if (magnetic && magnetic !== nextMagnetic) {
        gsap.to(magnetic, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
      }
      magnetic = nextMagnetic;

      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        gsap.to(magnetic, {
          x: (event.clientX - rect.left - rect.width / 2) * 0.22,
          y: (event.clientY - rect.top - rect.height / 2) * 0.3,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    const onLeave = () => {
      root.dataset.cursor = "hidden";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      root.classList.remove("has-cursor");
      delete root.dataset.cursor;
      delete root.dataset.cursorState;
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor" aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}
