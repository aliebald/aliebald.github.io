import { useRouter } from "next/router";
import ProjectDetail from "../../components/templates/ProjectDetail/ProjectDetail";
import { projects } from "../../data/projects";
import PageNotFound from "../404";

export default function ProjectDetailPage() {
	const router = useRouter();
	const { id } = router.query;
	const project = projects.find((p) => p.href == id);

	if (!project) {
		return <PageNotFound />;
	}

	return <ProjectDetail project={project} />;
}
