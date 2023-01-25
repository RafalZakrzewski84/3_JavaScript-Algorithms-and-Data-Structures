console.log('############_37_38_39_problem_solving_challenges');

console.log('Frequency Counter - sameFrequency');
// Frequency Counter - sameFrequency
// Write a function called sameFrequency.
// Given two positive integers,
// find out if the two numbers have the same frequency of digits.

function sameFrequency(num1, num2) {
	let num1Freq = {};
	let num2Freq = {};

	function setFreq(number, obj) {
		number
			.toString()
			.split('')
			.forEach((n) => {
				obj[n] = (obj[n] || 0) + 1;
			});
	}
	setFreq(num1, num1Freq);
	setFreq(num2, num2Freq);
	console.log(num1Freq);
	console.log(num2Freq);
	for (let key in num1Freq) {
		if (!num2Freq[key]) return false;
		if (num1Freq[key] !== num2Freq[key]) return false;
	}
	return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

console.log('Frequency Counter / Multiple Pointers - areThereDuplicates');
// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

console.log('Frequency Counter');
function areThereDuplicatesFreq() {
	const argsArr = [...arguments];

	let argsFreq = {};

	for (let val of argsArr) {
		argsFreq[val] = (argsFreq[val] || 0) + 1;
	}
	console.log(argsArr, argsFreq);

	for (let key in argsFreq) {
		if (argsFreq[key] > 1) return true;
	}
	return false;
}

console.log(areThereDuplicatesFreq(1, 2, 3)); // false
console.log(areThereDuplicatesFreq(1, 2, 2)); // true
console.log(areThereDuplicatesFreq('a', 'b', 'c', 'a')); // true

console.log('Multiple Pointers - my code');
function areThereDuplicatesMP() {
	const argsArr = [...arguments];
	const isString = (element) => typeof element === 'string';
	if (argsArr.some(isString)) {
		argsArr.sort();
	} else {
		argsArr.sort((a, b) => a - b);
	}

	let start = 0;
	for (let next = 1; next < argsArr.length; next++) {
		if (argsArr[start] === argsArr[next]) return true;
		start++;
	}
	return false;
}

console.log(areThereDuplicatesMP(1, 2, 3)); // false
console.log(areThereDuplicatesMP(2, 1, 2)); // true
console.log(areThereDuplicatesMP('a', 'b', 'c', 'a')); // true
console.log(areThereDuplicatesMP('a', 'g', 'xyz', 'o', 'i'));
console.log(areThereDuplicatesMP(1, 2, 3, 44, 55, 22, 7, 8, 9, 10, 11, 44));

console.log('Multiple Pointers - solution doesnt work for strings');
function areThereDuplicatesSol(...args) {
	args.sort((a, b) => a - b);
	console.log('sol', args);
	let start = 0;
	let next = 1;
	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
}
console.log(areThereDuplicatesSol(2, 1, 2));
console.log(areThereDuplicatesSol('a', 'b', 'c', 'a')); // true

console.log('Multiple Pointers - solution one liner');
function areThereDuplicatesOneliner() {
	return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesOneliner(1, 2, 3)); // false
console.log(areThereDuplicatesOneliner(2, 1, 2)); // true
console.log(areThereDuplicatesOneliner('a', 'b', 'c', 'a')); // true
