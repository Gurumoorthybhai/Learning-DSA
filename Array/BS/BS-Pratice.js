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


// 3 may

// min pages as student reads to distribute the all the books/pages for given No.of.students
// given
// min a student should read 1 book
// const books = [ 25, 46, 28, 49, 24]  // ith index represents pages
// const students = 4;

// so to distribute the books, a student should read max pages in the given book, we need to start searching from max of given books = 49
// to distribute the given No.of.books / pages with students, we need to find out the no.of.pages a student can read.
// the worst case scenario is given No.of.students=1, he needs to read all books sum of pages sum(pages);

// so from above, we can say that, we need to run a loop from 49 to 169 (sum of pages) from this min no.of.pages, student can read to distribute amoung
// given students

// return -1// if no.of.student > no.of.books i.e min a student read 1 book

// For a student we can allocate more than 1 books but in contigues manner & its should of minimum

// Possibilities

// Possibilities- 1 - 25+46 = 71 | 28 | 49 | 24 // max a student can read 71

// Possibilities-2 -  25 | 46+28 = 74 | 49 | 24 // max a student can read 74

// Possibilities-3 -  25 | 46 | 28+49 = 77 | 24 // max a student can read 77

// Possibilities-4 -  25 | 46 | 28 | 49+24 // max a student can read 73

// out of above case, we should take min pages a student can read


/*
var allocateBooks = function(books, students) {

    const noOfBooks = books.length;

    if(students > noOfBooks) return -1;

    // to distribute to a student, he should read minimum maxPages
    let maxPages = Math.max(...books);

    // max possibility, a student can read
    let totalPages = books.reduce((tot, curr) => tot+curr, 0);

    let ansstudents = 1;
    let readPage = 0;
    let ans = 0;
    for(let j = maxPages; j<= totalPages; j++) {
        readPage = 0;
        ansstudents = 1;
        if(j === 71) debugger;
        for(let i = 0;i<noOfBooks;i++) {
            readPage += books[i];
            if(readPage <= j) continue;
            else if(readPage > j){
                ansstudents++;
                readPage = books[i];
            }
        }
        if(ansstudents === students) {
            ans = j;
            break;
        }
    }

    console.log(ans);

}


// const books = [ 25, 46, 28, 49, 24]  // ith index represents pages
// const students = 4;
const books = [ 1, 2, 3, 4, 5]  // ith index represents pages
const students = 5;
allocateBooks(books, students);
*/
/*
var splitArray = function(nums, k) {
    
    let minSum = Math.max(...nums);
    let arrSum = nums.reduce((tot, curr) => tot+curr, 0);

    const n = nums.length;
    let split = 1;
    while(minSum <= arrSum) {
        let mid = Math.floor((minSum+arrSum)/2);
        let sum = 0;
        split = 1;
        for(let i=0; i < n; i++) {
            
                sum += nums[i];
                if(sum > mid){
                split++;
                sum = nums[i];
            }
        }
        if(split <= k) {
            arrSum = mid - 1;
        } else {
            minSum = mid+1;
        }
    }
    return minSum;
};

// const nums = [7,2,5,10,8], k = 2;
const nums = [1,2,3,4,5], k = 5;
console.log(splitArray(nums, k));
*/

/*
var medianOfArr = function(arr1, arr2) {

    const n1 = arr1.length;
    const n2 = arr2.length;

    
    // will try to make smallest arr as n1 bcz of time complexity
    if(n1 > n2) return medianOfArr(arr2, arr1);
    
    let l = 0;
    let r = n1;
    
    const n = n1+n2;
    // length of left half, here we need to add + 1, to handle odd (n length)

    let left = Math.floor((n1+n2+1)/2);

    while(l <= r) {
        let mid1 = Math.floor((l+r)/2);
        let mid2 = left-mid1;

        // initialize with lesser value for l1, l2,largest value for r1, r2 
        let l1 = Number.MIN_SAFE_INTEGER;
        let l2 = Number.MIN_SAFE_INTEGER;

        let r1 = Number.MAX_SAFE_INTEGER;
        let r2 = Number.MAX_SAFE_INTEGER;

        if(mid1 < n1) r1 = arr1[mid1];
        if(mid2 < n2) r2 = arr2[mid2];

        if(mid1 - 1 >= 0) l1 = arr1[mid1-1];
        if(mid2 - 1 >= 0) l2 = arr2[mid2-1];

        if(l1 <= r2 && l2 <= r1) {

            if(n%2 === 1) {
                return Math.max(l1, l2);
            } else {
                return (Math.max(l1,l2) + Math.min(r1, r2))/2;
            } 
        }
        // move left
        else if(l1 > r2) r = mid1 - 1;
        // move right
        else r = mid1+1;

    }

}

// [1, 2, 3, 4 ,5, 6, 7 ,9]
// its even = 8/2 => 4 & 5, median  = 4+5 => 9/2 => 4.5

// const arr1 = [1, 3 ,4, 5, 7];
// const arr2 = [2, 6, 9];

// let a = [1, 4, 7, 10, 12];
// let b = [2, 3, 6, 15];

// const a = [1, 3, 4]
// const b = [2, 9]
const a = [1, 3]
const b = [2]
// console.log("The median of two sorted arrays is " + median(a, b).toFixed(1));
// console.log(medianOfArr(arr1, arr2));

*/

// given 2D array, contains only 0s & 1s, find the row with max no.of.ones

/*
// loop approach
// TC - O(n2)

const matrix = [
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];

const row = matrix.length;
let maxCnt = -1;
let index = -1;

for(let r = 0; r < row; r++) {
    cnt = 0;
    for(let c = 0; c < matrix[r].length; c++) {
        if(matrix[r][c] === 1) cnt++;
    }
    if(cnt > maxCnt) {
        [cnt, maxCnt] = [maxCnt, cnt];
        index = r;
    }
}

*/

// we can use lowerBound, upperBound or firstOccurance/lastOccurance methods

// with go with lowerBound O(n + log(n))

/*

var findRow = function(nums, target) {

    const r = nums.length;
    let maxCnt = -1;
    let index;
    for(let i = 0; i < r; i++) {
        let cnt = 0;
        let startingIndex = lowerBound(nums[i], target);
        cnt = nums[i].length - startingIndex;

        if(cnt > maxCnt) {
            maxCnt = cnt;
            index = i;
        }
    }

    function lowerBound(row, target) {

        let l = 0;
        let r = row.length;
        
        while(l<=r) {
        let mid = Math.floor((l+r)/2);

        if(row[mid] >= target) {
            index = mid;
            r = mid-1;
        } else {
            l = mid+1;
        }
        }
        return index;
    }

    return maxCnt;

}

const matrix = [
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];
console.log(" row with max no.of.onces ", findRow(matrix, 1));

*/

// search the target in 2D array, ascending order

// Better Approach
// first check which target value lies in between start/end of row

var searchTarget = function(nums, target) {

    const n = nums.length;
    for(let row = 0; row < n; row++) {
        let col = nums[row].length;
        if(nums[row][0] >= target && nums[row][col-1] <= target) {
            binarySearch(nums[row], target);
        }
    }

    function binarySearch(row, target) {
        let l = 0;
        let r = row.length;

        while(l <= r) {
            let mid = Math.floor((l+r)/2);

            if(row[mid] === target) {
                return mid;
            } else if (row[mid] > target) {
                r = mid -1;
            } else {
                l = mid+1;
            }
        }
    }

}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [10, 12, 13, 14],
];
console.log(searchTarget(matrix, 8));


