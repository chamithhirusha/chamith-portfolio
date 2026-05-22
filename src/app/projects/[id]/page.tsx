import { notFound } from "next/navigation";
import ProjectPageIntroduction from "@/app/components/pages/projects/projectPage/ProjectPageIntroduction";
import ProjectPageTitle from "@/app/components/pages/projects/projectPage/ProjectPageTitle";
import config from "@/app/config.json";
import ProjectPageGallery from "@/app/components/pages/projects/projectPage/ProjectPageGallery";
import TextSlider from "@/app/components/sliders/TextSlider";
import ProjectPageHighlights from "@/app/components/pages/projects/projectPage/ProjectPageHighlights";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;

  const project = config.PROJECTS.find((p) => String(p.ID) === id);

  if (!project) notFound();

  return (
    <>
      <ProjectPageTitle
        name={project.TITLE}
        year={project.YEAR}
        thumbnail={project.IMAGES.THUMBNAIL}
      />
      <ProjectPageIntroduction
        description={project.DESCRIPTION}
        details={project.DETAILS}
      />
      <TextSlider text="Gallery" />
      <ProjectPageGallery imageFiles={project.IMAGES.IMAGE_FILES} />
      <TextSlider text="Highlights" reverse />
      <ProjectPageHighlights highlights={project.HIGHLIGHTS} />
    </>
  );
}
