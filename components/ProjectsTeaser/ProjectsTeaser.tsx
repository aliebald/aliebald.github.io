import styles from "../../styles/ProjectsTeaser.module.css";
import React from "react";
import { Container, Title, Box, SimpleGrid, MantineTheme } from "@mantine/core";

export default function ProjectsTeaser() {
	const boxTheme = (theme: MantineTheme) => ({
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
		borderRadius: theme.radius.md,
		cursor: "pointer",
		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
		},
	});

	return (
		<Container className={styles.container}>
			<Title order={1} align="center">
				Interesting Projects
			</Title>
			<SimpleGrid cols={2} py="md">
				<Box className={styles.projectPlaceholder} sx={boxTheme}></Box>
				<Box className={styles.projectPlaceholder} sx={boxTheme}></Box>
				<Box className={styles.projectPlaceholder} sx={boxTheme}></Box>
				<Box className={styles.projectPlaceholder} sx={boxTheme}></Box>
			</SimpleGrid>
		</Container>
	);
}
