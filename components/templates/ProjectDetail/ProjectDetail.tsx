import Head from "next/head";
import {
	Container,
	Title,
	Text,
	Group,
	MantineProvider,
	useMantineColorScheme,
	MantineThemeOverride,
	createStyles,
} from "@mantine/core";
import { Project } from "../../../data/projects";
import BadgeCollection from "../../Molecules/BadgeCollection/BadgeCollection";
import ProjectLinkBtn from "../../Molecules/ProjectLinkBtn/ProjectLinkBtn";
import { emotionCache } from "../../../emotion-cache";
import PageHeader from "../../Atoms/PageHeader/PageHeader";

interface ProjectDetailProps {
	project: Project;
}

const useStyles = createStyles((theme, _params, getRef) => ({
	header: {
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
		boxShadow: theme.shadows.md,
		paddingTop: "2.5rem",
		paddingBottom: "2.5rem",

		[theme.fn.smallerThan("md")]: {
			paddingTop: "1.5rem",
			paddingBottom: "1.5rem",
		},
		[theme.fn.smallerThan("sm")]: {
			paddingTop: ".5rem",
			paddingBottom: ".5rem",
		},
	},
}));

export default function ProjectDetail({ project }: ProjectDetailProps) {
	const { classes } = useStyles();
	const { colorScheme } = useMantineColorScheme();

	const projectDetailTheme: MantineThemeOverride = {
		colorScheme: colorScheme,
		components: {
			Title: {
				defaultProps: {
					order: 2,
					// align: "center",
					pt: "lg",
					pb: "xs",
				},
			},
			Text: {
				defaultProps: {
					pb: "xs",
				},
			},
		},
	};

	return (
		<div>
			<Head>
				<title>{`${project.title} | Alexander Liebald`}</title>
				<meta name="description" content={project.abstract} />
			</Head>
			<PageHeader>
				<Title align="center">{project.title}</Title>
				<BadgeCollection badges={project.badges} position="center" />
				<Text align="center">{project.abstract}</Text>
				<Group spacing="xs" position="center" py="md">
					{project.links?.map((link, index) => (
						<ProjectLinkBtn link={link} key={index} />
					))}
				</Group>
			</PageHeader>
			<MantineProvider withGlobalStyles withNormalizeCSS theme={projectDetailTheme} emotionCache={emotionCache}>
				<project.description />
			</MantineProvider>
		</div>
	);
}
