import { BadgeKeys } from "./badges";

export type Project = {
	title: string;
	badges: BadgeKeys[];
	href: string;
	abstract: string;
};

export const projects: Project[] = [
	{
		title: "My Website",
		badges: ["TypeScript", "React", "NextJs", "Mantine"],
		href: "projects/website",
		abstract:
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum",
	},
	{
		title: "Newton Runner",
		badges: ["TypeScript", "React", "Bootstrap", "Phaser"],
		href: "projects/newton-runner",
		abstract:
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum",
	},
	{
		title: "Experimental Hub",
		badges: ["Python", "TypeScript", "React"],
		href: "projects/experimental-hub",
		abstract:
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum",
	},
];
