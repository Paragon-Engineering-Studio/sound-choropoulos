import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/images/brand-logo.png"
      alt="Choropoulos Sound"
      width={768}
      height={138}
      priority={priority}
      unoptimized
      className={`h-10 w-auto max-w-[min(72vw,18rem)] bg-transparent object-contain object-left mix-blend-screen sm:h-11 sm:max-w-[22rem] ${className}`}
    />
  );
}
