import { Container, Title, Text, Button, Group, Center, Grid, SimpleGrid, Box, MantineTheme } from "@mantine/core";
import type { NextPage } from "next";
import Link from "next/link";
import LinkButton from "../components/Atoms/LinkButton/LinkButton";
import ProjectsTeaser from "../components/Organisms/ProjectsTeaser/ProjectsTeaser";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<>
			<Center className={styles.section}>
				<Container className={styles.container}>
					<Title order={1} align="center">
						I Do Stuff!
					</Title>
					<Text color="dimmed" size="lg" align="center" py="md">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
						ut labore et dolore magna aliquyam erat, sed diam voluptua.
					</Text>
					<Group position="center">
						<LinkButton href="/" size="lg">
							Discover Projects
						</LinkButton>
						<LinkButton href="/" size="lg" variant="outline">
							Contact
						</LinkButton>
					</Group>
				</Container>
			</Center>
			<ProjectsTeaser />
		</>
	);
};

export default Home;
