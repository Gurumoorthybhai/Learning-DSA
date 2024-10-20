// find the largest element in a array

// let arr = [ 5, 2, 1, 9, 6];
// let arr = [ 1, 2, 4, 7, 7, 5];
 
/*

function LargestElement(arr) {

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
    
        if (arr[i] > largest) largest = arr[i];
    }

    return largest;
}

console.log("Largert Elements is ", LargestElement(arr));


*/

// find 2nd largest number - complexity O(n)
// 2 loops, 1st loop to find largest, 2nd loop to find next largest
// step1 : 1st loop to find largest

/*
function largest(arr) {

    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) largest = arr[i];
    }
    return largest;
}

function sLargest(arr, largestVal) {

    let sLargest = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > sLargest && arr[i]!=largestVal) {
            sLargest = arr[i];
        }
    }
    return sLargest;
}

const largestVal = largest(arr);
// console.log(largest(arr));
console.log(sLargest(arr, largestVal));

*/

// optimized solution

/*
function largest(arr) {

    let largest = arr[0];
    let sLargest = -1;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {
            sLargest = largest;
            largest = arr[i];
        }
        
        else if (arr[i] > sLargest && arr[i]!= largest) {
            sLargest = arr[i];
        }
    }

    return sLargest;
}

console.log(" 2nd Largest Element ", largest(arr));

*/


// find smalled & 2nd smallest value

/*
function smallestElement(arr) {
    let smallest = arr[0];
    let sSmallest = Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (smallest > arr[i]) {
            sSmallest = smallest;
            smallest = arr[i];
        } else if (sSmallest > arr[i] && arr[i]!= smallest) {
            sSmallest = arr[i];
        }
    }
    return sSmallest;
}

console.log(smallestElement(arr));

*/

// remove a duplicate from sorted array

// for insertion into set takes nlogn iteration o(n) => nlogn + o(n)
// space complexity => o(n) bcz arr may contain entirely unique elemnts
// in place arr => means original should contain the changes
/*

let arr= [1,1,2,2,3,3];

const uniqueArr = new Set(arr);

// for (const val of arr) {
// uniqueArr.add(val);
// }
let i = 0;
for (const val of uniqueArr) {
    arr[i] = val;
    i++   
}

console.log(arr);
*/

// check an array is rotated & sorted order
// given A[i] = B[(i+x)%A.length]

// var check = function(nums) {

//     for (let i = 0; i < nums.length-1; i++) {

//         const index = (i+nums[0]) % nums.length;
//         const index_1 = (index+1) % nums.length;
//         // console.log(nums[index], nums[index_1]);

//         if (nums[index] < nums[index_1]) {
//                 continue;
//         } else {
//             return false;
//         }



//     }

//     return true;
// }

// function check(nums) {
//     const n = nums.length;

//     // Handle the case when the array has 0 or 1 element
//     if (n <= 1) {
//       return true;
//     }

//     // Find the point where the order is disrupted
//     let pivot = 0;
//     for (let i = 0; i < n - 1; i++) {
//       if (nums[i] > nums[i + 1]) {
//         pivot = i + 1;
//         break;
//       }
//     }

//     // Check if rotation is needed
//     const rotatedNums = nums.slice(pivot).concat(nums.slice(0, pivot));
//     return nums.join('') === rotatedNums.join('');
//   }

//   // Example usage:
//   const nums = [3,4,5,1,2];
//   const result = check(nums);
//   console.log(result);


// const arr = [2,1,3,4];
// console.log(check(arr));

/*

var check = function(nums) {
    const n = nums.length;
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
            if (nums[i-1] > nums[i]) count++;
    }

    if(nums[n-1]>nums[0]) count++;
    return count<=1;
};

const arr = [3,2,1];
console.log(check(arr));
*/

// rotate a array by k times

// time complexity : O(d) + O(n-d) + O(d)
// space - used temp arr of O(d)

// let arr = [1,2,3,4,5,6,7,8];
// const d = 3;
// const n = arr.length;
// brute force
// step1: create a temp arr & push 0 to d elements
// step2: move elements from n-d to n to 0
// step3: push the temp arr to original arr

/*
function rotateByK(arr, n, d) {

let tempArr = [];
for (let i = 0; i < d; i++) {
    tempArr[i] = arr[i];
}

for (let i = d; i < n; i++) {
    arr[i-d] = arr[i];
}

for (let i = n-d; i < n; i++) {
    arr[i] = tempArr[i-(n-d)];
}

return arr;
}

console.log(rotateByK(arr,n, d));

*/

// Without space complexity

/*
function reverse(arr, start, end) {

    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotateByK(arr, n, k) {
    
    // rotation may go beyond arr length so module
    let rotate = k%n;

    if (rotate > n) {
        return;
    }
    let start = 0;

    reverse(arr, start, rotate-1);

    // console.log(arr);

    reverse(arr, rotate, n-1);

    console.log(arr);
    
    reverse(arr, start, n-1);

    return arr;
}

let arr = [ 1, 2, 3, 4, 5, 6, 7];
let n = arr.length;
let rotate = 1;
console.log(rotateByK(arr, n, rotate));

*/

// let arr = [1,2,3,4,5,6,7];

// let n = arr.length;
// let k = 2;

/*
let temp = [];
for (let i = n-k; i < arr.length; i++) {
    temp[i-(n-k)] = arr[i];
}

for (let i = n-1; i >= k; i--) {
      arr[i] = arr[i-k];
}


for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
}

console.log(arr);
*/

/*
function reverse(arr, start, end) {

    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function shiftRight(arr, k) {


    k = k % nums.length;
    console.log(k)
    function reverseArr(nums, l, r){
        while(l < r) {
            let temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
            r--;
        }
    }
    reverseArr(nums, 0, nums.length - 1);
    reverseArr(nums, 0, k-1);
    reverseArr(nums, k, nums.length-1);  
    
const n = arr.length;
reverse(arr, 0, n-k-1);
// console.log(arr);

reverse(arr, n-k, n-1);

reverse(arr, 0, n-1);
console.log(arr);
// return arr

}
const arr = [1,2,3,4,5,6,7];
const k = 3;
// let n = arr.length;

console.log(shiftRight(arr, k));

*/

