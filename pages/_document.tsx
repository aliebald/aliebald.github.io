import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyles, createStylesServer } from "@mantine/next";
import { emotionCache } from "../emotion-cache";

const stylesServer = createStylesServer(emotionCache);

export default class _Document extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			styles: [initialProps.styles, <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />],
		};
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
