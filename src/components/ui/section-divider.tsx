export function SectionDivider() {
  return (
    <div className="relative z-10 flex items-center justify-center py-2" aria-hidden>
      <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <svg
        viewBox="0 0 40 40"
        className="absolute h-8 w-8 text-primary/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="20" cy="20" r="6" />
        <line x1="20" y1="0" x2="20" y2="14" />
        <line x1="20" y1="26" x2="20" y2="40" />
        <line x1="0" y1="20" x2="14" y2="20" />
        <line x1="26" y1="20" x2="40" y2="20" />
        <line x1="6" y1="6" x2="14" y2="14" />
        <line x1="26" y1="26" x2="34" y2="34" />
        <line x1="34" y1="6" x2="26" y2="14" />
        <line x1="6" y1="34" x2="14" y2="26" />
      </svg>
    </div>
  );
}
