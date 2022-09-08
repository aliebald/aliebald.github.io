import Link from "next/link";
import { IconMail, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons";
import { createStyles, Header as MantineHeader, Group, Container } from "@mantine/core";
import { ColorSchemeToggle } from "../../Molecules/ColorSchemeToggle/ColorSchemeToggle";
import QuickIcon from "../../Molecules/QuickIcon/QuickIcon";
import { useRouter } from "next/router";
import SideNav from "../SideNav/SideNav";

const useStyles = createStyles((theme) => ({
	inner: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		height: 56,

		[theme.fn.smallerThan("sm")]: {
			justifyContent: "flex-start",
		},
	},

	links: {
		width: 260,

		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	social: {
		width: 260,

		[theme.fn.smallerThan("sm")]: {
			width: "auto",
			marginLeft: "auto",
		},
	},

	link: {
		display: "block",
		lineHeight: 1,
		padding: "8px 12px",
		borderRadius: theme.radius.sm,
		textDecoration: "none",
		color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
		},

		[theme.fn.smallerThan("sm")]: {
			fontSize: theme.fontSizes.md,
			padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
		},
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
			color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
		},
	},
}));

export default function Header({ links }: { links: { label: string; href: string }[] }) {
	const router = useRouter();
	const { classes, cx } = useStyles();

	const linkElements = links.map((link) => (
		<Link key={link.href} href={link.href}>
			<a className={cx(classes.link, { [classes.linkActive]: router.pathname === link.href })}>{link.label}</a>
		</Link>
	));

	const iconSize = 22;
	const iconStroke = 1.5;

	return (
		<MantineHeader height={56} pb="md">
			<Container className={classes.inner}>
				<SideNav>{linkElements}</SideNav>
				<Group className={classes.links} spacing={5}>
					{linkElements}
				</Group>
				<Group spacing={0} className={classes.social} position="right" noWrap>
					<QuickIcon
						href="https://github.com/aliebald/"
						tooltip="My GitHub Profile"
						icon={<IconBrandGithub size={iconSize} stroke={iconStroke} />}
					/>
					<QuickIcon
						href="/contact"
						tooltip="LinkedIn - WIP"
						icon={<IconBrandLinkedin size={iconSize} stroke={iconStroke} />}
					/>
					<QuickIcon
						href="mailto:contact@liebald.dev"
						tooltip="Send Me a Mail"
						icon={<IconMail size={iconSize} stroke={iconStroke} />}
					/>
					<ColorSchemeToggle size={iconSize} stroke={iconStroke} />
				</Group>
			</Container>
		</MantineHeader>
	);
}
