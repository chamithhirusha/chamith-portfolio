import Badge from "../../badges/Badge";
import {
  BeakerIcon,
  BrushIcon,
  CubeIcon,
  DatabaseIcon,
  PuzzlePieceIcon,
} from "../../icons/Icons";
import MotionElement from "../../motion/MotionElement";

export default function AboutExpertiseArea() {
  const expertiseAreas = [
    {
      title: "Frontend",
      icon: PuzzlePieceIcon,
      description:
        "Designing fast, responsive, and modern frontend interfaces focused on performance, usability, and seamless user experiences across all devices and platforms.",
    },
    {
      title: "Backend",
      icon: BeakerIcon,
      description:
        "Building secure, scalable backend systems with efficient APIs, optimized databases, and reliable performance to power seamless, high-quality digital experiences.",
    },
    {
      title: "Database",
      icon: DatabaseIcon,
      description:
        "Designing structured, efficient databases with optimized queries, strong data integrity, and scalability to ensure reliable performance and seamless data management.",
    },
    {
      title: "UI / UX",
      icon: BrushIcon,
      description:
        "Designing intuitive, visually refined interfaces focused on usability, accessibility, and seamless user journeys that enhance engagement and deliver meaningful experiences.",
    },
    {
      title: "DevOps",
      icon: CubeIcon,
      description:
        "Managing scalable infrastructure with automated deployments, continuous integration, and reliable monitoring to ensure high availability, performance, and smooth delivery pipelines.",
    },
  ];

  return (
    <div className="theme-default-padding-x theme-default-padding-y">
      <div className="flex flex-col xl:flex-row justify-between gap-[60px]">
        <div className="xl:sticky xl:top-[120px] h-fit">
          <Badge
            label="Expertise Areas"
            textColor="theme-foreground"
            className="theme-border-inverted-foreground-overlay uppercase"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[60px] xl:w-9/12">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <MotionElement
                key={index}
                variant="tilt"
                delay={index * 0.06}
                className="flex flex-col"
              >
                <div className="mb-[20px]">
                  <div className="flex h-[64px] md:h-[76px] aspect-square border theme-border-secondary rounded-full items-center justify-center overflow-hidden">
                    <Icon
                      className="size-[26px] md:size-[40px]"
                      strokeWidth={1}
                    />
                  </div>
                </div>

                <h3 className="tracking-wide leading-none font-moho-condensed font-bold text-[42px] sm:text-[56px] md:text-[72px] xl:text-[86px] uppercase">
                  {area.title}
                </h3>

                <div className="flex gap-[10px] mt-[14px] max-w-[500px]">
                  <hr className="theme-border-secondary w-[40px] mt-[10px] shrink-0" />

                  <p className="text-sm md:text-base theme-secondary leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </MotionElement>
            );
          })}
        </div>
      </div>
    </div>
  );
}
