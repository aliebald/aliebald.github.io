import { Project } from "../projects";
import { mapBadges } from "../badges";
import { Container, List, Text, Title } from "@mantine/core";
import Gallery, { GalleryImage } from "../../components/Molecules/Gallery/Gallery";
import UnderConstruction from "../../components/Molecules/UnderConstruction/UnderConstruction";

import customGameImg from "../../public/images/projects/csg/csg-custom-game.png";
import homeImg from "../../public/images/projects/csg/csg-home.png";
import dndGif from "../../public/images/projects/csg/csg-matching-dnd.gif";
import matchingImg from "../../public/images/projects/csg/csg-matching.png";

const project: Project = {
	title: "Common Steam Games",
	badges: mapBadges(["TypeScript", "React", "SocketIO", "Express"]),
	href: "common-steam-games",
	abstract:
		"A web application that enables groups of users to discover common games regarding their steam accounts and vote on games to find common preferences.",
	description: CommonSteamGamesProject,
	links: [
		{
			href: "https://github.com/aliebald/common-steam-games",
			type: "github",
			label: "GitHub - Frontend",
		},
		{
			href: "https://common-steam-games.liebald.dev",
			type: "website",
			label: "Website",
		},
	],
};

export default project;

function CommonSteamGamesProject(): JSX.Element {
	const images: GalleryImage[] = [
		{
			src: dndGif,
			width: 800,
			height: 389,
			alt: "Drag and Drop Demo",
		},
		{
			src: customGameImg,
			width: 874,
			height: 461,
			alt: "Custom Game Input",
		},
		{
			src: homeImg,
			width: 1917,
			height: 939,
			alt: "Common Steam Games Landing Page",
		},

		{
			src: matchingImg,
			width: 1919,
			height: 935,
			alt: "Matching Overview",
		},
	];

	return (
		<Container>
			<UnderConstruction />
			<Title>Background</Title>
			<Text>TODO</Text>
			<Title>Discovering and Voting on Games</Title>
			<Text>
				Common Steam Games is a web application that enables groups of users to discover common games regarding
				their steam accounts and vote on games to find common preferences. Users can create sessions and invite
				others to join their session.
			</Text>
			<Title>Use Case</Title>
			<Text>
				Ever played with a group of friends and could not decide on what to play? Then Common Steam Games is for
				you!
			</Text>
			<Text>
				Create a session, invite your friends and instantly see your common games. Sort your preferences using
				easy to use drag n drop and see the group preferences adopt. Find old classics or games you did not know
				all of you had in common.
			</Text>
			<Title>Development</Title>
			<Text>
				The frontend of Common Steam Games was build using TypeScript with React. To allow multiple users
				joining a single session, a simple Express server with Socket.IO was set up. The server communicates
				with the{" "}
				<Text
					color="blue"
					component="a"
					href="https://steamcommunity.com/dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					Steam API
				</Text>
				<br />
				The styling was donne from scratch using plain css, without any kind of components or styling library.
			</Text>

			<Title>Features</Title>
			<List withPadding>
				<List.Item>Live sessions with your peers</List.Item>
				<List.Item>Preference matching</List.Item>
				<List.Item>Games search &amp; drag and drop</List.Item>
				<List.Item>Steam games &amp; friendslist integration</List.Item>
				<List.Item>Custom games for your favorite common, non-steam games</List.Item>
				<List.Item>
					<em>...</em>
				</List.Item>
			</List>
			<Title>Gallery</Title>
			<Gallery items={images} />
			<Text size="xs" color="dimmed">
				I am not associated with the steam accounts shown in the gallery. They were chosen randomly from
				publicly visible steam accounts and only serve to show the functionality of Common Steam Games.
			</Text>
		</Container>
	);
}
