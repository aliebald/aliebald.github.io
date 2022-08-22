import { Project } from "../projects";
import { mapBadges } from "../badges";
import UnderConstruction from "../../components/Molecules/UnderConstruction/UnderConstruction";

const project: Project = {
	title: "MiLight Controller",
	badges: mapBadges(["Java", "MiLight"]),
	href: "milight-controller",
	abstract:
		"A comprehensive light controller for the MiLight bridge v5. Featuring a music visualizer and a responsive web design.",
	description: MiLightControllerProject,
	links: [
		{
			href: "https://github.com/aliebald/MiLight-Controller",
			type: "github",
			label: "GitHub",
		},
	],
};

export default project;

function MiLightControllerProject(): JSX.Element {
	return <UnderConstruction />;
}
