import Image, { StaticImageData } from "next/image";
import styles from "./Gallery.module.css";
import { Center, createStyles } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

interface GalleryProps {
	items: GalleryImage[];
}

export interface GalleryImage {
	src: StaticImageData;
	width: number;
	height: number;
	alt: string;
}

const useStyles = createStyles((theme, _params) => ({
	image: {
		borderRadius: theme.radius.md,
	},
	carousel: {
		alignItems: "center",
	},
}));

export default function Gallery({ items }: GalleryProps) {
	const autoplay = useRef(Autoplay({ delay: 10 * 1000 }));
	const { classes } = useStyles();

	return (
		<Carousel
			slideGap="md"
			mx="auto"
			loop
			withIndicators
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
			className={classes.carousel}
		>
			{items.map((item, index) => (
				<Carousel.Slide key={index}>
					<Center>
						<Image
							src={item.src}
							width={item.width}
							height={item.height}
							alt={item.alt}
							className={classes.image}
						/>
					</Center>
				</Carousel.Slide>
			))}
		</Carousel>
	);
}
