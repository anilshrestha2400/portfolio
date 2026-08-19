import { cn } from "@/lib/utils";

const buildings = [
  { x: 0, y: 110, w: 70, h: 70 },
  { x: 72, y: 70, w: 48, h: 110 },
  { x: 124, y: 95, w: 90, h: 85 },
  { x: 218, y: 40, w: 42, h: 140 },
  { x: 264, y: 80, w: 76, h: 100 },
  { x: 344, y: 55, w: 38, h: 125 },
  { x: 386, y: 100, w: 110, h: 80 },
  { x: 500, y: 30, w: 50, h: 150 },
  { x: 554, y: 75, w: 88, h: 105 },
  { x: 646, y: 50, w: 36, h: 130 },
  { x: 686, y: 90, w: 120, h: 90 },
  { x: 810, y: 35, w: 44, h: 145 },
  { x: 858, y: 68, w: 70, h: 112 },
  { x: 932, y: 85, w: 95, h: 95 },
  { x: 1030, y: 45, w: 40, h: 135 },
  { x: 1074, y: 72, w: 80, h: 108 },
  { x: 1158, y: 28, w: 52, h: 152 },
  { x: 1214, y: 88, w: 100, h: 92 },
  { x: 1318, y: 60, w: 62, h: 120 },
  { x: 1384, y: 100, w: 56, h: 80 },
];

function windowsFor(building: (typeof buildings)[number], index: number) {
  const cols = Math.max(2, Math.floor(building.w / 11));
  const rows = Math.max(2, Math.floor(building.h / 16));
  const windows: { x: number; y: number; delay: number }[] = [];

  for (let row = 0; row < rows - 1; row++) {
    for (let col = 0; col < cols - 1; col++) {
      if ((row * 3 + col + index) % 4 === 0) continue;
      windows.push({
        x: building.x + 5 + col * 10,
        y: building.y + 8 + row * 14,
        delay: ((index * 13 + row * 7 + col * 5) % 24) / 10,
      });
    }
  }

  return windows;
}

export function CitySkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 180"
      preserveAspectRatio="none"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="skyline-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g fill="url(#skyline-fade)">
        {buildings.map((building) => (
          <rect
            key={`${building.x}-${building.y}`}
            x={building.x}
            y={building.y}
            width={building.w}
            height={building.h}
          />
        ))}
        <polygon points="525,8 540,30 510,30" />
        <polygon points="1184,4 1200,28 1168,28" />
      </g>
      {buildings.flatMap((building, index) =>
        windowsFor(building, index).map((windowLight) => (
          <rect
            key={`${windowLight.x}-${windowLight.y}`}
            x={windowLight.x}
            y={windowLight.y}
            width="4"
            height="6"
            className="city-window"
            style={{ animationDelay: `${windowLight.delay}s` }}
          />
        ))
      )}
    </svg>
  );
}
