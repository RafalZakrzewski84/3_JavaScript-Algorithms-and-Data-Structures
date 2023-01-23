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

console.log(
	sameFrequency(182, 281) // true
);
console.log(
	sameFrequency(34, 14) // false
);
console.log(
	sameFrequency(3589578, 5879385) // true
);
console.log(
	sameFrequency(22, 222) // false
);

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

console.log(
	areThereDuplicatesFreq(1, 2, 3) // false
);
console.log(
	areThereDuplicatesFreq(1, 2, 2) // true
);
console.log(
	areThereDuplicatesFreq('a', 'b', 'c', 'a') // true
);

console.log('Multiple Pointers');
function areThereDuplicatesMP() {}

console.log(
	areThereDuplicatesMP(1, 2, 3) // false
);
console.log(
	areThereDuplicatesMP(1, 2, 2) // true
);
console.log(
	areThereDuplicatesMP('a', 'b', 'c', 'a') // true
);
