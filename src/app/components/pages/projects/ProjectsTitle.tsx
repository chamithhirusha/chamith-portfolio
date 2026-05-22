import Dropdown from "../../dropdown/Dropdown";
import projects from "@/app/data/projects.json";

interface Props {
  selectedRole: string;
  setSelectedRole: (value: string) => void;
  selectedYear: string;
  setSelectedYear: (value: string) => void;
  categoryOptions: string[];
  yearOptions: string[];
}

export default function ProjectsTitle({
  selectedRole,
  setSelectedRole,
  selectedYear,
  setSelectedYear,
  categoryOptions,
  yearOptions,
}: Props) {
  return (
    <div className="theme-default-padding-x theme-default-padding-y">
      <hr className="theme-border-secondary mt-[140px] md:mt-[80px] mb-[25px] md:mb-[0px]" />

      <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px] lg:gap-[100px] py-[10px]">
        <h1 className="font-moho-condensed text-[100px] md:text-[180px] xl:text-[200px] uppercase">
          <div className="flex items-center h-[80px] md:h-[160px]">
            Projects
          </div>
        </h1>

        <h2 className="text-center lg:text-start text-[18px] md:text-[24px] xl:text-[28px] theme-secondary">
          View my curated selection of creative work, each piece expressing its
          own story through distinctive design and artistic approach.
        </h2>
      </div>

      <hr className="theme-border-secondary mt-[25px] md:mt-[0px] mb-[10px] md:mb-[0px]" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-[20px] md:gap-[100px] py-[20px]">
        <div className="flex flex-col sm:flex-row gap-[20px]">
          <Dropdown
            options={categoryOptions}
            value={selectedRole}
            onChange={setSelectedRole}
            textColor="theme-foreground"
            textClassName="uppercase"
            className="theme-border-inverted-foreground-overlay"
          />

          <Dropdown
            options={yearOptions}
            value={selectedYear}
            onChange={setSelectedYear}
            textColor="theme-foreground"
            textClassName="uppercase"
            className="theme-border-inverted-foreground-overlay"
          />
        </div>

        <p className="font-bold text-md sm:text-lg">
          {projects.length} Completed projects
        </p>
      </div>

      <hr className="theme-border-secondary mt-[10px] md:mt-[0px]" />
    </div>
  );
}
