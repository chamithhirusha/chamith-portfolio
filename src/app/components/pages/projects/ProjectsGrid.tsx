import { useMemo } from "react";
import { ArrowDownLeftIcon } from "../../icons/Icons";
import Badge from "../../badges/Badge";
import config from "@/app/config.json";

interface Props {
  selectedRole: string;
  selectedYear: string;
}

export default function ProjectsGrid({ selectedRole, selectedYear }: Props) {
  const filteredProjects = useMemo(() => {
    const projects = config.PROJECTS || [];

    return projects.filter((project) => {
      const roleMatch =
        selectedRole === "All Categories" || project.CATEGORY === selectedRole;

      const yearMatch =
        selectedYear === "All Years" || String(project.YEAR) === selectedYear;

      return roleMatch && yearMatch;
    });
  }, [selectedRole, selectedYear]);

  if (filteredProjects.length === 0) return null;

  return (
    <div className="theme-default-padding-x theme-default-padding-ye">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] md:gap-[50px]">
        {filteredProjects.map((project, i) => (
          <div
            key={i}
            className="group clickable relative overflow-hidden rounded-[20px] w-full h-[350px] md:h-[450px] lg:h-[500px]"
          >
            {/* Background Image */}
            <div
              className="
                absolute inset-0 bg-cover bg-center
                grayscale brightness-75
                transition-all duration-700 ease-out
                group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-110
              "
              style={{ backgroundImage: `url(${project.IMAGES.THUMBNAIL})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />

            {/* Content */}
            <div className="flex flex-col justify-between absolute inset-0 px-[30px] py-[25px] md:px-[40px] md:py-[30px]">
              <div className="flex gap-[10px] flex-wrap">
                {project.TAGS.map((tag, j) => (
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
                <h3 className="font-moho-condensed font-bold text-[32px] md:text-[44px] lg:text-[56px]">
                  {project.TITLE}
                </h3>

                <ArrowDownLeftIcon
                  className="
                    rotate-180 size-8 md:size-12 lg:size-14
                    opacity-0 translate-y-6 scale-75 blur-[6px]
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
    </div>
  );
}
