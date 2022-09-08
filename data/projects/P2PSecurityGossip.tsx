import { Project } from "../projects";
import { mapBadges } from "../badges";
import { Container, Title, Text } from "@mantine/core";
import Image from "../../components/Atoms/Image/Image";

import controlFlowSVG from "../../public/images/projects/p2p-sec-gossip/control-flow.svg";

const project: Project = {
	title: "P2P Security Gossip",
	badges: mapBadges(["Python", "P2P"]),
	href: "p2p-security-gossip",
	abstract:
		"Gossip implementation developed as part of the Peer-to-Peer-Systems and Security course at Technical University of Munich. Provides connectivity in form of a low level, distributed peer-to-peer network with a flat hierarchy.",
	description: P2PProject,
	links: [
		{
			href: "https://github.com/aliebald/p2psec-gossip",
			type: "github",
			label: "GitHub",
		},
	],
};

export default project;

function P2PProject(): JSX.Element {
	return (
		<Container>
			<Title>Background</Title>
			<Text>
				In the winter semester of 2021/22 I participated in the Peer-to-Peer-Systems and Security course at
				Technical University of Munich. As part of this course, teams of two implemented modules for a anonymous
				and unobservable VoIP application using a self designed P2P architecture. A selection of possible
				modules was provided and together with my team partner, we decided to implement Gossip.
			</Text>

			<Title>Gossip</Title>
			<Text>
				Gossip was the module responsible for spreading information in the network. Other modules based their
				functionality on Gossip (or a provided mockup). For example, if a user goes online, Gossip is
				responsible for spreading the information that this user is now online.
			</Text>

			<Title>Design &amp; Development</Title>
			<Text>
				All design decisions and the development process were documented in a final document:{" "}
				<i>P2P Gossip Protocol - An Implementation discussing Architectural and Security Standpoints</i>. This
				document (
				<Text
					href="https://github.com/aliebald/p2psec-gossip/blob/master/docs/documentation.pdf"
					component="a"
					color="blue"
					target="_blank"
					rel="noopener noreferrer"
				>
					link
				</Text>
				) as well as the code can be found{" "}
				<Text
					href="https://github.com/aliebald/aliebald.github.io/issues"
					component="a"
					color="blue"
					target="_blank"
					rel="noopener noreferrer"
				>
					on Github
				</Text>
				.
			</Text>

			<Title>Control Flow</Title>
			<Text>
				As a small sneak-peek at the above-mentioned document, the following flowchart shows the program flow.
				It starts when the module is initiated and runs until a keyboard interrupt is detected.
			</Text>
			<Image src={controlFlowSVG} alt="Control Flow Graph" />
		</Container>
	);
}
