/*
class StackImpl {

    constructor(size) {
        this.top = -1;
        this.arr = new Array(size);

    }


    push(val) {

        if(this.top >= this.arr.length) return 'Stack full';
        this.top++;
        this.arr[this.top] = val;
    }

    top() {
        if(this.top === -1) return null;
        return this.arr[this.top];
    }

    pop() {
        if(this.top === -1) return null;
        this.top-1;
    }

    size() {
        return this.top;
    }
}

const obj = new StackImpl(5);
obj.push(10);
console.log(obj);
*/


// Operations
// queue implementation with stack
// push
// top
// pop

/*
class QueueImpl {
    constructor(size) {
        this.arr = new Array(size);
        this.size = size;
        this.capacity = 0;
        this.start = -1;
        this.end = -1;
    }

    push(val) {

        if(this.capacity >= this.size) {
            
        }
        if(this.start === -1) {
            this.start++;
            this.end++;
        } else {
            // this.start = (this.end+1) % this.size;
            this.end = (this.end+1) % this.size;
        }
        this.arr[this.end] = val;
        this.capacity++;
    }

    top() {

        if(this.capacity) {
            return this.arr[this.start];
        }
    }

    pop() {
        if(this.capacity && this.start !== -1) {
            
            this.capacity--;

            if(this.capacity === 0) {
                this.start = -1;
                this.end = -1;
            }
            let newEle = this.arr[this.start];
            this.start = (this.start+1) % this.size;
            return newEle;
        }
    }
}

let qObj = new QueueImpl(4);

// console.log(qObj);

qObj.push(3);
// console.log(qObj);

qObj.push(2);

qObj.push(4);

qObj.push(2);

// top

console.log(qObj.top());

// pop
console.log(qObj.pop());

console.log(qObj.pop());


console.log(qObj.top());

qObj.push(5);

console.log(qObj.pop());

console.log(qObj.pop());

console.log(qObj.top());


console.log(qObj);

*/


/*

// Linked list implementation with stack

class Node {
    constructor(val = -1, next = null) {
        this.data = val;
        this.next = next;
    }
}
class LLImple {

    constructor(val=null) {
        this.size = 0;
        this.top1 = new Node(val);
    }

    push(val) {
        let newNode = new Node(val, this.top1);
        this.top1 = newNode;
        this.size++;
    }

    top() {
        if(this.size !== 0) {
            return this.top1.data;
        }
        // in case of empty
        return null;
    }

    pop() {
        if(this.size !== 0) {
            let currNode = this.top1;
            this.top1 = this.top1.next;
            this.size--;
            return currNode;
        }
        return null;
    }

    // size is a keyword
    size1() {
        return this.size;
    }
}

const LLobj = new LLImple();

// console.log(LLobj);

LLobj.push(1);

LLobj.push(2);

LLobj.pop();
LLobj.pop();

console.log(LLobj.top());
console.log(LLobj.size1());
// console.log(LLobj);

*/

// queue implementation with LL

/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class QueueLL {

    constructor(data=null) {
        this.size = 0;
        this.start = null;
        this.end = null;
    }

    push(data) {
        let newNode = new Node(data, this.end);
        if(this.start === null) {
            this.start = newNode;
            this.end = newNode;
        } else {
            this.end.next = newNode;
            this.end = newNode;
        }
        this.size++;
    }

    top() {
        if(this.start !== null) {
            return this.start.data;
        }
        // incase of empty
        return null;
    }

    pop() {
        if(this.start !== null) {
            let deleteNode = this.start;
            this.start = this.start.next;
            this.size--;
        if(this.size === 0) {
            this.start = null;
            this.end = null;
        }
            return deleteNode.data;
        }
        // incase of empty
        return null;
    }

    size1() {
        return this.size;
    }
}

const LLQue = new QueueLL();

console.log(LLQue);
LLQue.push(1);
LLQue.push(2);
LLQue.push(3);

console.log('pop ',LLQue.pop());
console.log('top ',LLQue.top());


console.log(LLQue);
*/

// balancing parentheses

// given string only containes only parentheses, need to loop
// in if block,its a opening pushed to stack
// in else check, the top element is closing bracket, if not its not balances return 0

/*

function checkBalancedParentheses(s) {
let stack = [];
// stack.top
    for(let char of s) {
        if(char === '(') {
            stack.push('(');
        } else {
            if(char === ')') {
                // no opening braces
                if(stack.length === 0) {
                    return 0;
                } else {
                    let p = stack[stack.length-1];
                    if(p === '(') stack.pop();
                    else return 0;
                }
                }
        }
    }
    return 1;
}

let s = '((())){)()';
console.log(checkBalancedParentheses(s));

*/


// check balance of parenthesis

// 1. given String, loop through it, push only opening packets to stack

// old refere new below

// var validateParentheses = function(str) {
//     let stack = [];
//     let openingBrackets = ['(', '{', '['];

//     for(let c of str) {
//         if(openingBrackets.includes(c)) {
//             stack.push(c);
//         } else {
//             // if its empty, then still we have opening brackets return false
//             if(!stack.length) return false;
//             let prevChar = stack.pop();
//             if(!((c === ')' && prevChar === '(') || (c === '}' && prevChar === '{') || (c === ']' && prevChar === '[') )) {
//                 return false;
//             }
//         }
//     }

//     return stack.length ? false : true;
// }


/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     let stack = [];
//     const openChar = ['(', '{', '['];
//     for(let c of s) {
//         if(openChar.includes(c)) {
//             stack.push(c);
//         } else {
//             if(!stack.length) return false;
//             let char = stack.pop();
//             if(! (c === ')' && char === '(') || (c === '}' && char === '{') || (c === ']' && char === '[')) return false;
//         }
//     }

//     return stack.length ? false : true;
// };


// // const str = '()[{}]';
// const str = '()[{}(])';
// console.log(validateParentheses(str));


// Precedence

// priority order, high to low
// 1. (), {}, []                Associativity
// 2.  ^                        R - L       
// 3. /, *   - equal            L - R
// 4. +, -   - equal            L - R

// Associcavity

// L - R

// 1 + 2 * 3 + 10/5

// first - 1 + (2 * 3) + 10/5
// 1 + 6 + 10/5
// 1 + 6 + 2 = 9

// R - L
// from right
// 2 ^ 4 ^ 3

// 2 ^ 64





/*
infix - operator inside operand
p*q + q^(m+n)

prefix - starts with operator
*-pq+mn

postfix - operand after operator
pq - mn ^(pm)

  priority order, high to low
1. ^
2. /, *   - equal
3. +, -   - equal
4. (

 */

// Note: Should be existing operator in the stack has less priority than the incoming operator
// loop the given string
// 1. push operand separartely to a variable
// 2. push operator to stack
// 3. Before pushing to stack, check the previous operator in the stack should have lesser priority
// if not pop it and push to character variable
// 4. Mean time, if you encounter a '(' packet, after ')' closing packet, pop all the operator
//  into variable. Packet is not needed to add into the variable.
// 5. Once loop is over, pop all the operators to variable

// p*q + (q^m+n) => *pqq^mn+

/*

index   stack        ans

p                     p
*         *           p
q         *           pq
q         *           pqq
+         *+          pqq
^         *+^         pqq
m         *+^         pqqm
+         *++         pqqm^   bcz of priority ^ > +, its popped out
n         *+          pqqm^n


*/

// once the loop completes, pop all remaining stack operator to ans

// pqqm^n++*

// convert infix to postfix

/*

const str = 'a*b+(c^d-c)';

const operators = {
    '+' : 1,
    '-' : 1,
    '*' : 2,
    '/' : 2,
    '^' : 3
}

var priorityCheckPostFix = function(operator1, operator2) {

    return (operators[operator1] >= operators[operator2]);
}

function priorityCheckPreFix(char1, char2) {

    return operators[char1] > operators[char2];
}


convertToPostfix(str);
function convertToPostfix (str) {
    let result = '', stack = [];

    for(let char of str) {
        // characters, numbers
        // console.log(char.charCodeAt(0),char.charCodeAt('A'), char.charCodeAt('Z'), char.charCodeAt('a'), char.charCodeAt('z'), '0'.charCodeAt(0), '9'.charCodeAt(0));
        if((char.charCodeAt(0) >= 'A'.charCodeAt(0) && char.charCodeAt(0) <= 'Z'.charCodeAt(0)) || 
        (char.charCodeAt(0) >= 'a'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)) || 
        (char.charCodeAt(0) >= '0'.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0))) {
            result += char;
        } else if(char === '(') {
            stack.push(char);
        } else if(char === ')') {
            while(stack.length && char !== '(') {
                result += stack.pop();
            }
        } else {
            // check if stack alread has any operators, if yes, the new insertion operator should have high priority
            // then existing operator, if not pop the high priority operator from stack to result
            // then add new operator
            let topOperator = stack.pop();

            // check if operator is present in stack and then has high priority 
            while(stack.length && priorityCheckPostFix(topOperator, char)) {
                result += topOperator;
            }
            stack.push(char);
        }
    }

    while(stack.length) {
        result.push(stack.pop());
    }

    console.log(result);
}



// 1. reverse the string, convert opening bracket '(' to closing bracket ')'
// 2. except ^ operator, if stacks top operator and upcoming operator is same DON'T pop it out 
function infixToPrefix(str) {
    let reversedStr = reverse(str);
    let stack = [];
    let result = '';

    for(let char of reversedStr) {
        if( (char.charCodeAt(0) >= 'A'.charCodeAt(0)) && (char.charCodeAt(0) >= 'Z'.charCodeAt(0)) ||
        (char.charCodeAt(0) >= 'a'.charCodeAt(0)) && (char.charCodeAt(0) >= 'z'.charCodeAt(0)) ||
        (char.charCodeAt(0) >= '0'.charCodeAt(0)) && (char.charCodeAt(0) >= '9'.charCodeAt(0))) {
            result += char;
        } else if(char === '(') {
            stack.push(char);
        } else if(char === ')') {
            while(stack.length && char !== '(') {
                result += stack.pop();
            }
        } else {
            let top = stack.pop();
            while(stack.length && priorityCheckPreFix(top, char)) {
                result += char;
            }
            stack.push(char);
        }
    }

    while(stack.length) {
        result += stack.pop();
    }

    return result;
}

const str1 = '(a+b)*c-d+f';

console.log(`Infix to preFix ${infixToPrefix(JSON.stringify(str1))}`)

// // O(n)- split + O(n)- swap + O(n) - join
// function reverse(str) {
//     let arr = str.split('');
//     let len = str.length;
//     for(let i = 0; i < (len)/2; i++) {
//         if(arr[i] === '(') arr[i] = ')';
//         else if(arr[i] === ')') arr[i] = '(';
//         [arr[i] , arr[len-1-i]] =  [arr[len-1-i], arr[i]]
//     }
//     arr = arr.join('');
//     console.log(arr);
// }


// O(n)
function reverse(str) {
    let reverseStr = '';
    let len = str.length;
    for(let i = 0; i < len; i++) {
        let char = str[len-1-i];
        if(char === '(') char = ')';
        else if(char === ')') char = '(';
        reverseStr += char;
    }
    // console.log(reverseStr);
    return reverseStr;
}

// reverse(str1);
// console.log(priorityCheck('(', '/'))

*/

