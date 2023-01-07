import "./App.css";
import { JSXElementConstructor, useState } from "react";
import reactLogo from "./assets/react.svg";
import * as React from "react";
import { nanoid } from "nanoid";
import Die from "./components/Die";
import Button from "./components/Button";
import {
	AllNewDice,
	RollsType,
	HandleDiePush,
	RollObject
} from "./config/types";

function App() {
	const [rolls, setRolls] = useState<RollsType>([
		{ value: 1, isHeld: true, id: nanoid() },
		{ value: 1, isHeld: false, id: nanoid() },
		{ value: 1, isHeld: false, id: nanoid() },
		{ value: 1, isHeld: false, id: nanoid() },
		{ value: 1, isHeld: false, id: nanoid() },
		{ value: 1, isHeld: false, id: nanoid() },
		{ value: 1, isHeld: false, id: nanoid() },
		{ value: 1, isHeld: false, id: nanoid() },
		{ value: 1, isHeld: false, id: nanoid() },
		{ value: 1, isHeld: false, id: nanoid() }
	]);

	const allNewDice: AllNewDice = () => {
		function rollDie() {
			let roll = Math.floor(Math.random() * 6) + 1;
			console.log(roll);
			return roll;
		}
		let outputArray = rolls.map((roll) => {
			if (roll.isHeld) {
				return roll;
			} else {
				return {
					id: roll.id,
					value: rollDie(),
					isHeld: false
				};
			}
		});
		return outputArray;
	};

	function handleButtonPush() {
		setRolls(allNewDice());
	}

	const handleDiePush: HandleDiePush = (id: string) => {
		setRolls(
			rolls.map((roll) => {
				if (roll.id === id) {
					return {
						value: roll.value,
						isHeld: !roll.isHeld,
						id: roll.id
					};
				} else {
					return roll;
				}
			})
		);
	};

	const diceElements = rolls.map((obj, i) => (
		<Die
			key={i}
			value={obj.value}
			isHeld={obj.isHeld}
			id={obj.id}
			handleDiePush={handleDiePush}
		/>
	));

	return (
		<div className="App">
			<div className="whiteCard">
				<div className="textBox">
					<h1>Tenzies</h1>
					<h3>
						Roll until all dice are the same. Click each die to freeze it at its
						current value between rolls.
					</h3>
				</div>
				<div className="container">{diceElements}</div>
				<Button handleButtonPush={handleButtonPush} />
			</div>
		</div>
	);
}

export default App;
