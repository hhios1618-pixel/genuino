type ArrowProps = {
  className?: string;
  direction?: "up-right" | "right" | "down";
};

/* Flecha de trazo fino, propia del sitio */
export default function Arrow({ className = "size-4", direction = "up-right" }: ArrowProps) {
  const rotation = direction === "right" ? 45 : direction === "down" ? 135 : 0;

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