/*

// postfix to infix

// 1. Iterate the given string, push operand to stack and if u encounter a operator
// 2. pick last 2 operand, insert operator in-between them


const str1 = 'AB-CD/+E*';
postFixToInfix(str1);
function postFixToInfix(str) {
    let stack = [];

    for(let char of str) {

        if( (char.charCodeAt(0) >= 'A'.charCodeAt(0)) && (char.charCodeAt(0) <= 'Z'.charCodeAt(0)) ||
        (char.charCodeAt(0) >= 'a'.charCodeAt(0)) && (char.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
        (char.charCodeAt(0) >= '0'.charCodeAt(0)) && (char.charCodeAt(0) <= '9'.charCodeAt(0))) {
            stack.push(char);
        } else {
            let str1 = '';
            let top2 = stack.pop();
            let top1 = stack.pop();

            // A-B
            str1 = `(${top1}${char}${top2})`;
            stack.push(str1);
        }

    }
    console.log(stack)
}
    */


//    Create a getMin method with O(1) time/ O(n) space complexity

// approach1:

// will use 2 stacks:
// 1. Original Stack to maintain the orders
// 2. Auxililary Stack to get min Element

/*
class Stack1 {
    constructor() {
        this.array = [];
        this.top = -1;
        this.max = 100;
    }

    isFull() {
        if(this.top === this.max-1) return true;
        return false;
    }

    isEmpty() {
        if(this.top === -1) return true;
        return false;
    }

    push(val) {
        if(this.isFull()) {
            console.log('The Stack is full');
            return;
        }
        this.top++;
        this.array.push(val);
    }

    pop() {
        if(this.isEmpty()) {
            console.log('The Stack is Empty');
            return;
        }
        this.top--;
        return this.array.pop();
    }
}


class SpecialStack extends Stack1 {
    constructor() {
        super();
        this.Min = new Stack1();
    }

    push(val) {
        if (this.isFull()) {
            console.log('The Stack is Full');
            return;
        }

        if (this.isEmpty()) {
            super.push(val);
            this.Min.push(val);
        } else {
            super.push(val);
            let min = this.Min.pop();
            this.Min.push(min);
            if (val <= min) {
                this.Min.push(val);
            } else {
                this.Min.push(min);
            }
        }
        console.log('The insertion element is : ', val);

    }

    pop() {
        if (this.isEmpty()) {
            console.log('The Stack is empty');
            return;
        }
        super.pop();
        return this.Min.pop();
    }

    getMin() {
        if (this.isEmpty()) {
            console.log('The Stack is empty');
        }
        let min = this.Min.pop();
        this.Min.push(min);
        console.log('The Minimum element is : ', min);

        return min;
    }
}

const obj = new SpecialStack();

obj.push(3);
obj.push(5);
obj.push(2);
// obj.getMin();
obj.push(1);
// obj.getMin();
obj.push(1);
// obj.getMin();
obj.push(-1);
// obj.getMin();

// obj.printStack();
// obj.peek();

obj.getMin(); // -1
obj.pop();
obj.getMin(); // 1
obj.pop();
obj.getMin();   // 1
obj.pop();
obj.getMin(); // 2
obj.pop();
obj.getMin(); // 3
obj.pop();
obj.getMin(); // 3

*/



// approach 2:
// Create a getMin method with O(1) time/ space complexity

// 1. create a variable with minEle which holds current minEle, initially assign first Ele as minEle
// 2. push, compare upcoming ele with minEle, if
// upcoming ele is greater than minEle, push to stack
// if upcoming ele is smaller than minEle,
// perform => 2(ele) - minEle, push the result into stack

/*
class MinEleStack {

    constructor() {
        this.minEle;
        this.stack = [];
    }

    getMin() {
        if (this.stack.length === 0) {
            console.log(`The Stack is Empty`);
            return;
        }

        console.log(`Minimum Element in the stack is ${this.minEle}`);
    }

    push(val) {
        if (this.stack.length === 0) {
            this.minEle = val;
            this.stack.unshift(val);
        } else if (val < this.minEle) {
            this.stack.unshift(2 * val - this.minEle);
            this.minEle = val;
        } else {
            this.stack.unshift(val);
        }

        console.log(`The inserted element is ${val}`);
    }


    pop() {
        if(!this.stack.length) {
            console.log('The Stack is Empty');
            return;
        }

        console.log('The Top Most Element Removed : ');
        let t = this.stack[0];
        this.stack.shift();

        if(t < this.minEle) {
            console.log(this.minEle);
            this.minEle = 2 * this.minEle - t;
        } else {
            console.log(t);
        }
    }
    // prints the top element
    peek() {
        if(!this.stack.length) {
            console.log('Stack is empty');
            return;
        }

        let t = this.stack[0];

        console.log('The Top Element is : ');
        (t < this.minEle) ? console.log(this.minEle) : console.log(t);
    }

    printStack() {
        console.log(`The Stack elements are ${this.stack}`);
    }
}

const obj = new MinEleStack();

obj.push(3);
obj.push(5);
obj.push(2);
// obj.getMin();
obj.push(1);
// obj.getMin();
obj.push(1);
// obj.getMin();
obj.push(-1);
// obj.getMin();

// obj.printStack();
// obj.peek();

obj.getMin(); // -1
obj.pop();
obj.getMin(); // 1
obj.pop();
obj.getMin();   // 1
obj.pop();
obj.getMin(); // 2
obj.pop();
obj.getMin(); // 2
obj.pop();
obj.getMin(); // 3
obj.pop();

obj.getMin(); // 3
// obj.stack();

*/



// Next Greatest Element

// Given array 
// arr = [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6];
// ans = [12, -1, 6, 5, 2, 6, 4, 2, 4, 6, -1];

// iterate from right, if no element is greate than its right Elements, assign -1, push the element into stack
// while searching in stack, if the stack elements are small, pop out them

/*

const arr = [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6];
console.log(NextGreatestElement(arr));

function NextGreatestElement(arr) {
    let NGE = [];
    let stack = [];
    let len = arr.length;

    // iterate from right
    /*

    for(let i = len-1; i >= 0; i--) {
        let currentElement = arr[i];
        if(!stack.length) {
            NGE[i] = -1;
            stack.push(currentElement);
        } else {
            while (stack.length) {
                let top = stack.pop();
                stack.push(top);
                if (currentElement < top) {
                    NGE[i] = top;
                    stack.push(currentElement);
                    break;
                } else {
                    stack.pop();
                }
                if(!stack.length) {
                    NGE[i] = -1;
                    stack.push(currentElement);
                    break;

                }
            }
        }
    }
    return NGE;

    // for(let i = len-1; i >= 0; i--) {
    //     // arr[i] >= stack.pop() if, we pop() out, even if its greater or equal
    //     while(!stack.length && arr[i] >= stack.pop()) {
    //         stack.pop();
    //     }

    //     if(!stack.length) NGE[i] = -1;
    //     else {
    //         NGE[i] = arr[i];
    //         stack.push(arr[i]);
    //     }
    // }
    
}
*/

// Find next greatest element, circular array

// 1. Need to create a imaginary array of same array & loop1 -> outloop, innerloop -> double of array size
// 2. With help of module array length, we will be able to get elements before current element

// TC - O(n2)
// SC - O(n) / to store result

/*

const arr = [2, 10, 12, 1, 11];
NGE2(arr);

function NGE2(arr) {
    let NGE = [];
    let l = arr.length;

    for(let i = 0; i < l; i++) {
        NGE[i] = -1;
        for(let j = i+1; j <= i+l-1; j++) {
            let ind = j%l;
            if(arr[i] < arr[ind]) {
                NGE[i] = arr[ind];
                break;
            }
        }

    }
}

*/

// 1. Create a imaginary array with double its size & loop from back
// 2. Push to NGE array, once n value is less than length

/*

const arr = [2, 10, 12, 1, 11];
NGE2(arr);

function NGE2(arr) {
    let NGE = [];
    let s = [];
    let l = arr.length;
    for(let i = (2*l)-1; i >= 0; i--) {
        if(s.length)
        console.log(`${arr[i%l]}, ${arr[s[s.length-1]]}`);
        while(s.length && arr[i%l] >= arr[s[s.length-1]]) {
            s.pop();
        }

        if(i < l) {
            NGE[i%l] = !s.length ? -1 : arr[s[s.length-1]];
        }
        s.push(i%l);
    }
    console.log(NGE)
}

*/

/*
// find next smallest element

// const arr = [3, 2, 4, 5, 1];

// const res = [2, 1, 1, 1, -1];

const arr = [9, 8, 7, 6, 5];


NSE(arr);

function NSE(arr) {
    let l = arr.length;
    let s = [];
    let res = [];
    
    for(let i = l-1; i >= 0; i--) {
        // let stackIndex = s.length-1;

        while(s.length && arr[i] <= arr[s[s.length-1]]) {
            s.pop();
        }

        res[i] = !s.length ? -1 : arr[s[s.length-1]];

        s.push(i);
    }
    console.log(res)
}

*/

// sum of sub-array minimum
// Need to sum the minimum value from each subarray
// const arr = [3, 1, 2, 4];
// example

// 1st element subarray

