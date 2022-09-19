import { useRef, useEffect, useState, cloneElement } from "react";

export interface Animation {
	delay?: number;
	initDelay?: number;
	threshold?: number;
	noHide?: boolean;
	type?: "slideUp" | "slideUpScaled" | "slideInR" | "slideInL" | "growYUp" | "growYDown";
	duration?: number;
}

interface AnimateWhenInViewportProps<T> extends Animation {
	children: JSX.Element;
	wrapperClassName?: string;
	noWrapper?: boolean;
}

/**
 * Plays a animation on `children` when they enter the viewport.
 *
 * @param props.children JSX Element that should be animated. Must support ref prop (@see React.forwardRef).
 * @param props.wrapperClassName optional className for the animation wrapper element. Ignored if `noWrapper` is `true`.
 * @param props.noWrapper optional flag to disable the animation wrapper. Can be used to remove the effects (currently `overflow: hidden`) of the wrapper.
 * @param props.delay optional delay in ms used for `animation-delay` CSS attribute. The animation will play after it is visible and the delay passed.
 *    Can be combined with `initDelay`, the animation will play after both delays have been waited for.
 * @param props.initDelay optional delay between page load and the animation. The animation will play if the page was open for at least `initDelay` ms.
 *    Can be combined with `delay`, the animation will play after both delays have been waited for.
 * @param props.threshold optional `threshold` argument for IntersectionObserver used to detect when `children` are in the viewport.
 *    The animation is triggered if at least `threshold`% of children are visible. (@see IntersectionObserver).
 * @param props.noHide optional flag to disable the hidden attribute used to hide `children` before the animation, if the animation is delayed using `initDelay`.
 * @param props.type optional animation type.
 * @param props.duration optional animation duration in ms.
 * @returns
 */
export default function AnimateWhenInViewport<T extends HTMLElement>({
	children,
	wrapperClassName = "",
	noWrapper = false,
	delay = 0,
	initDelay = 0,
	threshold = 0,
	noHide,
	type,
	duration,
}: AnimateWhenInViewportProps<T>) {
	const ref = useRef<T | null>(null);
	const [initTime, setInitTime] = useState(performance.now());

	// Wait for element to be in viewport, then start the animation.
	useEffect(() => {
		if (!ref.current) return;

		/**
		 * Add `hidden` css class to `elem` HTMLElement.
		 */
		const hideElement = (elem: HTMLElement) => {
			if (!noHide && !elem.classList.contains("hidden")) {
				elem.classList.add("hidden");
			}
		};

		/**
		 * Removes `hidden` and adds `animation` class to `elem` HTMLElement.
		 * Disconnects observer afterwards.
		 */
		const applyAnimation = (elem: HTMLElement) => {
			if (duration) {
				elem.style.animationDuration = `${duration}ms`;
			}
			elem.classList.add("animation");
			elem.classList.remove("hidden");
			observer.disconnect();
		};

		/**
		 * Applies a delayed animation. {@see applyAnimation}.
		 */
		const delayAnimation = (elem: HTMLElement, wait: number) => {
			hideElement(elem);
			const combinedDelay = Math.round(wait) + delay;
			elem.style.animationDelay = `${combinedDelay}ms`;
			applyAnimation(elem);
		};

		const observerOptions = {
			threshold,
		};

		const observer = new IntersectionObserver((entries) => {
			if (!ref.current) return;

			if (entries[0].isIntersecting && entries[0].intersectionRatio >= threshold) {
				const timeSinceInit = performance.now() - initTime;
				const wait = initDelay - timeSinceInit;

				if (!initDelay || wait <= 0) {
					applyAnimation(ref.current);
				} else {
					delayAnimation(ref.current, wait);
				}
				return;
			}

			// Hide element on page load.
			hideElement(ref.current);
		}, observerOptions);

		if (delay) {
			ref.current.style.animationDelay = `${delay}ms`;
		}
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [duration, initDelay, initTime, noHide, ref, threshold, delay]);

	/**
	 * Set `ref.current` to `current`, if not null.
	 */
	const updateRef = (current: T | null) => {
		if (current) {
			ref.current = current;
		}
	};

	const clonedChildren = cloneElement(children, {
		ref: updateRef,
		className: `${children.props.className} ${type ?? ""}`,
	});

	if (noWrapper) {
		return clonedChildren;
	}

	return <div className={`${wrapperClassName} animation-wrapper`}>{clonedChildren}</div>;
}
