console.log('############_35_Divide_And_ Conquer_Pattern');
// Divide and Conquer
// This pattern involves dividing a data set into smaller chunks
// and then repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity

// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index
// where the value passed to the function is located.
// If the value is not found, return -1

//A NAIVE SOLUTION
//Time Complexity - O(N^2)
console.log('A NAIVE SOLUTION');
function search(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) return i;
	}
	return -1;
}
console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

//REFACTORED
//Time Complexity - O(N^2)
console.log('REFACTORED');
function searchRefactored(arr, val) {
	let min = 0;
	let max = arr.length - 1; //5

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let currentElement = arr[middle];
		console.log(min, max, middle, currentElement); //first loop 2 - 3

		if (currentElement < val) {
			min = middle + 1;
		} else if (currentElement > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
}
// 1 2 3 4 5 6
// 0 1 2 3 4 5
console.log(searchRefactored([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(searchRefactored([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(searchRefactored([1, 2, 3, 4, 5, 6], 11)); // -1

console.log('############_35_Divide_And_ Conquer_Pattern');
