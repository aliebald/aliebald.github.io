import { Project } from "../projects";
import { mapBadges } from "../badges";
import UnderConstruction from "../../components/Molecules/UnderConstruction/UnderConstruction";

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
	return <UnderConstruction />;
}
