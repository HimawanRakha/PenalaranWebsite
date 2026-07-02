import Image from "next/image";

type LogoMarkProps = {
  src?: string;
  alt?: string;
  className?: string;
  padding?: string;
  ring?: boolean;
};

export function LogoMark({
  src = "/logo-penalaran.JPG",
  alt = "Logo UKM Penalaran ITS",
  className = "h-9 w-9 rounded-xl",
  padding = "p-1",
  ring = true,
}: LogoMarkProps) {
  return (
    <span className={`relative shrink-0 overflow-hidden bg-white ${ring ? "ring-1 ring-line" : ""} ${className}`}>
      <Image src={src} alt={alt} fill sizes="160px" className={`object-contain ${padding}`} />
    </span>
  );
}
