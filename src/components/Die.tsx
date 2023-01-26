import { DieProps } from "../config/types";
import "./Die.css";
import * as React from "react";

declare module "react" {
	interface HTMLAttributes<T> {
		isHeld?: boolean;
	}
}

export default function (props: DieProps) {
	return (
		<div
			style={{ "backgroundColor": props.isHeld ? "#59E391" : "white" }}
			className="Die"
			onClick={() => props.handleDiePush(props.id)}
		>
			<h2>{props.value}</h2>
		</div>
	);
}
