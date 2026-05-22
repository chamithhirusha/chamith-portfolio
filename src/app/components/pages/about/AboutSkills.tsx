import Badge from "../../badges/Badge";
import skills from "@/app/data/skills.json";

export default function AboutSkills() {
  return (
    <>
      <div className="theme-default-padding-x">
        <hr className="theme-border-secondary" />
      </div>

      <div className="theme-default-padding-x theme-default-padding-y">
        <div className="flex flex-col xl:flex-row justify-between gap-[40px] xl:gap-[60px]">
          {/* Left Side */}
          <div className="xl:sticky xl:top-[120px] h-fit">
            <Badge
              label="Skills"
              textColor="theme-foreground"
              className="theme-border-inverted-foreground-overlay uppercase"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-wrap gap-[10px] md:gap-[20px] w-full xl:w-9/12">
            {skills.map((skill, index) => {
              return (
                <Badge
                  key={index}
                  label={skill}
                  textColor="theme-foreground"
                  textClassName="font-bold text-xs md:text-sm"
                  className="theme-bg-secondary-light theme-border-background uppercase !py-1 !px-3 md:!px-5 md:!py-2"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
