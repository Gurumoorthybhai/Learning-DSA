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
    //     // arr[i] >= stack.pop() if, we pop() out, even if its greater or lesser
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


