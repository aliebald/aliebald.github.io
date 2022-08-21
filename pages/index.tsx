import { Container, Title, Text, Button, Group, Center, Grid, SimpleGrid, Box, MantineTheme } from "@mantine/core";
import type { NextPage } from "next";
import Link from "next/link";
import ProjectsTeaser from "../components/ProjectsTeaser/ProjectsTeaser";
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
						<Link href="/projects">
							<Button size="lg">Past Projects</Button>
						</Link>
						<Link href="/contact">
							<Button size="lg" variant="outline">
								Contact
							</Button>
						</Link>
					</Group>
				</Container>
			</Center>
			<ProjectsTeaser />
		</>
	);
};

export default Home;
