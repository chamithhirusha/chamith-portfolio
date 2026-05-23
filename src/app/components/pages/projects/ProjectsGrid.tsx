import { useMemo, useRef, useState } from "react";
import { ArrowDownLeftIcon } from "../../icons/Icons";
import Badge from "../../badges/Badge";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MotionElement from "../../motion/MotionElement";
import projects from "@/app/data/projects.json";

interface Props {
  selectedRole: string;
  selectedYear: string;
}

export default function ProjectsGrid({ selectedRole, selectedYear }: Props) {
  const { push } = useRouter();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const roleMatch =
        selectedRole === "All Categories" || project.category === selectedRole;

      const yearMatch =
        selectedYear === "All Years" || String(project.year) === selectedYear;

      return roleMatch && yearMatch;
    });
  }, [selectedRole, selectedYear]);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({});

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startRotation = (i: number) => {
    setHoveredIndex(i);
    setImageIndexes((prev) => ({ ...prev, [i]: 0 }));

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setImageIndexes((prev) => {
        const images = filteredProjects[i].images.imageFiles;
        const current = prev[i] ?? 0;

        return {
          ...prev,
          [i]: (current + 1) % images.length,
        };
      });
    }, 1500);
  };

  const stopRotation = () => {
    setHoveredIndex(null);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  if (filteredProjects.length === 0) {
    return (
      <div className="theme-default-padding-x theme-default-padding-y flex justify-center items-center min-h-[250px] text-center">
        <p className="font-bold text-md sm:text-lg opacity-70">
          No projects match this selection yet. Try a different category or
          year.
        </p>
      </div>
    );
  }

  return (
    <div className="theme-default-padding-x theme-default-padding-y">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] md:gap-[50px]">
        {filteredProjects.map((project, i) => (
          <MotionElement
            key={i}
            variant={i % 2 === 0 ? "slide-right" : "slide-left"}
            delay={(i % 6) * 0.05}
            onMouseEnter={() => startRotation(i)}
            onMouseLeave={stopRotation}
            onClick={() => push(`/projects/${project.id}`)}
            className="group clickable relative overflow-hidden rounded-[20px] w-full h-[350px] md:h-[450px] lg:h-[500px]"
          >
            {/* IMAGE WRAPPER */}
            <div className="absolute inset-0">
              {/* THUMBNAIL (LCP OPTIMIZED) */}
              <Image
                src={`/${project.images.thumbnail}`}
                alt={project.title}
                fill
                priority
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover grayscale brightness-75 transition-opacity duration-700 ease-out group-hover:brightness-90 ${
                  hoveredIndex === i ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* SLIDESHOW (ONLY ON HOVER → FIXES LCP CONFLICT) */}
              {hoveredIndex === i &&
                project.images.imageFiles.map((img, idx) => (
                  <Image
                    key={idx}
                    src={`/${img}`}
                    alt={`${project.title}-${idx}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover transition-opacity duration-700 ease-out ${
                      (imageIndexes[i] ?? 0) === idx
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                ))}
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />

            {/* CONTENT */}
            <div className="flex flex-col justify-between absolute inset-0 px-[30px] py-[25px] md:px-[40px] md:py-[30px]">
              {project.tags && (
                <div className="flex gap-[10px] flex-wrap">
                  {project.tags.map((tag, j) => (
                    <Badge
                      key={j}
                      label={tag}
                      className="theme-bg-foreground font-bold px-2! md:px-3! py-0.5! md:py-1!"
                      textColor="theme-background"
                      textClassName="text-xs md:text-sm"
                    />
                  ))}
                </div>
              )}

              <div className="flex gap-5 items-end justify-between">
                <h3 className="font-moho-condensed font-bold leading-tight text-[32px] md:text-[44px] lg:text-[56px]">
                  {project.title}
                </h3>

                <ArrowDownLeftIcon
                  className="
                    rotate-180 size-8 md:size-12 lg:size-14
                    opacity-0 translate-y-6 scale-75 blur-[6px]
                    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:scale-100
                    group-hover:blur-[0px]
                  "
                />
              </div>
            </div>
          </MotionElement>
        ))}
      </div>
    </div>
  );
}
