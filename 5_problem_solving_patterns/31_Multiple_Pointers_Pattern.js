console.log('############_31_Multiple_Pointers_ Pattern');
// MULTIPLE POINTERS
// Creating pointers or values that correspond
// to an index or position and move towards the beginning,
// end or middle based on a certain condition
// Very efficient for solving problems with minimal space complexity as well

// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// NAIVE SOLUTION
// Time Complexity - O(N^2)
// Space Complexity - O(1)
console.log('A NAIVE SOLUTION');
function sumZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
		}
	}
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-4, -3, -2, -1, 0, 1, 5, 6, 7, 8])); // [-1,1]

// REFACTORED
// Time Complexity - O(N)
// Space Complexity - O(1)
console.log('REFACTORED 1');
function sumZeroRefactored(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		console.log(left, right, sum, arr[left], arr[right]);
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum < 0) {
			left++;
		} else {
			right--;
		}
	}
}

// console.log(sumZeroRefactored([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
// console.log(sumZeroRefactored([-2, 0, 1, 3])); // undefined
// console.log(sumZeroRefactored([1, 2, 3])); // undefined
console.log(sumZeroRefactored([-4, -3, -2, -1, 0, 1, 5, 6, 7, 8])); // [-1,1]

console.log('REFACTORED 2');
function sumZeroRefactored2(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		console.log(left, right, sum, arr[left], arr[right]);
		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
}

console.log(sumZeroRefactored2([-4, -3, -2, -1, 0, 1, 5, 6, 7, 8])); // [-1,1]

console.log('############_31_Multiple_Pointers_ Pattern');
