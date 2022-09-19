import {
	Title,
	Text,
	Group,
	MantineProvider,
	useMantineColorScheme,
	MantineThemeOverride,
	Space,
	Container,
	List,
} from "@mantine/core";
import type { Project } from "../../../util/projects";
import BadgeCollection from "../../Molecules/BadgeCollection/BadgeCollection";
import ProjectLinkBtn from "../../Molecules/ProjectLinkBtn/ProjectLinkBtn";
import { emotionCache } from "../../../emotion-cache";
import PageHeader from "../../Atoms/PageHeader/PageHeader";
import PageProgress from "../../Atoms/PageProgress/PageProgress";
import LinkButton from "../../Atoms/LinkButton/LinkButton";
import HeadMetaTags from "../../Atoms/HeadMetaTags/HeadMetaTags";
import { MDXProvider } from "@mdx-js/react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import AnimateWhenInViewport from "../../Atoms/AnimateWhenInViewport/AnimateWhenInViewport";

interface ProjectDetailProps {
	project: Project;
	ogImage: string;
	children: JSX.Element;
}

const mdxComponents: MDXComponents = {
	h1: (args: any) => <Title order={2} {...args} />,
	h2: (args: any) => <Title order={3} {...args} />,
	p: (args: any) => <Text {...args} />,
	ul: (args: any) => <List withPadding {...args} />,
	li: (args: any) => <List.Item {...args} />,
	a: ({ href, ...args }: any) => (
		<Link href={href} passHref>
			<Text color="blue" component="a" target="_blank" rel="noopener noreferrer" {...args} />
		</Link>
	),
};

export default function ProjectDetail({ project, ogImage, children }: ProjectDetailProps) {
	const { colorScheme } = useMantineColorScheme();

	const projectDetailTheme: MantineThemeOverride = {
		colorScheme: colorScheme,
		components: {
			Title: {
				defaultProps: {
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

	const links = project.links?.map((link, index) => <ProjectLinkBtn link={link} key={index} />) ?? [];

	const moreProjectsBtn = (
		<LinkButton href="/projects" radius="xl" variant="light">
			More Projects
		</LinkButton>
	);

	return (
		<article>
			<HeadMetaTags
				title={`${project.title} | Alexander Liebald`}
				description={project.abstract}
				ogImage={ogImage}
				pathname={`projects/${project.id}`}
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
				<MDXProvider components={mdxComponents}>
					<AnimateWhenInViewport type="slideUp">
						<Container>{children}</Container>
					</AnimateWhenInViewport>
				</MDXProvider>
			</MantineProvider>
			<Space h="sm" />
			<PageHeader>
				<Title order={3} align="center">
					Interested? Find out More
				</Title>
				<Group spacing="xs" position="center" py="md">
					{[...links, moreProjectsBtn].map((link, index) => (
						<AnimateWhenInViewport
							type="slideInL"
							delay={index * 200}
							initDelay={500}
							key={index}
							noWrapper
						>
							{link}
						</AnimateWhenInViewport>
					))}
				</Group>
			</PageHeader>
		</article>
	);
}
