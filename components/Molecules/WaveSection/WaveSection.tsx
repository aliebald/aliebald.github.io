import Image from "next/image";
import { createStyles, Transition, useMantineColorScheme } from "@mantine/core";

// SVG's
import wavesLight from "../../../public/images/waves-light.svg";
import wavesDark from "../../../public/images/waves-dark.svg";

interface WaveSpacerProps {
	children: JSX.Element | JSX.Element[];
}

const useStyles = createStyles((theme, _params) => ({
	waves: {
		position: "relative",
		display: "block",
		width: "100%",
		height: "300px",
	},
	rotate: {
		transform: "rotate(180deg)",
	},
	children: {
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
	},
}));

export default function WaveSection({ children }: WaveSpacerProps) {
	const { colorScheme } = useMantineColorScheme();
	const { classes } = useStyles();

	const img =
		colorScheme === "dark" ? (
			<Image priority src={wavesDark} alt="Background" layout="fill" objectFit="cover" />
		) : (
			<Image priority src={wavesLight} alt="Background" layout="fill" objectFit="cover" />
		);

	return (
		<>
			<div className={classes.waves}>{img}</div>
			<div className={classes.children}>{children}</div>
			<div className={`${classes.waves} ${classes.rotate}`}>{img}</div>
		</>
	);
}
