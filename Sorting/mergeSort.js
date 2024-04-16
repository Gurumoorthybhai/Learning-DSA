
function mSort(arr, low, high) {

    if(low == high) {
        return;
    }
    const mid = parseInt((low+high)/2);
    mSort(arr, low, mid);
    mSort(arr, mid+1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high){

    // console.log('low -',low ,'high - ',high);
    
    let left = low;
    let right = mid+1;
    let temp = [];

    while (left <= mid && right <= high) {

        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        }

        else if (arr[right] <= arr[left]) {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left<=mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for(let i=low;i<=high;i++) {
        console.log(" i-low ",i, " low ",low );
        
        arr[i] = temp[i-low];
    }
console.log('=======================');

    // return arr;
}
let arr = [10, 12, 8, 5, 2, 1];

mSort(arr,0, arr.length-1)

console.log(arr);

// console.log();
