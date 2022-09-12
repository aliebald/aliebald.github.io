import { Tooltip, Button } from "@mantine/core";
import type { Link } from "../../../util/projects";
import { IconBrandGithub, IconWorld, IconNotebook } from "@tabler/icons";
import { NextLink } from "@mantine/next";

interface ProjectLinkBtnProps {
	link: Link;
}

export default function ProjectLinkBtn({ link }: ProjectLinkBtnProps) {
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
			>
				{link.label}
			</Button>
		</Tooltip>
	);
}

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
