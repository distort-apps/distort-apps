import { Project } from "@/types/project";
import classes from "./project-item.module.css";
import Link from "next/link";

export default function ProjectItem({ slug, title, media, summary }: Project) {
  return (
    <div className={classes.container}>
    <li className={classes.post}>
      <Link href={`https://google.com`} className="">
      <h1>{title}</h1>
      <div className={classes.images}>
        <img
          src={media[0]}
          alt={title}
        />
      </div>
      <div className={classes.content}>
        <p>{summary}</p>
      </div>
      </Link>
      {/* <hr className={classes.hr}/> */}
    </li>

    </div>
  );
}
