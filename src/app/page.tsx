import Image from "next/image";
import { ArrowDownLeftIcon } from "./components/icons/Icons";
import TextSlider from "./components/text-slider/TextSlider";

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className="relative h-screen min-h-[700px] overflow-hidden theme-default-padding-x theme-default-padding-y">
        {/* Right side image */}
        <div className="absolute bottom-40 sm:bottom-20 right-0 h-full">
          <Image
            src="/images/background-image.png"
            alt="Background"
            width={1024}
            height={1536}
            quality={100}
            priority
            className="h-[120%] w-auto object-contain radial-mask"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex justify-end sm:justify-start items-end 2xl:items-center h-full">
            <h1 className="font-moho-condensed text-[100px] md:text-[200px] xl:text-[250px] 2xl:text-[400px] uppercase">
              Chamith
            </h1>
          </div>

          <div className="flex flex-row justify-between items-end gap-5">
            <p className="text-xl font-bold leading-relaxed w-xs">
              Currently based in Colombo, SL, 10:21 PM
            </p>
            <div className="flex gap-2 cursor-pointer justify-center items-center rounded-full aspect-square border-2 theme-border-foreground p-5">
              <p className="text-sm md:text-lg font-bold uppercase">Scroll</p>
              <ArrowDownLeftIcon className="size-3 md:size-4" strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>

      {/* Text slider */}
      <TextSlider text="Latest Projects" />
    </>
  );
}
