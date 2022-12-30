/* https://www.codewars.com/kata/sum-of-digits-slash-digital-root/

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

// Мое решение
function digitalRoot(n) {
	while (n > 9) {
		n = Array.from(String(n)).reduce((sum, num) => sum + +num, 0);
	}
	return n;
}

// Другое простое решение
function digitalRoot(n) {
	return ((n - 1) % 9) + 1;
}
