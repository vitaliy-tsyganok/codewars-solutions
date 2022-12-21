/* https://www.codewars.com/kata/57cff961eca260b71900008f

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */

const codes = {
	add(...chars) {
		chars.forEach((char) => (this[char.charCodeAt()] = char));
	},
};

codes.add('a', 'e', 'i', 'o', 'u');

function isVow(arr) {
	return arr.map((num) => (codes[num] ? codes[num] : num));
}

// Альтернативное решение
function isVow(arr) {
	return arr.map((code) =>
		'aeiou'.includes((char = String.fromCharCode(code))) ? char : code
	);
}
