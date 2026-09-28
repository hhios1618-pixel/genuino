type ArrowProps = {
  className?: string;
  direction?: "up-right" | "right" | "down" | "left";
};

/* Flecha de trazo fino, propia del sitio */
export default function Arrow({ className = "size-4", direction = "up-right" }: ArrowProps) {
  const rotation = { "up-right": 0, right: 45, down: 135, left: -135 }[direction];

  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className={className}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    >
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  );
}
