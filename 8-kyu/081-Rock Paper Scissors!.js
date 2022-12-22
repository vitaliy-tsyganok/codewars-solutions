/* https://www.codewars.com/kata/5672a98bdbdd995fad00000f

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
 */
function rps(p1, p2) {
	const getMsg = function (n) {
		return n ? `Player ${n} won!` : 'Draw!';
	};
	const combo = {
		'scissors,scissors': getMsg(0),
		'scissors,rock': getMsg(2),
		'scissors,paper': getMsg(1),
		'rock,scissors': getMsg(1),
		'rock,rock': getMsg(0),
		'rock,paper': getMsg(2),
		'paper,scissors': getMsg(2),
		'paper,rock': getMsg(1),
		'paper,paper': getMsg(0),
	};
	return combo[`${p1},${p2}`];
}

// Альтернативное решение
function rps(p1, p2) {
	if (p1 === p2) return 'Draw!';
	var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
	if (p2 === rules[p1]) {
		return 'Player 1 won!';
	} else {
		return 'Player 2 won!';
	}
}