// move zero's to end
// complexity O(n) + O(n) = > O(2n)

/*
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [1, 0, 3, 4, 2, 0, 8, 0, 0, 1];
let j = -1 // update J value, if arr[i] is zero

function moveZeroLast(arr) {
for (let i= 0;i < arr.length; i++) {
        if (arr[i] == 0) {
            j = i;
            break;
        }
}

for (let i = j+1; i < arr.length; i++) {
   
    if (arr[i]!=0) {
        swap(arr, i, j);
        j++;
    }
    
}
return arr;
}

console.log(moveZeroLast(arr));
*/

// return a union array of 2 arrays sorted duplicate values

// time complexity => O(n1logn) + O(n2logn) + O(n1+n2)
// space => we used extra space O(n1+n2) + returning array O(n1+n2)
// create a new set, loop both arrays & insert


/*
function unionArray(arr1, arr2) {
    const unionSet = new Set();
    const unionArr = [];

    for (const ele of arr1) {
        unionSet.add(ele);
    }

    for (const ele of arr2) {
        unionSet.add(ele);
    }

// Array.from(unionArray(arr1, arr2))

unionSet.forEach(val => {
    unionArr.push(val); 
});

    return unionArr;
}

const arr1 = [1, 1, 2, 3, 4, 5, 5];
const arr2 = [1, 6, 2, 6, 4, 7, 5];

console.log(unionArray(arr1, arr2));
// console.log(Array.from(unionArray(arr1, arr2)));

*/

// optimized approach

/*

function unionArray(arr1, arr2) {

    const n1 = arr1.length;
    const n2 = arr2.length;
    let unionArr = [];

    let i = 0;
    let j = 0;
    while (i < n1 && j < n2) {
        if (arr1[i] <= arr2[j]) {
            if (unionArr.length == 0 || unionArr[unionArr.length -1] != arr1[i]) {
                unionArr.push(arr1[i]);
            }
            i++;
        }
        else {
            console.log(" Else ");
            
            if (unionArr.length == 0 || unionArr[unionArr.length -1] != arr2[j]) {
                unionArr.push(arr2[j]);
            }
            j++;
        }
    }

    while (i<n1) {
        if (unionArr.length == 0 || unionArr[unionArr.length -1] != arr1[i]) {
            unionArr.push(arr1[i]);
        }
        i++;
    }

    while (j<n2) {
        if (unionArr.length == 0 || unionArr[unionArr.length -1] != arr2[i]) {
            unionArr.push(arr2[j]);
        }
        j++;
    }
}

const arr1 = [1, 2, 3, 4, 5, 5];
const arr2 = [2, 3, 4, 5, 6, 7, 8];

console.log(unionArray(arr1, arr2));



// find the missing number
// brute force approach
// run 2 loops,
// first loop to run from 1 to N
// second loop to find the missing number
// better
// using hashmap
// create a map with initial value to 0, overright with arr values
// so value with 0 will be missing number
// optimised, sum the N natural number, subtract from total, to get missing numbers
// with XOR


/*

Time - O(n2)
space - O(1)

function getMissingNumber(arr) {

for (let i = 1; i <= n; i++) {
    
    let flag = -1;
    for (let j = 0; j < n-1; j++) {
        if (arr[j] === i) {
            flag = 0;
            break;
        }        
    }

    if (flag === -1) {
        return i;
    }
    
}

}

let arr = [4, 2, 3, 5];
let n = 5;

console.log(getMissingNumber(arr));  // 1

*/


/*
function getMissingNumber(arr, n) {

    const initialArray = Array.from({length: n+1}, () => 0);
    // console.log(initialArray);
    
    const mapArr = new Map(initialArray.map((val, i) => [i, val]));
    

    for (let i = 0; i < arr.length; i++) {
        mapArr.set(arr[i], 1);        
    }


    console.log(mapArr);
    // console.log(mapArr.get(2));
    // console.log(mapArr.get(3));
    // console.log(mapArr.get(5));


}
*/

/*
let arr = [4, 2, 3, 5];
let n = 5;

let newArr = new Array(n+1).fill(0);
for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]]++;
}

arr.findIndex((val, i) => {
    console.log(val);
    
    // if(val === 0) console.log(val);
    
})



// getMissingNumber(arr, n);  // 1
*/

// Optimized 
// XOR(^) = 1 ^ 3 = 0, 0 ^ 2 = 2 

/*

let arr = [1, 2, 3, 5];
let n = 5;

let xor1 = 0;
let xor2 = 0;

for (let i = 0; i < arr.length; i++) {
    
    xor1 = xor1 ^ arr[i];
    xor2 = xor2 ^ (i+1);
    
}

xor2 = xor2 ^ n;
console.log(xor1 ^ xor2);
*/

// var missingNumber = function(nums) {

//     // const n = nums.length;

//     // for(let i=0;i<=n;i++) {
//     //     let flag = -1;
//     //     for(let j = 0;j<n;j++) {
//     //         if(nums[j] === i) {
//     //             flag = 1;
//     //         }
//     //     }

//     //     if(flag === -1)
//     //     return i;
//     // }

//     // console.log((nums.length * (nums.length + 1)/2)-nums.reduce((a, b) => a + b, 0));
// };


// var missingNumber = function(nums) {
//     nums.sort((a,b) => a-b);
//     if (nums[0] !== 0)
//        {
//            return 0;
//        }
//     for(let i = 0 ; i < nums.length ; i++)
//        {
//            if((nums[i]+1) !== nums[i+1] )
//              {
//                  return (nums[i]+1)
//              }
//        }  
//       return (nums[nums.length-1]+1);
//   };
// console.log(missingNumber([2, 0, 1]));


