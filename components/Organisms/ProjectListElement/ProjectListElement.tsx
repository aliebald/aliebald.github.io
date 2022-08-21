import { Paper, Title, Text, MantineTheme, Badge, MantineColor } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { badges as badgesLookup } from "../../../data/badges";
import { Project } from "../../../data/projects";
import BadgeCollection from "../../Molecules/BadgeCollection/BadgeCollection";

export default function ProjectListElement({ title, badges, abstract, href }: Project) {
	const badgeData = badges.map((b) => badgesLookup[b]);

	return (
		<Link href={href}>
			<Paper
				shadow="sm"
				radius="md"
				p="sm"
				my="md"
				sx={(theme: MantineTheme) => ({
					backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
					"&:hover": {
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
						cursor: "pointer",
					},
				})}
			>
				<Title order={2}>{title}</Title>
				<BadgeCollection badges={badgeData} />
				<Text>{abstract}</Text>
			</Paper>
		</Link>
	);
}
