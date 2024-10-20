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


// ex-1

//const arr = [7, 8, 1, 2, 3, 4, 5];
//const target = 1;

// ex-2, ele doesnt exists

// const arr = [7, 8, 1, 2, 3, 4, 5];
// const target = 6;

// ex-3

// const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1];
// const target = 2;

// ex-4

// const arr = [1,1,1,1,3,1];
// const target = 3;

// console.log(search(arr, target));

// 18/2 = 20/ 2

// find the single ele

/*
var singleEle = function(nums) {

    let n = nums.length;
    // handle if nums of len is 1, return arr;
    if(n === 1) return nums;

    // to avoid too many condition for index = 0 & index = n -1, to check mid

    // separately handle if index = 0,
        if(nums[0]!== nums[1]) return nums[0];

    // handle separately for index = n-1,
        if(nums[n-1] !== nums[n-2]) return nums[n-1];

    let l = 1;
    let r = n-2;

    while(l<=r) {
        let mid = Math.floor((l+r)/2);

        // handle mid, may be mid be single ele
        if(nums[mid] !== nums[mid-1] && nums[mid] !== nums[mid+1]) return nums[mid];

        // elimate of left side
        // [1,1,2,2,3,3,4,5,5]
        // from above, its say that, a pair will starts at even position
        // [1,1,2,3,3,4,4]
        // incase to elimate left half, if mid is odd position, check its pair at left
        // if mid is even position, check its pair at right

        if( ((mid % 2 === 1) && (nums[mid] === nums[mid-1])) || ((mid % 2 === 0) && (nums[mid] === nums[mid+1]))) {
            l = mid+1;
        }
        else {
            r = mid-1;
        }

    }

    // if not ele is found
    return -1;
}

// left eli
// const arr = [1,1,2,2,3,3,4,5,5];

const arr = [1,1,2,3,3,5,5];
console.log(singleEle(arr));
*/

// Find Peak element
// arr[i-1] < arr[i] > arr[i+1]
// Case 1: No duplicates

// Approach:

// to avoid adding more conditions at index '0' & 'n-1' we handled initial

/*
var findPeakElement = function(nums) {
    
    let n = nums.length;
     let l = 1;
    let r = n-2;
    if(n === 1) return n;
    if(nums[0] > nums[n+1]) return 0;
    else if(nums[n-1] > nums[n-2]) return n-1;
    while(l<=r) {
        let mid = Math.floor((l+r)/2);
        // check mid may be peak
        if((nums[mid] > nums[mid-1]) && (nums[mid] > nums[mid+1])) return mid;

        // based on values, peak may lie on right side
        else if(nums[mid] > nums[mid-1]) {
            l = mid+1;
        }

        // based on values, peak may lie on left side
        else {
            r = mid-1;
        }
    }
   
};

const nums = [1,2,3,1];
console.log(findPeakElement(nums));

*/

// find the square root of given number

/*
var sqtnumber = function(n) {

    let l = 1;
    let r = n-1;
    let ans;

    while(l<=r) {
        let mid = Math.floor((l+r)/2);
        if(mid*mid <= n) {
            ans = mid;
            l = mid+1;
        } else if(mid * mid > n) {
            r = mid-1;
        }
    }
return ans;
}

const n = 28;
// const n = 36;
console.log(sqtnumber(n));
*/


// find sqroot by log n
    // function getSqr(mid, n) {
    //     let ans = 1;
    //     while(n >= 1) {
    //         if(n%2 === 1) {
    //             ans = ans*mid;
    //             n--;
    //         } else {
    //             ans = mid * mid;
    //             n = n/2;
    //         } 
    //     }
    //     console.log(ans);
    // }

// find the nth square root

/*
function getSqr(num, mid, n) {
    let ans = 0;
    for(let i=0;i<n;i++) {
        ans += mid * mid;
        if(ans > num) return 2;
    }
    console.log("ans",ans);
    if(ans === num) return 0;
    else if(ans < num) return 1;
    
}

var sqtnumber = function(m, n) {

    let l = 1;
    let r = m;
    let ans;

    while(l<=r) {
        let mid = Math.floor((l+r)/2);
        let nthRootValue = getSqr(m, mid, n);
        if( nthRootValue === 0) {
            ans = mid;
        } else if(nthRootValue === 1) {
            l = mid+1;
            ans = mid;
        } else {
            r = mid-1;
        }
    }
console.log(ans);
    return -1;
}
// const nums = 28;
const m = 36;
const n = 3;
sqtnumber(m, n);
*/


// find the min no.of.hours required to eat piles of banana, given max duration is h = 8 hours

// const nums = [3, 6, 7, 11];

// each nums[i] is a pile

// scenario: hours should be roundoff

// if we eat 1 banana per hour
// [3, 6, 7, 11] => 3 hrs + 6 hrs + 7 hrs + 11 hrs = 27 hrs

// if we eat 2 banana per hour
// [3, 6, 7, 11] => 2 hrs + 2 hrs + 3 hrs + 6 hrs = 13 hrs

// if we eat 3 banana per hour
// [3, 6, 7, 11] => 1 hrs + 2 hrs + 3 hrs + 4 hrs = 10 hrs

// so above it takes more hours then given, i.e 8 hrs

// minimum banana per hour is 4, we can go with eatting bananas 5, 6, 7, we need to find out min hrs
// if we eat 4 banana per hour
// [3, 6, 7, 11] => 1 hrs + 2 hrs + 2 hrs + 3 hrs = 8 hrs
// based on given array, max banana we can have is 11 per hour, so loop from min 1 to max 11(given in a array max) hours to calculate duration

/*
var banana = function(nums, hrs) {

    let l = 1;
    let r = Math.max(...nums);
    let ans;
    while(l<=r) {
        let mid = Math.floor((l+r)/2);

        if(durationInHours(nums, mid) <= hrs) {
            ans = mid;
            r = mid-1;
        } else {
            l = mid+1;
        }
    }

    return ans;
    function durationInHours(nums, banana) {
        let totalHours = 0;
        for(let i = 0; i<nums.length; i++) {
            totalHours += Math.ceil(nums[i]/banana);
        }
        return totalHours;
    }
}

let arr = [3, 6, 7, 11];
let hrs = 8;
console.log(banana(arr, hrs));

*/

// find the min required days to make required bouquet given m = 2 & k = 3 with adjacent varient

// N = 8, arr[] = [7, 7, 7, 7, 13, 11, 12, 7], m = 2, k = 3
var bloom = function() {

    let cnt = 0;
    function checkBloom(arr, day, m, k) {
        for(let i = 0; i<arr.length; i++) {
            if(arr[i] >= day) {
                cnt++;
            } else {
                cnt = 0;
            }
        }

     let possible = cnt/k;
     if(possible >= m) return true;
     return false;
    }

}



var shipWithinDays = function(weights, days) {
    
    const n = weights.length;
    const minShipWeight = Math.max(...weights);
    const maxShopWeight = weights.reduce((tot, curr) => tot+curr, 0);

    let currWeight = 0;
    let minDays = 1;
    let ans;
    for(let i = minShipWeight; i <= maxShopWeight; i++) {
        minDays = 1;
        currWeight = 0;
            for(let j = 0; j < n; j++) {
                if(currWeight + weights[j] <= i) {
                    currWeight += weights[j];
                } else {
                    minDays++;
                    currWeight = weights[j];
                }
            }
            if(minDays <= days) {
                ans = i;
                break;
            }
            console.log(` weight - ${i}, days - ${minDays}`);
    }
    console.log(ans);
};

const weights = [3,2,2,4,1,4], days = 3;
shipWithinDays(weights, days);