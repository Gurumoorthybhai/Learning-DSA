/*
function countDigits(nums) {

    let count = 0;

    while (nums) {

        nums = Math.floor(nums/10);
        count++;
    }

    console.log("count - ", count);
    

}

// countDigits(12345);
countDigits(10);

*/

// function reverseANumber(nums) {

//     let mul = 1;
//     let reversedNum=0;
//     while (nums) {

//         let num = nums%10;
//         nums = Math.floor(nums/10);
//         reversedNum += num * mul;
//         mul = mul * 10;

//     }
//     console.log(reversedNum);
    
// }

// reverseANumber(1234)

// let x = 1534236469
// if( -2^31 < x < 2^31-1) {
//     console.log(" in range");
    
// }

// console.log(2^31);

// let num = -123;

// let revNum = x.toString().split('').revers;
// let strNum = num.toString().split("");

// let rev = strNum.reverse();

// const ans = rev.join('')
// console.log(ans);


// function reverseANumber(nums) {

//         const copy = nums;
//         let armstrong = 0;
//         while (nums) {
    
//             let num = nums%10;
//             nums = Math.floor(nums/10);
//             armstrong += (num*num*num);
    
//         }
//         return copy === armstrong;
//     }
//     // }

    
//     console.log(reverseANumber(153));
    
/*
function sumOfDivisors(num) {

let sum = 0;
    for (let i=1;i<=Math.sqrt(num);i++) {

        if((num%i) === 0) {
            sum += i;
            if((num/i) !=i) {
                sum += Math.floor(num/i);
                console.log(" i = ",i, " n/i ", Math.floor(num/i));
                
            }
        }
    }

    console.log(sum);
    
}

sumOfDivisors(36)
*/

function PrimeNumber(num) {

    let count = 0;
    console.log(" sqrt ", Math.sqrt(num));
    
    for(let i = 1;i<= Math.sqrt(num);i++) {

        if(num%i === 0) {
            count++;

            if((num/i) != i) {
                count++;
            }
        }
    }

    if(count === 2) {
        console.log("true");
        
    }
    else {
        console.log("false");

    }

}

PrimeNumber(2);