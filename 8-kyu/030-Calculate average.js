/* https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function findAverage(array) {
	return array.length > 0
		? array.reduce((sum, num) => sum + num, 0) / array.length
		: 0;
}
