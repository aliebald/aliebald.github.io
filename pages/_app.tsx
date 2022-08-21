import "../styles/globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import CustomHeader from "../components/Header/Header";

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
		if (pastScheme !== colorScheme) {
			setColorScheme(pastScheme);
		}
	}, [colorScheme]);

	return (
		<>
			<Head>
				<title>Alexander Liebald</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>

			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
					<CustomHeader links={links} />
					<Component {...pageProps} />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}

export default App;
