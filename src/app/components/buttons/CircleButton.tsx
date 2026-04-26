import { ArrowDownLeftIcon } from "../icons/Icons";

interface Props {
  text: string;
  noIcon?: boolean;
  arrowDirection?: "down-left" | "down-right" | "up-left" | "up-right";
  onClick?: () => void;
}

const arrowClass: Record<NonNullable<Props["arrowDirection"]>, string> = {
  "down-left": "rotate-0",
  "down-right": "rotate-270",
  "up-left": "rotate-90",
  "up-right": "rotate-180",
};

export default function CircleButton({
  text,
  noIcon,
  arrowDirection = "down-left",
  onClick,
}: Props) {
  return (
    <div
      className="group stick-here circle-button inline-flex w-fit aspect-square cursor-pointer items-center justify-center gap-2 px-5 py-5"
      onClick={onClick}
    >
      {/* TEXT */}
      <p className="text-sm md:text-lg font-bold uppercase whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:opacity-90">
        {text}
      </p>

      {/* ICON */}
      {!noIcon && (
        <ArrowDownLeftIcon
          className={`
            size-3 md:size-4
            transition-all duration-500
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${arrowClass[arrowDirection]}
            group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110
          `}
          strokeWidth={3}
        />
      )}
    </div>
  );
}
