import { Container, Title, Text, Group, Center } from "@mantine/core";
import type { NextPage } from "next";
import ProjectsTeaser from "../components/Organisms/ProjectsTeaser/ProjectsTeaser";
import styles from "../styles/Home.module.css";
import LinkButton from "../components/Atoms/LinkButton/LinkButton";
import WaveSpacer from "../components/Atoms/WaveSpacer/WaveSpacer";
import HeadMetaTags from "../components/Atoms/HeadMetaTags/HeadMetaTags";
import generateOGImage from "../util/og-image-generator";

const DESCRIPTION = "Personal website of Alexander Liebald. Past projects, contact and more.";

interface HomePageProps {
	ogImage: string;
}

const Home: NextPage<HomePageProps> = ({ ogImage }: HomePageProps) => {
	return (
		<>
			<HeadMetaTags
				title="Alexander Liebald | Personal Website"
				description={DESCRIPTION}
				ogImage={ogImage}
				pathname=""
			/>
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

export async function getStaticProps() {
	const ogImage = await generateOGImage("home", "Alexander Liebald", DESCRIPTION);

	return { props: { ogImage: ogImage } };
}
