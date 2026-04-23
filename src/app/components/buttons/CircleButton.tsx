import { ArrowDownLeftIcon } from "../icons/Icons";

interface Props {
  text: string;
  noIcon?: boolean;
  arrowDirection?: "down-left" | "down-right" | "up-left" | "up-right";
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
}: Props) {
  return (
    <div className="inline-flex w-fit clickable aspect-square cursor-pointer items-center justify-center gap-2 rounded-full border-2 theme-border-foreground px-5 py-5">
      <p className="text-sm md:text-lg font-bold uppercase whitespace-nowrap">
        {text}
      </p>

      {!noIcon && (
        <ArrowDownLeftIcon
          className={`size-3 md:size-4 transition-transform duration-200 ${arrowClass[arrowDirection]}`}
          strokeWidth={3}
        />
      )}
    </div>
  );
}