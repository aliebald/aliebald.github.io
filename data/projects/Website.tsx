import { Project } from "../projects";
import { mapBadges } from "../badges";
import UnderConstruction from "../../components/Molecules/UnderConstruction/UnderConstruction";

const project: Project = {
	title: "My Website",
	badges: mapBadges(["TypeScript", "React", "NextJs", "Mantine"]),
	href: "website",
	abstract:
		"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum",
	description: WebsiteProject,
	links: [
		{
			href: "https://github.com/aliebald/aliebald.github.io",
			type: "github",
			label: "GitHub",
		},
		{
			href: "https://aliebald.github.io/",
			type: "website",
			label: "Website",
		},
	],
};

export default project;

function WebsiteProject(): JSX.Element {
	return <UnderConstruction />;
}