/*
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] === 1) {
            cnt++;
            max = Math.max(cnt,max);
        } else {
            cnt = 0;
        }
        
    }

    return max;
}
let nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));


*/

/*
var singleNumber = function(nums) {

    const countMap = new Map();

    for (let i = 0; i < nums.length; i++) {

        if (!countMap.get(nums[i])) {
            countMap.set(nums[i], 1);
        } else {
            countMap.set(nums[i], countMap.get(nums[i])+1);
        }
    }
    for (const [key, val] of countMap) {
        if (val === 1) {
            return key;
        }
    }
    
};

let nums = [1,1,0,1,1,1];
console.log(singleNumber(nums));
*/

// longestSubArray - Brute force
// time - O(n2)
// space - O(1)
/*
var longestSubArray = function(arr) {

    const n = arr.length;
    let max = 0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
           
            sum += arr[j];

            if (sum === target) {
                
                const len = j-i+1;
                if (len > max) {
                    max = len;
                }
            }
        }
        
    }
    return max;
}
const arr = [1, 2, 3, -1, 0, 1, 1 ,1, 1, 4, 3];
const target = 3;
console.log(longestSubArray(arr, target));
*/

// Better - negative, zero & positive
// time - O(n log n) ordered map has no collision
// space - O(n) we are using hashmap to store its prefix
// we can use O(1) - un-ordered map, in case of collusion it can goes upto O(n2)

/*
var longestSubArray = function(arr, target) {
    let trackMap = new Map();

    let n = arr.length;
    let maxLength = 0;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        
        sum += arr[i];

        if (sum === target) {
            const len = i+1;
            if (len > maxLength) {
                maxLength = len;
            }
        }

        const diff = sum - target;

        if (trackMap.has(diff)) {
            
            let len = i - trackMap.get(diff);
            if (len > maxLength) {
                maxLength = len;
            }
        }

        if (!trackMap.get(sum)) {
            trackMap.set(sum, i);
        }
    }
    return maxLength;
}

const arr = [1, 2, 3, -1, 0, 1, 1 ,1, 1, 4, 3];
// const arr = [1, 2, 3, 1 ,1, 1, 4, 3];
const target = 3;
console.log(longestSubArray(arr, target));

*/

// Optimal only positive number

/*
var longestSubArray = function (arr, target) {
    
    let sum = arr[0];
    let maxLen = 0;
    const n = arr.length;

    let left = 0;
    let right = 0

    while (right < n) {
        
        while (sum > target && left <= right ) {
            sum -= arr[left];
            left++;
        }

        if (sum === target) {
            maxLen = Math.max(maxLen, right-left+1);
        }

        right++;
        sum += arr[right];
    }
    return maxLen;
}


const arr = [1, 2, 3, -1, 0, 1, 1 ,1, 1, 4, 3];
// const arr = [1, 2, 3, 1 ,1, 1, 4, 3];
const target = 3;

console.log(longestSubArray(arr, target));
*/

// 2sum
// 1. check if target exists, by sum of 2 nums (not same indices) return true, if exists
// 2. return index of elements

// const N = 5;

// var 1

/*
var sums = function(nums, target) {

    const eleMap = new Map();
    for (let i =0;i<nums.length;i++) {
        eleMap.set(nums[i], i);
    }
    
    for (let j=0; j<nums.length; j++) {
         const rem = target - nums[j];
         if (eleMap.get(rem) && eleMap.get(rem)!=j) {
         return [j, eleMap.get(rem)];
         }
    }

    return [-1, -1];
}

*/

// const arr = [2,6,5,10,11];
// const target = 14;


// var 2

/*
var sums = function(nums, target) {

    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        console.log(obj ,obj[target - nums[i]]);
        
        if (obj[target - nums[i]]) {
            return [i, obj[target - nums[i]]]
        }
        else {
            obj[nums[i]] = i;
        }
    }


}

// const arr = [1,3,4,2];
// const target = 6;

const arr = [2,7,11,15];
const target = 9;


console.log(sums(arr, target));

*/


// sort 0's, 1's & 2's

// Brute force approch - use any sorting algorithm
// Merge Sort 
// Time   - O(nlogn)
// Space - O(n) - temp array

// Better
// use 3 diff var to cnt the 0's, 1's & 2's
// update in original array with counts

/*
let low = 0;
let mid = 0;

function sortZeros(arr) {
    
for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] === 0) {
        low++
    } else if (arr[i] === 1) {
        mid++;
    }
}

for (let j = 0; j < low; j++) {
    arr[j] = 0;
}

for (let j = low; j < low+mid; j++) {
    arr[j] = 1;
}

for (let j = low+mid; j < arr.length; j++) {
    arr[j] = 2;
}

return arr;
}

let arr = [0, 2, 1, 2, 0, 1];
console.log(sortZeros(arr));
*/

// Optimized - Dutch Flag

/*
var sortColors = function (nums) {

    let low = 0;
    let mid = 0;
    let high = nums.length-1;

   while (mid <= high) {
     if (nums[mid] === 0) {
       

        // let temp = nums[low];
        // nums[low] = nums[mid];
        // nums[mid] = temp;

        [nums[low], nums[mid]] = [nums[mid], nums[low]]
        low++;
        mid++;
     } else if (nums[mid] === 1) {
        mid++;
     } else {

        // let temp = nums[high];
        // nums[high] = nums[mid];
        // nums[mid] = temp;
        [nums[mid], nums[high]] = [nums[high], nums[mid]]
        high--;
     }
   }

   return nums;
}

let arr = [0, 2, 1, 2, 0, 1];
console.log(sortColors(arr));

*/

// own logic on sort 2s, 1s, 0s

/*
var sortColors = function(nums) {

    let low = nums.length -1;
    let mid = 0;
    let high = 0;

    while ( mid <= low) {
        
        if (nums[mid] === 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            mid++;
            low--;
        } else if (nums[mid] === 2) {
            [nums[high], nums[mid]] = [nums[mid], nums[high]];
            high++;
        } else {
            mid++;
        }
    }

    return nums;
}

let arr = [0, 2, 1, 2, 0, 1];
console.log(sortColors(arr));

*/

