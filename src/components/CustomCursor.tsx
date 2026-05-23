"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef("");
  const [cursorLabel, setCursorLabel] = useState("");

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const cursorX = gsap.quickTo(cursor, "x", { duration: 0.22, ease: "power3.out" });
    const cursorY = gsap.quickTo(cursor, "y", { duration: 0.22, ease: "power3.out" });

    const onMove = (event: PointerEvent) => {
      cursorX(event.clientX);
      cursorY(event.clientY);

      const target = event.target as HTMLElement;
      const cursorTarget = target.closest<HTMLElement>("[data-cursor]");
      const magneticTarget = target.closest<HTMLElement>("[data-magnetic]");
      const mode = cursorTarget?.dataset.cursorMode ?? (cursorTarget ? "media" : "default");
      const nextLabel = cursorTarget?.dataset.cursor ?? "";

      if (cursorLabelRef.current !== nextLabel) {
        cursorLabelRef.current = nextLabel;
        setCursorLabel(nextLabel);
      }

      document.documentElement.dataset.cursorMode = mode;

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
      delete document.documentElement.dataset.cursorMode;
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span>{cursorLabel}</span>
    </div>
  );
}
