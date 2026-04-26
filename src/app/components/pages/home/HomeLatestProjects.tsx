import Badge from "@/app/components/badges/Badge";
import CircleButton from "@/app/components/buttons/CircleButton";
import { ArrowDownLeftIcon } from "@/app/components/icons/Icons";
import { PROJECTS } from "@/app/config.json";

export default function HomeLatestProjects() {
  const projects = PROJECTS;

  return (
    projects.length > 0 && (
      <div id="home-latest-projects" className="flex flex-col gap-[50px] md:gap-[100px] theme-default-padding-x theme-default-padding-y">
        <div className="flex flex-col gap-[25px] md:gap-[50px]">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`group clickable relative overflow-hidden rounded-[20px] w-full md:w-7/8 lg:w-5/8 h-[350px] md:h-[450px] lg:h-[600px] xl:h-[700px] ${
                i % 2 === 0 ? "self-start" : "self-end"
              }`}
            >
              {/* Background Image */}
              <div
                className="
                absolute inset-0 bg-cover bg-center
                grayscale brightness-75
                transition-all duration-800 ease-out
                group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-120
            "
                style={{ backgroundImage: `url(${projects[i].IMAGE})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />

              {/* Optional Content Layer */}
              <div className="flex flex-col justify-between absolute inset-0 px-[50px] py-[30px]">
                <div className="flex gap-[10px]">
                  {projects[i].TAGS.map((tag, j) => (
                    <Badge
                      key={j}
                      label={tag}
                      className="theme-bg-foreground font-bold px-2! md:px-3! py-0.5! md:py-1!"
                      textColor="theme-background"
                      textClassName="text-xs md:text-sm"
                    />
                  ))}
                </div>
                <div className="flex gap-5 items-end justify-between">
                  <h3 className="font-moho-condensed font-bold text-[48px] md:text-[64px] lg:text-[96px]">
                    {projects[i].TITLE}
                  </h3>
                  <ArrowDownLeftIcon
                    className="
                        rotate-180 size-10 md:size-15 lg:size-20
                        opacity-0 translate-y-6 scale-75
                        blur-[6px]
                        transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                        will-change-transform
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        group-hover:scale-100
                        group-hover:blur-[0px]
                        delay-100 group-hover:delay-200
                    "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <CircleButton text="All Works" arrowDirection="up-right" />
        </div>
      </div>
    )
  );
}
