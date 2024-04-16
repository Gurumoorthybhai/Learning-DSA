// select min & swap

// input => 4 5 6 7 1 2 8

// 1st step => selected min element & swap with starting from 0th index

// so, i goes from 0 to n-2
// j goes till n-1

/*

loop 1 => 1 5 6 7 4 2 8
loop 2 => 1 2 6 7 4 5 8
loop 3 => 1 2 4 7 6 5 8
loop 4 => 1 2 4 5 6 7 8
goes on loop, until all are sorted

*/

function selectionSort(arr) {
    
    for (let i = 0; i <= arr.length-2; i++) {
        
        let mini = i;
        
        for (let j = i; j <= arr.length-1; j++) {
            
            if(arr[j] < arr[mini]) {
                mini = j;
            }
            
        }
        
        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let arr = [13, 46, 24, 52, 20, 9];
console.log(selectionSort(arr));
