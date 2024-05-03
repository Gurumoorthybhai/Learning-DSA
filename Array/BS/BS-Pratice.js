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

// return starting/ending index, of target ele, if doesnt exists return {-1,-1}

/*
var searchRange = function(nums, target) {
    
    let n = nums.length
    let ans= n;

    function startPos(nums, target) {
        let l = 0;
    let r = n-1;
            while(l<=r) {
                let mid = Math.floor((l+r)/2);
                if(nums[mid] >= target) {
                    ans = mid;
                    r = mid-1;
                } else {
                    l = mid+1;
                }
            }
            return ans;
    }

    function endPos(nums, target) {
        let l = 0;
        let r = n-1;
        while(l<=r) {
            let mid = Math.floor((l+r)/2);
            if(nums[mid]>target) {
                ans = mid;
                r = mid-1;
            } else {
                l = mid+1;
            }
        }
        // console.log(nums[ans-1]);
        if(nums[ans-1] !== target || ans === n) return -1;
        return ans;
    }


    // lb - lowerbound
    let lb = startPos(nums, target);
    if(nums[lb]!== target || lb == n) {
        return [-1, -1];
    }
     return [lb, endPos(nums, target)-1];
    
};

const nums = [5, 7, 7, 8, 10];
const target = 8;


// empty input
// const nums = [];
// const target = 0;

// no target ele
// const target = 8;   // [-1, -1]

// only 1 target ele
// const target = 10;



console.log(searchRange(nums, target));
*/

/*

var searchInsert = function(nums, target) {

    let n = nums.length;
    let l=0;
    let r = n-1;
    let ans = -1;
// adding target ele after n ele
    if(target > nums[n-1]) return n;
    while(l<=r) {
        let mid = Math.floor((l+r)/2);
        if(nums[mid] >= target) {
            ans = mid;
            r = mid-1;
        } else {
            l = mid+1;
        }
    }
    return ans;
};

const nums = [1,3,5,6];
const target = 7;

*/

// search in a rotated sorted array

// arr = [7, 8, 1, 2, 3, 4, 5]

// 1. after finding mid,
// 2. try to find in sorted side of the array
// 3. try to check if the target exists in given range, if not move to anoter side

/*
var search = function(arr, target) {

    let l = 0;
    let r = arr.length-1;

    while(l<=r) {

        let mid = Math.floor((l+r)/2);

        if(arr[mid] != 1) console.log(l);
        if(arr[l] === arr[mid] && arr[r] == arr[mid]) {
            l++;
            r--;
        }
        if(target === arr[mid]) return mid;

// 2. try to find in sorted side of the array
        if(arr[l] <= arr[mid]) {

// 3. try to check if the target exists in given range, if not move to anoter side
            
            if(arr[l] <= target && arr[r] >= target) {
                r = mid-1;
            } else {
                l = mid+1;
            }
        } else {
            if(arr[mid] <= target && arr[r] >= target) {
                l = mid+1;
            } else {
                r = mid-1;
            }
        }
    }
    return -1;
}

*/


