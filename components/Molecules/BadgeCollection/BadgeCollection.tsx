import { Badge, Group } from "@mantine/core";
import { Badge as BadgeData } from "../../../data/badges";
import styles from "./BadgeCollection.module.css";

interface BadgeCollectionProps {
	badges: BadgeData[];
}

export default function BadgeCollection({ badges }: BadgeCollectionProps) {
	return (
		<Group spacing={4} my="xs">
			{badges.map((badge) => (
				<Badge
					key={badge.title}
					color={badge.color}
					variant={badge.gradient ? "gradient" : "filled"}
					gradient={badge.gradient}
					className={styles.badge}
				>
					{badge.title}
				</Badge>
			))}
		</Group>
	);
}
