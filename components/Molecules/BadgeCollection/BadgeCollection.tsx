import { Badge, Group, GroupPosition } from "@mantine/core";
import { Badge as BadgeData } from "../../../data/badges";

interface BadgeCollectionProps {
	badges: BadgeData[];
	position?: GroupPosition;
}

export default function BadgeCollection({ badges, position }: BadgeCollectionProps) {
	return (
		<Group spacing={4} my="xs" position={position}>
			{badges.map((badge) => (
				<Badge
					key={badge.title}
					color={badge.color}
					variant={badge.gradient ? "gradient" : "filled"}
					gradient={badge.gradient}
				>
					{badge.title}
				</Badge>
			))}
		</Group>
	);
}
