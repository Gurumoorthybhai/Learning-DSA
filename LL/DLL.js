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

        this.data = val;
        // if(val) {
        // }

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
// const arr = [1, 2, 3, 4, 5];

// all occurance

// const arr = [3, 1, 2, 3, 4, 5];
// const arr = [3, 1, 2, 3, 4, 3];


// const arr = [1, 3];

// const head = dll(arr);


// sorted dll
// const arr = [2, 0, 3, 6, 1, 5];
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

/*

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

*/

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

// ==========================================

// reverse a dll

// approach 1:
// 1. iterate dll & push data to stack
// 2. agin iterate & over write the dll with stack pop

// TC - O(2n) -> iteration + overwrite
// SC - O(n) -> stack

// approach 2:
// what we need to swap of prev, next node will reverse the dll

/*

console.log(JSON.stringify(reverseDLL(head), getCircularReplacer(), 2));


function reverseDLL(head) {

    if(!head || !head.next) return head;

    let itr = head;
    let prev = null;
    while(itr) {

        prev = itr.prev;
        itr.prev = itr.next;
        itr.next = prev;

        itr = itr.prev;
    }

    return prev.prev;

}

*/

// delete all the occurance of same key

/*

console.log(JSON.stringify(deleteOccurance(head, 3), getCircularReplacer(), 2));


function deleteOccurance(head, key) {

    if(!head || !head.next) return null;

    let itr = head;

    while(itr) {
        if(key === itr.data) {
            if(itr === head) {
                // let newHead = head.next;
                // head.next = null;
                // newHead.prev = null;
                head = head.next;
            }
            let prev = itr.prev;
            let next = itr.next;

            if(prev) {
                prev.next = next;
            }
            if(next) {
                next.prev = prev;
            }

            // to reset current node
            // keyNode.prev = null;
            // keyNode.next = null;
            itr = itr.next;

        } else {
            itr = itr.next;
        }
    }

    return head;
}

*/

// return the pair, if its equal to given sum

// sorted dll
const arr = [0, 1, 2, 3, 5, 6];
const target = 6;

// approach 1
// 1. first loop to iterate each node
// 2. second loop to each check with sum
let head = dll(arr);

console.log(returnPairSum(head, target));

/*

function returnPairSum(head, target) {
    let itr = head;
    let pair = [];

    while(itr) {

        let itr2 = itr.next;
        while(itr2) {
            if(itr.data + itr2.data === target) {
                pair.push([itr.data, itr2.data]);
            }
            itr2 = itr2.next;
        }
        itr = itr.next;

    }

    console.log(pair);

}

*/

// approach 2:
// 1. its given that array is sorted, will use 2 pointer
// TC - O(2n)

function returnPairSum(head, target) {
    let left = head;
    // let right = head;
    let itr = head;

    // O(n)
    while(itr.next) {
        itr = itr.next;
    }

    let right = itr;
    let pair = [];

    // O(n)
    while(left.data < right.data) {

        let sum = left.data+right.data;
        if(sum > target) {
            right = right.prev;
        } else if(target > sum) {
            left = left.next;
        } else {
            pair.push([left.data, right.data]);
            left = left.next;
            right = right.prev;
        }
    }
    console.log(pair);
}
