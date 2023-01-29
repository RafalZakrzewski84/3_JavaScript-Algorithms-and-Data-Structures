console.log('############_32_Multiple_Pointers_Count_Unique_Values');
// countUniqueValues
// Implement a function called countUniqueValues,
// which accepts a sorted array,
// and counts the unique values in the array.
// There can be negative numbers in the array,
// but it will always be sorted.

console.log('SOLUTION 1');
function countUniqueValues(arr) {
	if (arr.length === 0) return 0;
	let iIdx = 0;
	let jIdx = iIdx + 1;
	while (jIdx < arr.length) {
		let compValues = arr[iIdx] == arr[jIdx];
		if (compValues) {
			// console.log(arr[jIdx], jIdx);
			jIdx++;
		} else {
			iIdx++;
			arr[iIdx] = arr[jIdx];
			jIdx++;
			// console.log(arr, jIdx, iIdx);
		}
	}
	// console.log(arr, jIdx, iIdx);
	return iIdx + 1;
}
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2

console.log('SOLUTION 2');
function countUniqueValues2(arr) {
	if (arr.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
}

console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7

console.log('############_32_Multiple_Pointers_Count_Unique_Values');
