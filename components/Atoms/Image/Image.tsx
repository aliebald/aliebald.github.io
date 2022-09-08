import { default as NextImage, ImageProps as NextImageProps } from "next/image";
import { createStyles, Text } from "@mantine/core";

export type ImageProps = NextImageProps & {
	centered?: boolean;
	label?: string;
	noPadding?: boolean;
	alt: string;
};

const useStyles = createStyles((theme, _params) => ({
	image: {
		borderRadius: theme.radius.md,
	},
	wrapperPadding: {
		paddingTop: theme.spacing.md,
		paddingBottom: theme.spacing.md,
	},
	wrapperCenter: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
}));

export default function Image({ centered, label, noPadding, ...nextImageProps }: ImageProps) {
	const { classes } = useStyles();

	let className = centered ? `${classes.wrapperPadding} ${classes.wrapperCenter}` : classes.wrapperPadding;
	if (noPadding) {
		className = centered ? ` ${classes.wrapperCenter}` : "";
	}

	return (
		<div className={className}>
			<NextImage className={classes.image} {...nextImageProps} />
			{label ? (
				<Text size="sm" color="dimmed" pt="xs">
					{label}
				</Text>
			) : (
				""
			)}
		</div>
	);
}
