import React from "react";
import { ActionIcon, Tooltip } from "@mantine/core";

interface QuickIconProps {
	href: string;
	icon: JSX.Element;
	tooltip: string;
}

export default function QuickIcon({ href, icon, tooltip }: QuickIconProps) {
	return (
		<Tooltip label={tooltip} openDelay={500}>
			<a href={href} target="_blank" rel="noopener noreferrer">
				<ActionIcon size="lg" variant="default" mr="xs">
					{icon}
				</ActionIcon>
			</a>
		</Tooltip>
	);
}
