import { Fragment, type CSSProperties } from "react";

type WordsProps = {
  text: string;
  className?: string;
  /* Índice de partida para escalonar varias líneas dentro de un mismo titular */
  offset?: number;
};

/* Divide un texto en palabras enmascaradas. El movimiento lo aplica SmoothScroll o .hero-rise */
export default function Words({ text, className = "", offset = 0 }: WordsProps) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className={`sw ${className}`}>
            <span className="si" style={{ "--i": offset + index } as CSSProperties}>
              {word}
            </span>
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  );
}