// Majority of elements occurs more than N/2 times

// Brute Force
// run 2 loops, count
// time = O(n2)

// let arr = [3,2,3,3,1,3, 1];



// Time - O(nlogn)
/*
var Majority = function(nums) {

    let cnt = 0;
    let neededN = Math.floor(nums.length/2);
    
    const countMap = new Map();
    for (let i = 0; i < nums.length; i++) {
    
            cnt = (countMap.get(nums[i]) || 0)+1;
            if (cnt > neededN) {
                return nums[i];
            }
            countMap.set(nums[i], cnt);
        }
    return -1;
}
let arr = [3,2,3,1,3,5,4];

console.log(Majority(arr));

*/

// Optimized - Moore's Voting Algorithm
// Time - O(n)

/*
var Majority = function(nums) {
let cnt = 0;
let n = nums.length;
let ele;
for (let i = 0; i < n; i++) {

    if(cnt === 0){
        ele = nums[i];
        cnt=1;
    } else if (ele === nums[i]) {
        cnt++;
    } else {
        cnt--;
    }
}

// confirm the ele is majority

console.log(ele);

let reCnt = 0;
for (let i = 0; i < n; i++) {
   if (ele === nums[i]) {
    reCnt++;
   }
}
if (reCnt > Math.floor(n)/2) {
    return ele
}

return -1;
}

let arr = [3,2,3,1,3,5,4];
console.log(Majority(arr));
*/

// maximum of subarray sum
/*
var maxSubArraySum = function (nums) {
    
    let max = nums[0];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        
        sum = 0;
        for (let j = i+1; j < n; j++) {
          
            sum += nums[j];
            if (sum > max) {
                max = sum;
            }
        }
    }

    return max;
}

const nums = [-2, -3, 4, -1, -2, 1, 5, 3];
console.log(maxSubArraySum(nums));
*/

/*
var maxSubArraySum = function (nums) {
    
    let max = nums[0];
    let n = nums.length;
    let sum = 0;
    let start = -1;
    let end = -1;
    for (let i = 0; i < n; i++) {

        if (sum === 0) {
            start = i;
        }
        sum += nums[i];
        if (sum > max) {
            max = sum;
            end = i;
        }

        if (sum < 0) {
            sum = 0;
        }
    }
// print the subarray
// 
//     for (let j = start; j <= end; j++){
//        console.log(nums[j]);
//     }

    return max;
}

const nums = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubArraySum(nums));

*/

// profit & sell

/*
var maxProfit = function(nums) {
    let min = nums[0];
    let profit = 0;
    for (let i = 1; i < nums.length; i++) {
        
        const cost = nums[i]-min;
        profit = Math.max(cost, profit);

        min = Math.min(min, nums[i]);
    }
    return profit;
}

const price = [7,1,5,3,6,4];
console.log(maxProfit(price));
*/

/*
var reArrange = function(nums) {

    const n = nums.length;
    let posIndex = 0;
    let negIndex = 1;
    let ans = [];
    for (let i = 0; i < n; i++) {
        
        if (nums[i] > 0) {
            ans[posIndex] = nums[i];
            posIndex += 2;
        } else if (nums[i] < 0) {
            ans[negIndex] = nums[i];
            negIndex += 2;
        }
        
    }

    return ans;
}

const nums = [1, 2, -3, -4, 5, 6];
console.log(reArrange(nums));

*/

// next permutations
// given nums should be in increasing order

// let nums = [2, 1, 5, 4, 2, 0, 0];

// let index = 1;
// let n = nums.length;
// let nums1 = nums.slice(index+1,n).sort((a, b) => a-b);
// nums.splice(index+1, nums1.length, ...nums1);
// console.log(nums);

// nums.splice(index+1,n).sort((a, b) => a-b);


/*
var nextPermutation = function(nums) {

    let index = -1;
    let n = nums.length;


    // find the breaking index
    for (let i = n-2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            index = i;
            break;
        }
    }

    // edge case, where we have last value of permutation
    if (index === -1) {
        reverse(nums, 0, n-1);
    }


    // find the value of closest value greater than index

    for (let i = n-1; i > index ; i--) {
        if (nums[i] > nums[index]) {
            swap(nums, i, index);
        }
    }


    // sort remaining nums
    nums.splice(index+1,n).sort((a, b) => a-b);


    function reverse(nums, start, end) {
        while (start <= end) {
            const temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    function swap(nums, i, index) {
        const temp = nums[i];
        nums[index] = temp;
        nums[i] = temp;
    }
}
*/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/

// [1,2,3]

/*
var nextPermutation = function (nums) {

    const n = nums.length;
    let index = -1;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        nums.reverse();
        return;
    }

    for (let i = n - 1; i > index; i--) {
        if (nums[index] < nums[i]) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            break;
        }
    }

    mSort(nums, index + 1, nums.length - 1);
    function mSort(nums, low, high) {

        if (high <= low) return;

        let mid = Math.floor((low + high) / 2);
        mSort(nums, low, mid);
        mSort(nums, mid + 1, high);
        merge(nums, low, mid, high);
    }

    function merge(nums, low, mid, high) {

        let left = low;
        let right = mid + 1;
        const temp = [];

        while (left <= mid && right <= high) {

            if (nums[left] <= nums[right]) {
                temp.push(nums[left]);
                left++;
            } else {
                temp.push(nums[right]);
                right++;
            }
        }
        while (left <= mid) {
            temp.push(nums[left]);
            left++;
        }

        while (right <= high) {
            temp.push(nums[right]);
            right++;
        }

        for (let i = low; i <= high; i++)
            nums[i] = temp[i - low]
    }
};

let nums = [1,2,5, 1, 3, 0, 0];
nextPermutation(nums);

console.log(nums);
*/

