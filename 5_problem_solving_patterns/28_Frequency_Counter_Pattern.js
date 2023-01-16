console.log('############_28_Frequency_Counter_Pattern');
//check if arr2 values are square of arr1 values
//The function should return true if every value in the array
//has it's corresponding value squared in the second array.
//The frequency of values must be the same.

//A NAIVE SOLUTION - Time Complexity - N^2 - loop in loop
console.log('A NAIVE SOLUTION');
function areArraysTheSame(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		let sqrValueInArr2 = arr2.indexOf(arr1[i] ** 2);
		if (sqrValueInArr2 == -1) return false;
		arr2.splice(sqrValueInArr2, 1);
	}
	return true;
}

console.log(areArraysTheSame([1, 2, 3], [4, 1, 9]));
console.log(areArraysTheSame([1, 2, 3, 4], [1, 9, 4, 17]));
console.log(areArraysTheSame([1, 2, 3], [1, 9]));
console.log(areArraysTheSame([1, 2, 1], [4, 4, 1]));

//REFACTORED Time Complexity - O(n) - 3 separate loops
//Frequency Counter - is object which holds profile of array, break down content of array
console.log('REFACTORED');
function areArraysTheSameRefactored(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	let frequencyCounterArr1 = {};
	let frequencyCounterArr2 = {};

	//loop1
	for (let val of arr1) {
		frequencyCounterArr1[val] = (frequencyCounterArr1[val] || 0) + 1;
	}
	//loop2
	for (let val of arr2) {
		frequencyCounterArr2[val] = (frequencyCounterArr2[val] || 0) + 1;
	}
	// console.log(frequencyCounterArr1);
	// console.log(frequencyCounterArr2);

	//loop3
	for (let key in frequencyCounterArr1) {
		// console.log(key, frequencyCounterArr1[key], key ** 2, frequencyCounterArr2[key ** 2]);
		if (frequencyCounterArr1[key] !== frequencyCounterArr2[key ** 2])
			return false;
	}

	return true;
}

console.log(areArraysTheSameRefactored([1, 2, 3], [4, 1, 9]));
console.log(areArraysTheSameRefactored([1, 2, 3, 4], [1, 9, 4, 17]));
console.log(areArraysTheSameRefactored([1, 2, 3, 25], [1, 9, 4, 5]));
console.log(areArraysTheSameRefactored([1, 2, 3], [1, 9]));
console.log(areArraysTheSameRefactored([1, 2, 1], [4, 4, 1]));
console.log(areArraysTheSameRefactored([1, 2, 3, 4], [1, 9, 4, 16, 16]));
console.log(areArraysTheSameRefactored([1, 2, 2], [4, 4, 1]));

console.log('############_28_Frequency_Counter_Pattern');
