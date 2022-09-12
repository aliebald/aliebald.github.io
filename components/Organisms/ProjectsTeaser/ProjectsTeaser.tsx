import styles from "./ProjectsTeaser.module.css";
import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import { Container, Title, SimpleGrid } from "@mantine/core";
import LinkButton from "../../Atoms/LinkButton/LinkButton";
import type { Project } from "../../../util/projects";

interface ProjectsTeaserProps {
	projects: Project[];
	className?: string;
}

export default function ProjectsTeaser({ projects, className }: ProjectsTeaserProps) {
	return (
		<Container className={`${styles.container} ${className ?? ""}`}>
			<Title order={1} align="center" pt="lg" pb="md">
				Interesting Projects
			</Title>
			<SimpleGrid cols={2} spacing="md" py="md" breakpoints={[{ maxWidth: 700, cols: 1, spacing: "sm" }]}>
				{projects.map((p) => (
					<ProjectCard project={p} key={p.id} />
				))}
			</SimpleGrid>
			<LinkButton href="/projects">See All Projects</LinkButton>
		</Container>
	);
}
