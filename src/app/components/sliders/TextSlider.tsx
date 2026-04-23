import { SpecialStarIcon } from "../icons/Icons";

interface Props {
  text: string;
  noIcon?: boolean;
  reverse?: boolean;
}

const TextSlider = ({ text, noIcon, reverse }: Props) => {
  return (
    <div className="slider gap-[25px] md:gap-[50px] theme-default-padding-y">
      <div
        className={`slider-track gap-[25px] md:gap-[50px] ${
          reverse ? "slider-reverse" : ""
        }`}
      >
        <div className="slider-group gap-[25px] md:gap-[50px]">
          {Array.from({ length: 6 }).map((_, index) => (
            <SliderItem key={index} text={text} noIcon={noIcon} />
          ))}
        </div>

        <div
          className="slider-group gap-[25px] md:gap-[50px]"
          aria-hidden="true"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <SliderItem key={index} text={text} noIcon={noIcon} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SliderItem = ({ text, noIcon }: Props) => {
  return (
    <div className="slider-item gap-[25px] md:gap-[50px] h-15 md:h-30 flex items-center">
      <h2 className="font-moho-condensed text-[80px] md:text-[160px] tracking-wider font-bold uppercase">
        {text}
      </h2>
      {!noIcon && (
        <SpecialStarIcon className="slider-item-icon size-3 md:size-5" />
      )}
    </div>
  );
};

export default TextSlider;
