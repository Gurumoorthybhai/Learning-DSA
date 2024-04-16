// pick & place in correct position
// worst & average case -> O(n2)
// best case -> O(n)


let arr = [10, 12, 8, 5, 2, 1];

function insertionSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let j = i;
        while (j > 0 && arr[j-1] > arr[j]) {
            const temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1]= temp;
            j--;
        }
        
    }

    return arr;
}

console.log(insertionSort(arr));
