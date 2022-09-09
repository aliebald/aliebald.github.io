import { Container } from "@mantine/core";
import type { NextPage } from "next";
import HeadMetaTags from "../../components/Atoms/HeadMetaTags/HeadMetaTags";
import ExtendedPageHeader from "../../components/Molecules/ExtendedPageHeader/ExtendedPageHeader";
import ProjectListElement from "../../components/Organisms/ProjectListElement/ProjectListElement";
import { projects } from "../../data/projects";
import generateOGImage from "../../util/og-image-generator";

interface ProjectsPageProps {
	ogImage: string;
}

const DESCRIPTION =
	"Mayor past and current projects by Alexander Liebald. All projects are available on GitHub, the links can be found on the project detail page.";

const Projects: NextPage<ProjectsPageProps> = ({ ogImage }: ProjectsPageProps) => {
	return (
		<>
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
		</>
	);
};

export default Projects;

export async function getStaticProps() {
	const ogImage = await generateOGImage("projects", "Projects by Alexander Liebald", DESCRIPTION);

	return { props: { ogImage: ogImage } };
}
