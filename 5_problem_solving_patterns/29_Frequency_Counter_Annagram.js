console.log('############_29_Frequency_Counter_Annagram');
// ANAGRAMS
// Given two strings, write a function to determine
// if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging
// the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
	if (str1 == '' && str2 == '') return true;
	let charsArrFromStr1 = str1.split('');
	let charsArrFromStr2 = str2.split('');
	// console.log(arrFromStr1, arrFromStr2);
	let frequencyCounterArr1 = {};
	let frequencyCounterArr2 = {};

	for (let char of charsArrFromStr1) {
		frequencyCounterArr1[char] = (frequencyCounterArr1[char] || 0) + 1;
	}
	for (let char of charsArrFromStr2) {
		frequencyCounterArr2[char] = (frequencyCounterArr2[char] || 0) + 1;
	}
	// console.log(frequencyCounterArr1);
	// console.log(frequencyCounterArr2);
	for (let key in frequencyCounterArr2) {
		if (!(key in frequencyCounterArr1)) return false;
		if (frequencyCounterArr2[key] !== frequencyCounterArr1[key]) return false;
	}
	return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

console.log('SECOND SOLUTION');
function validAnagramSecondSol(first, second) {
	if (first.length !== second.length) {
		return false;
	}

	const lookup = {};

	for (let i = 0; i < first.length; i++) {
		let letter = first[i];
		// if letter exists, increment, otherwise set to 1
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}
	console.log(lookup);

	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		// can't find letter or letter is zero then it's not an anagram
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}
	console.log(lookup);

	return true;
}

console.log(validAnagramSecondSol('', '')); // true
console.log(validAnagramSecondSol('aaz', 'zza')); // false
console.log(validAnagramSecondSol('anagram', 'nagaram')); // true
console.log(validAnagramSecondSol('rat', 'car')); // false
console.log(validAnagramSecondSol('awesome', 'awesom')); // false
console.log(validAnagramSecondSol('qwerty', 'qeywrt')); // true
console.log(validAnagramSecondSol('texttwisttime', 'timetwisttext')); // true

console.log('############_29_Frequency_Counter_Annagram');
