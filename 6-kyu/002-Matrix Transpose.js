/* https://www.codewars.com/kata/52fba2a9adcd10b34300094c

Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

For example, the transpose of:

| 1 2 3 |
| 4 5 6 |
is

| 1 4 |
| 2 5 |
| 3 6 |
The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.
 */

// Решение для матрицы фиксированной длины
function transpose(matrix) {
	return matrix[0].map((_, index) => matrix.map((row) => row[index]));
}

// Решение для матрицы любой длины
function transpose(matrix) {
	const result = [];

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (!Array.isArray(result[j])) {
				result[j] = [];
			}
			result[j].push(matrix[i][j]);
		}
	}

	return result;
}

// Альтернативное решение через map для матрицы любой длины
function transpose(matrix) {
	return Array.from(
		{ length: Math.max(...matrix.map((arr) => arr.length)) },
		(el) => []
	).map((_, i) => matrix.map((r) => r[i] || null).filter((v) => v !== null));
}
