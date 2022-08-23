import { Progress } from "@mantine/core";
import React, { useEffect, useState } from "react";
import styles from "./PageProgress.module.css";

export default function PageProgress() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const updateScrollProgress = () => {
			const scrollTop = document.documentElement.scrollTop;
			const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			const progress = (scrollTop / windowHeight) * 100;
			setScrollProgress(progress);
		};

		window.addEventListener("scroll", updateScrollProgress);
		return () => {
			window.removeEventListener("scroll", updateScrollProgress);
		};
	}, []);

	return <Progress value={scrollProgress} className={styles.progress} />;
}
