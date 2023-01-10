/* https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

// Мое решение
function duplicateCount(text) {
	return text.split('').reduce((dublicates, value) => {
		let regex = new RegExp(`${value}`, 'gi');
		return text.match(regex || []).length > 1 && dublicates.search(regex) === -1
			? dublicates + value
			: dublicates;
	}, '').length;
}

// Альтернативное решение (более производительнее)
function duplicateCount(text) {
	return (
		text
			.toLowerCase()
			.split('')
			.sort()
			.join('')
			.match(/([^])\1+/g) || []
	).length;
}

// Решение через хэш-объект №1
function duplicateCount(text) {
	const hash = {
		getDuplicateCount() {
			return Object.values(this).filter((count) => count > 1).length;
		},
	};

	for (let char of text.toLowerCase()) {
		if (hash[char]) {
			hash[char] += 1;
			continue;
		}
		hash[char] = 1;
	}

	return hash.getDuplicateCount();
}

// Решение через хэш-объект №2
function duplicateCount(str) {
	const originalStr = str.toLowerCase().split('');

	const result = {
		duplicateCount: 0,
	};

	originalStr.forEach((char) => {
		if (!Object.hasOwn(result, char)) {
			result[char] = 1;
			return;
		}
		if (result[char] === 1) {
			result[char] += 1;
			result.duplicateCount += 1;
			return;
		}
	});

	return result.duplicateCount;
}
