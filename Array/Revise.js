// longest subarray with target sun k

// var longestSubArray = function(nums, target) {

//     let prefixSum = new Map();
//     let maxLen = 0;
//     let n = nums.length;
//     let sum = 0;
    
//     for (let i = 0; i < n; i++) {
        
//         sum += nums
//         [i];
//         if (sum === target) {
//             maxLen = Math.max(maxLen, i+1);
//         }
        
//         let rem = sum - target;

//         if (prefixSum.has(rem)) {
//             let j = prefixSum.get(rem);
//             maxLen = Math.max(maxLen, i-j);
//         }

//         if (!prefixSum.has(sum)) {
//             prefixSum.set(sum, i);
//         }
//     }

//     return maxLen;
// }

// console.log(longestSubArray([2,0,0,3], 3));

// console.log(longestSubArray([2,0,0,3], 3));
// var longestSubArray = function(nums, target) {

//     let maxLen = 0;
//     let sum = 0;
//     let left = 0;
//     let right = 0;

//     while ( right < nums.length) {


//         sum += nums[right];
//         if (sum === target) {
//             maxLen = left+1;
//         }

//         while (sum > target && left <= right) {
//             sum -= nums[left];
//             left++;
//         }
//         if (sum === target) {
//             maxLen = Math.max(maxLen, right-left+1)
//         }
        
//         right++;
//     }

//     return maxLen;
// }

// console.log(longestSubArray([2,0,0,3], 3));


// var numberOfSubarrays = function(nums, target) {

//     const countMap= {0: 1};
//     let preSum = 0;
//     let count =0;

//     for (let i = 0; i < nums.length; i++) {

//         preSum += nums[i];
//         const diff = target-preSum;
//         if (countMap.hasOwnProperty([diff])) {
//             count += countMap[diff]+1;
//         }
//         countMap[preSum] = (countMap[preSum] || 0)+1;
        
//     }
// return count;
// }

// console.log(numberOfSubarrays([3, 1, 2, 4], 6));

/*
function mSort(nums, low, high) {

    if (high <= low) return;

    let mid = Math.floor((low + high) / 2);
    mSort(nums, low, mid);
    mSort(nums, mid + 1, high);
    merge(nums, low, mid, high);
    return nums;
}

function merge(nums, low, mid, high) {

    let left = low;
    let right = mid+1;
    const temp = [];

    while(left <= mid && right<= high) {

        if(nums[left] <= nums[right]) {
            temp.push(nums[left]);
            left++;
        } else {
            temp.push(nums[right]);
            right++;
        }
    }
        while(left <= mid) {
            temp.push(nums[left]);
            left++;
        }

        while(right <= high) {
           temp.push(nums[right]);
            right++;
        }
    
    for (let i=low; i<=high; i++)
        nums[i] = temp[i-low]
    }

console.log(mSort([1,5,6,2,4, 3], 0, 5));
*/

// let n = 3;
// let index = 1;
// let nums = [1,2,3];
// for (let i = n - 1; i > index; i--) {
//     if (nums[index] < nums[i]) {
//         [nums[index], nums[i]] = [nums[i], nums[index]];
//         break;
//     }
// }

// console.log(nums);


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
var nextPermutation = function(nums) {
    return solve(nums)
    function solve(A) {
    let n = A.length;
    let k = n - 2;
    // Edge case
    if (A.length <= 1) return A;

    // find the k
    for (let i = n - 1; i > 0; i--) {
        if (A[i] <= A[i - 1]) {// '=' handles duplicate
            k--;
        } else {
            break;
        }
    }

    // if k==-1 , reverse the part right of k
    if (k == -1) {
        reverse(A, 0, n - 1);
        return A;
    }

    //else replace k with the next greater element reverse

    for (let i = n - 1; i > 0; i--) {
        if (A[i] > A[k]) {
            let temp = A[k];
            A[k] = A[i];
            A[i] = temp;
            break;
        }
    }
    reverse(A, k + 1, n - 1)
    return A;
}

function reverse(arr, i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--
    }
}
};

console.log(nextPermutation([1,2,5, 1, 3, 0, 0]));
*/

// buy & sell stocks

// brute force
/*
var BuySellStocks = function(nums) {

    const n = nums.length;
    let maxgain = 0;

    for (let i = 0; i < n; i++) {
        
        for (let j = i+1; j < n; j++) {
            
            let gain = nums[j]-nums[i];

            maxgain = Math.max(maxgain, gain);
            
        }
        
    }

    return maxgain;
}


var BuySellStocks = function(nums) {

    const n = nums.length;
    let min = Infinity;
    let max = 0;

    for (let i = 0; i < n; i++) {
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]-min);
        
    }
    return max;
}
const nums = [7,1,5,3,6,4];
// const nums = [7,6,4,3,1]

console.log(BuySellStocks(nums));

*/

