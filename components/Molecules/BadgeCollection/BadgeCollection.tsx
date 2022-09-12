import { Badge, Group, GroupPosition, MantineNumberSize } from "@mantine/core";
import type { Badge as BadgeType } from "../../../util/badges";

interface BadgeCollectionProps {
	badges: BadgeType[];
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
