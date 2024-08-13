import { prisma } from "@/lib/prisma";
import { Project } from "../types/project";
import { revalidatePath } from "next/cache";

export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        id: "desc",
      },
    });
    await prisma.$disconnect();
    return projects;
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

export async function getProject(slug: string): Promise<Project> {
  try {
    const project = await prisma.project.findUnique({
      where: {
        slug: slug,
      },
    });
    await prisma.$disconnect();
    if (project === null) {
      throw new Error(`Article with slug '${slug}' not found.`);
    }
    return project;
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    throw error; // Rethrow the error instead of process.exit
  }
}