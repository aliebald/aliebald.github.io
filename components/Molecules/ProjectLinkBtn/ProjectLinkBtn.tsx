import { Tooltip, Button } from "@mantine/core";
import type { Link } from "../../../util/projects";
import { IconBrandGithub, IconWorld, IconNotebook } from "@tabler/icons";
import { NextLink } from "@mantine/next";
import { ForwardedRef, forwardRef } from "react";

interface ProjectLinkBtnProps {
	link: Link;
	className?: string;
}

const ProjectLinkBtn = forwardRef<HTMLAnchorElement, ProjectLinkBtnProps>(
	({ link, className }: ProjectLinkBtnProps, ref: ForwardedRef<HTMLAnchorElement>): JSX.Element => {
		return (
			<Tooltip label={link.href} openDelay={500} position="bottom">
				<Button
					radius="xl"
					variant="light"
					leftIcon={getIcon(link.type)}
					component={NextLink}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className={className ?? ""}
					ref={ref}
				>
					{link.label}
				</Button>
			</Tooltip>
		);
	}
);

ProjectLinkBtn.displayName = "ProjectLinkBtn";
export default ProjectLinkBtn;

function getIcon(type: "website" | "github" | "wiki") {
	switch (type) {
		case "github":
			return <IconBrandGithub />;
		case "website":
			return <IconWorld />;
		case "wiki":
			return <IconNotebook />;
	}
}
