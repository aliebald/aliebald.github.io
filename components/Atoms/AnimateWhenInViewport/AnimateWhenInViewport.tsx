import { useRef, useEffect, useState, cloneElement } from "react";

export interface Animation {
	delay?: number;
	initDelay?: number;
	threshold?: number;
	noHide?: boolean;
	type?: "slideUp" | "slideUpScaled" | "slideInR" | "slideInL" | "growYUp" | "growYDown";
	duration?: string;
}

interface AnimateWhenInViewportProps<T> extends Animation {
	children: JSX.Element;
	wrapperClassName?: string;
	noWrapper?: boolean;
}

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
				elem.style.animationDuration = duration;
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
