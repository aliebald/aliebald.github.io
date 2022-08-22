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

export default function ProjectsTeaser() {
	const projects = [website, commonSteamGames, newtonRunner, experimentalHub];

	return (
		<Container className={styles.container} pb="md">
			<Title order={1} align="center">
				Interesting Projects
			</Title>
			<SimpleGrid cols={2} spacing="md" py="md" breakpoints={[{ maxWidth: 700, cols: 1, spacing: "sm" }]}>
				{projects.map((p) => (
					<ProjectCard project={p} key={p.href} />
				))}
			</SimpleGrid>
			<Link href="/projects">
				<Button>See All Projects</Button>
			</Link>
		</Container>
	);
}
