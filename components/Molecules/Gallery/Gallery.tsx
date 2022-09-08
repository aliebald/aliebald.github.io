import Image from "../../Atoms/Image/Image";
import { StaticImageData } from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

interface GalleryProps {
	items: GalleryImage[];
	autoplayDelay?: number;
}

export interface GalleryImage {
	src: StaticImageData;
	alt: string;
}

export default function Gallery({ items, autoplayDelay }: GalleryProps) {
	const autoplay = useRef(Autoplay({ delay: (autoplayDelay || 10) * 1000 }));

	return (
		<Carousel
			slideGap="md"
			mx="auto"
			loop
			withIndicators
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
		>
			{items.map((item, index) => (
				<Carousel.Slide key={index}>
					<Image src={item.src} alt={item.alt} centered noPadding />
				</Carousel.Slide>
			))}
		</Carousel>
	);
}
