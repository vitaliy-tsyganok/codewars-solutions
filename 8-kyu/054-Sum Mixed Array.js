/* https://www.codewars.com/kata/57eaeb9578748ff92a000009

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(arr) {
	return arr.reduce((sum, el) => sum + Number(el), 0);
}
