import { getProject } from "@/lib/projects";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import Video from "@/components/video/video";

interface ProjectDetailParams {
  params: {
    slug: string;
  };
}
const isVideo = (media: string): boolean => {
  const videoIndicators = ["video", ".mp4", ".webm", ".ogg", ".mov"];
  return videoIndicators.some((indicator) => media.includes(indicator));
};

export default async function ProjectDetailPage({ params }: ProjectDetailParams) {
  
  const project = await getProject(params.slug);
  const mediaIsVideo = isVideo(project.media[1]);
  const humanReadableDate = new Date(project.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  if (!project) {
    notFound();
  }
  
  project.info = project.info.replace(/\n/g,'<br />')


  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerText}>
        <h1>{project.title}</h1>
      <div className={classes.image}>
          {mediaIsVideo ? (
            <Video media={project.media[1]} />
            ) : (
              <Image src={project.media[1]} alt={project.slug} fill />
              )}
        </div>
          <p>{project.info}</p>
        </div>
        <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: project.info,
          }}
        ></p>
      </main>
      </header>
    </>
  );
}
