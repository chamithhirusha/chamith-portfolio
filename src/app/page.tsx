import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen min-h-[700px] overflow-hidden theme-default-padding-x theme-default-padding-y">
      {/* Right side image */}
      <div className="absolute top-0 right-0 h-full">
        <Image
          src="/images/background-image.png"
          alt="Background"
          width={1024}
          height={1536}
          quality={100}
          priority
          className="h-full w-auto object-contain radial-mask"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-end sm:justify-start items-end 2xl:items-center h-full">
          <h1 className="font-moho-condensed text-[100px] md:text-[200px] xl:text-[250px] 2xl:text-[350px] uppercase">
            Chamith
          </h1>
        </div>

        <div className="flex flex-row justify-between">
          <p className="text-xl leading-relaxed tracking-wider w-xs">
            Currently based in Colombo, SL, 10:21 PM
          </p>
          <p className="text-xl tracking-wider">Scroll Down</p>
        </div>
      </div>
    </div>
  );
}
