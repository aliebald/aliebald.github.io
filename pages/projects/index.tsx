import { Container, Title, Text, Button } from "@mantine/core";
import type { NextPage } from "next";
import ProjectListElement from "../../components/Organisms/ProjectListElement/ProjectListElement";
import { projects } from "../../data/projects";

const Projects: NextPage = () => {
	return (
		<Container>
			<Title align="center" pb="md">
				Projects
			</Title>
			<Text color="dimmed" size="lg" align="center">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores
				duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd
				magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum
				dolor sit amet, consetetur
			</Text>

			{projects.map((p) => (
				<ProjectListElement {...p} key={p.title} />
			))}
		</Container>
	);
};

export default Projects;
