import styles from "./WaveSpacer.module.css";
import Image from "next/image";
import { useMantineColorScheme } from "@mantine/core";

// SVG's
import wavesLight from "../../../public/images/waves-light.svg";
import wavesDark from "../../../public/images/waves-dark.svg";

export default function WaveSpacer() {
	const { colorScheme } = useMantineColorScheme();

	return (
		<div className={styles.wavesWrapper}>
			<div className={styles.waves}>
				{colorScheme === "dark" ? (
					<Image src={wavesDark} alt="Background" layout="fill" objectFit="cover" />
				) : (
					<Image src={wavesLight} alt="Background" layout="fill" objectFit="cover" />
				)}
			</div>
		</div>
	);
}
