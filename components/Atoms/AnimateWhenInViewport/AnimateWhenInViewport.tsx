import { Ref, ReactElement, cloneElement, DetailedReactHTMLElement, MutableRefObject } from "react";
import { useRef, useEffect, useState } from "react";

export interface Animation {
	initDelay?: number;
	threshold?: number;
}

interface AnimateWhenInViewportProps<T> extends Animation {
	children: JSX.Element;
}

export default function AnimateWhenInViewport<T extends HTMLElement>({
	children,
	initDelay = 0,
	threshold = 0,
}: AnimateWhenInViewportProps<T>) {
	const ref = useRef<T | null>(null);
	const [initTime, setInitTime] = useState(performance.now());

	useEffect(() => {
		if (!ref.current) return;

		const hideElement = (elem: HTMLElement | null) => {
			if (elem && !elem.classList.contains("hidden")) {
				elem.classList.add("hidden");
			}
		};

		const applyAnimation = (elem: HTMLElement | null) => {
			if (!elem) return;

			elem.classList.add("animation");
			elem.classList.remove("hidden");
			observer.disconnect();
		};

		const options = {
			threshold,
		};

		const observer = new IntersectionObserver((entries) => {
			if (!ref.current) return;

			if (entries[0].isIntersecting && entries[0].intersectionRatio >= threshold) {
				const timeSinceInit = performance.now() - initTime;
				const wait = initDelay - timeSinceInit;
				console.log("wait", Math.round(wait));

				if (!initDelay || wait <= 0) {
					applyAnimation(ref.current);
				} else {
					hideElement(ref.current);
					setTimeout(() => applyAnimation(ref.current), wait);
				}
				return;
			}

			hideElement(ref.current);
		}, options);

		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [initDelay, initTime, ref, threshold]);

	/**
	 * Set `ref.current` to `current`, if not null.
	 */
	const updateRef = (current: T | null) => {
		if (current) {
			ref.current = current;
		}
	};

	return <div className="animation-wrapper">{cloneElement(children, { ref: updateRef })}</div>;
}
