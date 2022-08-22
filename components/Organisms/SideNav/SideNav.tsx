import { createStyles, Group, Paper, Transition, Burger } from "@mantine/core";
import { useClickOutside, useDisclosure, useHotkeys } from "@mantine/hooks";
import React from "react";

interface SideNavProps {
	children: JSX.Element[];
}

const useStyles = createStyles((theme, _params, getRef) => ({
	burger: {
		marginRight: theme.spacing.md,
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	wrapper: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	navbar: {
		position: "absolute",
		top: 56,
		left: 0,
		paddingTop: theme.spacing.sm,
		paddingBottom: theme.spacing.sm,
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
		borderLeft: 0,
		borderTop: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 0,

		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	inner: {
		flexDirection: "column",
		alignItems: "stretch",
		textAlign: "center",
	},
}));

export default function SideNav({ children }: SideNavProps) {
	const { classes } = useStyles();
	const [opened, { toggle, close }] = useDisclosure(false);
	const navRef = useClickOutside(close);
	useHotkeys([["escape", toggle]]);

	return (
		<div ref={navRef} className={classes.wrapper}>
			<Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
			<Transition transition="scale-x" duration={200} mounted={opened}>
				{(styles) => (
					<Paper style={styles} className={classes.navbar}>
						<Group spacing="sm" className={classes.inner}>
							{children}
						</Group>
					</Paper>
				)}
			</Transition>
		</div>
	);
}
