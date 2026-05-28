type GenuinoLogoProps = {
  className?: string;
  decorative?: boolean;
  showWordmark?: boolean;
};

export default function GenuinoLogo({
  className = "",
  decorative = false,
  showWordmark = true,
}: GenuinoLogoProps) {
  return (
    <svg
      viewBox={showWordmark ? "0 0 420 300" : "0 0 260 170"}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : "Genuino Family"}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M114 86 190 10h108l90 90-25 25-78-78h-80L151 101l92 92 54-54-40-40h-42l52 52-25 25-93-93h124l77 77-107 107L63 101 114 86Z"
        fill="currentColor"
        transform={showWordmark ? "translate(-18 8) scale(.82)" : "translate(-44 -4) scale(.94)"}
      />
      {showWordmark ? (
        <>
          <g transform="translate(84 166)">
            <rect width="252" height="42" fill="currentColor" />
            <text
              x="126"
              y="30"
              textAnchor="middle"
              fontFamily="Geist Mono, ui-monospace, monospace"
              fontSize="27"
              fontWeight="500"
              letterSpacing="4"
              fill="var(--background)"
            >
              GENUINO
            </text>
          </g>
          <text
            x="210"
            y="268"
            textAnchor="middle"
            fontFamily="Brush Script MT, Segoe Script, Apple Chancery, cursive"
            fontSize="78"
            fontStyle="italic"
            fontWeight="700"
            fill="#e21d0f"
            transform="skewX(-11 210 268)"
          >
            Family
          </text>
        </>
      ) : null}
    </svg>
  );
}
