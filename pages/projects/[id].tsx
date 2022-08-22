import ProjectDetail from "../../components/templates/ProjectDetail/ProjectDetail";
import { getProject, Project, projectPaths } from "../../data/projects";
import PageNotFound from "../404";

interface ProjectDetailPageProps {
	projectId?: string;
}

export default function ProjectDetailPage({ projectId }: ProjectDetailPageProps) {
	if (!projectId) {
		return <PageNotFound />;
	}

	const project = getProject(projectId);
	if (!project) {
		return <PageNotFound />;
	}

	return <ProjectDetail project={project} />;
}

export async function getStaticProps({ params }: { params: { id?: string } }) {
	return { props: { projectId: params.id } };
}

export async function getStaticPaths() {
	return {
		paths: projectPaths,
		fallback: false,
	};
}
