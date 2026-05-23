"use client";

import { useMemo, useState } from "react";
import MotionSection from "../components/motion/MotionSection";
import ProjectsGrid from "../components/pages/projects/ProjectsGrid";
import ProjectsTitle from "../components/pages/projects/ProjectsTitle";
import projectsData from "@/app/data/projects.json";

type Project = {
  category?: string;
  year?: string | number;
};

export default function Projects() {
  const [selectedRole, setSelectedRole] = useState("All Categories");
  const [selectedYear, setSelectedYear] = useState("All Years");

  const projects = useMemo<Project[]>(() => projectsData || [], []);

  const categoryOptions = useMemo(() => {
    const categories = new Set(projects.map((p) => p.category).filter(Boolean));

    return ["All Categories", ...Array.from(categories)] as string[];
  }, [projects]);

  const yearOptions = useMemo(() => {
    const years = new Set(projects.map((p) => p.year).filter(Boolean));

    return [
      "All Years",
      ...Array.from(years).sort((a, b) => Number(b) - Number(a)),
    ] as string[];
  }, [projects]);

  return (
    <>
      <MotionSection>
        <ProjectsTitle
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          categoryOptions={categoryOptions}
          yearOptions={yearOptions}
        />
      </MotionSection>

      <MotionSection>
        <ProjectsGrid selectedRole={selectedRole} selectedYear={selectedYear} />
      </MotionSection>
    </>
  );
}
