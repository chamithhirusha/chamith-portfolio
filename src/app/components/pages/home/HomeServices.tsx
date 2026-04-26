import {
  ArrowDownLeftIcon,
  BeakerIcon,
  BrushIcon,
  CubeIcon,
  DatabaseIcon,
  PuzzlePieceIcon,
} from "../../icons/Icons";

export default function HomeServices() {
  const services = [
    {
      title: "Frontend",
      icon: PuzzlePieceIcon,
      items: [
        "Responsive, Mobile-First Websites",
        "Figma to Pixel-Perfect UI",
        "API Integration",
        "Performance Optimization",
        "Smooth Animations & Interactions",
      ],
    },
    {
      title: "Backend",
      icon: BeakerIcon,
      items: [
        "API Development",
        "Authentication & Security",
        "Real-time Systems",
        "Payment Gateway Integration",
        "Database Architecture",
      ],
    },
    {
      title: "Database",
      icon: DatabaseIcon,
      items: [
        "Database Design",
        "SQL & NoSQL",
        "Query Optimization",
        "Data Migration & Backup",
      ],
    },
    {
      title: "DevOps",
      icon: CubeIcon,
      items: [
        "Docker & Containerization",
        "CI/CD Pipeline Setup",
        "Cloud Deployment",
      ],
    },
    {
      title: "UI/UX",
      icon: BrushIcon,
      items: [
        "Modern UI Design",
        "UX Optimization",
        "Wireframing & Prototyping",
      ],
    },
  ];

  return (
    <div id="home-services" className="flex flex-col theme-default-padding-x theme-default-padding-y gap-[50px]">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <div
            key={index}
            className="group flex flex-col gap-[20px] xl:gap-[60px]"
          >
            <div className="flex flex-col xl:flex-row justify-between items-start gap-[40px] md:gap-[60px]">
              {/* left side */}
              <div className="clickable flex justify-center items-center gap-[30px] md:gap-[40px]">
                <div className="flex h-[96px] md:h-[120px] aspect-square border theme-border-secondary rounded-full items-center justify-center relative overflow-hidden">
                  {/* Main service icon */}
                  <Icon
                    className="
                      absolute
                      size-[48px] md:size-[64px]
                      transition-all duration-500 ease-[cubic-bezier(0.7,1.5,1.2,1)]
                      group-hover:opacity-0
                      group-hover:scale-0
                      group-hover:duration-300
                    "
                    strokeWidth={0.8}
                  />

                  {/* Arrow icon */}
                  <ArrowDownLeftIcon
                    className="
                      absolute
                      size-[24px] md:size-[48px]
                      rotate-180
                      opacity-0

                      -bottom-10 -left-10

                      transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                      
                      group-hover:delay-200

                      group-hover:bottom-1/2
                      group-hover:left-1/2
                      group-hover:opacity-100
                      group-hover:-translate-x-1/2
                      group-hover:translate-y-1/2
                    "
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex items-center justify-center h-[30px]">
                  <h3 className="tracking-wide font-moho-condensed font-bold text-[64px] md:text-[128px] uppercase">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* right side */}
              <div className="flex flex-col gap-[20px] xl:gap-[30px] w-full xl:w-1/2">
                {service.items.map((item, i) => (
                  <div key={i} className="flex flex-col gap-[20px]">
                    <h4 className="font-bold text-[18px] md:text-[24px] xl:text-[28px] theme-secondary">
                      {item}
                    </h4>
                    {i !== service.items.length - 1 && (
                      <hr className="theme-border-secondary" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* section divider */}
            <div className="relative">
              <hr className="theme-border-secondary" />

              <hr
                className="
                  absolute top-0 left-0
                  w-full
                  theme-border-foreground

                  origin-left
                  scale-x-0

                  transition-all duration-900 ease-out

                  group-hover:scale-x-100
                  group-hover:duration-500
                "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
