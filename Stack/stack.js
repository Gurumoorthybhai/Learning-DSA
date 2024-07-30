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