/*
let result = [];
function permutation(ans, freq, nums) {
    if (ans.length === nums.length) {
        result.push([...ans]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        
        if (!freq[nums[i]]) {
            ans.push(nums[i]);
            freq[nums[i]] = 1;
            permutation(ans, freq, nums);
            freq[nums[i]] = 0;
            ans.pop();
        }
        
    }

}
const ans = [];
let freq = [];
// const nums = [1, 2, 3];
const nums = [1,2,5, 1, 3, 0, 0];
permutation(ans, freq, nums);
console.log(result);
*/


/*
function permutation(nums) {

    let result = [];
    function recur(current, remaining) {

        if (remaining.length === 0) {
            result.push(current);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            
            const next = current.slice();
            next.push(remaining[i]);
            recur(next, remaining.slice(0, i).concat(remaining.slice(i+1)));
            
        }
    }
recur([], nums);
return result;
}

const ans = permutation([1,2,3]);
ans.forEach(v => console.log(v))
*/

/*
function permute(arr) {
    const result = [];

    // Recursive function to generate permutations
    function generatePermutations(current, remaining) {
        // Base case: If there are no remaining elements, push the current permutation to the result
        if (remaining.length === 0) {
            result.push(current);
            return;
        }

        console.log('rem - ', remaining);
        
        // Iterate through each element in the remaining array
        for (let i = 0; i < remaining.length; i++) {
            // Copy the current array to avoid modifying it
            const next = current.slice();
            next.push(remaining[i]);

            // Generate permutations recursively with the current element removed from the remaining array
            console.log('next - ', next, 'remaining - ', remaining.slice(0, i) + ' i+1 '+remaining.slice(i + 1));
            
            generatePermutations(next, remaining.slice(0, i).concat(remaining.slice(i + 1)));
        }
    }

    // Start the recursion with an empty current array and the full array as remaining elements
    generatePermutations([], arr);
    return result;
}

// Example usage:
const array = [1, 2, 3];
const permutations = permute(array);
permutations.forEach(permutation => console.log(permutation));
*/


// Permutation, without extra spaces

/*

const result = [];
function permutations(index, nums) {
    

    if (nums.length === index) {
        result.push([...nums]);
        return;
    }

    for (let i = index; i < nums.length; i++) {
       
        swap(i, index, nums);
        permutations(index+1, nums);
        swap(i, index, nums);
    }

    function swap(i, j, nums) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}

permutations(0, [1,2,3]);
*/

// find leader element
// if element is greater than its right side elements, then it is considered as the leader


//ex: [4, 5, 7, 6, 9, 0] leader - 9, 0, for '0' its right side we dont have any no, so its included

// brute force
// use 2 loops, to check
// time - O(n2)

/*
var leaderElement = function (nums) {

    const n = nums.length;
    const leaders = [];
    for (let i = 0; i < n; i++) {
        let leader = true;
        for (let j = i + 1; j < n; j++) {
            if (nums[i] < nums[j]) {
                leader = false;
                break;
            }

        }

        if (leader) {
            leaders.push(nums[i]);
        }

    }
return leaders;
}

const nums = [3, 10, 9, 6, 4, 1, 0];
console.log(leaderElement(nums));

*/

// looping from last

/*
var leaderElement = function (nums) {

    const n = nums.length;

    // always last element is leader
    const leaders = [nums[n-1]];

    let max = nums[n-1];
    for (let i = n-2; i >= 0; i--) {
        
        if (nums[i] > max) {
            leaders.push(nums[i]);
            max = nums[i];
        }
    }

    return leaders;
}

const nums = [20, 10, 11, 6, 10, 4, 1, 0];
console.log(leaderElement(nums));
*/

// find longest consecutive sequence

// 100, 2, 101, 3, 102
// consecutive elements = 100, 101, 102,
// consecutive elements = 2,3


// 1st loop => go through all elements
// linear search


/*

var longestConsecutiveSequence = function (nums) {

    const n = nums.length;
    if (n === 0 || n === 1) return n;

    let longestlength = 1;
    let cnt = 1;

    for (let i = 0; i < n; i++) {

        let x = nums[i];
        cnt = 1;
        while (linearsearch(nums, x + 1) === true) {
            x = x + 1;
            cnt++;
        }

        if (cnt > longestlength) {
            longestlength = cnt;
        }

    }

    function linearsearch(nums, x) {

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === x) {
                return true
            }

        }
    }

    return longestlength;

}

*/


// Better - check with prev number

/*
var longestConsecutiveSequence = function(nums) {
    const n = nums.length;

    if (n === 0 || n === 1) {
        return n;
    }

    nums.sort((a,b) => a-b);
    
    let lastSmaller = -Infinity;
    let cnt = 0;
    let longestLength = 1;

    for (let i = 0; i < n; i++) {
        
        if (nums[i] - 1 === lastSmaller) {
            // arr[i] is the next element of the
            // current sequence.
            cnt += 1;
            lastSmaller = nums[i];
        } else if (nums[i] !== lastSmaller) {
            cnt = 1;
            lastSmaller = nums[i];
        }

        longestLength = Math.max(cnt, longestLength);
    }

    return longestLength;

}

*/

// optimised using set data structor
// here call goes inside, only if element is starting

/*
var longestConsecutiveSequence = function (nums) {

    const n = nums.length;

    if (n === 0 || n === 1) {
        return n;
    }

    let cnt = 1;
    let longestLength = 1;
    const uniqueNumbers = new Set(nums);

    for (let i of uniqueNumbers) {
        // here call goes inside, only if element is starting
        if (!uniqueNumbers.has(i - 1)) {
            let x = i;
            while (uniqueNumbers.has(x + 1)) {
                cnt++;
                x = x + 1;
            }

            longestLength = Math.max(longestLength, cnt);
        }
    }

return longestLength
}

const nums = [100, 200, 1, 3, 2, 4];
// const nums = [1, 2, 0, 1];
console.log(longestConsecutiveSequence(nums));
*/

