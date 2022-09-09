import { Title, Text, Group, MantineProvider, useMantineColorScheme, MantineThemeOverride, Space } from "@mantine/core";
import { Project } from "../../../data/projects";
import BadgeCollection from "../../Molecules/BadgeCollection/BadgeCollection";
import ProjectLinkBtn from "../../Molecules/ProjectLinkBtn/ProjectLinkBtn";
import { emotionCache } from "../../../emotion-cache";
import PageHeader from "../../Atoms/PageHeader/PageHeader";
import PageProgress from "../../Atoms/PageProgress/PageProgress";
import LinkButton from "../../Atoms/LinkButton/LinkButton";
import HeadMetaTags from "../../Atoms/HeadMetaTags/HeadMetaTags";

interface ProjectDetailProps {
	project: Project;
	ogImage: string;
}

export default function ProjectDetail({ project, ogImage }: ProjectDetailProps) {
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

	const links = (
		<>
			{project.links?.map((link, index) => (
				<ProjectLinkBtn link={link} key={index} />
			))}
		</>
	);

	return (
		<article>
			<HeadMetaTags
				title={`${project.title} | Alexander Liebald`}
				description={project.abstract}
				ogImage={ogImage}
				pathname={`projects/${project.href}`}
			/>
			<PageProgress />
			<PageHeader>
				<Title align="center">{project.title}</Title>
				<BadgeCollection badges={project.badges} position="center" />
				<Text align="center">{project.abstract}</Text>
				<Group spacing="xs" position="center" py="md">
					{links}
				</Group>
			</PageHeader>
			<MantineProvider withGlobalStyles withNormalizeCSS theme={projectDetailTheme} emotionCache={emotionCache}>
				<project.description />
			</MantineProvider>
			<Space h="sm" />
			<PageHeader>
				<Title order={3} align="center">
					Interested? Find out More
				</Title>
				<Group spacing="xs" position="center" py="md">
					{links}
					<LinkButton href="/projects" radius="xl" variant="light">
						More Projects
					</LinkButton>
				</Group>
			</PageHeader>
		</article>
	);
}
