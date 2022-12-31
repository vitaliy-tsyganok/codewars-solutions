/* https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

// Мое решение
function zero(fn, arg = 0) {
	return fn ? fn(arg) : arg;
}
function one(fn, arg = 1) {
	return fn ? fn(arg) : arg;
}
function two(fn, arg = 2) {
	return fn ? fn(arg) : arg;
}
function three(fn, arg = 3) {
	return fn ? fn(arg) : arg;
}
function four(fn, arg = 4) {
	return fn ? fn(arg) : arg;
}
function five(fn, arg = 5) {
	return fn ? fn(arg) : arg;
}
function six(fn, arg = 6) {
	return fn ? fn(arg) : arg;
}
function seven(fn, arg = 7) {
	return fn ? fn(arg) : arg;
}
function eight(fn, arg = 8) {
	return fn ? fn(arg) : arg;
}
function nine(fn, arg = 9) {
	return fn ? fn(arg) : arg;
}

function plus(num) {
	return (arg) => arg + num;
}
function minus(num) {
	return (arg) => arg - num;
}
function times(num) {
	return (arg) => arg * num;
}
function dividedBy(num) {
	return (arg) => Math.floor(arg / num);
}

// Альтернативное короткое решение
const [zero, one, two, three, four, five, six, seven, eight, nine] = Array.from(
	{ length: 10 },
	(_, idx) => (fn) => fn ? fn(idx) : idx
);

const [plus, minus, times, dividedBy] = Array.from(
	['+', '-', '*', '/'],
	(op) => new Function(`num`, `return (arg) => arg ${op} num ^ 0`)
);
