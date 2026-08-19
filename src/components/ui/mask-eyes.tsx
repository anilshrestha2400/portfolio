import { cn } from "@/lib/utils";

export function MaskEyes({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 90"
      className={cn("text-foreground", className)}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M10 48C14 10 62 2 102 32c-18 42-58 50-86 28-8-6-8-10-6-12Z"
      />
      <path
        fill="currentColor"
        d="M210 48C206 10 158 2 118 32c18 42 58 50 86 28 8-6 8-10 6-12Z"
      />
    </svg>
  );
}
