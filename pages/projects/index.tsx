import type { NextPage } from "next";
import { Container } from "@mantine/core";
import generateOGImage from "../../util/og-image-generator";
import HeadMetaTags from "../../components/Atoms/HeadMetaTags/HeadMetaTags";
import ExtendedPageHeader from "../../components/Molecules/ExtendedPageHeader/ExtendedPageHeader";
import { getProjects, Project } from "../../util/projects";
import ProjectCardAnimated from "../../components/Molecules/ProjectCardAnimated/ProjectCardAnimated";

interface ProjectsPageProps {
	projects: Project[];
	ogImage: string;
}

const DESCRIPTION =
	"Major past and current projects I created and/or worked on. All projects are available on GitHub, the links can be found on the project detail page.";

const Projects: NextPage<ProjectsPageProps> = ({ projects, ogImage }: ProjectsPageProps) => {
	return (
		<div>
			<HeadMetaTags
				title="Projects | Alexander Liebald"
				description={DESCRIPTION}
				ogImage={ogImage}
				pathname="projects"
			/>
			<ExtendedPageHeader title="Projects" subtitle={DESCRIPTION} />
			<Container pb="lg" pt="md">
				{projects.map((project, index) => (
					<ProjectCardAnimated
						project={project}
						key={project.id + index}
						mb="md"
						animation={{ initDelay: index * 200 }}
					/>
				))}
			</Container>
		</div>
	);
};

export default Projects;

export async function getStaticProps() {
	const ogImage = await generateOGImage("projects", "Projects by Alexander Liebald", DESCRIPTION);
	const projects = await getProjects();

	return { props: { projects: projects, ogImage: ogImage } };
}
