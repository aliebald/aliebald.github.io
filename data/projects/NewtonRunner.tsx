import { Project } from "../projects";
import { mapBadges } from "../badges";
import UnderConstruction from "../../components/Molecules/UnderConstruction/UnderConstruction";

const project: Project = {
	title: "Newton Runner",
	badges: mapBadges(["TypeScript", "React", "Bootstrap", "Phaser"]),
	href: "newton-runner",
	abstract:
		"A gamified online teaching approach for the basics of movement by graphs. Contains incremental learning sessions, quizzes that test the knowledge and a platformer game powered by Phaser to internalize the contents of each session.",
	description: NewtonRunnerProject,
	links: [
		{
			href: "https://github.com/aliebald/newton-runner",
			type: "github",
			label: "GitHub",
		},
		{
			href: "https://newton-runner.de",
			type: "website",
			label: "Website",
		},
	],
};

export default project;

function NewtonRunnerProject(): JSX.Element {
	return <UnderConstruction />;
}
