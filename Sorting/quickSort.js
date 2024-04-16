function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort(arr, low, high) {
    const pivot = arr[low];

    let i = low;
    let j = high;
    while (i<j) {

        while (arr[i] <= pivot && i < high) {
            i++;
        }
 
        while (arr[j] > pivot && j > low) {
            j--;
        }

        if (i<j) {
            swap(arr, i, j);
        }

    }
    swap(arr, low, j);
    return j;
}
function QS(arr, low, high) {

    if (low >= high) return;

    let pindex = sort(arr, low, high);
    QS(arr, low, pindex-1);
    QS(arr, pindex+1, high);
}
const arr = [4, 3, 2, 5];
QS(arr, 0, arr.length-1);
console.log(arr);
