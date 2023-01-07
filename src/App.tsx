import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Die from "./components/Die";
import Button from "./components/Button";

function App() {
	const [rolls, setRolls] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

	function allNewDice() {
		function rollDie() {
			let roll = Math.floor(Math.random() * 6) + 1;
			console.log(roll);
			return roll;
		}
		let outputArray = [];
		for (let i = 0; i < 10; i++) {
			let num = rollDie();
			outputArray.push(num);
		}
		return outputArray;
	}

	function handleButtonPush() {
		setRolls(allNewDice());
	}

	const diceElements = rolls.map((num, i) => <Die key={i} value={num} />);

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
