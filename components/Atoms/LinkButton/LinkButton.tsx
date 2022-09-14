import Link from "next/link";
import { Button, ButtonProps } from "@mantine/core";
import { ForwardedRef, forwardRef } from "react";

export interface LinkButtonProps extends ButtonProps {
	href: string;
	children: JSX.Element | string | number;
}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
	({ href, children, ...btnProps }: LinkButtonProps, ref: ForwardedRef<HTMLAnchorElement>): JSX.Element => {
		return (
			<Link href={href} passHref>
				<Button {...btnProps} component="a" ref={ref}>
					{children}
				</Button>
			</Link>
		);
	}
);

LinkButton.displayName = "LinkButton";
export default LinkButton;
