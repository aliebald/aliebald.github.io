import { Box, Title, Text, createStyles } from "@mantine/core";
import { DefaultProps } from "@mantine/styles";
import Link from "next/link";
import type { Project } from "../../../util/projects";
import BadgeCollection from "../BadgeCollection/BadgeCollection";

interface ProjectCardProps extends DefaultProps {
	project: Project;
}

const useStyles = createStyles((theme) => ({
	box: {
		display: "block",
		borderRadius: theme.radius.md,
		cursor: "pointer",
		width: "100%",
		boxShadow: theme.shadows.md,
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
			cursor: "pointer",
		},
		padding: theme.spacing.md,
		[theme.fn.smallerThan("sm")]: {
			padding: theme.spacing.sm,
		},
	},
}));

export default function ProjectCard({ project, ...mantineProps }: ProjectCardProps) {
	const { classes } = useStyles();

	return (
		<Link href={`projects/${project.id}`} passHref>
			<Box className={classes.box} component="a" {...mantineProps}>
				<Title order={2}>{project.title}</Title>
				<BadgeCollection badges={project.badges} />
				<Text>{project.abstract}</Text>
			</Box>
		</Link>
	);
}
