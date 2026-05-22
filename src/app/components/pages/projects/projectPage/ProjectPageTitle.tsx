import Image from "next/image";

interface Props {
  name: string;
  year: string;
  thumbnail: string;
}

export default function ProjectPageTitle({ name, year, thumbnail }: Props) {
  return (
    <div className="relative flex flex-col justify-end theme-default-padding-x theme-default-padding-y min-h-[600px] h-screen overflow-hidden">
      {/* BACKGROUND IMAGE (LCP OPTIMIZED) */}
      <Image
        src={`/${thumbnail}`}
        alt={name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* OVERLAY GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0.2) 45%,
              rgba(0, 0, 0, 0.75) 65%,
              rgba(0, 0, 0, 1) 100%
            )
          `,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <h2 className="text-end text-[18px] md:text-[24px] xl:text-[28px] theme-secondary">
          {year}
        </h2>

        <hr className="theme-border-secondary mb-[25px] md:mb-[0px]" />

        <div className="flex items-center h-[80px] md:h-[110px] leading-none">
          <h1 className="font-moho-condensed text-[64px] md:text-[96px] xl:text-[128px] uppercase">
            {name}
          </h1>
        </div>

        <hr className="theme-border-secondary mt-[25px] md:mt-[0px]" />
      </div>
    </div>
  );
}
