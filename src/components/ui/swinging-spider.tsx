import { SpidermanSwingSilhouette } from "@/components/ui/spiderman-swing-silhouette";

export function SwingingSpider() {
  return (
    <div
      className="pointer-events-none absolute right-6 top-0 z-20 hidden lg:block"
      aria-hidden
    >
      <div className="cinematic-spidey-swing flex flex-col items-center opacity-90">
        <div className="h-36 w-px bg-gradient-to-b from-transparent via-primary/40 to-primary" />
        <div className="relative h-40 w-32 md:h-52 md:w-40">
          <SpidermanSwingSilhouette priority />
        </div>
      </div>
    </div>
  );
}
