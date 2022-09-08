import "../styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import Header from "../components/Organisms/Header/Header";
import Footer from "../components/Organisms/Footer/Footer";
import { emotionCache } from "../emotion-cache";

const links = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Projects",
		href: "/projects",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];

function App({ Component, pageProps }: AppProps) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
	const toggleColorScheme = (value?: ColorScheme) => {
		const newColorScheme = value || (colorScheme === "dark" ? "light" : "dark");
		setColorScheme(newColorScheme);
		localStorage.colorScheme = newColorScheme;
	};

	useEffect(() => {
		const pastScheme = localStorage.colorScheme;
		if (pastScheme && pastScheme !== colorScheme) {
			setColorScheme(pastScheme);
		}
	}, [colorScheme]);

	return (
		<>
			<Head>
				<title>Alexander Liebald | Personal Website</title>
				<meta
					name="description"
					content="Personal website of Alexander Liebald. Past projects, contact and more."
				/>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<link rel="icon" type="image/png" href="/favicon.png" />
				<link rel="manifest" href="/manifest.webmanifest" />
				<meta name="theme-color" content={colorScheme === "dark" ? "#1A1B1E" : "#fff"} />
			</Head>

			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }} emotionCache={emotionCache}>
					<Header links={links} />
					<Component {...pageProps} />
					<Footer />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}

export default App;
