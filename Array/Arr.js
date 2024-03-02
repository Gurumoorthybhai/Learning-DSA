// https://leetcode.com/problems/running-sum-of-1d-array/submissions/1191634798/

/*

const arr = [3,1,2,10,1];
let sum = 0;
// let ans = arr.map(num => sum = sum + num);
// console.log(ans);

for (let i=1;i<arr.length;i++) {
    arr[i] = arr[i-1] + arr[i];
}

console.log(arr);
*/


// https://leetcode.com/problems/richest-customer-wealth/


// const accounts = [
//     [1,2,3],
//     [3,2,1]
// ];

// const accounts = [[1,5],[7,3],[3,5]]

// let max = -Infinity;
// for (let i=0;i<accounts.length;i++) {
//     let arr = accounts[i];
//     let sum = 0
//     for (let j=0; j<arr.length; j++) {
//         sum = sum + arr[j];

//     }
//     if (sum > max) {
//         max = sum;
//     }

//     // console.log(sum);
    
// }

/*
https://leetcode.com/problems/fizz-buzz/submissions/1191782291/
var fizzBuzz = function(n) {
    
    const fizzBuzz = [];
    for (let i=1;i<=n;i++) {

        if (((i%3)===0) && ((i%5)===0)) {
            fizzBuzz.push("FizzBuzz");
        }
        else if ((i%5)===0) {
            fizzBuzz.push("Buzz");
        }
        else if ((i%3)===0) {
            fizzBuzz.push("Fizz");
        }
        else {
            fizzBuzz.push(i+"");
        }

    }
    return fizzBuzz;
};



console.log(fizzBuzz(30))
*/

// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/

var numberOfSteps = function(num) {
    
    let steps = 0;

    while (num !== 0) {

        if((num % 2) === 0) {
            steps++;
            num = num/2;
        } else {
            steps++;
            num = num-1;
        } 
    }

    return steps;
};

// console.log(numberOfSteps(14))
console.log(numberOfSteps(8))
console.log(numberOfSteps(123))