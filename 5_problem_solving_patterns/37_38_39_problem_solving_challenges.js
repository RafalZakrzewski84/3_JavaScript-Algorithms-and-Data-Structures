console.log('############_37_38_39_problem_solving_challenges');

console.log('### Frequency Counter - sameFrequency ###');
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

console.log(
	'### Frequency Counter / Multiple Pointers - areThereDuplicates ###'
);
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

console.log('### Multiple Pointers - averagePair ###');
// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.
function averagePair() {}
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

console.log('### Multiple Pointers - isSubsequence ###');
// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form
// a subsequence of the characters in the second string. In other words,
// the function should check whether the characters in the first
// string appear somewhere in the second string, without their order changing.
function isSubsequence() {}
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

console.log('### Sliding Window - maxSubarraySum ###');
// Given an array of integers and a number, write
// a function called maxSubarraySum, which finds the maximum sum of
// a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements
// from the original array. In the first example below, [100, 200, 300]
// is a subarray of the original array, but [100, 300] is not.
function maxSubarraySum() {}
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

console.log('### Sliding Window - minSubArrayLen ###');
// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed
// to the function. If there isn't one, return 0 instead.
function minSubArrayLen() {}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

console.log('### Sliding Window - findLongestSubstring ###');
// Write a function called findLongestSubstring, which accepts a
// string and returns the length of the longest
// substring with all distinct characters.
function findLongestSubstring() {}
console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
