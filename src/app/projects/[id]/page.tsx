import { notFound } from "next/navigation";
import ProjectPageIntroduction from "@/app/components/pages/projects/projectPage/ProjectPageIntroduction";
import ProjectPageTitle from "@/app/components/pages/projects/projectPage/ProjectPageTitle";
import ProjectPageGallery from "@/app/components/pages/projects/projectPage/ProjectPageGallery";
import TextSlider from "@/app/components/sliders/TextSlider";
import ProjectPageHighlights from "@/app/components/pages/projects/projectPage/ProjectPageHighlights";
import projects from "@/app/data/projects.json";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;

  const project = projects.find((p) => String(p.id) === id);

  if (!project) notFound();

  return (
    <>
      <ProjectPageTitle
        name={project.title}
        year={project.year}
        thumbnail={project.images.thumbnail}
      />
      <ProjectPageIntroduction
        description={project.description}
        details={project.details}
      />
      <TextSlider text="Gallery" />
      <ProjectPageGallery imageFiles={project.images.imageFiles} />
      <TextSlider text="Highlights" reverse />
      <ProjectPageHighlights highlights={project.highlights} />
    </>
  );
}
