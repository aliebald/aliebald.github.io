import { MantineColor, MantineGradient } from "@mantine/core";

export type Badge = {
	title: string;
	color?: MantineColor;
	gradient?: MantineGradient;
};

export type Badges = {
	[key: string]: Badge;
};

const gradientDegree = 120;

export const badges: Badges = {
	TypeScript: {
		title: "TypeScript",
		// color: "blue",
		gradient: { from: "indigo", to: "cyan", deg: gradientDegree },
	},
	React: {
		title: "React",
		color: "teal",
	},
	NextJs: {
		title: "Next.js",
		color: "gray",
	},
	Mantine: {
		title: "Mantine",
		gradient: { from: "yellow", to: "orange", deg: gradientDegree },
	},
	Bootstrap: {
		title: "Bootstrap",
		color: "#563d7c",
	},
	Phaser: {
		title: "Phaser",
		gradient: { from: "grape", to: "pink", deg: gradientDegree },
	},
	Python: {
		title: "Python",
		// color: "green",
		gradient: { from: "teal", to: "lime", deg: gradientDegree },
	},
} as const;

// TODO
export type BadgeKeys = keyof typeof badges;
