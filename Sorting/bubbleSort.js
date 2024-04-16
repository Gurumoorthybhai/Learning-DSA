// Bubble Sort

// Push the largest man at last (adjcent compare)
// worst & average case O(n2)
// best case O(n) when arr is already sorted
// let arr = [13, 46, 24, 52, 20, 9];

// already sorted

let arr = [1,2,3,4,5];


function bubbleSort(arr) {

    let swap = false;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = true;
            }
            
        }

        if(!swap) {
            break;
        }
        console.log(" No Run");
        
    }
    return arr;
}


console.log(bubbleSort(arr));