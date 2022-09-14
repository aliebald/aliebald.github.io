import type { Ref } from "react";
import { Title } from "@mantine/core";
import type { TitleProps } from "@mantine/core";
import AnimateWhenInViewport from "../AnimateWhenInViewport/AnimateWhenInViewport";

interface TitleAnimatedProps extends TitleProps {
	animation?: Animation;
}

export default function TitleAnimated({ animation, className, ...props }: TitleAnimatedProps) {
	return (
		<AnimateWhenInViewport {...animation}>
			<Title {...props} />
		</AnimateWhenInViewport>
	);
}
