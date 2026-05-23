import Badge from "../../badges/Badge";
import MotionElement from "../../motion/MotionElement";
import experience from "@/app/data/experience.json";

export default function AboutExperience() {
  return (
    <>
      <div className="theme-default-padding-x">
        <hr className="theme-border-secondary" />
      </div>

      <div
        id="experience"
        className="theme-default-padding-x theme-default-padding-y"
      >
        <div className="flex flex-col xl:flex-row justify-between gap-[60px]">
          <div className="xl:sticky xl:top-[120px] h-fit">
            <Badge
              label="Experience"
              textColor="theme-foreground"
              className="theme-border-inverted-foreground-overlay uppercase"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-[60px] xl:w-9/12">
            {experience.map((experience, index) => {
              return (
                <MotionElement
                  key={index}
                  variant="tilt"
                  delay={index * 0.07}
                  className="flex flex-col items-center md:items-start"
                >
                  <div className="flex gap-[10px] mb-[10px] theme-secondary">
                    <p>{experience.startDate}</p> <p> - </p>{" "}
                    {experience.isCurrent ? (
                      <p className="theme-foreground font-bold">Present</p>
                    ) : (
                      <p className="theme-secondary">{experience.endDate}</p>
                    )}
                  </div>

                  <h3 className="font-bold text-[18px] md:text-[24px] capitalize">
                    {experience.role}
                  </h3>

                  <div className="flex gap-[10px] mt-[10px] max-w-[500px]">
                    <p className="text-sm md:text-base theme-secondary leading-relaxed">
                      at{" "}
                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {experience.company}
                        </a>
                      ) : (
                        experience.company
                      )}
                    </p>
                  </div>
                </MotionElement>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