// subArray_1 - [3] - 3
// subArray_2 - [3, 1] - 1 is the minimum
// subArray_3 - [3, 1, 2] - 1 is the minimum
// subArray_4 - [3, 1, 2, 4] - 1 is the minimum

// 2nd element subarray

// subArray_1 - [1] - 1
// subArray_2 - [1, 2] - 1 is the minimum
// subArray_3 - [1, 2, 4] - 1 is the minimum

// 3rd element subarray

// subArray_1 - [2] - 2
// subArray_2 - [2, 4] - 2 is the minimum

// 4th element subarray
// subArray_1 - [4] - 4 is the minimum

// sum of all minimum subarrays = 3+1+1+1 + 1+1+1 + 2+2 + 4 = 16

// approach1:
// use 2 loop to generate subarrays and get minimum and sum

// outer loop to iterate each element
// inner loop to generate subarrays and get minimum and add to sum

function sumMinSubArray(arr) {

    let l = arr.length;

    for (let i = 0; i < l; i++) {
        let min = arr[i];
        for (let j = i; j < l; j++) {
            min = Math.min(min, arr[j]);
        }
    }
}

/*

// Astroids travelling

// Astroids will be travelling in both +ve and -ve direction after collision, return the remaining o/p in same order

// const arr = [4, 7, 1, 1, 2, -3, -7, 17, 15, -16];

// 1. loop and push +ve elements into stack, incase of -ve element compare with stack elemnets
// if abs(-ve) is greater than stack element, pop() from stack & continue
// 2. In case of equal ans(-ve) and stack value, pop() the element
// 3. In case of stack is empty and if current element is -ve, push to stack
// 4. return the output in same order as input, bcz of this that we can use stack and atlast reverse or pop() & add to new variable  or
// use list

function astroidCollision(arr) {
    let res = [];

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] > 0) res.push(arr[i]);
        else {
            // imp res[res.length-1] > 0, if already a -ve element is present, we shouldnt check that
            while(res.length && res[res.length-1] > 0 && Math.abs(arr[i]) > res[res.length-1])
                res.pop();

            // equal
            console.log(`${arr[i]}, ${Math.abs(res[res.length-1])}`)
            if(res.length && Math.abs(arr[i]) === res[res.length-1])
                res.pop();
            // stack is empty
            else if(!res.length || res[res.length-1] < 0)
                res.push(arr[i]);
        }
    }

    console.log(res);
}

// const arr = [4, 7, 1, 1, 2, -3, -7, 17, 15, -16];
// o/p => [4, 17]
// astroidCollision(arr);

// const arr = [-2, -1, 1, 2];
// o/p => [-2, -1, 1, 2] same output -ve is pushed first then +ve


// const arr = [-4, 1, -1, -3];
// o/p => [-4, -3]

astroidCollision(arr);

*/

// const arr = [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6];

// Next Greater Element (NGE)

/*

NGE(arr);
function NGE(arr) {
    let l = arr.length;

    let s = [];
    let res = [];
    res[l-1] = -1;
    for(let i = l-1; i >= 0; i--) {

        if(!s.length) {
            s.push(arr[i]);
            res[i] = -1;
        } else {
            // current element is greater, so no need of smaller element,
            // remove the smaller element from stack
            while(arr[i] >= s[s.length-1]) {
                s.pop();
            }
            res[i] = s.length ? s[s.length-1]: -1;
            s.push(arr[i]);
        }

    }

    console.log(res);
}

*/

// Previous Smaller Element - PSE

// pop() when current element is smaller than stack element

/*

PSE(arr);

function PSE(arr) {
    let l = arr.length;
    let s = [];
    let res = [];

    for(let curr of arr) {

        if(!s.length) {
            s.push(curr);
            res.push(-1);
        } else {
            while(curr <= s[s.length-1]) {
                s.pop();
            }
            let res1 = !s.length ? -1 : s[s.length-1];
            res.push(res1);
            s.push(curr);
        }
    }

    console.log(res);
}

*/

/*

// NSE - Next Smallest Element

// pop() -> when curr is smaller than stack element

// const arr =       [4, 12, 5, 3,  1, 2, 5, 3, 1,  2,   4, 6];
// expected output = [3,  5, 3, 1, -1, 1, 3, 1, -1, -1, -1, -1];

// varient 1: values

NSE(arr);

function NSE(arr) {
    let l = arr.length;
    let s = [];
    let res = [];

    for(let i = l-1; i >= 0; i--) {

        if(!s.length) {
            res[i] = -1;
            s.push(arr[i]);
        } else {

            while(arr[i] <= s[s.length-1]) {
                s.pop();
            }
            res[i] = !s.length ? -1 : s[s.length-1];
            s.push(arr[i]);
        }
    }
    console.log(res);
}

*/

/*

// varient -2: hold index in stack

// if no NSE, its index should be size of arr

// const arr = [3, 2, 10, 11, 5, 10, 6, 3];
//expetced next smallest element's index [1, 8, 4, 4, 7, 6, 7, 8] 

// NSE(arr);

function NSE(arr) {
    let l = arr.length;
    let s = [];
    let res = [];

    for(let i = l-1; i >= 0; i--) {

        if(!s.length) {
            // if no NSE exists, pass arr length
            res[i] = l;
            s.push(i);
        } else {
            while(arr[i] <= arr[s[s.length-1]]) {
                s.pop();
            }
            res[i] = !s.length ? l : s[s.length-1];
            s.push(i);
        }
    }
    // console.log(res)
    return res;
}


// similarly for PSE index

// if no PSE, its index should be -1

// const arr = [3, 2, 10, 11, 5, 10, 6, 3];
//expetced previous smallest element's index [-1, -1, 1, 2, 1, 4, 4, 1] 

// PSE(arr);

function PSE(arr) {
    let l = arr.length;
    let s = [];
    let r = [];

    for(let i = 0; i < l; i++) {

        if(!s.length) {
            r[i] = -1;
            s.push(i);
        } else {
            while(arr[i] <= arr[s[s.length-1]]) {
                s.pop();
            }
            r[i] = !s.length ? -1 : s[s.length-1];
            s.push(i);
        }
    }

    // console.log(r)
    return r;
}
*/

// find the largest rectangle

// const int = [3, 2, 10, 11, 5, 6, 7] check histogram diagram in note
// formula arr[i] * (NSE index - PSE index - 1) , why -1 added, bcz index starts from '0'

// from above existing fn will get NSE index, PSE index
// loop through every index, find NSE index, PSE index and substitute in the formula
// trace the largest rectangle

// TC -> O(4n)
// SC -> O(2n)
/*
const arr = [3, 2, 10, 11, 5, 10, 6, 3];
largestRect(arr);

function largestRect(arr) {
    let l = arr.length;
    let largestRect = 0;

    let PSEIndex = PSE(arr);
    let NSEIndex = NSE(arr);

    for(let i = 0; i < l; i++) {
        let currentPSEIndex = PSEIndex[i];
        let currentNSEIndex = NSEIndex[i];

        let area = arr[i] * (currentNSEIndex - (currentPSEIndex) - 1);
        largestRect = Math.max(largestRect, area);
    }
    console.log(largestRect);
}

*/

/*

// Optimized approach

// Instead of precalculating the PSE & NSE, will calculate on the fly
// with the help of PSE
// How PSE helps, stack will be containing the smallest element then current arr[i] if this breaks,
// we come to know that arr[i] is the NSE

// TC - O(n) for loop + O(n) for both while loops
 
// const arr = [3, 2, 10, 11, 5, 10, 6, 3];
// largestRect(arr)
function largestRect(arr) {
    let l = arr.length;
    let s = [];
    let maxRect = 0;

    for(let i = 0; i < l; i++) {

        while(s.length && arr[i] <= arr[s[s.length-1]]) {
            let ele = s.pop();
            let NSEIndex = i;
            let PSEindex = !s.length ? -1 : s[s.length-1];
            let Rect = arr[ele] * (NSEIndex-PSEindex-1);
            maxRect = Math.max(maxRect, Rect);
        }
        s.push(i);
    }

    // we need to check we have calculate Rect for all the elements, how we are calculating the Rect only
    // when we pop the element, think that above case we dont have any element smaller than 2, 3, we need to loop through stack elements
    while(s.length) {
        let ele = s.pop();
        // we dont have smaller to calculate NSE, so instead give length of arr
        // in case of PSE, if we have 2 elements, 1st ele will be the PSE for 2nd, for 1st its will be -1
        let NSEIndex = l;
        let PSEindex = !s.length ? -1 : s[s.length-1];
        let Rect = arr[ele] * (NSEIndex-PSEindex-1);
        maxRect = Math.max(maxRect, Rect);
    }
    console.log(maxRect);
}
*/

/*

// 13. Find the maximu Reactangle in the given 2D matrix wit only 0's, 1's
// pre-request: largestRect (histogram)


// input:
const arr = [
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0],
]

// from above we can say that 

// row 1, column 2 to row 2 column 4 has the max rect of 6
// [1, 1, 1]
// [1, 1, 1]

// approach:
// with help of preSum, need to convert each row into histogram inputs, we utilize the histogram output to find max rect

// preSum arr, the catch is if we reach arr[i][j] = 0, reset to 0
// will pass each row to histogram as i/p get max of each row, out of that will find final max rect
// preSum = 
// [
//     [1, 0, 1, 0, 1],
//     [2, 0, 2, 1, 2],
//     [3, 1, 3, 2, 3],
//     [4, 0, 0, 3, 0],
// ]

// TC = O(n*m) preSum arr + O(n) + O(2n)
// SC = O(n*m) preSum arr + O(m)
// single column so m
// maxRect - 6

maxRect(arr);
function maxRect(arr) {

    
    let row = arr.length;
    let col = arr[0].length;
    let maxRect = 0;

    let preSum = new Array(row).fill(0).map(() => new Array(col).fill(0));
    // map() is need to create diff reference, or else it will point to same reference
    // preSum[0][2] = 1;
    // let preSum = new Array(row).fill(new Array(col).fill(0));
    // console.log(preSum)
    // O(n*m)
    for(let j=0; j < col; j++) {
        let sum = 0;
        for(let i = 0; i < row; i++) {

            // if arr[i][j] is 0, we dont have histogram, so sum = 0;
            sum = (arr[i][j] === 0) ? 0 : sum + arr[i][j];
            preSum[i][j] = sum;
        }
    }

    for(let i = 0; i < row; i++) {
        let rect = reviseLargestRect(preSum[i]);
        // console.log(`${i}, ${rect}`);
        maxRect = Math.max(maxRect, rect);
    }
    console.log(maxRect);
}

function reviseLargestRect(arr) {
    let l = arr.length;
    let s = [];
    let maxArea = 0;

    for(let i = 0; i < l; i++) {

        while(s.length && arr[i] <= arr[s[s.length-1]]) {
            // pop() should be used, or else infinite loop
            let ele = arr[s.pop()];
            let PSEIndex = !s.length ? -1 : s[s.length-1];
            let NSEIndex = i;
            let area = ele * (NSEIndex-PSEIndex-1);
            maxArea = Math.max(maxArea, area);
        }
        s.push(i);
    }


    while(s.length) {
        let ele = arr[s.pop()];
        let PSEIndex = !s.length ? -1 : s[s.length-1];
        let NSEIndex = l;
        let area = ele * (NSEIndex-PSEIndex-1);
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
}

*/

