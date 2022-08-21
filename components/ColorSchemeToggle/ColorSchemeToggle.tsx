import { ActionIcon, Tooltip, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

interface ColorSchemeToggleProps {
	className?: string;
	size: number;
	stroke: number;
}

export function ColorSchemeToggle({ className, size, stroke }: ColorSchemeToggleProps) {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const isDark = colorScheme === "dark";

	return (
		<Tooltip label="Toggle Color Scheme" openDelay={500}>
			<ActionIcon variant="default" size="lg" onClick={() => toggleColorScheme()} className={className}>
				{isDark ? <IconSun size={size} stroke={stroke} /> : <IconMoonStars size={size} stroke={stroke} />}
			</ActionIcon>
		</Tooltip>
	);
}
