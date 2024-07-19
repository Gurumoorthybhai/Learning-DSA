// let obj = {
//     name: 'obj',
//     age: 10
// }

// function changeName(obj) {
//     let temp = obj;

        // temp.name = 'abcd';
//     temp = null;

//     return temp;
// }

// console.log(changeName(obj));
// console.log(obj);

class dllNode {
    constructor(val, next, prev) {

        if(val) {
            this.data = val;
        }

        this.prev = prev;
        this.next = next;

    }
}

// array to dll

function dll(arr) {

// prev = null;
const head = new dllNode(arr[0], null, null);
let temp = head;

for(let i = 1; i < arr.length; i++) {
    let newNode = new dllNode(arr[i], null, temp);
    temp.next = newNode;
    temp = newNode;
}

return head;
}

function getCircularReplacer() {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return "[Circular]";
        }
        seen.add(value);
      }
      return value;
    };
  }



// const arr = [1];
const arr = [1, 2, 3, 4, 5];

const head = dll(arr);
// console.log(JSON.stringify(dll(arr), getCircularReplacer(), 2));


/*

// deletion
// 1. head
// 2. tail
// 3. random


function deleteHead(head) {
    
    // empty list or single node
    while(!head || !head.next) return null;
        
    let itr = head;

    head = itr.next;
    head.prev = null;
    itr.next = null;

    return head;
}

// console.log(JSON.stringify(deleteHead(head), getCircularReplacer(), 2));

function deleteTail(head) {
    
    // empty list or single node
    while(!head || !head.next) return null;

    let itr = head;

    while(itr.next) {
        itr = itr.next;
    }

    // tail node
    let prevNode = itr.prev;
    prevNode.next = null;
    itr.prev = null;
    return head;
}

// edge case: get length of ll, if k is lesser than 0 or k is greater than lenght of ll, return null
function deleteKthNode(head, k) {

    let len = 0;
    let itr = head;
    while(itr) {
        len++;
        itr = itr.next;
    }

    if(k < 0 || k > len) return null;

    let itr1 = head;
    let index = 0;

    while(itr1) {
        index++;
        if(index === k) break;
        itr1 = itr1.next;
    }
    
    let prev = itr1.prev;
    let next = itr1.next;

    if(prev === null) {
        // call delete method
        // if(itr1 )
        let prevHead = itr1;
        head = head.next;
        head.prev = null;
        prevHead.next = null;
        return head;
    } else if(next === null) {
        let prevNode = itr1.prev;
        itr1.prev = null;
        prevNode.next = null;
        return head;
    } else {
        prev.next = next;
        next.prev = prev;
        itr1.next = null;
        itr1.prev = null;
    }

    return head;
}
// console.log(JSON.stringify(deleteKthNode(head, 2), getCircularReplacer(), 2));

// k starts from 1 not 0
console.log(JSON.stringify(deleteKthNode(head, 3), getCircularReplacer(), 2));
// console.log(head);

*/

// insertion

// 1. before head



// 1. head
// 2. tail
// 3. kthNode

function beforeHead(head, value) {

    let newHead = new dllNode(value, head, null);
    head.prev = newHead;
    // head = newNode;
    return newHead;
}

// console.log(JSON.stringify(beforeHead(head, -1), getCircularReplacer(), 2));


function beforeTail(head, value) {

    let itr = head;

    while(itr.next) {
        itr = itr.next;
    }
    let tail = itr;
    let beforeTail = new dllNode(value ,tail, tail.prev);
    tail.prev.next = beforeTail;
    tail.prev = beforeTail;

    return head;
}

console.log(JSON.stringify(beforeTail(head, 6), getCircularReplacer(), 2));


/*

function insertAtHead(head, value) {

    if(head === null) {
        let newNode = new dllNode(value);
        head = newNode;
    }

    return head;
}

function insertAtTail(head, value) {
    let itr = head;

    while(itr.next) {
        itr = itr.next;
    }

    let newNode = new dllNode(value);
    newNode.prev = itr;
    itr.next = newNode;
    return head;
}



function insertAtKthNode(head, k, value) {

    let itr = head;
    let len = 0;

    if(head === null) {
        head = new dllNode(value);
        return head;
    }

    while(itr) {
        len++;
        itr = itr.next;
    }

    if(k <= 0 || k > len) return null;
    let index = 0;
    let itr2 = head;

    while(itr2) {
        index++;
        if(index === k) break;

        itr2 = itr2.next;
    }

    let prevNode = itr2.prev;
    let nextNode = itr2.next;

    // if - insert at head
    // else if - at tail
    // else - kth node

    if(prevNode === null) {
        newNode.next = head;
        head.prev = newNode;
        head = newNode;
    } else if(nextNode === null) {
        let oldTail = itr2;
        oldTail.next = newNode;
        newNode.prev = oldTail;
        tail = newNode;
    } else {
        // prevNode.next = nextNode;
        // nextNode.prev = prev
        let indexNode = itr2;
        let newNode = new dllNode(value, nextNode, prevNode);
        indexNode.prev = newNode;
        prevNode.next = newNode;

    }

    return head;

}

*/
