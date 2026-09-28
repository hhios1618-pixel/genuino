type SectionLabelProps = {
  index: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionLabel({ index, children, className = "" }: SectionLabelProps) {
  return (
    <p className={`label flex items-center gap-3 self-start ${className}`}>
      <span className="text-gold">({index})</span>
      <span>{children}</span>
    </p>
  );
}
