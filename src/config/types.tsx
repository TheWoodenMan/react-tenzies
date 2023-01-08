export type AllNewDice = () => Array<RollObject>;
export type HandleDiePush = (id: string) => void;
export type ResetGame = () => void;
export type RollsType = Array<RollObject>;
export type RollObject = {
	value: number;
	isHeld: boolean;
	id: string;
};
export type ButtonProps = {
	handleButtonPush: () => void;
	resetGame: ResetGame;
	tenzies: boolean;
};
export type DieProps = {
	value: number;
	isHeld: boolean;
	key: number;
	id: string;
	handleDiePush: HandleDiePush;
};
