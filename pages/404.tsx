import { Container, Text, Title } from "@mantine/core";
import Head from "next/head";
import LinkButton from "../components/Atoms/LinkButton/LinkButton";
import styles from "../styles/PageNotFound.module.css";

export default function PageNotFound() {
	return (
		<Container className={styles.container}>
			<Head>
				<title>404 - Page Not Found | Alexander Liebald</title>
			</Head>
			<Title order={1} pt="lg">
				Page Not Found
			</Title>
			<Text color="dimmed" size="lg" align="center" className={styles.description} py="md">
				Unfortunately, the page you requested does not exist.
			</Text>
			<LinkButton href="/" variant="outline">
				Go back to the home page
			</LinkButton>
			<Text color="gray" className={styles.background}>
				404
			</Text>
		</Container>
	);
}
