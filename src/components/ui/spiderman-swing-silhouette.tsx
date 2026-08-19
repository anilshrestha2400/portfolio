import Image from "next/image";
import { cn } from "@/lib/utils";

export function SpidermanSwingSilhouette({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/spiderman-swing.png"
      alt=""
      width={592}
      height={787}
      priority={priority}
      draggable={false}
      className={cn(
        "h-full w-full select-none object-contain object-bottom",
        "drop-shadow-[0_0_20px_rgba(255,45,45,0.35)]",
        className,
      )}
      aria-hidden
    />
  );
}
