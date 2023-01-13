console.log('############_28_Frequency_Counter_Pattern');
//check if arr2 values are square of arr1 values
//The function should return true if every value in the array
//has it's corresponding value squared in the second array.
//The frequency of values must be the same.

function areArraysTheSame(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	return true;
}

console.log(areArraysTheSame([1, 2, 3], [4, 1, 9]));
console.log(areArraysTheSame([1, 2, 3], [1, 9]));
console.log(areArraysTheSame([1, 2, 1], [4, 4, 1]));

console.log('############_28_Frequency_Counter_Pattern');
