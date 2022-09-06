


//find if two strings are anagrams of each other. both strings should be either lowercase or uppercase and no spaces.

//anagram is a word or phrase made by transposing the letters of another word or phrase


//first we split the string by character (adding each character to array) using split("") and sort it alphabetically using sort(). 
//Then we join the array back into a string using join('').
//then we compare the two strings using strict equal.

const anagram = (str1, str2) => {
  const str1Arr = str1.split('').sort().join('');
  const str2Arr = str2.split('').sort().join('');
  console.log(str1Arr, str2Arr);
  return str1Arr === str2Arr;
}

console.log(anagram('TRAINGLE', 'INTEGRAL'));
console.log(anagram('listen', 'listent'));

