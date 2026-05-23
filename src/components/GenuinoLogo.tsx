type GenuinoLogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export default function GenuinoLogo({
  className = "",
  showWordmark = true,
}: GenuinoLogoProps) {
  return (
    <svg
      viewBox={showWordmark ? "0 0 420 220" : "0 0 260 170"}
      role="img"
      aria-label="Genuino"
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
      ) : null}
    </svg>
  );
}