// update row & column of matrix, if 0 on its axis


/*
var setZeroMatrix = function(nums) {

    const n = nums.length;

    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < nums[i].length; j++) {
            if (nums[i][j] === 0) {
                setZeroRow(i);
                setZeroColumn(j);
            }
        }
        
    }

    // change -1 to 0

    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < nums[i].length; j++) {
            if (nums[i][j] === -1) {
                nums[i][j] = 0;
            }
        }
        
    }


    function setZeroRow(i) {
        
        for (let j = 0; j < nums[i].length; j++) {
            if (nums[i][j] !== 0) {
                nums[i][j] = -1;
            }
        }
    }

    function setZeroColumn(j) {

        for (let i = 0; i < nums.length; i++) {
            if (nums[i][j] !== 0) {
            nums[i][j] = -1;
            }
        }
    }

    return nums;
}

*/

// Better, will create a row & column, will use its row position, column position to make those rows & columns zero

/*
var setZeroMatrix = function(nums) {

    const n = nums.length;
    const m = nums[0].length;
    let rows = [];
    let columns = [];
    
    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < m; j++) {
            if (nums[i][j] === 0) {
                rows[i] = 1;
                columns[j] = 1;
            }       
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (rows[i] || columns[j]) {
                nums[i][j] = 0;
            }
        }
    }

return nums;
}

*/

/*
var setZeroMatrix = function(nums) {

    const n = nums.length;
    const m = nums[0].length;
    let col1 = 1;

    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < m; j++) {
            
            if (nums[i][j] === 0) {
                
                nums[i][0] = 0;

                if (j != 0) {
                    nums[0][j] = 0
                } else {
                    col1 = 0
                } 
            }
            
        }
    }

    for (let i = 1; i < n; i++) {
        
        for (let j = 1; j < m; j++) {

            if (nums[i][j] !== 0) {
                if (nums[i][0] === 0 || nums[0][j] === 0) {
                    nums[i][j]=0;
                }
            }

        }
    }

    if (nums[0][0] === 0 ) {
    for (let j = 0; j < m; j++) {
        {
            nums[0][j] = 0;
        }
    }
}
if (col1 === 0) {
    for (let i = 0; i < n; i++) {
            nums[i][0] =0;
        }   
    }    
    return nums;
}

const nums = [
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 0, 1],
        [0, 0, 1, 1]
    ];
    
const ans = setZeroMatrix(nums);

console.log("The Final matrix is:");
for (const row of ans) {
    console.log(row.join(" "));
}    


// const nums = [
//     [1, 1, 1, 1],
//     [1, 0, 1, 1],
//     [1, 1, 0, 1],
//     [0, 0, 1, 1]
// ];

// console.log(setZeroMatrix(nums));


*/

/*
function setZeroes(matrix) {
    let rows = new Set();
    let cols = new Set();
    
    for(let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < matrix[0].length; c++) {
            if(matrix[r][c] === 0) {
                rows.add(r);
                cols.add(c);
            }
        }
    }

    for(let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < matrix[0].length; c++) {
            if(rows.has(r) ||  cols.has(c)) {
                matrix[r][c] = 0
            }
        }
    }

    return matrix;
};
  const nums = [
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 0, 1],
        [0, 0, 1, 1]
    ];

  console.log(setZeroes(nums));
  */

/*
// Brute force - extra space

var rotateMatrix90 = function(nums) {

  const n = nums.length;
  let rotatedMatrix = [];

  for (let j = 0; j < n; j++) {
      let newRow =[];
      for (let i = n-1; i>=0; i--) {
         newRow.push(nums[i][j]);
      }
      rotatedMatrix.push(newRow);
  }

  return rotatedMatrix;
}

*/

/*

var rotateMatrix90 = function (nums) {

    const n = nums.length;
    for (let i = 0; i < n; i++) {
       for (let j = 0; j < i; j++) {
            [nums[i][j], nums[j][i]] = [nums[j][i], nums[i][j]]
       }
    }

    for (let i = 0; i < n; i++) {
       nums[i].reverse();
    }
    return nums;
}


const nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
rotateMatrix90(nums);
for (const row of nums) {
    console.log(row.join(' '));

}
*/

/*
var majorityElement = function(nums) {
    const n = nums.length;

    const min = Math.floor(n/3)+1;
    let ele1;
    let ele2;
    let cnt1 = 0;
    let cnt2 = 0;
    let elements = [];

    for (let i = 0; i < n; i++) {
       
        if (cnt1 === 0 && nums[i]!=ele2) {
            ele1 = nums[i];
            cnt1++;
        } else if (cnt2 === 0 && nums[i]!=ele1) {
            ele2 = nums[i];
            cnt2++;
        } else if (nums[i] === ele1) {
            cnt1++;
        } else if (nums[i] === ele2) {
            cnt2++;
        } else {
            cnt1--;
            cnt2--;
        }
    }


    // confirm ele1 & ele2 are the elements have high frequecy of occurance

    eleCnt1 = 0;
    eleCnt2 = 0;

    for (let i = 0; i < n; i++) {
        
        if (nums[i] === ele1) {
            eleCnt1++;
        } else if (nums[i] === ele2) {
            eleCnt2++;
        }
    }

    if (eleCnt1 >= min) {
        elements.push(ele1);
    }
    if (eleCnt2 >= min) {
        elements.push(ele2);
    }

    return elements;
}
// const nums = [1,2,2,3,2];
// const nums = [11,33,33,12,33,11];
const nums = [1, 2];
console.log(majorityElement(nums));
*/

// 3 sum
// Brute force - n3

// var threeSum = function(nums) {
//     const n = nums.length;
//     const uniqueArr = new Set();
//     let res = [];
//     for (let i = 0; i < n; i++) {
//         for (let j = i+1; j < n; j++) {
//             for (let k = j+1; k < n; k++) {
//                 if (nums[i]+nums[j]+nums[k] === 0) {
//                     let temp = [nums[i], nums[j], nums[k]];
//                     temp.sort();
//                     // array are object reference
//                     uniqueArr.add(JSON.stringify(temp));
//                 }
            
