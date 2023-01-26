import { ButtonProps } from "../config/types";
import "./Button.css";

export default function (props: ButtonProps) {
	return (
		<div className="Button">
			<span onClick={props.tenzies ? props.resetGame : props.handleButtonPush}>
				{props.tenzies ? "Restart" : "Roll"}
			</span>
		</div>
	);
}
