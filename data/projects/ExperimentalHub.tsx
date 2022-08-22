import { Project } from "../projects";
import { mapBadges } from "../badges";
import UnderConstruction from "../../components/Molecules/UnderConstruction/UnderConstruction";

const project: Project = {
	title: "Experimental Hub",
	badges: mapBadges(["Python", "TypeScript", "React", "WebRTC"]),
	href: "experimental-hub",
	abstract:
		"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum",
	description: ExperimentalHubProject,
};

export default project;

function ExperimentalHubProject(): JSX.Element {
	return <UnderConstruction />;
}
