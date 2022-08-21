import { Project } from "../projects";
import { mapBadges } from "../badges";

const project: Project = {
	title: "Newton Runner",
	badges: mapBadges(["TypeScript", "React", "Bootstrap", "Phaser"]),
	href: "newton-runner",
	abstract:
		"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum",
	description: NewtonRunnerProject,
};

export default project;

function NewtonRunnerProject(): JSX.Element {
	return <div>NewtonRunnerProject</div>;
}
