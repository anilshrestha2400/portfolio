import { cn } from "@/lib/utils";

export function SpiderEmblem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("text-primary", className)}
      fill="currentColor"
      aria-hidden
    >
      <ellipse cx="32" cy="24" rx="7.5" ry="8.5" />
      <ellipse cx="32" cy="42" rx="10" ry="14" />
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      >
        <path d="M26 20 C14 12 8 6 3 3" />
        <path d="M38 20 C50 12 56 6 61 3" />
        <path d="M24 26 C10 24 6 18 2 16" />
        <path d="M40 26 C54 24 58 18 62 16" />
        <path d="M24 38 C10 42 6 50 2 56" />
        <path d="M40 38 C54 42 58 50 62 56" />
        <path d="M26 48 C16 54 10 60 6 63" />
        <path d="M38 48 C48 54 54 60 58 63" />
      </g>
    </svg>
  );
}
