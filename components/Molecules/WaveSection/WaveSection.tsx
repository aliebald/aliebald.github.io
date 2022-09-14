import Image, { ImageProps } from "next/image";
import { createStyles, useMantineColorScheme } from "@mantine/core";

// SVG's
import wavesLight from "../../../public/images/waves-light.svg";
import wavesDark from "../../../public/images/waves-dark.svg";
import AnimateWhenInViewport from "../../Atoms/AnimateWhenInViewport/AnimateWhenInViewport";

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
	background: {
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2],
	},
}));

export default function WaveSection({ children }: WaveSpacerProps) {
	const { colorScheme } = useMantineColorScheme();
	const { classes } = useStyles();

	const imgSrc = colorScheme === "dark" ? wavesDark : wavesLight;

	const imgTop = <Image priority src={imgSrc} alt="Background" layout="fill" objectFit="cover" />;
	const imgBottom = (
		<Image priority src={imgSrc} alt="Background" layout="fill" objectFit="cover" className={classes.rotate} />
	);

	return (
		<>
			<AnimateWhenInViewport type="growYUp" noHide>
				<div className={`${classes.waves} ${classes.background}`}>{imgTop}</div>
			</AnimateWhenInViewport>
			<div className={classes.background}>{children}</div>
			<AnimateWhenInViewport type="growYDown" noHide>
				<div className={`${classes.waves} ${classes.background}`}>{imgBottom}</div>
			</AnimateWhenInViewport>
		</>
	);
}
