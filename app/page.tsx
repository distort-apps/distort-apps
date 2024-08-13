import ProjectGrid from "@/components/projects/project-grid";
import { Project } from "@/types/project";
import classes from './page.module.css'
import { getProjects } from "@/lib/projects";



export default async function Home() {
  const projects: Project[] = await getProjects();
  return (
    <main className={classes.header}> 
           <ProjectGrid projects={projects}/>
    </main>
  );
}
