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

    for(let i = 0; i < l; i++) {
        let min = arr[i];
        for(let j = i; j < l; j++) {
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
