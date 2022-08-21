import { Project } from "../projects";
import { mapBadges } from "../badges";

const project: Project = {
	title: "MiLight Controller",
	badges: mapBadges(["Java", "MiLight"]),
	href: "milight-controller",
	abstract:
		"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum",
	description: MiLightControllerProject,
};

export default project;

function MiLightControllerProject(): JSX.Element {
	return <div>MiLightControllerProject</div>;
}
