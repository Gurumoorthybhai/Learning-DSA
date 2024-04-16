let count = 0;
/*
function recursiveCount() {

    if(count === 4) return 1;
    count++;
    count = count + recursiveCount();
    return count
}


console.log(recursiveCount());
*/


// print name 5 times

// function PrintName() {

//     if(count === 5) return;
//     console.log("ABCD");
//     count += 1;
//     PrintName();
// }
// PrintName();

// print 1 to N in linear

/*

let count1 = 1;
function PrintNumber(num) {

    if (count1 > num) return ;
    console.log(count1);
    
    count1++;
    PrintNumber(num);
    
}

PrintNumber(10);

*/

/*

// N to 1

function PrintNumber(i, num) {

    if (num < i) return ;
    
    console.log(num);
    PrintNumber(i, num-1);
    
}
// initial value , num
PrintNumber(1, 10);

*/

// Backtracking, 1 to N

/*
function printInReverse(i, num) {

    if (num < i) return;
    printInReverse(i, num-1);
    console.log(num);
}

printInReverse(1, 10)
*/

// N to 1
/*
function printInReverse(i, num) {

    if (num > i) return;
    printInReverse(i, num+1);
    console.log(num);
}

printInReverse(10, 1);

*/

// sum of N numbers

/*

let total = 0;

function sumOfN(num) {

    if (num >= 10) {
        return num;
    }
    total += num + sumOfN(num+1);
    return total;
}

console.log(sumOfN(1));


*/

// Factorial of N

/*

let factorial = 1;
function factorialOfN(num) {

    if (num <= 0) return 1;
    
    factorial = num * factorialOfN(num-1);
    return factorial;
}

console.log(factorialOfN(-2));

*/

// Reverse a array using recursion

/*
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let reveArr =[];
function reverseAnArray(arr, i, n) {

    if (i >= n/2) return;

    swap(arr, i, n-i-1);
    reverseAnArray(arr, i+1, n);
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseAnArray(arr, 0, arr.length));
*/

// Reverse an array with 2 pointer
/*
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function reverseArr(arr, l, r) {

    if (l >= r) return;
   
    swap(arr, l, r);
    reverseArr(arr, l+1, r-1);
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArr(arr, 0, arr.length-1));

*/

/*
function checkIsPalidrome(s, i) {

    if (i >= s.length/2) return true;

    if (s[i] != s[s.length-i-1]) return false;

    return checkIsPalidrome(s, i+1);

}
const str = 'madam';
console.log(checkIsPalidrome(str, 0));

*/
/*
let sum = 0;
function fibonacci(n) {

    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
    // let slast = 
   
    // return last + slast;
    // console.log("sum ",sum);
    
    // return sum;
}

console.log(fibonacci(5));
*/

function fibonacci(n){

    let fb = [0, 1];

    for(let i = 2;i<=n;i++) {
        fb[i] = fb[i-1] + fb[i-2];
    }
    return fb;
}

console.log(fibonacci(5));