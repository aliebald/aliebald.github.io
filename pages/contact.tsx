import { Container, Text, Title } from "@mantine/core";
import Head from "next/head";
import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
	return (
		<Container>
			<Head>
				<title>Liebald | Contact</title>
			</Head>
			<Title align="center" pb="md">
				Contact
			</Title>
			<Text color="dimmed" size="lg" align="center">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
				labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
				ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			</Text>
		</Container>
	);
}
