import { Container, Text, Title } from "@mantine/core";
import React from "react";
import ExtendedPageHeader from "../components/Molecules/ExtendedPageHeader/ExtendedPageHeader";
import type { NextPage } from "next";
import HeadMetaTags from "../components/Atoms/HeadMetaTags/HeadMetaTags";
import generateOGImage from "../util/og-image-generator";

interface ContactProps {
	ogImage: string;
}

const DESCRIPTION = "Contact information for Alexander Liebald.";

const Contact: NextPage<ContactProps> = ({ ogImage }: ContactProps) => {
	return (
		<div>
			<HeadMetaTags
				title="Contact | Alexander Liebald"
				description={DESCRIPTION}
				ogImage={ogImage}
				pathname="contact"
			/>
			<ExtendedPageHeader title="Contact" subtitle="Let's get in touch!" />
			<Container pb="lg">
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
};

export default Contact;

export async function getStaticProps() {
	const ogImage = await generateOGImage("contact", "Contact", DESCRIPTION);

	return { props: { ogImage: ogImage } };
}
