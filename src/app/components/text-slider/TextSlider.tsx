import { SpecialStarIcon } from "../icons/Icons";

interface Props {
  text: string;
  noIcon?: boolean;
}

const TextSlider = ({ text, noIcon }: Props) => {
  return (
    <div className="slider gap-[25px] md:gap-[50px] theme-default-padding-y">
      <div className="slider-track gap-[25px] md:gap-[50px]">
        <div className="slider-group gap-[25px] md:gap-[50px]">
          <SliderItem text={text} noIcon={noIcon} />
          <SliderItem text={text} noIcon={noIcon} />
          <SliderItem text={text} noIcon={noIcon} />
          <SliderItem text={text} noIcon={noIcon} />
          <SliderItem text={text} noIcon={noIcon} />
        </div>

        <div
          className="slider-group gap-[25px] md:gap-[50px]"
          aria-hidden="true"
        >
          <SliderItem text={text} noIcon={noIcon} />
          <SliderItem text={text} noIcon={noIcon} />
          <SliderItem text={text} noIcon={noIcon} />
          <SliderItem text={text} noIcon={noIcon} />
          <SliderItem text={text} noIcon={noIcon} />
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
