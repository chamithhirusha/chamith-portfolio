interface Props {
  description: string;
  details: {
    WORKED_AREAS: string[];
    ROLE: string;
    DURATION: string;
    TECHNOLOGIES: string[];
    FEATURES: string[];
    COLORS: string[];
  };
}

export default function ProjectPageIntroduction({
  description,
  details,
}: Props) {
  return (
    <div className="flex flex-col gap-[50px] md:gap-[100px] theme-default-padding-x theme-default-padding-y">
      <h3 className="text-[18px] md:text-[24px] xl:text-[28px] theme-secondary">
        {description}
      </h3>

      <div className="flex flex-col gap-[20px] w-full">
        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-col sm:flex-row items-start gap-[20px] md:gap-[30px] lg:gap-[50px]">
            <h3 className="text-[16px] md:text-[18px] xl:text-[24px] mt-0 sm:mt-1 min-w-auto sm:min-w-[160px] lg:min-w-[180px] font-bold theme-secondary uppercase">
              Worked areas
            </h3>
            <h4 className="text-[18px] md:text-[24px] xl:text-[28px] font-bold">
              {details.WORKED_AREAS.join(", ")}
            </h4>
          </div>
          <hr className="theme-border-secondary" />
        </div>

        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-col sm:flex-row items-start gap-[20px] md:gap-[30px] lg:gap-[50px]">
            <h3 className="text-[16px] md:text-[18px] xl:text-[24px] mt-0 sm:mt-1 min-w-auto sm:min-w-[160px] lg:min-w-[180px] font-bold theme-secondary uppercase">
              Role
            </h3>
            <h4 className="text-[18px] md:text-[24px] xl:text-[28px] font-bold">
              {details.ROLE}
            </h4>
          </div>
          <hr className="theme-border-secondary" />
        </div>

        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-col sm:flex-row items-start gap-[20px] md:gap-[30px] lg:gap-[50px]">
            <h3 className="text-[16px] md:text-[18px] xl:text-[24px] mt-0 sm:mt-1 min-w-auto sm:min-w-[160px] lg:min-w-[180px] font-bold theme-secondary uppercase">
              Duration
            </h3>
            <h4 className="text-[18px] md:text-[24px] xl:text-[28px] font-bold">
              {details.DURATION}
            </h4>
          </div>
          <hr className="theme-border-secondary" />
        </div>

        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-col sm:flex-row items-start gap-[20px] md:gap-[30px] lg:gap-[50px]">
            <h3 className="text-[16px] md:text-[18px] xl:text-[24px] mt-0 sm:mt-1 min-w-auto sm:min-w-[160px] lg:min-w-[180px] font-bold theme-secondary uppercase">
              Tech Stack
            </h3>
            <h4 className="text-[18px] md:text-[24px] xl:text-[28px] font-bold">
              {details.TECHNOLOGIES.join(" | ")}
            </h4>
          </div>
          <hr className="theme-border-secondary" />
        </div>

        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-col sm:flex-row sm:items-center gap-[20px] md:gap-[30px] lg:gap-[50px]">
            <h3 className="text-[16px] md:text-[18px] xl:text-[24px] min-w-auto sm:min-w-[160px] lg:min-w-[180px] font-bold theme-secondary uppercase">
              Theme
            </h3>
            <div className="flex gap-[20px] flex-wrap">
              {details.COLORS.map((color, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div
                    className="size-6 md:size-8 rounded-full transition-transform duration-200 group-hover:scale-110 border border-white/20"
                    style={{ backgroundColor: color }}
                  />

                  <div
                    className="
                      absolute -top-8 left-1/2 -translate-x-1/2
                      px-2 py-1 rounded bg-black text-white text-xs
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-200
                      pointer-events-none
                    "
                  >
                    {color}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="theme-border-secondary" />
        </div>

        <div className="flex flex-col gap-[20px] w-full">
          <div className="flex flex-col sm:flex-row items-start gap-[20px] md:gap-[30px] lg:gap-[50px]">
            <h3 className="text-[16px] md:text-[18px] xl:text-[24px] mt-0 sm:mt-1 min-w-auto sm:min-w-[160px] lg:min-w-[180px] font-bold theme-secondary uppercase">
              Features
            </h3>
            <h4 className="text-[18px] md:text-[24px] xl:text-[28px] font-bold">
              {details.FEATURES.join(", ")}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
