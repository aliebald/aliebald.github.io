import { Container, Title, Text, Center } from "@mantine/core";
import React from "react";
import { Project } from "../../../data/projects";
import Head from "next/head";
import BadgeCollection from "../../Molecules/BadgeCollection/BadgeCollection";

interface ProjectDetailProps {
	project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
	return (
		<>
			<Head>
				<title>Liebald | {project.title}</title>
				<meta name="description" content={project.abstract} />
			</Head>
			<Container py="lg">
				<Title align="center">{project.title}</Title>
				<BadgeCollection badges={project.badges} position="center" />
				<Text>{project.abstract}</Text>
			</Container>
			<project.description />
		</>
	);
}