//             }
            
//         }
//     }

//     console.log(uniqueArr);
    
//     ans = Array.from(uniqueArr, JSON.parse);
//     // ans = Array.from(uniqueArr).map(JSON.parse);
//     console.log(ans);
    
// }

// Better, instead of k loop, use hashmap
/*

var threeSum = function(nums) {

    const n = nums.length;
    const uniqueSet = new Set();

    for (let i = 0; i < n; i++) {
       const setElement = new Set();
        for (let j = i+1; j < n; j++) {
            let thirdEle = -(nums[i]+nums[j]);
            if (setElement.has(thirdEle)) {
                let temp = [nums[i], nums[j], thirdEle];
                temp.sort();
                uniqueSet.add(JSON.stringify(temp));
            }
            setElement.add(nums[j]);
        }
        
    }

    result = Array.from(uniqueSet, JSON.parse);
    console.log(result);
    
}

*/


/*
var threeSum = function(nums) {

    const n = nums.length;
    let result = [];
    nums.sort((a, b) => a-b);
    for (let i = 0; i < n; i++) {
       
        if (i > 0 && nums[i] === nums[i-1]) continue;

        let j = i+1;
        let k = n-1;

        while (j<k) {
            let sum = nums[i]+nums[j]+nums[k];

            if (sum < 0) {
                j++;
            }
            else if (sum > 0) {
                k--;
            } 
            else {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j-1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k+1]) {
                    k--;
                }
            }
        }
        
    }

console.log(result);

}
// const nums = [-1,0,1,2,-1,-4]; [-4, -1, -1, 0, 1, 2]
// const nums = [-2,0,1,1,2]
const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
// [[-2,0,2],[-2,1,1]]
console.log(threeSum(nums));
*/

// 4 sum
// Brute Force - O(n4)
// Better - O(n3)+ O(logn)
// space - O(no.of.unique sets)+ O(unique numbers) + O(temp - constants)

/*
var fourSum = function(nums, target) {
    const n = nums.length;
    let uniqueArr = new Set();

for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
        const setElement = new Set();
        for (let k = j+1; k < n; k++) {
            const sum = nums[i]+nums[j]+nums[k];
            const fourthEle = target-sum;
            if (setElement.has(fourthEle)) {
                const temp = [nums[i],nums[j],nums[k],fourthEle];
                temp.sort();
                uniqueArr.add(JSON.stringify(temp));
            }
            setElement.add(nums[k]);
        }
    }
}

const result = Array.from(uniqueArr, JSON.parse);
console.log(result);

} */


// optimised
// will get ride of Hashset 


// var fourSum = function(nums, target) {
//     const n = nums.length;
//     nums.sort((a,b) => a - b);
//     let uniqueArr = new Set();
//     for (let i = 0; i < n; i++) {
//         if (i>0 && nums[i] === nums[i-1]) continue;
//         for (let j = i+1; j < n; j++) {
//             let k = j+1;
//             let l = n-1;
//             while (k<l) {
//                 let sum = nums[i]+nums[j]+nums[k]+nums[l];
//                 if (sum < 0) {
//                     k++;
//                 } else if (sum > 0) {
//                     l--;
//                 } else {
//                     let temp = [nums[i],nums[j],nums[k],nums[l]];
//                     uniqueArr.add(JSON.stringify(temp));
//                     k++;
//                     l--;
//                     while (k<l && nums[k] === nums[k-1]) {
//                         k++;
//                     }
//                     while (k<l && nums[l] === nums[l+1]) {
//                         l++;
//                     }
//                 }
//             }

//         }

//     }
//     result = Array.from(uniqueArr, JSON.parse);
//     console.log(result);
    
// }
// // [-2, -1, 0, 0, 1, 2];
// const nums = [1, 0, -1, -2, 2, 0]; 
// const target  = 0;
// // [0, 0, -2, 2]
// // [1, -1, -2, 2]
// fourSum(nums, 0);

// Largest subarray length with sum = 0

/*
var LargestSubarrayWithZero = function(nums) {

    const n = nums.length;
    let sum = 0;
    let maxLen = 0;
    let presumMap = new Map();
    for (let i = 0; i < n; i++) {
       
        sum += nums[i];
        if (sum === 0) {
            maxLen = i+1;
        }
        if (presumMap.has(sum)) {
            let presumIndex = presumMap.get(sum);
            maxLen = Math.max(maxLen, i-presumIndex);
        } else {
            presumMap.set(sum, i);
        }
    }

    console.log(maxLen);


} 

const nums= [9, -3, 3, -1, 6, -5];
LargestSubarrayWithZero(nums);
*/


// print the nCr value

// Pascal Triangle

/*
        1
      1   1
    1   2   1
  1   3   3   1
 1  4   6   4   1
1  5  10   10  5  1

*/

// varient-1:
// print the value for given n = 5, r = 3

/*
var pascalTriangle = function(n, r) {
    let res = 1;

    for (let i = 0; i < r; i++) {
              res = res * (n-i);
              res = res/(i+1);
              console.log(res);
              
    }

    return res;
}
// const row = 6;
// const col = 3;
// console.log(pascalTriangle(row-1, col-1));


// varient-2

// print the entire row

var entireRow = function (n, r) {
    let row = [];
    for (let i = 0; i < r; i++) {
        row.push(pascalTriangle(n, i));
    }
    return row;
}

const row = 6;
const col = 6;
console.log(entireRow(row-1, col-1));
*/


// count no of subarrays with target K, using XOR

// Better - using 2 loops & check with target

