/* https://www.codewars.com/kata/stringing-me-along

Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

Note: there will always be at least 1 string; all inputs will be non-empty.

For example:

createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?" */

// Сокращенный вариант
function createMessage(m1) {
	return (m2) => (!m2 ? m1 : createMessage(`${m1} ${m2}`));
}

// Развернутый вариант
function createMessage(m1) {
	return function (m2) {
		if (!m2) {
			return m1;
		}
		return createMessage(`${m1} ${m2}`);
	};
}
