import {
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
    <div className="flex flex-col theme-default-padding-x theme-default-padding-y gap-[50px]">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <div key={index} className="flex flex-col gap-[20px] xl:gap-[60px]">
            <div className="flex flex-col xl:flex-row justify-between items-start gap-[40px] md:gap-[60px]">
              {/* left side */}
              <div className="flex justify-center items-center gap-[30px] md:gap-[40px]">
                <div className="flex h-[96px] md:h-[120px] aspect-square border-2 theme-border-secondary rounded-full items-center justify-center">
                  <Icon
                    className="size-[48px] md:size-[64px]"
                    strokeWidth={0.8}
                  />
                </div>
                <div className="flex items-center justify-center h-[30px]">
                  <h3 className="font-moho-condensed font-bold text-[64px] md:text-[128px] uppercase">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* right side */}
              <div className="flex flex-col gap-[20px] xl:gap-[30px] w-full xl:w-5/8">
                {service.items.map((item, i) => (
                  <div key={i} className="flex flex-col gap-[20px]">
                    <h4 className="font-bold text-[24px] xl:text-[36px] theme-secondary">
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
            <hr className="theme-border-secondary" />
          </div>
        );
      })}
    </div>
  );
}
