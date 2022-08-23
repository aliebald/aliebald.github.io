import { Title, Text } from "@mantine/core";
import PageHeader, { PageHeaderProps } from "../../Atoms/PageHeader/PageHeader";

interface ExtendedPageHeaderProps extends Partial<PageHeaderProps> {
	title: string;
	subtitle: string;
}

export default function ExtendedPageHeader({ title, subtitle, children, ...pageHeaderProps }: ExtendedPageHeaderProps) {
	return (
		<PageHeader {...pageHeaderProps}>
			<Title align="center" pb="md">
				{title}
			</Title>
			<Text color="dimmed" size="lg" align="center" pb={children ? "md" : undefined}>
				{subtitle}
			</Text>
			<>{children}</>
		</PageHeader>
	);
}
