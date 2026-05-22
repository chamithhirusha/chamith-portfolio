import { SpecialStarIcon } from "@/app/components/icons/Icons";

interface Props {
  highlights: {
    TITLE: string;
    DESCRIPTION: string;
    YEAR: string;
  }[];
}

export default function ProjectPageHighlights({ highlights }: Props) {
  return (
    <div className="flex flex-col justify-end theme-default-padding-x theme-default-padding-y">
      <div className="flex flex-col">
        {highlights.map((highlight, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="flex flex-col flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-[20px]">
                {/* Content */}
                <div className="flex gap-[14px] md:gap-[20px]">
                  <SpecialStarIcon className="size-3 md:size-4 theme-secondary mt-[8px] shrink-0" />

                  <div className="flex flex-col">
                    <h3 className="font-bold text-[18px] md:text-[24px] leading-snug">
                      {highlight.TITLE}
                    </h3>

                    <p className="text-sm md:text-base theme-secondary leading-relaxed mt-[4px]">
                      {highlight.DESCRIPTION}
                    </p>
                  </div>
                </div>

                {/* Year */}
                <div className="sm:min-w-[80px] sm:text-right">
                  <p className="theme-foreground font-bold text-sm md:text-base">
                    {highlight.YEAR}
                  </p>
                </div>
              </div>

              {index !== highlights.length - 1 && (
                <hr className="theme-border-secondary mt-[24px] mb-[24px]" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
