import { Container, Title, Text, Group, Center } from "@mantine/core";
import type { NextPage } from "next";
import ProjectsTeaser from "../components/Organisms/ProjectsTeaser/ProjectsTeaser";
import styles from "../styles/Home.module.css";
import LinkButton from "../components/Atoms/LinkButton/LinkButton";
import WaveSection from "../components/Molecules/WaveSection/WaveSection";
import HeadMetaTags from "../components/Atoms/HeadMetaTags/HeadMetaTags";
import generateOGImage from "../util/og-image-generator";
import { getProjectsFromIDs, Project } from "../util/projects";

const DESCRIPTION =
	"Portfolio & Personal Website of Alexander Liebald, Passionate Full Stack Software Developer. Past Projects, Contact and more.";

interface HomePageProps {
	teaserProjects: Project[];
	ogImage: string;
}

const Home: NextPage<HomePageProps> = ({ teaserProjects, ogImage }: HomePageProps) => {
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
						Alexander Liebald
					</Title>
					<Text size="lg" align="center" py="md">
						Passionate Full Stack Software Developer. Experienced with building Web Applications using
						TypeScript, React, Node.js and lots of other amazing libraries, frameworks &amp; languages.
						Always interested in learning new things and building outstanding applications.
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
			{/* <WaveSpacer /> */}
			<WaveSection>
				<ProjectsTeaser projects={teaserProjects} />
			</WaveSection>
		</>
	);
};

export default Home;

export async function getStaticProps() {
	const ogImage = await generateOGImage("home", "Alexander Liebald", DESCRIPTION);
	const teaserProjects = await getProjectsFromIDs(
		["website", "common-steam-games", "newton-runner", "experimental-hub"],
		false
	);

	return { props: { teaserProjects, ogImage: ogImage } };
}