/*

// 14. remove k digits, to make smallest value

// i/p const s = '1432219'; k = 3, return string with smallest value
// approach
// try to make starting digits small

// I think PSE approach will work, bcz it removes greater digits, keep track of removing k times  
// Edge case

// 1. k == n, need to remove all the digits, so in that case return '0'
// 2. if output is '000100', in that case return '100'
// 3. what if i/p '123456', no elements will be removed, previous digits are small in that case remove
// from last bcz last digits are greater than previous digits which gives smallest value

// const str = '1432219';

// const str = '0001123';

// edge case 1
const str = '123';
// output -> 200
const k = 3;


// edge case 2
// const str = '10200'; output -> 200
// const k = 1;

// edge case 3
// const str = '1234567'; 
// output -> 1234
// const k = 3;

console.log(`Smallest Value is ${removeKDigits(str, k)}`);
function removeKDigits(str, k) {
    let l = str.length;
    let s = [];

    for(let num of str) {
        // equal is not need, as it has same value
        // console.log(num-'0');
        while(s.length && num-'0' < s[s.length-1]-'0' && k) {
            s.pop();
            k--;
        }
        if((!s.length && num !== '0') || (s.length)) {
            s.push(num);
        }
    }

    // edge case 1
    if(!s.length)
    return '0';

    // edge case 3
    // if k is not zero, remove remaining k digits
    if(k) {
        s = s.slice(0, -k);
    }
    
    let smallestDigits = s.join('');
    // edge case 2
    // convert stack to string but we took the array, so they ready in input order
    // for(let char of s) {
    //     res += char;
    // }

    // need to remove zero's from string as its after reverse will have the same value
    // while(res.length && res[res.length] === '0') {
    //     delete res
    // } 

    return smallestDigits ? smallestDigits : '0';
}

*/

/*

// 15. Stock span, given method 'insert', on each function call, passes a value
// need to return the maximum no.of.days the stock value is smaller or equal to current day

// i/p = [7, 2, 1, 3, 3, 1, 8]
// for value 7 - cnt 1 (current day)
// for value 2 - cnt 1 (current day)
// for value 1 - cnt 1 (current day)
// for value 3 - cnt 3 (current index, 2 index, 1 index)
// for value 3 - cnt 3 (current index, 2 index, 1 index)
// for value 1 - cnt 1 (current day)
// for value 8 - cnt 7 (all of its prev value are smaller than current index)

// const arr = [7, 2, 1, 3, 3, 1, 8];
// const arr = [1, 2, 3, 4, 5];
const arr = [8, 7, 6, 5, 5];

console.log(`Max Days the stack is equal or less than is ${stockSpan(arr)}`);
function stockSpan(arr) {
    let l = arr.length;
    let s = [];
    let cnt = 0;
    let maxDays = 1;

    for(let i = 0; i < l; i++) {
        while(s.length && arr[i] > arr[s[s.length-1]]) {
            s.pop();
        }
        cnt = i - (s.length ? s[s.length-1] : -1);
        maxDays = Math.max(maxDays, cnt);
        s.push(i);
    }

return maxDays;
}

*/

/*

// 16. return a array with maximum of subarray with 'k' length,
// Sliding window maximum
// given arr = [1, 3, -1, -3, 5, 3, 2, 1 ,6], k=3
// first k split [1, 3, -1]  ->  3 - max value 
// next k split  [3, -1, -3] ->  3 max value 
// next k split  [-1, -3, 5] ->  5 max value 
// next k split  [-3, 5, 3]  ->  5 max value 
// next k split  [5, 3, 2]   ->  5 max value 
// next k split  [3, 2, 1]   ->  3 max value 
// next k split  [2, 1 ,6]   ->  6 max value 

// // approach 1

// // outer loop to loop
// // inner loop run till the k index i+k
// // TC - O(n-k)*(k)
// // SC - O(n-k)

// const arr = [1, 3, -1, -3, 5, 3, 2, 1 ,6], k=3;

// slidingMax(arr, k);


// function slidingMax(arr) {
//     let l = arr.length;
//     let res = [];

//     for(i = 0; i <= l-k; i++) {
//         let max = arr[i];
//         for(let j = i; j < i+k; j++) {
//             max = Math.max(max, arr[j]);
//         }
//         res.push(max);
//     }
//     console.log(res.join(', '));
// }


// approach 2

// Deque which allows to insert back, delete back or insert front, delete front
// to make deque, will use stack in a monotonous decreasing fashion, which means
// smaller to bigger, so that it easy to get bigger value at bottom

// 2 things to consider
// 1. how to identify the index which is out of K index & remove
//    stack index <= i-k, in case for index 3, k = 3, its index should be [1, 2, 3],if stack index is 0, 0 <= 3-3, then this should be removed
// 2. how to identify the closer of the k window, >= k-1, => 3-1 =>  for index greater than >=2, so that for each k window, will be calculating the maximum
// its easily to get greater element, bcz greater element will always present in bottom or 0th index


function slidingMax(arr, k) {
    let l = arr.length;
    let s = [];
    let res = [];

    for(let i = 0; i < l; i++) {

        // remove stack index 0th index, bcz its out the side k window
        if(s.length && s[0] <= i-k) {
            s.shift();
        }
        // no point of having same value, so >=
        while(s.length && arr[i] >= arr[s[s.length-1]]) {
            s.pop();
        }
        
        s.push(i);

        if(i >= k-1) {
            res.push(arr[s[0]]);
        }

    }

    console.log(res.join(', '));
}
*/

// 17. Find the Celebrity person
// who is celebrity person ?
// everyone should known him and for him no one knowns

// Given 2D

// [
// p-0    [0, 1, 1, 0],
// p-1    [0, 0, 0, 0],
// p-2    [0, 1, 0, 0],
// p-3    [1, 1, 0, 0]
// ]
// row -> knows another
// column -> knows him
// from the above matrix, p-1 knowns no one (rows have all 0)


// approach1

// need to find/store 2 things in arr

// knowsMe
// Iknow

// filter with knowsMe === n-1, why n-1, except him(all persons would know) and Iknow === 0 (knowns no one)

// TC = O(n2) + O(n)
// SC = O(2n)

// ans: 1
// const arr = [
//     [0, 1, 1, 0],
//     [0, 0, 0, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0]
//     ];

// ans: 3
// const arr = [
//     [0, 1, 1, 1],
//     [0, 0, 0, 1],
//     [0, 1, 0, 1],
//     [0, 0, 0, 0]
//     ];

// console.log(`Celebrity is ${FindCelebrity(arr)}`);