/*
var subArrayWithXOR = function(nums) {

    const n = nums.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        let xorr = 0;
       for (let j = i; j < n; j++) {
        
        // console.log(`${xorr} ^ ${nums[j]} `);
        xorr = xorr ^ nums[j];
        // console.log(" xorr ", xorr);

        if (xorr === target) {
            cnt ++;
            for (let k = i; k <= j ; k++) {
                console.log(nums[k]);
            }

            console.log("================");
            
        }
        
       }
        
    }
    console.log(`Total Cnt is ${cnt}`);
}

*/

/*
var subArrayWithXOR = function(nums) {
    const n = nums.length;
    let cnt = 0;
    let xr = 0;
    let mapXOR = new Map();
    mapXOR.set(0, 1);

    for (let i = 0; i < n; i++) {
        xr = xr ^ nums[i];
        cnt += (mapXOR.get(xr) || 0);
        mapXOR.set(xr, (mapXOR.get(xr) || 0)+1);
    }
    console.log(cnt);
    
    return cnt;
}

const nums = [4, 2, 2, 6, 4];
const target = 6
subArrayWithXOR(nums, target);
*/


// Merge Overlapping interval

/*
var MergeOverlappingInterval = function(nums) {
    const n = nums.length;
    nums.sort((a, b) => a[0]-b[0]);
    const ans = [];
    for (let i = 0; i < n; i++) {
        let start = nums[i][0];
        let end = nums[i][1];

        if ( ans.length && ans[ans.length - 1][1] >= end ) {
            continue;
        }

        for (let j = i+1; j < n; j++) {
            if (nums[j][0] <= end) {
                end = Math.max(end, nums[j][1]);
            } else {
                break;
            }
        }
        ans.push([start, end]);
    }
    console.log(ans);
    
}
*/


// Optimised

/*
var MergeOverlappingInterval = function(nums) {

    const n = nums.length;
    nums.sort((a, b) => a[0]-b[0]);
    const ans = [nums[0]];
    for (let i = 1; i < n; i++) {
        const last = ans[ans.length-1];
        const cur = nums[i];

        if (cur[0] <= last[1]) {
            last[1] = Math.max(last[1], cur[1]);
        } else {
            ans.push(cur);
        }
    }
    console.log(ans);
    
}

const nums = [[1,3], [2, 6], [8, 10], [15, 18]]
MergeOverlappingInterval(nums);
*/

// Merge 2 sorted Array

/*
var Merge = function(arr1, arr2, n, m) {

    const arr3 = [];
    let left = 0;
    let right = 0;

    while (left < n && right < m) {
        
        if (arr1[left] <= arr2[right]) {
            arr3.push(arr1[left]);
            left++;

        } else {
            arr3.push(arr2[right]);
            right++;
        }
    }

    while (left < n) {
        arr3.push(arr1[left]);
        left++;
    }

    while (right < m) {
        arr3.push(arr2[right]);
        right++;
    }

    for (let i = 0; i < n + m; i++) {
        if (i < n) arr1[i] = arr3[i];
        else arr2[i - n] = arr3[i];
    }
} 

*/

/*
var Merge = function(arr1, arr2, n, m) {

    const arr3 = [];
    let left = n-1;
    let right = 0;

    while (left >= 0 && right < m) {
        
        if (arr1[left] > arr2[right]) {
            [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
            left--;
            right++;
        } else {
            break;
        }
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    // console.log(` arr1 - ${arr1}`);
    // console.log(` arr1 - ${arr2}`);
    
}


*/

/*
var Merge = function(arr1, arr2, n, m) {

    const len = n+m;
    // len%2 => if len is odd, get ceil value
    let gap = Math.ceil(len/2); 

    while (gap > 0) {
        
        let left = 0;
        let right = left + gap;
        while(right < len) {
        // based on gap value, left & right values may vary, so we have following conditions
        if (left < n && right >= n) {
            swapIfGreater(arr1, arr2, left, right-n)
            
        }
        // so, left pointer is on 2nd arr2 (left > n)
        else if (left >= n) {
            swapIfGreater(arr2, arr2, left, right-n)

        }
        
        else {
            swapIfGreater(arr1, arr1, left, right)
        }

        // common for all conditions

        left++;
        right++
    }

    // if gap is 1, for the 2nd time, break
    if (gap === 1) {
        break;
    }
    gap = Math.ceil(gap/2);
    }

    function swapIfGreater(arr1, arr2, ind1, ind2) {
        if (arr1[ind1] > arr2[ind2]) {
            [arr1[ind1],arr2[ind2]] = [arr2[ind2],arr1[ind1]]
        }
    }
}

// let arr1 = [1, 4, 8, 10];
// let arr2 = [2, 3, 9];
let arr1 = [1,2,3,0,0,0];
let arr2 = [2,5,6];
let n = 3;
let m = 3;

Merge(arr1, arr2, n, m);
console.log(arr1);
console.log(arr2);
*/

// find the repeated & missing number
// brute force
// use 2 loop, cnt value to check repeated or missing
// TC - O(n2)

/*
var repeatedMissing = function (nums, n) {
    
    const len = nums.length;
    let missing = -1;
    let repeated = -1;
    for (let i = 1; i <= n; i++) {
        let cnt = 0;
        for (let j = 0; j < len; j++) {
            if (nums[j] === i) {
                cnt++;
            }
        }
        if (cnt === 0) {
            missing = i;
        } else if (cnt === 2) {
            repeated = i;
        }
    }

    console.log({missing, repeated});
}
*/

/*
var repeatedMissing = function (nums, n) {
    
    const len = nums.length;
    const Sn = n*(n+1)/2;
    const S2n = (n*(n+1)*(2*n+1))/6;
    let s = 0;
    let s2 = 0;
    for (let i = 0; i < n; i++) {
        s += nums[i];
        s2 += nums[i]*nums[i];
        
    }
    const val1 = s-Sn;
    let val2 = s2-S2n;
    val2 = val2/val1;
    let repeated = (val1+val2)/2;
    let missing = repeated - val1;

    console.log({missing, repeated});
    
}

const nums = [1,2,2,4,5];
const n = 5;
repeatedMissing(nums, n);
*/