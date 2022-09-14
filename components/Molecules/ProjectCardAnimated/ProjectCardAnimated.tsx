import type { Ref } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import AnimateWhenInViewport from "../../Atoms/AnimateWhenInViewport/AnimateWhenInViewport";
import type { Animation } from "../../Atoms/AnimateWhenInViewport/AnimateWhenInViewport";
import type { ProjectCardProps } from "../ProjectCard/ProjectCard";

interface ProjectCardAnimatedProps extends ProjectCardProps {
	animation?: Animation;
}

export default function ProjectCardAnimated({ animation, ...props }: ProjectCardAnimatedProps) {
	return (
		<AnimateWhenInViewport {...animation}>
			{(ref: Ref<HTMLAnchorElement>) => <ProjectCard {...props} ref={ref} />}
		</AnimateWhenInViewport>
	);
}
