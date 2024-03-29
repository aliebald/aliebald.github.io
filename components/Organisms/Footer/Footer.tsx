import { createStyles, Container, Group, Text } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
	footer: {
		// marginTop: theme.spacing.xl,
		borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
	},

	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		paddingTop: theme.spacing.xs,
		paddingBottom: theme.spacing.xs,
		fontSize: theme.fontSizes.sm,

		[theme.fn.smallerThan("xs")]: {
			flexDirection: "column",
		},
	},

	links: {
		[theme.fn.smallerThan("xs")]: {
			marginTop: theme.spacing.xs,
		},
	},
}));

export default function Footer() {
	const { classes } = useStyles();

	return (
		<div className={classes.footer}>
			<Container className={classes.container}>
				<Text>&#169; 2023 Alexander Liebald</Text>
				<Group className={classes.links}>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
					<a href="https://impressum.liebald.dev" target="_blank" rel="noopener noreferrer">
						Impressum
					</a>
					<a href="https://github.com/aliebald/aliebald.github.io" target="_blank" rel="noopener noreferrer">
						Repository
					</a>
				</Group>
			</Container>
		</div>
	);
}
