import type { Ref } from "react";
import LinkButton from "../LinkButton/LinkButton";
import type { LinkButtonProps } from "../LinkButton/LinkButton";
import AnimateWhenInViewport from "../AnimateWhenInViewport/AnimateWhenInViewport";
import type { Animation } from "../AnimateWhenInViewport/AnimateWhenInViewport";

interface LinkButtonAnimatedProps extends LinkButtonProps {
	animation?: Animation;
}

export default function LinkButtonAnimated({ animation, ...props }: LinkButtonAnimatedProps) {
	return (
		<AnimateWhenInViewport {...animation}>
			<LinkButton {...props} />
		</AnimateWhenInViewport>
	);
}