// next permutation
// if given arr is in descending order, its value is the max, so reverse will work

/*
var nextPermutation = function(nums) {

    let index = -1;
    const n = nums.length;
    for (let i = n-1; i > 0 ; i--) {
            if (nums[i] > nums[i-1]) {
                index = i-1;
                break;
            }
    }

    if (index === -1) {
        nums.reverse();
        return nums;
    }

    // find next greatest element between n to breaking index

    for (let i = n-1; i > index; i--) {
        if (nums[i] > nums[index]) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            break;
        }
    }

    reverse(nums, index+1);
    return nums;
    function reverse(nums, index) {
        const n = nums.length;
        let left = index;
        let right = n-1;
        while (left <= right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
}

*/



// return all permutation using recursion with space

/*
var nextPermutation = function(nums) {

    const n = nums.length;
    let result = [];
    let freq = [];
    let arr = [];

    function permutation(nums, freq, arr) {
        
        if (n === arr.length) {
            result.push([...arr]);
            return;
        }

        for (let i = 0; i < n; i++) {
            const ele = nums[i];
            if (!freq[ele]) {
                freq[ele] = true;
                arr.push(ele);
                permutation(nums, freq, arr);
                arr.pop();
                freq[ele] = false;
            }
            
        }
    }

    permutation(nums, freq, arr);
    return result;
}
*/


// recursion without space
// 1, 2, 3
// create {1, 2, 3} => {2, 1, 3} => {3, 2 ,1}
/*
var nextPermutation = function(nums) {

    const n = nums.length;
    let result = [];

    function recursion(nums, index) {
        
        if (index === n) {
            // push entire nums to 
            result.push([...nums]);
            return;
        }

        for (let i = index; i < n; i++) {
            swap(i, index, nums);
            recursion(nums, index+1)
            swap(i, index, nums);
            
        }
    }

    function swap(i, j, nums) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    recursion(nums, 0);
    return result;
}
const nums = [1, 2, 3];
console.log(nextPermutation(nums));
*/

// in case of n/3, we should have atleast 2 elements
// majority element (n/3)

// TC => O(n*logn)

/*
var majorityElement = function(nums) {

    let arr = new Map();
    for (let num of nums) {
        arr.set(num, (arr.get(num) || 0)+1)
       
    }
    // +1 bcz arr size is 8 => 8/3 => 2.6 so, +1
    const count = Math.floor(nums.length/3)+1;

    for ([key , value] of arr) {
        if (value >= count) {
            console.log(key);
            
        }
    }
    console.log(arr);
    
}
*/



// count the subarrays with given target

/*
var subarrayTarget = function (nums, k) {
    
    // 
    
    const n = nums.length;
    let countMap = new Map();
    countMap.set(0, 1);
    let cnt = 0;
    let prefixSum = 0;
    for (let i = 0; i < n; i++) {
        prefixSum += nums[i];
        cnt += (countMap.get(prefixSum - k) || 0);
        countMap.set(prefixSum, (countMap.get(prefixSum) || 0) + 1);
    }
    // return cnt;
    console.log(cnt);
    
}
const arr = [3, 1, 2, 4];
const k = 6
subarrayTarget(arr, k)

// preSum += arr[i];

//         // Calculate x-k:
//         int remove = preSum - k;

//         // Add the number of subarrays to be removed:
//         cnt += mpp[remove];

//         // Update the count of prefix sum
//         // in the map.
//         mpp[preSum] += 1;

*/

// Count Inversions

/*
function merge(nums, low, mid, high) {

    let left = low;
    let right = mid+1;
    const temp = [];

    while(left <= mid && right<= high) {

        if(nums[left] <= nums[right]) {
            temp.push(nums[left]);
            left++;
        } else {
            temp.push(nums[right]);
            right++;
        }
    }
        while(left <= mid) {
            temp.push(nums[left]);
            left++;
        }

        while(right <= high) {
           temp.push(nums[right]);
            right++;
        }
    
    for (let i=low; i<=high; i++)
        nums[i] = temp[i-low]
    }*/

var Merge = function(arr, low, mid, high) {
    
    let left = low;
    let right = mid+1;
    let cnt = 0;
    let temp = [];
    while (left <= mid && right <= high) {
        
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        }

        else {
            temp.push(arr[right]);
            console.log({mid},{left});
            cnt += (mid-left+1);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i-low];
    }

    return cnt;

}

var MSort = function(arr, low, high) {

    let cnt = 0;
    if (low >= high) {
        return cnt;
    }

    let mid = Math.floor((low+high)/2);
    cnt += MSort(arr, low, mid);
    cnt += MSort(arr, mid+1, high);
    cnt += Merge(arr, low, mid, high);
    // console.log(cnt);

    return cnt;
}

const arr = [5,2,4,1,8,9];

console.log(MSort(arr, 0, arr.length-1));