// function FindCelebrity(arr) {
//     let n = arr.length;
//     let m = arr[0].length;
//     let knowsMe = new Array(n).fill(0);
//     let Iknow = new Array(n).fill(0);
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < m; j++) {
//             if(arr[i][j] === 1) {
//                 Iknow[i]++;
//                 knowsMe[j]++;
//             }
//         }
//     }

//     for(let i = 0; i < n; i++) {
//         if(knowsMe[i] === n-1 && Iknow[i] === 0) return i;
//     }

//     return -1;
// }


// approach 2: optimised approach (final)
// declare 2 variable top & bottom
// loop through the persons and check each connection, moved to next person, if they know 

// TC - O(2n)
// SC - O(1)

// function FindCelebrity(arr) {
//     let n = arr.length;
//     let top = 0, bottom = n-1;

//     while(top < bottom) {
//             // eliminate the top
//         if(arr[top][bottom] === 1) {
//             top++;
//             // eliminate the bottom
//         } else if(arr[bottom][top] === 1) {
//             bottom--;
//         } else {
//             top++;
//             bottom--;
//         }
//     }

// now top & bottom is pointing on same person, so need to check he is a celebrity 
// check row-wise if he knows someone, if he knows, return -1, or else check with column also
// check column-wise, everyone knows him, if yes, return i, or return -1

//     for(let i = 0; i < n; i++) {
//         // except self, check row/column
//         if(i=== top) continue;
//         if(arr[top][i] === 0 && arr[i][top] === 1) {
//             continue;
//         } else {
//             return -1;
//         }
//     }
//     return top;
// }

// stack implementation (personal not optimized)

// similar to above elimination of persons
// push all the persons to the stack
// loop till 1 person
// pick top 2 persons and check the connect and eliminate till 1 person
// check if it is a personality

// TC: O(3n)
// SC: O(n)

// function FindCelebrity(arr) {
//         let n = arr.length;
//         // stack
//         let s = [];

//         for(let i = 0; i < n; i++) {
//             s.push(i);
//         }

//         while(s.length !== 1) {
//             let person1 = s.pop();
//             let person2 = s.pop();

//             // if person1 know person2, then person1 is a not a celebrity
//             if(arr[person1][person2] === 1) {
//                 s.push(person2);
//             } else {
//                 s.push(person1);
//             }
//         }

//         // after all only 1 person is left, so need to the it a celebrity, rowcheck and column check

//         let person = s.pop();

//         for(let i = 0; i < n; i++) {
//             if(i === person) continue;
//             if(arr[person][i] === 0 && arr[i][person] === 1) {
//                 continue;
//             } else {
//                 return -1;
//             }
//         }

//         return person;

// }



// Implement stack with array

// need to design stack operations
// 1. push
// 2. pop
// 3. top/peek
// 4. size
// in order to design stack, a fixed size is required, so size = 10, to maintain the insertion/ index, will use top variable

/*

var ImplementStack = function(size) {
    this.s = new Array(size);
    this.index = -1;
}

ImplementStack.prototype.push = function(x) {
    if(this.index >=  10) return 'Stack is full';
    this.index++;
    this.s[this.index] = x;
}

ImplementStack.prototype.pop = function() {

    if(this.index === -1) return 'Stack is empty';
    let val = this.s[this.index];
    this.index--;
    return val;
}

ImplementStack.prototype.top = function() {
    return this.s[this.index] ? this.s[this.index] : undefined; 
}

ImplementStack.prototype.size = function() {
    return this.index+1;
}

let obj = new ImplementStack(10);

obj.push(1);
obj.push(2);
obj.push(3);
console.log(`Size is ${obj.size()}`);

console.log(`Top element is ${obj.top()}`);
console.log(`Pop element is ${obj.pop()}`);

console.log(`Top element is ${obj.top()}`);
console.log(`Pop element is ${obj.pop()}`);

console.log(`Top element is ${obj.top()}`);
console.log(`Pop element is ${obj.pop()}`);

console.log(`Top element is ${obj.top()}`);

console.log(`Pop element is ${obj.pop()}`);

console.log(`Size is ${obj.size()}`);
*/


// need to design query operations
// 1. push
// 2. pop
// 3. top/peek
// 4. size
// 5. isEmpty
// in order to design queue, a fixed size is required, so size = 10, to maintain the starting -> start and insertion -> stop index

// var QImple = function(size1) {
//     this.size = size1;
//     this.q = new Array(this.size);
//     this.currSize = 0;
//     this.start = -1;
//     this.end = -1;
// }

// QImple.prototype.push = function(val) {

//     if(this.currSize >= this.size) return 'Queue is full';

//     if(this.currSize === 0) {
//         this.start = 0;
//     }
//     this.end = (this.end+1)%this.size;
//     this.q[this.end] = val;
//     this.currSize++;
// }

// QImple.prototype.pop = function() {
//     if(this.currSize === 0) {
//         return 'Queue is empty';
//     }

//     let val = this.q[this.start];
//     // incase only 1 element is present
//     if(this.currSize === 1) {
//         this.start = -1;
//         this.end = -1;
//     }

//     this.start = (this.start+1)%this.size;
//     this.currSize--;
//     return val;
// }

// QImple.prototype.top = function() {
//     if(this.currSize === 0) return 'Queue is empty';

//     return this.q[this.end];
// }

// QImple.prototype.size = function() {
//     return this.currSize;
// }


// let Q = new QImple(4);
// // console.log(Q.pop());
// // console.log(Q.top());
// Q.push(1);
// Q.push(2);
// console.log(Q.pop());

// console.log(Q.top());
// Q.push(3);
// console.log(Q.push(4));
// // console.log(Q.top());

// console.log(Q.push(5));


/*

// Implement stack LIFO with queue

// input [1, 2, 3, 4, 5];

// I will be performing query operations,
// pop/top - queue should return (stack value) which means latest element(top element) instead queue default first value

// from second element, before insertion of 2nd element, 

// |     |         |     |  
// |     |         |  1  |
// |__1__|         |__2__|

// from above, if we pop/top a element from queue now it will return 2, this is what it stimulates stack will return

// we need to rotate(pop from 0th and push on top of the queue) with queue size

// Stack - Last In First Out (LIFO)
// Queue - First In First Lout (FIFO)

// stack operations
// push()
// pop()
// peek() or top()
// isEmpty
// size


// Queue operations
// enqueue - add at tail
// dequeue  - remove from front and return
// front or peek - return front element without removing
// isEmpty
// size 

var StackImple = function() {
    this.queue = [];
}

StackImple.prototype.push = function(val) {

    let size = this.queue.length;
    this.queue.push(val);

    while(0 > size) {
        // it will return first ele, gets added to top of the list
        let firstEle = this.queue.shift();     // Dequeue from front (top of stack)
        this.queue.push(firstEle);
    }
}

StackImple.prototype.pop = function() {
    if(this.queue.length === 0) return 'Stack is empty';
    return this.queue.shift();
}

StackImple.prototype.top = function() {
    if(this.queue.length === 0) return 'Stack is empty';
    return this.queue[0];
}

StackImple.prototype.size = function() {
    return this.queue.length;
}

StackImple.prototype.empty = function() {
    return this.queue.length === 0;
}

let stackObj = new StackImple();
stackObj.push(1);
// console.log(stackObj.top());
stackObj.push(2);
stackObj.push(3);
console.log(stackObj.top());
stackObj.push(5);
console.log(stackObj.pop());
console.log(stackObj.top());
console.log(stackObj.size());

*/

// const arr = [1, 2, 3, 4, 5];

// const queueObj = new QueueImple(5);
// queueObj.push(1);
// queueObj.push(2);
// queueObj.push(3);
// console.log(queueObj.pop())
// console.log(queueObj.top())
// console.log(queueObj.pop())
// console.log(queueObj.top())

// Implement queue with stack

// when you perform stack operations top/pop -> it should get the old/ first inserted element
// but its a stack, so it will latest element

// will create a 2 stack array variable

// |  3  |         |  1  |  
// |  2  |         |  2  |
// |__1__|         |__3__|

// here we have 2 approaches
// push expensive 1. In push operation, will move all elements from S2 and push to S1
// pop expensive 
// will pop from S1 and push to S2, so that when we perform top/pop, will get old/ first inserted element

/*

// expensive push operation
var QueueImple = function(arr) {
    this.S1 = [];
    this.S2 = [];
    this.size = this.S2.length;
}

QueueImple.prototype.push = function(val) {

    // get all elements from S1 and push to S2
    while(this.S1.length) {
        this.S2.push(this.S1.pop());
    }
    // push the latest element on top of other elements
    this.S1.push(val);

    // now once again move from S2 to S1 (reversed) old elements will be on top
    while(this.S2.length) {
        this.S1.push(this.S2.pop());
    }
}

QueueImple.prototype.pop = function() {

    if(this.S2.length) {
        return this.S2.pop();
    }
    return 'Queue is empty'
}

QueueImple.prototype.top = function() {
    if(this.S2.length) {
        let ele = this.S2.pop();
        this.S2.push(ele);
        return ele;
    }
    return 'Queue is empty'
}

QueueImple.prototype.isEmpty = function() {
    return this.S2.length === 0;
}

*/

// expensive pop/top operation
// instead of each push, we are doing above operation like moving from S1 to S2, and then S2 to S1
// instead will transform(reverse) in pop(), S1 to S2, untill the S2 stack is empty, will try to get from S2. when S2 is empty, will transform from S1 to S2.

/*

var QueueImple = function(size) {
    this.S1 = new Array(size);
    this.S2 = new Array(size);
    this.size = size;
}

QueueImple.prototype.push = function(val) {
    if(this.size > this.S1.length) return 'Queue is Full';
    this.S1.push(val)
}

QueueImple.prototype.pop = function() {
    let s1Size = this.S2.length;
    let s2Size = this.S2.length;
    if(s1Size === 0 && s2Size === 0) return 'Queue is Empty';

    if(s2Size) {
        return this.S2.pop();
    }

    // pop and push from S1 to S2
    while(s1Size) {
        this.S2.pop(this.S1.pop())
    }
    return this.S2.pop();
}

QueueImple.prototype.top = function() {
    let s1Size = this.S2.length;
    let s2Size = this.S2.length;
    if(s1Size === 0 && s2Size === 0) return 'Queue is Empty';

    if(s2Size) return this.S2.pop();

    while(s1Size) {
        this.S2.push(this.S1.pop())
    }

    let ele = this.S2.pop();
    this.S2.push(ele);
    return ele;
}

QueueImple.prototype.isEmpty = function() {
    return !(this.S1.length || this.S1.length);
}

*/

// Implement Stack with Linked List

// stack - to keep track of last element, will create a node (top)

// head -> 3 -> 2 -> 1
// create a new top node
// we can use top as alias of end node
// in case of pop()
// move to next node and make it as a head



// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//     }
// }

// class StackImple {

//     constructor() {
//         this.topNode = null;
//         this.length = 0;
//     }

//     // normal flow create new node and assign to head.next 
//     // here first we will create the new node and its next will be previous head/top to make pop easily

//     push(val) {
//         let newNode = new Node(val);
//         newNode.next = this.topNode;
//         this.topNode= newNode;
//         this.length++;
//     }


//     pop() {
//         if (this.topNode === null) return 'Stack is Empty';
//         const temp = this.topNode;
//         this.topNode = this.topNode.next;
//         temp.next = null;
//         this.length--;
//         return temp.data;
//     }


//     top() {
//         if(this.topNode === null) return 'Stack is Empty';
//         return this.topNode.data;
//     }

//     isEmpty() {
//         return this.topNode === null;
//     }

//     size() {
//         return this.length;
//     }
// }

// const obj = new StackImple();

// // console.log(obj)
// obj.push(10);
// obj.push(20);
// // console.log(obj);

// obj.push(30);
// // console.log(obj);


// // console.log(`Top element - ${obj.top()}`);
// // obj.pop();
// // obj.pop();
// console.log(`Pop element ${obj.pop()}`);
// console.log(`Pop element ${obj.pop()}`);
// console.log(`Pop element ${obj.pop()}`);
// console.log(`Pop element ${obj.pop()}`);
// // console.log(`Pop element ${obj.pop()}`);
// // console.log(`Pop element ${obj.pop()}`);

// // console.log(`Pop element - ${obj.pop()}`);
// // console.log(obj.pop());
// console.log(obj);

// Implement queue using linked list
// will use 2 nodes start, end to track remove and push element

// on push assign new element to next of end

// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//     }
// }

// class ImpleQueue {
//     constructor() {
//         this.start = this.end = null;
//         this.length = 0;
//     }

//     push(val) {
//         let newNode = new Node(val);

//         if(this.start === null) {
//             this.start = newNode;
//             this.end = this.start;
//             this.length++;
//             return;   
//         }
//         this.end.next = newNode;
//         this.end = newNode;
//         this.length++;
//     }

//     pop() {
//         if(this.start === null) return "Queue is Empty";

//         let temp = this.start;
//         this.start = temp.next;
//         temp.next = null;
//         this.length--;
//         return temp.data;
//     }

//     top() {
//         if(this.start === null) return "Queue is Empty";
//         return this.start.data;
//     }

//     size() {
//         return this.length;
//     }

//     isEmpty() {
//         return this.start === null;
//     }
// }

// const obj = new ImpleQueue();
// obj.push(10);
// obj.push(20);
// obj.push(30);
// console.log(obj.top());
// console.log(obj.pop());
// console.log(obj);

// https://leetcode.com/problems/implement-stack-using-queues/description/?envType=problem-list-v2&envId=stack&difficulty=EASY

// Implement LIFO stack with queue


// stack
// pop/ top -> return last Element

// queue 
// pop/ top -> return first Element

// so on each push we need to reverse the queue, so that recent value will at bottom, on pop/top operation will returns expected element
// With 2 queue
// Q1
// Q2

// var ImpleStack = function() {
//     this.Q1 = [];
//     this.Q2 = [];
// }

// ImpleStack.prototype.push = function(val) {

//     this.Q2.push(val);

//     while(this.size()) {
//         this.Q2.push(this.Q1.shift());
//     }

//     let temp = this.Q1;
//     this.Q1 = this.Q2;
//     this.Q2 = temp;

// }
// ImpleStack.prototype.top = function() {
//     return this.Q1[0];
// }

// ImpleStack.prototype.pop = function() {
//     return this.Q1.shift();
// }

// ImpleStack.prototype.size = function() {
//     return this.Q1.length;
// }

// ImpleStack.prototype.isEmpty = function() {
//     return this.size === 0
// }


// const obj = new ImpleStack();
// obj.push(10);
// obj.push(20);

// console.log(obj)
// obj.push(30);
// console.log(obj.top());
// console.log(obj.pop());
// console.log(obj.pop());
// console.log(obj);

// to use single queue

// run a loop to swap the array

// var ImpleStack = function() {
//     this.Q = [];
// }

// ImpleStack.prototype.push = function(val) {

//     let size = this.size();

//     this.Q.push(val);
//     while(size) {
//         this.Q.push(this.Q.shift());
//         size--;
//     }
// }

// ImpleStack.prototype.pop = function() {
//     return this.Q.shift();
// }

// ImpleStack.prototype.top = function() {
//     return this.Q[0];
// }

// ImpleStack.prototype.isEmpty = function() {
//     return this.Q.size === 0;
// }

// ImpleStack.prototype.size = function() {
//     return this.Q.length;
// }

// const obj = new ImpleStack();
// obj.push(10);
// obj.push(20);

// // console.log(obj)
// // obj.push(30);
// // console.log(obj.top());
// // console.log(obj.pop());
// // console.log(obj.pop());
// console.log(obj.isEmpty());

// var MyQueue = function() {
//     this.S1 = [];
//     this.S2 = [];
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {

//     while(this.S1.length) {
//         this.S2.push(this.S1.pop());
//     }
//     this.S1.push(x);

//     while(this.S2.length) {
//         this.S1.push(this.S2.pop());
//     }

// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//     return this.S1.pop();
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//     let ele = this.S1.pop();
//     this.S1.push(ele);
//     return ele;
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//     return this.S1.length === 0
// };

// const obj = new MyQueue()
// obj.push(1);
// obj.push(2);
// obj.push(3);
// obj.push(4);
// console.log(obj.pop());
// obj.push(5);
// console.log(obj.pop());
// console.log(obj.pop());
// console.log(obj.pop());
// console.log(obj.pop());

// obj.empty()

// var MyQueue = function () {
//     this.S1 = [];
//     this.S2 = [];
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function (x) {
//     this.S1.push(x);
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function () {
// // S2 is the answer array

//     if (!this.S2.length) {
//         while (this.S1.length) {
//             this.S2.push(this.S1.pop());
//         }
//     }

//     return this.S2.pop();
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function () {
//     let ele = this.pop();
//     this.S2.push(ele);
//     return ele;
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function () {
//     return this.S1.length === 0 && this.S2.length === 0
// };

// const obj = new MyQueue()
// obj.push(1);
// obj.push(2);
// obj.push(3);
// obj.push(4);
// console.log(obj.pop());
// obj.push(5);
// console.log(obj.pop());
// console.log(obj.pop());
// console.log(obj.pop());
// console.log(obj.pop());


// https://leetcode.com/problems/next-greater-element-i/description/?envType=problem-list-v2&envId=stack&difficulty=EASY
// nextGreaterElement

// 1. Use monotonic stack (decreasing order)
// const arr1 = [2, 4];
// const arr2 = [1, 2, 3, 4];
// const arr2 = [4, 3, 2, 1];

// const arr1 = [4,1,2];
// const arr2 = [1,3,4,2];
// [3, 4, -1, -1]

// [-1, 3, -1]

// var nextGreaterElement = function(arr1, arr2) {
//     // loop arr2 and find greater elements of each element
//     let S = [];
//     let ans = [];
//     for(let i = arr2.length-1;  i >= 0; i--) {
//         while(S.length && arr2[i] >= S[S.length-1]) {
//             S.pop();
//         }

//         ans[i] = S[S.length-1] ?? -1;
        
//         S.push(arr2[i]);
//     }

//     console.log(ans);

//     let ans1 = arr1.map(ele => ans[arr2.indexOf(ele)]);
//     console.log(`${ans1}`);


// }


// approach 1:
// intution is for each element, find & hold the min element
// to hold the element, we can use map, why map ? we need pair, return element for pop/top operation
// key can be the element, value can be the min element <element, min element>
// key - current index Element, value - min element till now
// in case of pop of pair, each pair hold <element, min element>
// but the cache is, map can stimulate the LIFO machanism, so will use external index variable to maintain the index

// let ImpleStack = function() {
//     this.S = new Map();
//     this.index = 0;
//     // this.smallestElement;
// }

// ImpleStack.prototype.push = function(element) {

//     if(this.index === 0) {
//         this.S.set(this.index, {val:element, min:element});
//     } else {
//         let getMinimum = this.getMin();
//         let smallestElement = Math.min(getMinimum, element);
//         this.S.set(this.index, {val:element, min:smallestElement});
//     }
//     this.index++;
// }

// ImpleStack.prototype.getMin = function() {
//     // need to return last index value of value
//     // let v = this.S.get(this.index-1); 
//     return this.S.get(this.index-1).val;
// }

// ImpleStack.prototype.pop = function() {
//     let deleteElement =  this.S.get(this.index-1);
//     delete deleteElement;
//     this.index--;
//     return deleteElement.val;
// }

// ImpleStack.prototype.top = function() {
//     return this.S.get(this.index-1).val;
// }

// const obj = new ImpleStack();
// obj.push(10);
// obj.push(20);

// console.log(obj.top());
// console.log(obj.pop());
// console.log(obj.index);
// console.log(JSON.stringify(obj));

// approach 2:

// now will store the min Element in separate array
// let ImpleStack = function() {
//     this.S = [];
//     this.minElement = [];
//     // this.smallestElement;
// }

// ImpleStack.prototype.push = function(element) {

//     if(this.minElement.length === 0) {
//         this.S.push(element);
//         this.minElement.push(element);
//     } else {
//         this.S.push(element);
//         let getMinimum = this.getLastMin();
//         let smallestElement = Math.min(getMinimum, element);
//         this.minElement.push(smallestElement);
//     }
// }

// ImpleStack.prototype.getLastMin = function() {
//     // need to return last index value of value
//     // let v = this.S.get(this.index-1); 
//     return this.minElement[this.minElement.length-1];
// }

// ImpleStack.prototype.pop = function() {
//     let deleteElement =  this.S.pop();
//     this.minElement.pop();
//     return deleteElement;
// }

// ImpleStack.prototype.top = function() {
//     let element = this.S.pop();
//     this.S.push(element);
//     return element;
// }

// const obj = new ImpleStack();
// obj.push(10);
// obj.push(20);

// console.log(obj.top());
// console.log(obj.pop());
// // console.log(obj.index);
// console.log(JSON.stringify(obj));

// optimized approach

// to retain previous minimum element by using a formula to get store the resultant element to stack

// apply formula only when upcoming element is smaller than currentMini

// formula is 2 * val - currentMini = new element
// [20, 10, 5]

// stack operations

// push(20);
// push(10);
// getMin() => 10

// pop() => 10, in this operation, 
// 1. we need to change currentMini & get previous mini and need to remove element from stack  


// iterating 1- 20
// no element is present in the stack, so make currentMini as will and push to stack
// currentMini is 20

// iterating 2 - 10
// upcoming element 10 < currentMini, so apply formula

// formula - 2 * 10 - 20 => 0
// push the new value to stack, make 10 as currentMini element

// pop()
// how can we get previous minimum,
// in case, if currentMini > last pop Element from stack, why bcz we pushed new value to stack, 2 * val - currentMini < 0
// formula  2 * currentMini - new value poped element from stack
// 2 * 10 - 0 => 20 (previous minimum)

// formula derivation
// step1 - val - currentMini < 0
// step2 - add val on both side 2val - currentMini < val
// from above we can say that 
// new value = 2val - currentMini, so the result is alway smaller than the current element

// var ImplemGetMin = function(arr) {
//     this.S = [];
//     this.currentMin;
// }

// ImplemGetMin.prototype.push = function(val) {

//     if(!this.S.length) {
//         this.S.push(val);
//         this.currentMin = val;
//     } else {
//         if(val < this.currentMin) {
//             let newValue = 2 * val - this.currentMin;
//             // note: newValue always smaller than val
//             this.S.push(newValue);
//             this.currentMin = val;
//         } else {
//             this.S.push(val);
//         }
//     }
// }


// ImplemGetMin.prototype.pop = function() {

    
//     if(!this.S.length) return 'Stack is Empty';
//     let popedElement = this.S.pop();

//     if(popedElement < this.currentMin) {
//         // note bcz 
//         // we inserted newValue to stack and val to currentMin, so popedElement is small and we need to return currentMin
//         // retrieve the previous minimum
//         let val = this.currentMin;
//         this.currentMin = 2 * val - popedElement;
//         return val;
//     } else {
//         return popedElement;
//     }
// }

// ImplemGetMin.prototype.top = function() {
//     if(!this.S.length) return 'Stack is Empty';
//     let topElement = this.S[this.S.length-1];

//     return (topElement < this.currentMin) ? this.currentMin : topElement;
// }

// ImplemGetMin.prototype.getMin = function() {
//     if(this.S.length === 0) return 'Stack is Empty';
//     return this.currentMin;
// }


// // Test inputs

// // const arr = [10, 20, 30, 40];
// // const arr = [20, 10, 5, 1];

// const obj = new ImplemGetMin();

// console.log(`Top Element: ${obj.top()}`);

// obj.push(-2);
// obj.push(0);
// obj.push(-3);
// console.log(`Min Element: ${JSON.stringify(obj.getMin())}`)
// console.log(`Top Element: ${obj.pop()}`);
// console.log(`Top Element: ${obj.top()}`);
// console.log(`Min Element: ${JSON.stringify(obj.getMin())}`)

// console.log(`Top Element: ${JSON.stringify(obj)}`)


// const arr = [20, 10, 5, 1];
// const arr = [20, 20, 5];

// var nextGreaterElement = function(nums1, nums2) {
//     let S = [];
//     let keyMap = new Map();
//     let n = nums2.length;

//     for(let i = n-1; i >= 0; i--) {

//         while(S.length && nums2[i] >= S[S.length-1]) {
//             S.pop();
//         }

//         keyMap.set(nums2[i], S.length ? S[S.length-1] : -1)
//         // ans[i] = S.length ? S[S.length-1] : -1;
//         S.push(nums2[i]);
//         // if(S.lenght === 0) 
//     }
//     console.log(keyMap);
//     return nums1.map(ele => keyMap.get(ele));
// };

// let nums1 = [4,1,2], nums2 = [1,3,4,2];
// console.log(nextGreaterElement(nums1, nums2));

// nextGreaterElement2

// this 
// [1,5,3,6,8]

// expected o/p = [5,6,6,8,-1]
// result o/p = [5,6,5,8,-1]

// var nextGreaterElement2 = function(nums) {

//     let ans = [];

//     for(let i = 0; i < nums.length; i++) {

//         for(let j = 0; j < nums.length; j++) {
//             if(nums[i] < nums[j]) {
//                 ans[i] = nums[j];
//                 break;
//             }
//     }
//     if(!ans[i])
//     ans[i] = -1;
// }

// console.log(ans);
// }
// nextGreaterElement2([1, 2, 1]);


// var nextGreaterElement2 = function(nums) {

//     let n = nums.length; 
//     let nge = [];
    
//         for(let i = 0; i < n; i++) {
//             for(let j = i+1; j < i+n; j++) {
//                 let ind = j % n;
//                 if(nums[ind] > nums[i]) {
//                     nge[i] = nums[ind];
//                     break;
//                 }
//             }
//             // it will fail if nge[i] is 0
//             // if(!nge[i]) nge[i] = -1;
//             nge[i] = nge[i] ?? -1;
//     }
    
//     console.log(nge);
//     }
//     nextGreaterElement2([2, 10, 12, 1, 11]);

// similar to above we will use imaginary array
// var NGE = function(nums) {
//     let nge = [];
//     let S = [];
//     let n = nums.length;
//     //
//     for(let i = 2*n-1; i >= 0; i--) {
//         let ind = i%n;
//         while(S.length && nums[ind] >= S[S.length-1]) {
//             S.pop();
//         }

//         if(i < n) {
//             nge[i] = S[S.length-1] ?? -1;
//         }
//         S.push(nums[ind]);
//     }
//     console.log(nge);
// }

// // NGE([2, 10, 12, 1, 11]);
// NGE([1, 2, 1]);

// https://leetcode.com/problems/largest-rectangle-in-histogram/
// Histogram, return the largest rectangle

// 1. for each element try to find index of previous smallest element, next smallest element index (length * min element)
// find next smallest element index
// find prev smallest element index

// const NSE = function(arr) {
//     let n = arr.length;
//     let nse = [];
//     for(let i = 0; i < n; i++) {
//         for(let j = i+1; j < n; j++) {
//             if(arr[i] > arr[j]) {
//                 nse[i] = j--;
//                 break;
//             }
//         }
//         nse[i] = i ?? n;
//     }
//     console.log(`${nse}`);
// }

// const arr = [2, 1, 5, 6, 2, 3];
// NSE(arr);


// const PSE = function(arr) {
//     let n = arr.length;
//     let PSE = [];
//     for(let i = 0; i < n; i++) {
//         for(let j = i-1; j >= 0; j--) {
//             if(arr[i] > arr[j]) {
//                 PSE[i] = arr[j];
//                 break;
//             }
//         }
//         PSE[i] = PSE[i] ?? -1;
//     }
//     console.log(`PSE - ${PSE}`);
// }

// const arr = [2, 1, 5, 6, 2, 3];
// PSE(arr);

// go from back
// const getNSE = function(arr) {
//     let n = arr.length;
//     let NSE = [];
//     let S = [];

//     for(let i = n-1; i >= 0; i--) {
//         while(S.length && arr[i] <= arr[S[S.length-1]]) {
//             S.pop();
//         }

//         NSE[i] = S[S.length-1] ?? n;
//         S.push(i);
//     }

//     // console.log(`NSE - ${NSE}`);
//     return NSE;
// }

// const arr = [2, 1, 5, 6, 2, 3];
// NSE(arr);

// const getPSE = function(arr) {
//     let S = [];
//     let PSE = [];
//     let n = arr.length;

//     for(let i = 0; i < n; i++) {
//         while(S.length && arr[i] <= arr[S[S.length-1]]) {
//             S.pop();
//         }

//         PSE[i] = S[S.length-1] ?? -1;
//         S.push(i);
//     }

//     // console.log(`PSE - ${PSE}`);
//     return PSE;
// }

// const arr = [2, 1, 5, 6, 2, 3];
// PSE(arr);

// const LargestHistogram = function(arr) {
//     let largest = 0;
//     let n = arr.length;
//     let NSE = getNSE(arr);
//     let PSE = getPSE(arr);

//     for(let i = 0; i < n; i++) {
//         let NSEIndex = NSE[i];
//         let PSEIndex = PSE[i];

//         let area = arr[i] * (NSEIndex - PSEIndex -1);
//         console.log(`Index - ${i}, Individual Area - ${area}`);
//         largest = Math.max(area, largest);

//     }

//     console.log(`Largest Histogram - ${largest}`)
// }



// hey do we need both PSE, NSE to be calculated ? actually no
// we can calculate PSE on the fly, when calculating PSE, we will get NSE
// check notes

// et n = heights.length;
//     let largestHistogram = 0;
//     let S = [];

//     for(let i = 0; i < n; i++) {

//         while(S.length && heights[S[S.length-1]] >= heights[i]) {
//             let ele = S.pop();
//             let PSEIndex = S[S.length-1] ?? -1;
//             let NSEIndex = i;
//             let area = ele * (NSEIndex-PSEIndex-1);
//             largestHistogram = Math.max(area, largestHistogram);
//         }

//         S.push(i);
//     }


// const LargestHistogram = function(arr) {

//     let n = arr.length;
//     let S = [];
//     let largest = 0;

//     for(let i = 0; i < n; i++) {
//         while(S.length && arr[S[S.length-1]] >= arr[i]) {
//             let ele = S.pop();
//             let PSEIndex = S[S.length-1] ?? -1;
//             let area = arr[ele] * (i - PSEIndex - 1);
//             // console.log(`for ${prevInd} index, largest is ${area}`)
//             largest = Math.max(area, largest);
//         }

//         S.push(i);
//     }

//     while(S.length) {
//         let ele = S.pop();
//         let PSEIndex = S[S.length-1] ?? -1;
//         let NSEIndex = n;
//         let area = arr[ele] * (NSEIndex-PSEIndex-1);
//         largest = Math.max(area, largest);
//     }
//     console.log(largest)
// }

// const arr = [2, 1, 5, 6, 2, 3];
// const arr = [2, 4];
// const arr = [5, 4, 3, 2, 1];
// LargestHistogram(arr);

// leetcode discussion approach
// while (stack[stack.length - 1] !== -1 && heights[i] <= heights[stack[stack.length - 1]]) {
    //     const height = heights[stack.pop()];
    //     const width = i - stack[stack.length - 1] - 1;
    //     max_area = Math.max(max_area, height * width);
    // }


// Sliding Window, find maxi for 'K' intervals

// [1, 3 ,-1, -3, 5, 3, 7, 1, 6]

// how u will remove out of index elements
// track the index, if index <= i-k, start poping
// track the maxi, prevElement <= arr[i], pop()
// i >= k-1, push the largest element zeroth index element

// for(let i = 0; i < l; i++) {

//     // remove stack index 0th index, bcz its out the side k window
//     if(s.length && s[0] <= i-k) {
//         s.shift();
//     }
//     // no point of having same value, so >=
//     while(s.length && arr[i] >= arr[s[s.length-1]]) {
//         s.pop();
//     }
    
//     s.push(i);

//     if(i >= k-1) {
//         res.push(arr[s[0]]);
//     }

// }

// const maxKinterval = function(arr) {
//     let queue = [];
//     let res = [];
//     let n = arr.length;

//     for(let i = 0; i < n; i++) {

//         // checking index is under i-k
//         if(queue.length && queue[0] <= i-k) {
//              queue.shift();
//         }

//         // largest number at ascending order index
//         while(arr.length && arr[i] >= arr[queue[queue.length-1]]) {
//             queue.pop();
//         }
        
//         queue.push(i);

//         if(i >= k-1) {
//             res.push(arr[queue[0]]);
//         }

 
//     }
//     console.log(`Max arrays ${res}`);
// }

// // const arr = [1, 3, -1, -3, 5, 3, 7, 1, 6] , k = 3;
// const arr = [7, 6, 5, 4, 3, 2, 1] , k = 3;
// maxKinterval(arr, k);

// leetcode discussion

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// class Deque {
//     constructor() {
//         this.items = [];
//     }

//     // Check if deque is empty
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     // Push element to the back of the deque
//     pushBack(item) {
//         this.items.push(item);
//     }

//     // Pop element from the back of the deque
//     popBack() {
//         return this.items.pop();
//     }

//     // Push element to the front of the deque
//     pushFront(item) {
//         this.items.unshift(item);
//     }

//     // Pop element from the front of the deque
//     popFront() {
//         return this.items.shift();
//     }

//     // Get the element at the front of the deque
//     front() {
//         return this.items[0];
//     }

//     // Get the element at the back of the deque
//     back() {
//         return this.items[this.items.length - 1];
//     }

//     // Return the size of the deque
//     size() {
//         return this.items.length;
//     }
// }

// var maxSlidingWindow = function(nums, k) {
//     let result = []
//     let deque = new Deque()
//     for(let i = 0; i < k; i++) {
//         while(!deque.isEmpty() && nums[i] >= nums[deque.back()]) {
//             deque.popBack()
//         }
//         deque.pushBack(i)
//     }

//     for(let i = k; i < nums.length; i++) {
//         result.push(nums[deque.front()])
//         while(!deque.isEmpty() && deque.front() <= i-k) {
//             deque.popFront()
//         }
//         while(!deque.isEmpty() && nums[i] >= nums[deque.back()]) {
//             deque.popBack()
//         }
//         deque.pushBack(i)
//     }
//     result.push(nums[deque.front()])
//     return result
// };

// stock spanner

// var stockSpanner = function() {
//     this.stack = [];
//     this.cnt = 0;
//     this.ind = -1;

// }

// stockSpanner.prototype.next = function(val) {

//     this.ind = this.ind+1;
//     while(this.stack.length && val >= this.stack[this.stack.length-1]) {
//         this.stack.pop();
//     }

//     this.cnt = this.ind - (this.stack[this.stack.length-1] ?? -1);
//     this.stack.push(this.ind);
//     return this.cnt;
// }

// const obj = new stockSpanner();
// console.log(obj.next(100));
// console.log(obj.next(90));

// rain trapping

// const trappingWater = function(arr) {
//     let prefixMax = [];
//     let suffixMax = [];
//     let n = arr.length;
//     let tot = 0;

//     prefixMax[0] = arr[0];
//     for(let i = 1; i < n; i++) {
//         prefixMax[i] = Math.max(prefixMax[i-1], arr[i]);
//     }

//     suffixMax[n-1] = arr[n-1];
//     for(let i = n-2; i >= 0; i--) {
//         suffixMax[i] = Math.max(suffixMax[i+1], arr[i]);
//     }

//     for(let i = 0; i < n; i++) {
//         console.log(`${prefixMax[i]}, ${suffixMax[i]}, ${arr[i]}`)
//         tot += Math.min(prefixMax[i], suffixMax[i]) - arr[i];
//     }

//     console.log(`prefix - ${prefixMax}`);
//     console.log(`suffix - ${suffixMax}`);
//     console.log(`tot - ${tot}`);
// }

// const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 0];
            //  [0,1,0,2,1,0,1,3,2,1,2,1]

// const arr = [4,2,0,3,2,5];
// trappingWater(arr);


// const trappingWater = function(arr) {
//     let l = 0, r = arr.length-1;
//     let lmax = 0, rmax = 0; tot = 0;

//     while(l < r) {
//         if(arr[l] <= arr[r]) {
//             if(arr[l] > lmax) {
//                 lmax = arr[l];
//             } else {
//                 tot += lmax - arr[l];
//             }
//             l++;
//         } else {
//             if(arr[r] > rmax) {
//                 rmax = arr[r];
//             } else {
//                 tot += rmax - arr[r];
//             }
//             r--;
//         }
//     }

//     console.log(`Total - ${tot}`);
// }

// var trap = function(height) {
//     let lmax = 0;
//     let rmax = 0;
//     let tot = 0;
//     let l = 0, r = height.length-1;

//     while(l < r) {
//         if(height[l] <= height[r]) {
//             if(height[l] >= lmax) {
//                 lmax = height[l];
//             } else {
//                 tot += lmax-height[l];
//             }
//             l++;
//         } else {
//             if(height[r] >= rmax) {
//                 rmax = height[r];
//             } else {
//                 tot += rmax - height[r];
//             }  
//             r--;
//             }
//     }
//     console.log(`Total - ${tot}`);

//     // return tot;
// }

// const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// // const arr = [3, 1, 1, 3];
// trap(arr);


// remove k digits to make the smallest number

// 3 cases to be considered
// 1. nums and K are equal, so in that case need to return 0
// 2. atlast need to check stack and K, remove remaining K digits from stack, 
// 3. remove front leading zero's



// const smallestNo = function(num, k) {
//     let n = num.length;
//     let S = [];

//     // for(let digit of num) {
//     //     while(S.length && S[S.length-1] > digit) {
//     //         S.pop();
//     //         // k--;
//     //     }
//     //     if((!S.length && digit !== '0') || S.length)
//     //         S.push(digit);
//     // }

//     for(let number of num){

//         console.log(S.at(-1))
//         while( number < S.at(-1) && k > 0 && S.length !== 0){
//             S.pop();
//             k--;
//         }

//         S.push(parseInt(number));
//     }

   

//     // case 2, removing remaining K digits
//     while(k > 0) {
//         S.pop();
//         k--;
//     }

//     if(S.length === 0) {
//         return "0";
//     }

//     let res = S.join("");

//     // case 3, remove front leading zero's

//     return res;
//     console.log(`Smallest number is ${res}`);

// }


// const num = "1432219";
// const k = 1;
// // console.log(smallestNo(num, k));
// const arr = [1, 2, 3, 4 ,4];
// console.log(arr.at)

// normal input
// const num = "1432219";

// case 1, n and k are same
// const num = "432";
// const num = "123";

// const num = "10200"
// const k = 1;
// console.log(`Smallest number is ${smallestNo(num, k)}`);



// const smallestNo = function(num, k) {
//         let n = num.length;
//         let S = [];
//         for(let digit of num) {
//             while(S.length && S[S.length-1] > digit) {
//                 S.pop();
//             }
//             S.push(digit);
//         }
//         let res = S.join("");
//     }

// const num = "132";
// smallestNo(num);


// 2D matrix
// const arr = [
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 0, 0, 1, 0]
// ]


/*
const getLargestRect = function(arr) {
    const n = arr.length;
    const S = [];
    let largestRect = 0;

    for(let i = 0; i < n; i++) {
        while(S.length && arr[S[S.length-1]] > arr[i]) {
            let eleIndex = S.pop();
            let PSEIndex = S[S.length-1] ?? -1;
            let NSEIndex = i;
            largestRect = Math.max(largestRect, arr[eleIndex] * (NSEIndex-PSEIndex-1))
        }

        S.push(i);

    }

    while(S.length) {
        let eleIndex = S.pop();
            let PSEIndex = S[S.length-1] ?? -1;
            let NSEIndex = n;
            largestRect = Math.max(largestRect, arr[eleIndex] * (NSEIndex-PSEIndex-1))
    }

    console.log(`largestRect - ${largestRect}`);
    return largestRect;
}


// console.log(getLargestRect([ 3, 1, 3, 2, 3 ]))
const rowCalculate = function(arr) {
    const rowLen = arr.length;

    const colLen = arr[0].length;
    
    const preSum = new Array(rowLen).fill(0).map(() => new Array(colLen).fill(0));

    // console.log(rowSum);
    for(let col = 0; col < colLen; col++) {
        let sum = 0;
        for(let row = 0; row < rowLen; row++) {
            sum = (arr[row][col] === 0) ? 0 : sum + arr[row][col];
            preSum[row][col] = sum;
        }
    }

    let ans = 0;
    for(let i = 0; i < rowLen; i++) {
        ans = Math.max(getLargestRect(preSum[i]), ans);
    }
    console.log(ans);
}

rowCalculate(arr);
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */

// var getRectangle = function(arr) {
//     let S = [];
//     let n = arr.length;
//     let maxRect = 0;

//     for(let i = 0; i < n; i++) {
//         while(S.length && arr[S[S.length-1]] >= arr[i]) {
//             let eleInd = S.pop();
//             let PSEIndex = S[S.length-1] ?? -1;
//             let NSEIndex = i;
//             maxRect = Math.max(arr[eleInd] * (NSEIndex - PSEIndex -1), maxRect);
//         }

//         S.push(i);
//     }

//     while(S.length) {
//         let eleInd = S.pop();
//             let PSEIndex = S[S.length-1] ?? -1;
//             let NSEIndex = n;
//             maxRect = Math.max(arr[eleInd] * (NSEIndex - PSEIndex -1), maxRect);
//     }
//     console.log(`largestRect - ${maxRect}`);

//     return maxRect;
// }

// var maximalRectangle = function(matrix) {
    
//     // get row cnt, col cnt
//     const rowCnt = matrix.length;
//     const colCnt = matrix[0].length;
//     let maxRect = 0;

//     // preSum Matrix
//     const preSum = new Array(rowCnt).fill(0).map(() => new Array(colCnt).fill(0));

//     for(let col = 0; col < colCnt; col++) {
//         let sum = 0;
//         for(let row = 0; row < rowCnt; row++) {
//             sum = (matrix[row][col] == 0) ? 0 : sum + parseInt(matrix[row][col], 10);
//             preSum[row][col] = sum;
//         }
//     }

//     for(let i = 0; i < preSum.length; i++) {
//         maxRect = Math.max(getRectangle(preSum[i]), maxRect);
//     }
//     return maxRect;
// };

// // const arr1 = [
// //     ["1","0","1","0","0"],
// //     ["1","0","1","1","1"],
// //     ["1","1","1","1","1"],
// //     ["1","0","0","1","0"]
// // ];

// const arr1 = [
// ["0","0","1","0"],
// ["1","1","1","1"],
// ["1","1","1","1"],
// ["1","1","1","0"],
// ["1","1","0","0"],
// ["1","1","1","1"],
// ["1","1","1","0"]
// ]


// // const arr1 = [
// //     ["0", "1"],
// //     ["1", "0"],
// // ]

// console.log( maximalRectangle(arr1));
