import sunny from "@/assets/puppy-sunny.png";
import frost from "@/assets/puppy-frost.png";
import cocoa from "@/assets/puppy-cocoa.png";
import pepper from "@/assets/puppy-pepper.png";

const IMAGES: Record<string, string> = { sunny, frost, cocoa, pepper };

export function PuppyImage({
  puppyId,
  className = "",
  alt,
  priority = false,
}: {
  puppyId: string;
  className?: string;
  alt: string;
  priority?: boolean;
}) {
  const src = IMAGES[puppyId] ?? sunny;
  return (
    <img
      src={src}
      alt={alt}
      width={768}
      height={768}
      loading={priority ? "eager" : "lazy"}
      className={`select-none object-contain ${className}`}
      draggable={false}
    />
  );
}
