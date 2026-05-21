"use client";

import { useMemo, useState } from "react";
import ProjectsGrid from "../components/pages/projects/ProjectsGrid";
import ProjectsTitle from "../components/pages/projects/ProjectsTitle";
import config from "@/app/config.json";

export default function Projects() {
  const [selectedRole, setSelectedRole] = useState("All Categories");
  const [selectedYear, setSelectedYear] = useState("All Years");

  const projects = useMemo(() => config.PROJECTS || [], []);

  const categoryOptions = useMemo(() => {
    const categories = new Set(projects.map((p) => p.CATEGORY).filter(Boolean));

    return ["All Categories", ...Array.from(categories)];
  }, [projects]);

  const yearOptions = useMemo(() => {
    const years = new Set(projects.map((p) => p.YEAR).filter(Boolean));

    return [
      "All Years",
      ...Array.from(years).sort((a, b) => Number(b) - Number(a)),
    ];
  }, [projects]);

  return (
    <>
      <ProjectsTitle
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        categoryOptions={categoryOptions}
        yearOptions={yearOptions}
      />

      <ProjectsGrid selectedRole={selectedRole} selectedYear={selectedYear} />
    </>
  );
}
