import { Title } from "@mantine/core";
import type { TitleProps } from "@mantine/core";
import AnimateWhenInViewport, { Animation } from "../AnimateWhenInViewport/AnimateWhenInViewport";

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
