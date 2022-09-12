/**
 * Utility functions related to the projects page
 */

import fs from "fs";
import type { Badge } from "./badges";

export type Link = {
	href: string;
	type: "website" | "github" | "wiki";
	label: string;
};

export type Project = {
	title: string;
	badges: Badge[];
	id: string;
	order: number;
	abstract: string;
	links?: Link[];
	description: () => JSX.Element;
};

/** Get projects (meta data) for given ids from the projects directory. */
export async function getProjectsFromIDs(ids: string[], sort: boolean = true): Promise<Project[]> {
	const filenames = ids.map((id) => `${id}.mdx`);
	return getProjectsFromFilenames(filenames, sort);
}

/** Get all projects (meta data) from the projects directory. */
export async function getProjects(sort: boolean = true): Promise<Project[]> {
	const filenames = await getMdxFilenames("./pages/projects");
	return getProjectsFromFilenames(filenames, sort);
}

/** Get all projects (meta data) from the projects directory based on the given `filenames`. */
async function getProjectsFromFilenames(filenames: string[], sort: boolean = true) {
	const projects: Project[] = [];

	for (const filename of filenames) {
		const project = await importProject(filename);
		if (project) {
			projects.push(project);
		}
	}

	if (sort) {
		projects.sort((a, b) => a.order - b.order);
	}
	return projects;
}

/** Get all filenames of `.mdx` files in the `path` directory. */
async function getMdxFilenames(path: string) {
	let filenames = await fs.promises.readdir(path);
	filenames = filenames.filter((filename) => filename.endsWith(".mdx"));
	return filenames;
}

/** Import the project meta info from `filename`. */
async function importProject(filename: string): Promise<Project | null> {
	const { project } = await import("../pages/projects/" + filename);
	if (!project) {
		console.error(`"project" object export not found for "${filename}"`);
		return null;
	}
	return project as Project;
}
