import { Box, MantineTheme, Title, Text, createStyles } from "@mantine/core";
import Link from "next/link";
import { Project } from "../../../data/projects";
import BadgeCollection from "../BadgeCollection/BadgeCollection";

interface ProjectCardProps {
	project: Project;
}

const useStyles = createStyles((theme) => ({
	box: {
		borderRadius: theme.radius.md,
		cursor: "pointer",
		width: "100%",
		border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[1]}`,
		boxShadow: theme.shadows.md,
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
		"&:hover": {
			border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]}`,
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
			cursor: "pointer",
		},
	},
}));

export default function ProjectCard({ project }: ProjectCardProps) {
	const { classes } = useStyles();

	return (
		<Link href={`projects/${project.href}`} passHref>
			<Box className={classes.box} p="sm" component="a">
				<Title order={2}>{project.title}</Title>
				<BadgeCollection badges={project.badges} />
				<Text>{project.abstract}</Text>
			</Box>
		</Link>
	);
}
