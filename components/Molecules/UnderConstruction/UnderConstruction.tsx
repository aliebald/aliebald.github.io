import React from "react";
import { IconBarrierBlock } from "@tabler/icons";
import { Center, Container, Title, Text } from "@mantine/core";

export default function UnderConstruction() {
	return (
		<Container py="5rem">
			<Center>
				<IconBarrierBlock size={40} color="orange" />
				<Title order={1} px="md">
					Under&nbsp;Construction
				</Title>
				<IconBarrierBlock size={40} color="orange" />
			</Center>
			<Text color="dimmed" size="lg" align="center">
				This page is still under construction.
			</Text>
		</Container>
	);
}
