import { Project } from "../projects";
import { mapBadges } from "../badges";
import { Container, Title, Text } from "@mantine/core";
import Gallery, { GalleryImage } from "../../components/Molecules/Gallery/Gallery";

import level1theory1 from "../../public/images/projects/newton-runner/level1theory1.gif";
import level1quest1 from "../../public/images/projects/newton-runner/level1quest1.gif";
import level1quest2 from "../../public/images/projects/newton-runner/level1quest2.gif";
import level1quest3 from "../../public/images/projects/newton-runner/level1quest3.png";
import level2quest1 from "../../public/images/projects/newton-runner/level2quest1.png";
import overview1 from "../../public/images/projects/newton-runner/overview-1.png";
import overview2 from "../../public/images/projects/newton-runner/overview-2.png";

const project: Project = {
	title: "Newton Runner",
	badges: mapBadges(["TypeScript", "React", "Bootstrap", "Phaser"]),
	href: "newton-runner",
	abstract:
		"A gamified online teaching approach for the basics of movement by graphs. Contains incremental learning sessions, quizzes that test the knowledge and a platformer game powered by Phaser to internalize the contents of each session.",
	description: NewtonRunnerProject,
	links: [
		{
			href: "https://github.com/aliebald/newton-runner",
			type: "github",
			label: "GitHub",
		},
		{
			href: "https://newton-runner.de",
			type: "website",
			label: "Website",
		},
	],
};

export default project;

const images: GalleryImage[] = [
	{ src: level1quest1, alt: "level1quest1" },
	{ src: level1quest2, alt: "level1quest2" },
	{ src: level1quest3, alt: "level1quest3" },
	{ src: level2quest1, alt: "level2quest1" },
	{ src: overview1, alt: "overview1" },
	{ src: overview2, alt: "overview2" },
	{ src: level1theory1, alt: "level1theory1" },
];

function NewtonRunnerProject(): JSX.Element {
	return (
		<Container>
			<Title>Newton Runner</Title>
			<Text>
				As Part of the bachelor practical course &quot;Designing IT-based Learning&quot; at the Technical
				University of Munich, our group decided to design a web-based learning game for physics lessons. The
				goal of this game was to teach the basics of movement, with a focus on time-place and
				time-velocity-diagrams.
			</Text>
			<Text>
				The game consists of two chapters (as well as a small bonus level) and three central elements: Theory,
				Quizzes and Quests. Each level begins with a theory explaining the relevant knowledge for the level and
				a short quiz to verify that the knowledge was understood. After that, the player can consolidate their
				knowledge in multiple quests as well as an additional quiz. The goal of those two levels is to introduce
				the player intuitively to the basics of movement and how different types of diagrams model it.
			</Text>
			<Text>
				As a central element in our games, the quests allow the player to navigate a jump&lsquo;n&lsquo; run
				like game, using the before mentioned diagram types to control their player.
			</Text>
			<Text>
				At the end of this course, we then evaluated this game with different school classes in multiple lessons
				and wrote an evaluation based on the data and feedback we collected.
			</Text>
			<Text>
				The Game can be found at{" "}
				<Text component="a" href="https://newton-runner.de" color="blue">
					newton-runner.de
				</Text>
				. Please note that logging in or sending any feedback wont work since the backend has stopped.
			</Text>

			<Title pb="md">Gallery</Title>
			<Gallery items={images} />
		</Container>
	);
}
