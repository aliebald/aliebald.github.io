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
		color: "grape",
	},
	Phaser: {
		title: "Phaser",
		gradient: { from: "grape", to: "pink", deg: gradientDegree },
	},
	Python: {
		title: "Python",
		gradient: { from: "teal", to: "lime", deg: gradientDegree },
	},
	WebRTC: {
		title: "WebRTC",
		gradient: { from: "orange", to: "pink", deg: gradientDegree },
	},
	SocketIO: {
		title: "Socket.IO",
		color: "dark",
	},
	Express: {
		title: "Express",
		gradient: { from: "#3C873A", to: "#68A063", deg: gradientDegree },
	},
	P2P: {
		title: "P2P",
		color: "green",
	},
	Java: {
		title: "Java",
		color: "orange",
	},
	MiLight: {
		title: "MiLight",
	},
} as const;

// TODO
export type BadgeKeys = keyof typeof badges;

export function mapBadges(keys: BadgeKeys[]): Readonly<Badge>[] {
	const result = keys.map((key) => {
		if (!(key in badges)) {
			console.error("Invalid Badge Key:", key);
			return {
				title: "UNKNOWN",
				color: "red",
			};
		}
		return badges[key];
	});
	return result;
}
