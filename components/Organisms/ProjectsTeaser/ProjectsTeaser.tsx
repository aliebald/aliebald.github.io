import React from "react";
import Link from "next/link";
import styles from "./ProjectsTeaser.module.css";
import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import { Container, Title, SimpleGrid, Button } from "@mantine/core";

// Project Data
import website from "../../../data/projects/Website";
import commonSteamGames from "../../../data/projects/CommonSteamGames";
import newtonRunner from "../../../data/projects/NewtonRunner";
import experimentalHub from "../../../data/projects/ExperimentalHub";
import LinkButton from "../../Atoms/LinkButton/LinkButton";

export default function ProjectsTeaser() {
	const projects = [website, commonSteamGames, newtonRunner, experimentalHub];

	return (
		<Container className={styles.container} pb="lg">
			<Title order={1} align="center" pt="lg" pb="md">
				Interesting Projects
			</Title>
			<SimpleGrid cols={2} spacing="md" py="md" breakpoints={[{ maxWidth: 700, cols: 1, spacing: "sm" }]}>
				{projects.map((p) => (
					<ProjectCard project={p} key={p.href} />
				))}
			</SimpleGrid>
			<LinkButton href="/projects">See All Projects</LinkButton>
		</Container>
	);
}
