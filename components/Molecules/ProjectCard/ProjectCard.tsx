import { Box, Title, Text, createStyles } from "@mantine/core";
import { DefaultProps } from "@mantine/styles";
import Link from "next/link";
import { ForwardedRef, forwardRef } from "react";
import type { Project } from "../../../util/projects";
import BadgeCollection from "../BadgeCollection/BadgeCollection";

export interface ProjectCardProps extends DefaultProps {
	project: Project;
}

const useStyles = createStyles((theme) => ({
	box: {
		height: "100%",
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

const ProjectCard = forwardRef<HTMLAnchorElement, ProjectCardProps>(
	({ project, className, ...mantineProps }: ProjectCardProps, ref: ForwardedRef<HTMLAnchorElement>): JSX.Element => {
		const { classes } = useStyles();

		return (
			<Link href={`projects/${project.id}`} passHref>
				<Box ref={ref} className={`${classes.box} ${className ?? ""}`} component="a" {...mantineProps}>
					<Title order={2}>{project.title}</Title>
					<BadgeCollection badges={project.badges} />
					<Text>{project.abstract}</Text>
				</Box>
			</Link>
		);
	}
);

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
