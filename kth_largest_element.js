


// find the kth largest element in an array.


//first we sort the array from largest to smallest using sort().
//sort will take compare function as a parameter.
//compare function will compare two values and return a number.
//if the number is positive, the first value is greater than the second value.
//if the number is negative, the first value is less than the second value.
//if the number is 0, the values are equal.
//we use the 'k - 1' to get the index of the kth largest element.
//Then we return the kth largest element using the index of k - 1.


const kthLargest = (arr, k) => {
    const sorted = arr.sort((a, b) => b - a);
    return sorted[k - 1];
}

console.log(kthLargest([10, 2, 3, 4, 5, 6, 7], 4));