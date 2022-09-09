import ProjectDetail from "../../components/templates/ProjectDetail/ProjectDetail";
import { getProject, projectPaths } from "../../data/projects";
import type { NextPage } from "next";
import PageNotFound from "../404";
import generateOGImage from "../../util/og-image-generator";

interface ProjectDetailPageProps {
	projectId?: string;
	ogImage: string;
}

const ProjectDetailPage: NextPage<ProjectDetailPageProps> = ({ projectId, ogImage }: ProjectDetailPageProps) => {
	if (!projectId) {
		return <PageNotFound />;
	}

	const project = getProject(projectId);
	if (!project) {
		return <PageNotFound />;
	}

	return <ProjectDetail project={project} ogImage={ogImage} />;
};

export default ProjectDetailPage;

export async function getStaticProps({ params }: { params: { id?: string } }) {
	const project = getProject(params.id!);
	const ogImage = await generateOGImage(`${params.id}`, project?.title || "missing", project?.abstract || "missing");

	return { props: { projectId: params.id, ogImage: ogImage } };
}

export async function getStaticPaths() {
	return {
		paths: projectPaths,
		fallback: false,
	};
}
