import { Container, Title, Text, Button } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import ProjectListElement from "../../components/Organisms/ProjectListElement/ProjectListElement";
import { projects } from "../../data/projects";

const Projects: NextPage = () => {
	return (
		<Container>
			<Head>
				<title>Liebald | Projects</title>
			</Head>
			<Title align="center" pt="lg" pb="md">
				Projects
			</Title>
			<Text color="dimmed" size="lg" align="center">
				This page lists my major past and current projects. All projects are available on GitHub, the link as
				well as other links can be found on the project detail page.
			</Text>

			{projects.map((p) => (
				<ProjectListElement {...p} key={p.title} />
			))}
		</Container>
	);
};

export default Projects;
