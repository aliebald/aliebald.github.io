import { Button, Container, Group, Text, Title } from "@mantine/core";
import Link from "next/link";
import styles from "../styles/PageNotFound.module.css";

export default function PageNotFound() {
	return (
		<Container className={styles.container}>
			<Title order={1} className={styles.title}>
				Page Not Found
			</Title>
			<Text color="dimmed" size="lg" align="center" className={styles.description}>
				Unfortunately, the page you requested does not exist.
			</Text>
			<Link href="/">
				<Button variant="outline">Go back to the home page</Button>
			</Link>
		</Container>
	);
}
