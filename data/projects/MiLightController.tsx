import { Project } from "../projects";
import { mapBadges } from "../badges";
import { Container, createStyles, Title, Text, List } from "@mantine/core";
import Image from "next/image";

import imgMiLightController from "../../public/images/projects/milight/milight-controller.png";

const project: Project = {
	title: "MiLight Controller",
	badges: mapBadges(["Java", "MiLight"]),
	href: "milight-controller",
	abstract:
		"A comprehensive light controller for the MiLight bridge v5. Featuring a music visualizer and a responsive web design.",
	description: MiLightControllerProject,
	links: [
		{
			href: "https://github.com/aliebald/MiLight-Controller",
			type: "github",
			label: "GitHub",
		},
	],
};

export default project;

const useStyles = createStyles((theme) => ({
	image: {
		borderRadius: theme.radius.md,
	},
}));

function MiLightControllerProject(): JSX.Element {
	const { classes } = useStyles();

	return (
		<Container>
			<Title>A Comprehensive Light Controller</Title>
			<Text>
				A comprehensive light controller for the MiLight bridge version 5. MiLight-Controller{" "}
				<i>(working name)</i> makes it possible to control your MiLight light bulbs and led strips from any
				device with a web browser.
			</Text>
			<Text>
				Simply run the server on a device on your network and connect to it via your browser. Your MiLight
				bridges will already show up, you only need to select one and are ready to go! To use the build in music
				controller, go to settings and select an audio stream from the device the server is running on.
			</Text>
			<Image src={imgMiLightController} alt="MiLight Controller" className={classes.image} />

			<Title>Main Features</Title>
			<List withPadding>
				<List.Item>Music visualizer with numerous modes</List.Item>
				<List.Item>Select and save custom colors</List.Item>
				<List.Item>Single and multi zone control</List.Item>
				<List.Item>Build-in light Modes</List.Item>
				<List.Item>Automatic bridge discovery</List.Item>
				<List.Item>Responsive web design</List.Item>
			</List>

			<Title>Music Visualizer</Title>
			<Text>
				The Music visualizer will listen to the selected audio stream and apply a light effect every time it
				detects a beat. To fine tune the beat detection you can modify the following settings on the web ui:{" "}
			</Text>
			<List withPadding>
				<List.Item>
					<b>Beat cooldown:</b> minimum time in milliseconds between beats. A high value can lead to skipped
					beats while a low value may lead to the same beat being detected twice. Setting this to a higher
					value reduces load on the network, Bridge and controllers. A good starting point could be between
					80-200, but values outside this range can make sense too.
				</List.Item>
				<List.Item>
					<b>Beat sensitivity:</b> changes the general sensitivity of the beat detection algorithm. A lower
					value will lead to more beats being detected, while a higher value will lead to less _false
					positives_.
				</List.Item>
			</List>

			<Title order={3}>Beat Detection Algorithm</Title>
			<Text>
				About 43 times a second the algorithm takes a sample of the current audio output. In the first step the
				audio sample gets normalized to avoid the volume of impacting the beat detection. After that, we compute
				the <i>energy</i> of the sample. The <i>energy</i> is simply the sum of the absolute values in the
				buffer. The <i>energy</i> then gets stored in a buffer, together with the last 86 (&#126;2 seconds, this
				value may not be final) samples energy. We use this buffer to then calculate the variance of all values
				in it. This will help to adjust to different styles of music, by dynamically adjusting the threshold.
				The threshold is calculated using the variance, a user set sensitivity as well as a static value. If the
				current energy is greater than the threshold, and the last detected beat is at least n milliseconds ago,
				where n is the user input value for <b>Beat cooldown</b>, a beat gets detected.
			</Text>
			<Text>
				This beat detection algorithm is loosely based on the article{" "}
				<Text
					href="https://www.gamedev.net/reference/articles/article1952.asp"
					component="a"
					color="blue"
					target="_blank"
					rel="noopener noreferrer"
				>
					Beat Detection Algorithms
				</Text>{" "}
				by Frédéric Patin. If you are interested in this topic, a more in depth description and more complex
				algorithms, I can recommend his article. Please note the beat detection algorithm used in this project
				is not exactly what he describes.
			</Text>
		</Container>
	);
}
