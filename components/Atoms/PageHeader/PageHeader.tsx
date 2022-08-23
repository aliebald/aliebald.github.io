import { Container, createStyles } from "@mantine/core";

export interface PageHeaderProps {
	children: JSX.Element | JSX.Element[] | string | number;
}

const useStyles = createStyles((theme, _params, getRef) => ({
	header: {
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
		boxShadow: theme.shadows.md,
		paddingTop: "2.5rem",
		paddingBottom: "2.5rem",

		[theme.fn.smallerThan("md")]: {
			paddingTop: "1.5rem",
			paddingBottom: "1.5rem",
		},
		[theme.fn.smallerThan("sm")]: {
			paddingTop: ".5rem",
			paddingBottom: ".5rem",
		},
	},
}));

export default function PageHeader({ children }: PageHeaderProps) {
	const { classes } = useStyles();

	return (
		<div className={classes.header}>
			<Container py="md">{children}</Container>
		</div>
	);
}
