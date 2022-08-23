import React from "react";
import { IconBackhoe, IconBarrierBlock } from "@tabler/icons";
import { Center, Container, Title, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	title: {
		[theme.fn.largerThan("xs")]: {
			paddingLeft: theme.spacing.sm,
			paddingRight: theme.spacing.sm,
		},
	},
	sideIcon: {
		[theme.fn.smallerThan("xs")]: {
			display: "none",
		},
	},
	altIconGroup: {
		marginBottom: theme.spacing.md,
		[theme.fn.largerThan("xs")]: {
			display: "none",
		},
	},
	altIcon: {
		marginLeft: theme.spacing.sm,
		marginRight: theme.spacing.sm,
	},
}));

export default function UnderConstruction() {
	const { classes } = useStyles();

	return (
		<Container py="5rem">
			<Center>
				<IconBarrierBlock size={40} color="orange" className={classes.sideIcon} />
				<Title order={1} className={classes.title}>
					Under&nbsp;Construction
				</Title>
				<IconBarrierBlock size={40} color="orange" className={classes.sideIcon} />
			</Center>
			<Center className={classes.altIconGroup}>
				<IconBarrierBlock size={40} color="orange" />
				<IconBackhoe size={40} color="orange" className={classes.altIcon} />
				<IconBarrierBlock size={40} color="orange" />
			</Center>
			<Text color="dimmed" size="lg" align="center">
				This page is still under construction.
			</Text>
		</Container>
	);
}
