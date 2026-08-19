import { cn } from "@/lib/utils";

export function SpeedLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMinYMid slice"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <line x1="20" y1="80" x2="220" y2="70" opacity="0.35" />
        <line x1="0" y1="140" x2="280" y2="128" opacity="0.22" />
        <line x1="40" y1="200" x2="250" y2="188" opacity="0.4" />
        <line x1="10" y1="270" x2="210" y2="258" opacity="0.18" />
        <line x1="50" y1="340" x2="300" y2="326" opacity="0.3" />
        <line x1="0" y1="410" x2="240" y2="398" opacity="0.2" />
        <line x1="30" y1="480" x2="190" y2="470" opacity="0.28" />
      </g>
    </svg>
  );
}
