import { Project } from "@/types/project";
import Image from "next/image";
import classes from "./project-item.module.css";
import Link from "next/link";

export default function ProjectItem({ slug, title, media, description }: Project) {
  return (
    <div className={classes.container}>
    <li className={classes.post}>
      <Link href={`/projects/${slug}`} className="">
      <h1>{title}</h1>
      <div className={classes.images}>
        <img
          src={media[0]}
          alt={title}
        />
      </div>
      <div className={classes.content}>
        <p>{description}</p>
      </div>
      </Link>
      {/* <hr className={classes.hr}/> */}
    </li>

    </div>
  );
}
