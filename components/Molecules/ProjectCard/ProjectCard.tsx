import { Box, MantineTheme, Title, Text } from "@mantine/core";
import Link from "next/link";
import { Project } from "../../../data/projects";
import BadgeCollection from "../BadgeCollection/BadgeCollection";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	const boxTheme = (theme: MantineTheme) => ({
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
		borderRadius: theme.radius.md,
		cursor: "pointer",
		width: "100%",
		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
		},
	});

	return (
		<Link href={`projects/${project.href}`}>
			<Box sx={boxTheme} p="sm">
				<Title order={2}>{project.title}</Title>
				<BadgeCollection badges={project.badges} />
				<Text>{project.abstract}</Text>
			</Box>
		</Link>
	);
}
