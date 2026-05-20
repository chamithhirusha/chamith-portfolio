import Button from "../../buttons/Button";
import { SolidCameraIcon, SpecialStarIcon } from "../../icons/Icons";

export default function AboutBanner() {
  return (
    <div className="theme-default-padding-x theme-default-padding-y">
      <div className="flex flex-col justify-center items-center lg:min-h-[500px] theme-bg-foreground theme-inverted-foreground rounded-[15px] p-[30px]">
        <SpecialStarIcon className="w-[24px] h-[24px] mb-[10px]" />
        <h3 className="font-moho-condensed text-center tracking-wide leading-tight font-bold text-[50px] md:text-[110px] uppercase">
          Ready to work together?
        </h3>
        <p className="text-[18px] md:text-[24px] text-center w-11/12 lg:w-8/12 mb-[50px]">
          I&apos;m currently available and excited to take on new projects.
          Let&apos;s connect and turn your ideas into reality.
        </p>
        <Button
          text="Book a call"
          varient="secondary"
          className="text-[18px] md:text-[24px] xl:text-[32px] uppercase py-[10px]! px-[30px]! gap-[5px] lg:gap-[8px]"
          endIcon={<SolidCameraIcon className="size-8 lg:size-12" />}
        />
      </div>
    </div>
  );
}
