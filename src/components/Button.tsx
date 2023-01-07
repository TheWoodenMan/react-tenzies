import "./Button.css";

export default function (props) {
	return (
		<div className="Button">
			<span onClick={props.handleButtonPush}>Roll</span>
		</div>
	);
}
