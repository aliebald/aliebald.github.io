import { Container, Title, Text, Group, Center } from "@mantine/core";
import type { NextPage } from "next";
import ProjectsTeaser from "../components/Organisms/ProjectsTeaser/ProjectsTeaser";
import styles from "../styles/Home.module.css";
import LinkButton from "../components/Atoms/LinkButton/LinkButton";
import WaveSection from "../components/Molecules/WaveSection/WaveSection";
import HeadMetaTags from "../components/Atoms/HeadMetaTags/HeadMetaTags";
import generateOGImage from "../util/og-image-generator";
import { getProjectsFromIDs, Project } from "../util/projects";
import AnimateWhenInViewport from "../components/Atoms/AnimateWhenInViewport/AnimateWhenInViewport";

const DESCRIPTION =
	"Portfolio & Personal Website of Alexander Liebald, Passionate Full-Stack Web Developer. Past Projects, Contact and more.";

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
					<AnimateWhenInViewport type="slideInR">
						<Title order={1} align="center">
							Alexander Liebald
						</Title>
					</AnimateWhenInViewport>
					<AnimateWhenInViewport type="slideInR" initDelay={500}>
						<Text size="lg" align="center" py="md">
							Passionate full stack web developer. Experienced with building responsive web applications
							using TypeScript, React, Node.js and lots of other amazing libraries, frameworks &amp;
							languages. Always interested in learning new things and building outstanding applications.
						</Text>
					</AnimateWhenInViewport>
					<Group position="center">
						<AnimateWhenInViewport type="slideInR" noWrapper initDelay={1000}>
							<LinkButton href="/projects" size="lg">
								Discover Projects
							</LinkButton>
						</AnimateWhenInViewport>
						<AnimateWhenInViewport type="slideInR" noWrapper initDelay={800}>
							<LinkButton href="/contact" size="lg" variant="outline">
								Contact
							</LinkButton>
						</AnimateWhenInViewport>
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
		["social-games", "common-steam-games", "newton-runner", "experimental-hub"],
		false,
	);

	return { props: { teaserProjects, ogImage: ogImage } };
}
