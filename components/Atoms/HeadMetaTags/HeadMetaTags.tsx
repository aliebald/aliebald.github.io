import Head from "next/head";

export interface MetaTagsProps {
	title: string;
	description: string;
	ogImage: string;
	pathname: string;
}

export default function HeadMetaTags({ title, description, ogImage, pathname }: MetaTagsProps) {
	const url = `https://liebald.dev/${pathname}`;
	const image = `https://liebald.dev/${ogImage}`;

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description}></meta>

			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content="https://liebald.dev/" />
			<meta property="twitter:url" content={url} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</Head>
	);
}
