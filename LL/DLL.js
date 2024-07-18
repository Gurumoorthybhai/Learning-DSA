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

        this.next = next;
        this.prev = prev;

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



