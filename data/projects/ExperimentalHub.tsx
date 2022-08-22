import { Project } from "../projects";
import { mapBadges } from "../badges";
import UnderConstruction from "../../components/Molecules/UnderConstruction/UnderConstruction";

const project: Project = {
	title: "Experimental Hub",
	badges: mapBadges(["Python", "TypeScript", "React", "WebRTC"]),
	href: "experimental-hub",
	abstract:
		"An online tool for researchers in the field of synchrony to host and conduct customizable online experiments with users. I designed and developed the networking architecture and backend as part of my bachelors thesis.",
	description: ExperimentalHubProject,
	links: [
		{
			href: "https://github.com/TUMFARSynchrony/experimental-hub",
			type: "github",
			label: "GitHub",
		},
		{
			href: "https://github.com/TUMFARSynchrony/experimental-hub/wiki",
			type: "wiki",
			label: "Wiki",
		},
	],
};

export default project;

function ExperimentalHubProject(): JSX.Element {
	return <UnderConstruction />;
}
