import { useRef, useEffect, useState, cloneElement } from "react";

export interface Animation {
	initDelay?: number;
	threshold?: number;
	noHide?: boolean;
	type?: "slideUp" | "slideInR" | "growYUp" | "growYDown";
	duration?: string;
}

interface AnimateWhenInViewportProps<T> extends Animation {
	children: JSX.Element;
	wrapperClassName?: string;
}

export default function AnimateWhenInViewport<T extends HTMLElement>({
	children,
	wrapperClassName = "",
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
			elem.style.animationDelay = `${Math.round(wait)}ms`;
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

		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [initDelay, initTime, noHide, ref, threshold]);

	/**
	 * Set `ref.current` to `current`, if not null.
	 */
	const updateRef = (current: T | null) => {
		if (current) {
			ref.current = current;
		}
	};

	return (
		<div className={`${wrapperClassName} animation-wrapper`}>
			{cloneElement(children, { ref: updateRef, className: `${children.props.className} ${type ?? ""}` })}
		</div>
	);
}
