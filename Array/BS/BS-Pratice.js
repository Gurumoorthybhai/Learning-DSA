// BS - Binary Search

// Step 1: Array/Data structure should be sorted
// Step 2: find mid, compare low & high with mid

// arr with target ele
// arr without target ele

// Iteration
// Recursion

/*
const arr = [2,3,7, 9, 11, 13, 15, 17];
const target = 17;

// return target index
// 1/

var targetIndex = function(arr, target) {

    let low = 0;
    let high = arr.length-1;
    while(low <= high) {
        let mid = Math.floor((low+high)/2);

        if(target === arr[mid]) return mid;
        else if(target > arr[mid]) low = mid+1;
        else high = mid-1;
    }

    return -1;
}

console.log(targetIndex(arr, target));

*/

// recursion

/*
var targetIndex = function(arr, target, low, high) {

    if(low > high) {
        return -1;
    }
    let mid = Math.floor(low+(high-low)/2);
    if(target === arr[mid]) return mid;
    else if(target > arr[mid]) {
        return targetIndex(arr, target, mid+1, high);
    }
    else {
        return targetIndex(arr, target, low, mid-1);
    }
    
}

const arr = [2,3,7, 9, 11, 13, 15, 17];
const target = 5;
console.log(targetIndex(arr, target, 0, arr.length-1));
*/

// Lowest Bound
// find the index which is smallest of given number, if number is not found return length of given arr.


/*

var smallestIndex = function(arr, target) {

    let low  = 0;
    let high = arr.length-1;
    let ans = arr.length;
    while(low <= high) {

        let mid = Math.floor((low+high)/2);
        if(arr[mid] >= target) {
            ans = mid;
            high = mid-1;
        } else {
            low = mid+1;
        }
    }

    return ans;
}

const arr = [1, 2, 3, 3, 5 ,8, 8, 10, 10, 11];
const target = 10;

console.log(smallestIndex(arr, target));

*/