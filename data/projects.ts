import { BadgeKeys, badges, Badge } from "./badges";
import website from "./projects/Website";
import commonSteamGames from "./projects/CommonSteamGames";
import newtonRunner from "./projects/NewtonRunner";
import experimentalHub from "./projects/ExperimentalHub";
import p2PSecurityGossip from "./projects/P2PSecurityGossip";
import miLightController from "./projects/MiLightController";

type Link = {
	href: string;
	type: "website" | "github" | "wiki";
	label: string;
};

export type Project = {
	title: string;
	badges: Badge[];
	href: string;
	abstract: string;
	links?: Link[];
	description: () => JSX.Element;
};

export const projects: Project[] = [
	website,
	commonSteamGames,
	newtonRunner,
	experimentalHub,
	p2PSecurityGossip,
	miLightController,
];

export const projectPaths: string[] = projects.map((p) => `/projects/${p.href}`);

export function getProject(id: string): Project | undefined {
	const project = projects.find((p) => p.href == id);
	if (!project) {
		console.error(`Did not find project with id: "${id}"`);
	}
	return project;
}
