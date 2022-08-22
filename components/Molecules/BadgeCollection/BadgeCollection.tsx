import { Badge, Group, GroupPosition, MantineNumberSize } from "@mantine/core";
import { Badge as BadgeData } from "../../../data/badges";

interface BadgeCollectionProps {
	badges: BadgeData[];
	position?: GroupPosition;
	py?: MantineNumberSize | (string & {});
}

export default function BadgeCollection({ badges, position, py }: BadgeCollectionProps) {
	return (
		<Group spacing={4} my="xs" position={position} py={py}>
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
