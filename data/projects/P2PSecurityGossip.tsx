import { Project } from "../projects";
import { mapBadges } from "../badges";

const project: Project = {
	title: "P2P Security Gossip",
	badges: mapBadges(["Python", "P2P"]),
	href: "p2p-security-gossip",
	abstract:
		"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum",
	description: P2PProject,
};

export default project;

function P2PProject(): JSX.Element {
	return <div>P2PProject</div>;
}
