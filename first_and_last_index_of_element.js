


//find the first and last index of a target element in an sorted array



//two arraow functions to find the first and last index of a target element in an sorted array
//find first will traverse the array from the beginning until it finds the target element and return the index of the target element
//find last will traverse the array from the end until it finds the target element and return the index of the target element

const findFirst = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const findLast = (arr, target) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const findFirstAndLast = (arr, target) => {
  const first = findFirst(arr, target);
  const last = findLast(arr, target);
  return [first, last];
}

console.log(findFirstAndLast([1, 2, 3, 4, 5, 5, 5, 6, 7], 5));