import styles from "./ProjectsTeaser.module.css";
import type { Project } from "../../../util/projects";
import { Container, SimpleGrid } from "@mantine/core";
import TitleAnimated from "../../Atoms/TitleAnimated/TitleAnimated";
import LinkButtonAnimated from "../../Atoms/LinkButtonAnimated/LinkButtonAnimated";
import ProjectCardAnimated from "../../Molecules/ProjectCardAnimated/ProjectCardAnimated";

interface ProjectsTeaserProps {
	projects: Project[];
	className?: string;
}

export default function ProjectsTeaser({ projects, className }: ProjectsTeaserProps) {
	return (
		<Container className={`${styles.container} ${className ?? ""}`}>
			<TitleAnimated order={1} align="center" pb="md">
				Interesting Projects
			</TitleAnimated>
			<SimpleGrid
				className="animation-wrapper"
				cols={2}
				spacing="md"
				py="md"
				breakpoints={[{ maxWidth: 700, cols: 1, spacing: "sm" }]}
			>
				{projects.map((project, index) => (
					<ProjectCardAnimated
						project={project}
						key={project.id}
						animation={{ initDelay: (1 + Math.floor(index / 2)) * 200 }}
					/>
				))}
			</SimpleGrid>

			<LinkButtonAnimated href="/projects" animation={{ initDelay: 600 }}>
				See All Projects
			</LinkButtonAnimated>
		</Container>
	);
}
