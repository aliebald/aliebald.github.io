import { Container, Title, Text, Group, Center } from "@mantine/core";
import type { NextPage } from "next";
import ProjectsTeaser from "../components/Organisms/ProjectsTeaser/ProjectsTeaser";
import styles from "../styles/Home.module.css";
import LinkButton from "../components/Atoms/LinkButton/LinkButton";
import WaveSpacer from "../components/Atoms/WaveSpacer/WaveSpacer";
import UnderConstruction from "../components/Molecules/UnderConstruction/UnderConstruction";

const Home: NextPage = () => {
	return (
		<>
			<Center className={styles.heroHeader}>
				<Container className={styles.container}>
					<Title order={1} align="center">
						I Do Stuff!
					</Title>
					<Text color="dimmed" size="lg" align="center" py="md">
						This might still be a placeholder, but feel free to take a look around! <br />
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
						ut labore et dolore magna aliquyam erat, sed diam voluptua.
					</Text>
					<Group position="center">
						<LinkButton href="/projects" size="lg">
							Discover Projects
						</LinkButton>
						<LinkButton href="/contact" size="lg" variant="outline">
							Contact
						</LinkButton>
					</Group>
				</Container>
			</Center>
			<WaveSpacer />
			<ProjectsTeaser className={styles.teaser} />
		</>
	);
};

export default Home;
