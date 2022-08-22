import { Button, Container, Group, Text, Title } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/PageNotFound.module.css";

export default function PageNotFound() {
	return (
		<Container className={styles.container}>
			<Head>
				<title>Liebald | 404 - Page Not Found</title>
			</Head>
			<Title order={1} pt="lg">
				Page Not Found
			</Title>
			<Text color="dimmed" size="lg" align="center" className={styles.description} py="md">
				Unfortunately, the page you requested does not exist.
			</Text>
			<Link href="/">
				<Button variant="outline">Go back to the home page</Button>
			</Link>
			<Text color="gray" className={styles.background}>
				404
			</Text>
		</Container>
	);
}
