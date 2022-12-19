/* https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */

function countSheep(num) {
	const str = '';
	for (let i = 1; i <= num; i++) {
		str += `${i} sheep...`;
	}
	return str;
}
