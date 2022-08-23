import { Project } from "../projects";
import { mapBadges } from "../badges";
import UnderConstruction from "../../components/Molecules/UnderConstruction/UnderConstruction";
import { Title, Container, Text } from "@mantine/core";

const project: Project = {
	title: "Personal Website",
	badges: mapBadges(["TypeScript", "React", "NextJs", "Mantine"]),
	href: "website",
	abstract: "My most recent project, this Website! A place were I present my past and current projects.",
	description: WebsiteProject,
	links: [
		{
			href: "https://github.com/aliebald/aliebald.github.io",
			type: "github",
			label: "GitHub",
		},
		{
			href: "https://liebald.dev",
			type: "website",
			label: "Website",
		},
	],
};

export default project;

function WebsiteProject(): JSX.Element {
	return (
		<Container>
			<UnderConstruction />
			<Title>This Website!</Title>
			<Text>
				This page will contain some information about my personal website in the future. For now, feel free to
				explore it yourself.
			</Text>{" "}
		</Container>
	);
}
