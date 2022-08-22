import { Tooltip, Button } from "@mantine/core";
import { Link } from "../../../data/projects";
import { IconBrandGithub, IconWorld, IconNotebook } from "@tabler/icons";

interface ProjectLinkBtnProps {
	link: Link;
}

export default function ProjectLinkBtn({ link }: ProjectLinkBtnProps) {
	return (
		<a href={link.href} target="_blank" rel="noopener noreferrer">
			<Tooltip label={link.href} openDelay={500} position="bottom">
				<Button radius="xl" variant="light" leftIcon={getIcon(link.type)}>
					{link.label}
				</Button>
			</Tooltip>
		</a>
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
