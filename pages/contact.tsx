import { Container, Text, Title } from "@mantine/core";
import Head from "next/head";
import React from "react";
import PageHeader from "../components/Atoms/PageHeader/PageHeader";
import ExtendedPageHeader from "../components/Molecules/ExtendedPageHeader/ExtendedPageHeader";

export default function Contact() {
	return (
		<div>
			<Head>
				<title>Contact | Alexander Liebald</title>
			</Head>
			<ExtendedPageHeader title="Contact" subtitle="Lets get in touch!" />
			<Container>
				<Title pt="lg" pb="md" order={2}>
					Bugs &amp; Issues
				</Title>
				<Text>
					For bugs and issues related to a specific project, please create an issue on GitHub. The links to
					GitHub pages can be found on top of each project page. For issues regarding this website, please
					crate issues{" "}
					<Text
						href="https://github.com/aliebald/aliebald.github.io/issues"
						component="a"
						color="blue"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</Text>
					.
				</Text>

				<Title pt="lg" pb="md" order={2}>
					Other Inquiries
				</Title>
				<Text>
					For general inquiries, please contact:{" "}
					<Text href="mailto:contact@liebald.dev" component="a" color="blue">
						contact@liebald.dev
					</Text>
					.
				</Text>
			</Container>
		</div>
	);
}
