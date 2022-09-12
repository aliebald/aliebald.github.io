import type { NextPage } from "next";
import { Container } from "@mantine/core";
import generateOGImage from "../../util/og-image-generator";
import HeadMetaTags from "../../components/Atoms/HeadMetaTags/HeadMetaTags";
import ExtendedPageHeader from "../../components/Molecules/ExtendedPageHeader/ExtendedPageHeader";
import ProjectListElement from "../../components/Organisms/ProjectListElement/ProjectListElement";
import { getProjects, Project } from "../../util/projects";

interface ProjectsPageProps {
	projects: Project[];
	ogImage: string;
}

const DESCRIPTION =
	"Mayor past and current projects by Alexander Liebald. All projects are available on GitHub, the links can be found on the project detail page.";

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
			<Container pb="lg">
				{projects.map((p) => (
					<ProjectListElement {...p} key={p.title} />
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
