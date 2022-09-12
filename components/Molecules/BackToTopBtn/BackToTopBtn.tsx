import { IconArrowUp } from "@tabler/icons";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, createStyles, MantineTransition, Transition } from "@mantine/core";

const useStyles = createStyles((theme, _params) => ({
	button: {
		color: theme.colors.dark[0],
		width: "32px",
		height: "32px",
		borderRadius: "50%",
		background: "transparent",
		border: `2px solid ${theme.colors.dark[0]}`,
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		cursor: "pointer",
		"&:hover": {
			color: theme.colors.dark[1],
			borderColor: theme.colors.dark[1],
		},
	},
	icon: {
		position: "absolute",
	},
}));

export default function BackToTopBtn() {
	const [scroll, scrollTo] = useWindowScroll();
	const { classes } = useStyles();

	const transition: MantineTransition = {
		in: { opacity: 1, transform: "scaleY(1)" },
		out: { opacity: 0, transform: "scaleY(0)" },
		transitionProperty: "transform, opacity, hover",
	};

	return (
		<Affix position={{ bottom: 24, right: 32 }}>
			<Transition transition="slide-up" mounted={scroll.y > 0}>
				{(transitionStyles) => (
					<button onClick={() => scrollTo({ y: 0 })} style={transitionStyles} className={classes.button}>
						<IconArrowUp size={24} className={classes.icon} />
					</button>
				)}
			</Transition>
		</Affix>
	);
}
