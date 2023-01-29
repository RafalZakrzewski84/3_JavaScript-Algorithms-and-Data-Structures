console.log('############_34_Sliding_Window_Pattern');
// SLIDING WINDOW
// This pattern involves creating a window which can either
// be an array or number from one position to another
// Depending on a certain condition, the window either
// increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

//A NAIVE SOLUTION
//Time Complexity - O(N^2)
console.log('A NAIVE SOLUTION');
function maxSubarraySum(arr, num) {
	console.log('start func');
	if (num > arr.length) return null;
	let max = -Infinity;
	for (let i = 0; i < arr.length - num + 1; i++) {
		let temp = 0;
		for (let j = 0; j < num; j++) {
			//first loop
			//add next 3 nums of arr i-j -> 0+0,0+1,0+2
			temp += arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
		console.log(temp, max);
	}
	return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19

//REFACTORED
//Time Complexity - O(N)
console.log('REFACTORED');
function maxSubarraySumRefactored(arr, num) {
	console.log('start func');
	let maxSum = 0;
	let tempSum = 0;
	if (num > arr.length) return null;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		//first loop
		//tempSum = 17 - 2(idx0) + 2(idx3)
		//tempSum = 17 - 6(idx1) + 1(idx4)
		tempSum = tempSum - arr[i - num] + arr[i];
		console.log(tempSum, arr[i - num], arr[i]);
		maxSum = Math.max(tempSum, maxSum);
		console.log(tempSum, maxSum); // first loop 17 17
	}
	return maxSum;
}

console.log(maxSubarraySumRefactored([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySumRefactored([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySumRefactored([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySumRefactored([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySumRefactored([], 4)); // null
console.log(maxSubarraySumRefactored([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19

console.log('############_34_Sliding_Window_Pattern');
