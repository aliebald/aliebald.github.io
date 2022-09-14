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
					<div className="animation-wrapper">
						<Title order={1} align="center" className="animation">
							Alexander Liebald
						</Title>
					</div>
					<div className="animation-wrapper">
						<Text size="lg" align="center" py="md" className="animation d-0-2">
							Passionate Full Stack Software Developer. Experienced with building Web Applications using
							TypeScript, React, Node.js and lots of other amazing libraries, frameworks &amp; languages.
							Always interested in learning new things and building outstanding applications.
						</Text>
					</div>
					<Group position="center" className="animation-wrapper">
						<LinkButton className="animation d-0-4" href="/projects" size="lg">
							Discover Projects
						</LinkButton>
						<LinkButton className="animation d-0-4" href="/contact" size="lg" variant="outline">
							Contact
						</LinkButton>
					</Group>
				</Container>
			</Center>
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
