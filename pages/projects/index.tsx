import { Container, Title, Text } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import ExtendedPageHeader from "../../components/Molecules/ExtendedPageHeader/ExtendedPageHeader";
import ProjectListElement from "../../components/Organisms/ProjectListElement/ProjectListElement";
import { projects } from "../../data/projects";

const Projects: NextPage = () => {
	return (
		<>
			<ExtendedPageHeader
				title="Projects"
				subtitle="This page lists my major past and current projects. All projects are available on GitHub, the link as well as other links can be found on the project detail page."
			/>
			<Container pb="lg">
				<Head>
					<title>Projects | Alexander Liebald</title>
					<meta name="description" content="Projects by Alexander Liebald" />
				</Head>
				{projects.map((p) => (
					<ProjectListElement {...p} key={p.title} />
				))}
			</Container>
		</>
	);
};

export default Projects;
