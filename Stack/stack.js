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

