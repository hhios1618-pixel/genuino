"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("es-CL", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "America/Santiago",
});

function subscribe(callback: () => void) {
  const timer = window.setInterval(callback, 15000);
  return () => window.clearInterval(timer);
}

/* Hora local de Chile. En el servidor no se muestra para evitar desfases de hidratación */
export default function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => formatter.format(new Date()),
    () => "",
  );

  return <span className="tabular">{time}</span>;
}
