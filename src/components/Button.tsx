import { ButtonProps } from "../config/types";
import "./Button.css";

export default function (props: ButtonProps) {
	return (
		<div className="Button">
			<span onClick={props.handleButtonPush}>Roll</span>
		</div>
	);
}
