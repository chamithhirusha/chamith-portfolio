import { useRef, useState } from "react";
import Badge from "@/app/components/badges/Badge";
import CircleButton from "@/app/components/buttons/CircleButton";
import { ArrowDownLeftIcon } from "@/app/components/icons/Icons";
import { useRouter } from "next/navigation";
import projects from "@/app/data/projects.json";

export default function HomeLatestProjects() {
  const { push } = useRouter();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({});

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startRotation = (i: number) => {
    setHoveredIndex(i);

    // reset index on hover start (optional but nicer UX)
    setImageIndexes((prev) => ({ ...prev, [i]: 0 }));

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setImageIndexes((prev) => {
        const images = projects[i].images.imageFiles;
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

  if (!projects?.length) return null;

  return (
    <div
      id="home-latest-projects"
      className="flex flex-col gap-[50px] md:gap-[100px] theme-default-padding-x theme-default-padding-y"
    >
      <div className="flex flex-col gap-[25px] md:gap-[50px]">
        {projects.slice(0, 4).map((project, i) => (
          <div
            key={i}
            onMouseEnter={() => startRotation(i)}
            onMouseLeave={stopRotation}
            onClick={() => push(`/projects/${project.id}`)}
            className={`group clickable relative overflow-hidden rounded-[20px] w-full md:w-7/8 lg:w-5/8 h-[350px] md:h-[450px] lg:h-[600px] xl:h-[700px] ${
              i % 2 === 0 ? "self-start" : "self-end"
            }`}
          >
            {/* IMAGE STACK */}
            <div className="absolute inset-0">
              {/* Thumbnail (default state) */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out grayscale brightness-75 group-hover:brightness-90 ${
                  hoveredIndex === i ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  backgroundImage: `url(${project.images.thumbnail})`,
                }}
              />

              {/* Hover slideshow images */}
              {project.images.imageFiles.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out ${
                    hoveredIndex === i && (imageIndexes[i] ?? 0) === idx
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80" />

            {/* CONTENT */}
            <div className="flex flex-col justify-between absolute inset-0 px-[50px] py-[30px]">
              {/* TAGS */}
              {project.tags && (
                <div className="flex gap-[10px]">
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

              {/* TITLE */}
              <div className="flex gap-5 items-end justify-between">
                <h3 className="font-moho-condensed font-bold leading-tight text-[48px] md:text-[64px] lg:text-[96px]">
                  {project.title}
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

      {/* BUTTON */}
      <div className="flex justify-center">
        <CircleButton
          onClick={() => push("/projects")}
          text="All Works"
          arrowDirection="up-right"
        />
      </div>
    </div>
  );
}
