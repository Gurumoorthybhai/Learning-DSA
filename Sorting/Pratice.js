// sorting

// let arr = [13, 46, 24, 52, 20, 9];


// Selection Sort

// find the min value & swap

/*
function selectionSort(arr) {
for (let i = 0; i < arr.length-1; i++) {

    let minEleindex = i;

    for (let j = i+1; j < arr.length; j++) {
        
        if(arr[j] < arr[minEleindex]) {
            minEleindex = j;
        }
    }
    const temp = arr[i];
    arr[i] = arr[minEleindex];
    arr[minEleindex] = temp;
}
return arr;
}

console.log(selectionSort(arr));

*/

/*
function bubbleSort(arr) {

    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            
        }
        
    }
    return arr;
}


console.log(bubbleSort(arr));
*/

// merge sort

/*

let arr = [13, 46, 24, 52, 20, 9];
mSort(arr, 0, arr.length-1);
console.log(arr);


function mSort(arr, low, high) {

    if (low >= high) return;

    const mid = parseInt((low+high)/2);
    mSort(arr, low, mid);
    mSort(arr, mid+1, high);
    merge(arr, low, mid, high);
}


function merge(arr, low, mid, high) {

    left = low;
    right = mid+1;
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

        while (right<=high) {
            temp.push(arr[right]);
            right++;
        }

    for (let i = low; i <= high; i++) {
         arr[i] = temp[i-low];
    }
}
*/

function qPivotIndex(arr, low, high) {

    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        
        while (arr[i] <= pivot && i < high) {
            i++
        }

        while (arr[j] > pivot && j > low) {
            j--;
        }

        if (i < j) {
            swap(arr, i, j);
        }
    }
    swap(arr[low], arr[j])
    return j;
}
function qSort(arr, low, high) {
    

    const pivotIndex = qPivotIndex(arr);
    qSort(arr,low, pivotIndex-1);
    qSort(arr,pivotIndex+1, high);
}