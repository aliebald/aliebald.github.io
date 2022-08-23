import { Button, ButtonProps } from "@mantine/core";
import Link from "next/link";

interface LinkButtonProps extends ButtonProps {
	href: string;
	children: JSX.Element | string | number;
}

export default function LinkButton({ href, children, ...btnProps }: LinkButtonProps) {
	return (
		<Link href={href} passHref>
			<Button {...btnProps} component="a">
				{children}
			</Button>
		</Link>
	);
}
