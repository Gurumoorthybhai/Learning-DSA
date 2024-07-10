// Node
// contains a value and a address for next node

// methods in LL

// push(value)
// unshift(value)
// insert(index, value)

// above all of these methods, will create a new node/ add/insert

// pop()

// 1. zero node
// 2. one node
// 3. more than 1 node

// unshift (add at front)

// 1. zero node
// 2. more than 1 node

// shift, to test 3 scenario's

// 1. zero node
// 2. one node
// 3. more than 1 node

/*

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};


class LL{
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.length && !this.head) {
            return undefined;
        }
        let preNode = this.head;
        let temp = this.head; 
        while(temp.next) {
            preNode = temp;
            temp = temp.next;
        }
        this.tail = preNode;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return temp;
        }


    unshift(value) {
        const newNode = new Node(value);

        if(!this.head && this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;

    }

    shift() {

        if(!this.head && this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;

        // break the chain
        temp.next = null;
        this.length--;
        if(this.length === 0) {
            // its already set above i.e this.head = this.head.next;
            // this.head = null;
            this.tail = null;
        }

        return temp;
    }

    get(index) {

        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }

    set(index, value) {
        let getNode = this.get(index);

        // check, if node is present
        if(getNode) {
            getNode.value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) {
            return false;
        } 
        else if(index === 0) {
            return this.unshift(value);
        } else if(index === this.length) {
            return this.push(value);
        } else {

            const newNode = new Node(value);
            let tempNode = this.get(index-1);

            newNode.next = tempNode.next;
            tempNode.next = newNode;

            this.length++;
            
            return true;
        }
    }

    remove(index) {

        if(index < 0 || index >= this.length) return undefined
        else if(index === 0) {
            return this.shift();
        } else if(index === this.length-1) {
            return this.pop();
        } else {
            let prevNode = this.get(index-1);
            let tempNode = prevNode.next;

            prevNode.next = tempNode.next;
            tempNode.next = null;

            this.length--;
            return tempNode;
        }
    }

    reverse() {

        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null

        for(let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }
};

const LLObj = new LL(10);

*/

// console.log(LLObj);

// push new Node

/*

const afterPush = LLObj.push(20);

console.log(afterPush);

*/

/*

const pop = LLObj.pop();

// more than > 1 node

console.log(" more than > 1 node ", pop);

console.log(LLObj);

// 1 node

const pop1 = LLObj.pop();
console.log(" 1 node ",pop1);

console.log(LLObj);


// no nodes

const pop2 = LLObj.pop();
console.log(" no node ",pop2);

console.log(LLObj);
*/

// unshift

// console.group(" Unshift ");

// console.log(LLObj.unshift(0));

// console.log(LLObj);

// console.groupEnd(" Unshift ");
// console.log(LLObj);


// shift, to test 3 scenario's


// LLObj.push(20);

// 20 -> 10

// console.log(" shift ");
// console.log(LLObj);

// only node 10

// console.log(" shift ", LLObj.shift());

// console.log(LLObj);

// no node
// console.log(" shift ",LLObj.shift());

// console.log(LLObj);


// get value by index

// LLObj.push(20);

// LLObj.push(30);

// console.log(LLObj);

// console.log(LLObj.get(1));

// console.log(LLObj.set(3, 40));

// console.log(LLObj);



// insert
// insert at index 0

// console.log(LLObj.insert(0, -1));

// insert at end
// console.log(LLObj.insert(2, 20));


// insert at specific index

// console.log(LLObj.insert(1, 40));

// console.log(LLObj)

// console.log(LLObj.insert(0, -1));
// LLObj.push(20);

// LLObj.push(30);

// remove

// LLObj.push(20);
// LLObj.push(30);

// remove index = 0
// console.log(LLObj.remove(0));

// remove index = end of list
// console.log(LLObj.remove(2));

// at specific index
// console.log(LLObj.remove(1));

// console.log(LLObj.remove(-1));
// console.log(LLObj.remove(3));


// reverse

// LLObj.push(20);
// LLObj.push(30);
// LLObj.push(40);

// console.log(LLObj);

// console.log(LLObj.reverse());

/*

 class Node{
      constructor(data){
          this.data = data;
          this.next = null;
      }
  }


class Solution {
    //Function to construct linked list from given array.
    constructor(arr)
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
        
        let temp = new Node(arr[0]);
        this.head = temp;

        for(let i = 1; i < arr.length; i++) {
            temp.next = new Node(arr[i]);
            temp = temp.next;
        }
        
        return this.head;
    }
        
        // push(value) {
        //     let newNode = new Node(value);
            
        //     if(!this.head) {
        //         this.head = newNode;
        //         this.tail = this.head;
        //     } else {
        //         this.tail.next = newNode;
        //         this.tail = newNode;
        //     }
            
        //     this.length++;
        // }
}

const LLobj = new Solution([1, 2, 3, 4, 5]);

console.log(LLobj);


class Solution {
    //Function to construct linked list from given array.
    construct(arr, n)
    {
        //your code here
        let head = new Node(arr[0]);
        let current = head;
        let i = 1;
        while ( i < arr.length) {
            current.next = new Node(arr[i]);
            current = current.next;
            i++;
        }
        return head;
    }


    lass Solution {
        //Function to reverse a linked list.
        reverseList(head)
        {
            let curr = head;
            let prev = null;
            let next = null;
            while(curr !== null){
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            head = prev;
            return head;
        }
*/

// check the given linked list is a palindrome or not

/*

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(1);
// const four = new Node();

one.next = two;
two.next = three;
// three.next = four;

const condition = isPalindrome(one);

console.log(condition);

function isPalindrome(head) {

    let temp = head;
    let isPalindrome = true;
    let stack = [];

    while(temp) {
        stack.push(temp.data);
        temp = temp.next;
    }

    while(head) {

        const ele = stack.pop();

        if(head.data === ele) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
            break;
        }

        head = head.next;
    }

    return isPalindrome;

}

*/

// class Node {
//     constructor(value) {
//         this.data = value;
//         this.next = null;
//     }
// }

// class LL {
//     constructor(value) {
//         const newNode = new Node(value);
//         this.head = newNode;
//         this.tail = this.head;
//     }

//     push(value) {

//         const newNode = new Node(value);

//         if(!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//             return this;
//         }

//         this.tail.next = newNode;
//         this.tail = newNode;
//         return this;
//     }
// }


/*
const LL1 = new LL(10);

LL1.push(20);
LL1.push(30);
LL1.push(40);

const LL2 = new LL(1);

LL2.push(2);
LL2.push(3);
LL2.push(4);

// console.log(LL1);

function reverse(head) {
    let curr = head;
    let prev = null;
    let next = curr.next;

    while(curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    return head;

}

function add(LL1, LL2) {


    // console.log(" Before ");
    // console.log(LL1);
    // console.log(LL2);
    // let temp2 = reverse(LL2);

    let temp1 = reverse(LL1.head);
    let temp2 = reverse(LL2.head);

    // console.log(" After ");


    // console.log(temp1);
    // console.log(temp2);

    let dummy = new Node(0);
    let carry = 0;

    // help to return as final result
    let curr = dummy;

    while(temp1 || temp2) {

        let sum = carry;
        if(temp1.data) sum += temp1.data;
        if(temp2.data) sum += temp2.data;

        rem = sum % 10;
        carry = parseInt(sum/10, 10);

        curr.next = new Node(rem);
        curr = curr.next;

        if(temp1) temp1 = temp1.next;
        if(temp2) temp2 = temp2.next;
    }

    if (carry > 0) {
        curr.next = new Node(carry);
    }

    console.log(JSON.stringify(dummy));
}


// LL1 -> 10 -> 20 -> 30 -> 40
// LL2 -> 1 -> 2 -> 3 -> 4

// first we need to reverse the LL to sum them, bcz we to sum from unit digits
add(LL1, LL2);

*/

// arrange even number first than odd number
// i/p: 8 -> 7 -> 10 -> 5 -> 4 -> 1 -> 6
// o/p: 8 -> 10 -> 4 -> 6 -> 7 -> 5 -> 1

// let LLObj = new LL(8);
// LLObj.push(7);
// LLObj.push(10);
// LLObj.push(5);
// LLObj.push(4);
// LLObj.push(1);
// LLObj.push(6);


/*

let LLObj = new LL(2);
LLObj.push(3);
LLObj.push(4);
LLObj.push(5);
LLObj.push(6);


segregate(LLObj.head);

function segregate(head) {
    let end = head;
    let curr = head;
    let even = null;

    while(end.next != null) {
        end = end.next;
    }

    let odd = end;

    if(curr.data % 2 === 0) {
    while(curr != end) {
        if(curr.data % 2 == 0) {
            even = curr;
            curr = curr.next;
        } else {
            even.next = curr.next;

            curr.next = null;
            odd.next = curr;
            odd = curr;
            curr = even.next;
        }
    }
    } else {
        even = curr;
    }

    if (odd != end && end.data % 2 != 0) {
        even.next = end.next;
        end.next = null;
        odd.next = end;
    }

}

*/

// console.log(LLObj);

/*

var head;


class Node1 {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

    function push(val) {
        let newNode = new Node1(val);

        newNode.next = head;

        head = newNode;
    }

    function printList() {
        let temp = head;
        while(temp) {
            console.log(`${temp.data} => `);
            temp = temp.next;
        }
    }


push(5);
push(8);
push(3);

segregate();
printList();

function segregate() {
    let end = head;
    let curr = head;
    let even = null;

    while(end.next != null) {
        end = end.next;
    }

    let odd = end;
    while (curr.data % 2 != 0 && curr != end) {
        odd.next = curr;
        curr = curr.next;
        odd.next.next = null;
        odd = odd.next;
    }

    if(curr.data % 2 === 0) {
        head = curr;
    while(curr != end) {
        if(curr.data % 2 == 0) {
            even = curr;
            curr = curr.next;
        } else {
            even.next = curr.next;

            curr.next = null;
            odd.next = curr;
            odd = curr;
            curr = even.next;
        }
    }
    } else {
        even = curr;
    }

    if (odd != end && end.data % 2 != 0) {
        even.next = end.next;
        end.next = null;
        odd.next = end;
    }

}

*/

/*


class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LL {
    constructor(val) {
        if(val) {
        const newNode = new Node(val);
        this.data = newNode;
        this.next = null;
        }
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this;
    }

}

let LLobj = new LL();

*/


/*

LLobj.push(2);
LLobj.push(3);
LLobj.push(4);
LLobj.push(5);

*/
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// console.log(node1);

// place odd index node first then even

/*
// better approach

const arr = [];

let temp = node1;
while(temp && temp.next) {
    arr.push(temp.data);
    temp = temp.next.next;
}
// last odd node
if(temp)
arr.push(temp.data);

let temp1 = node1.next;
while(temp1 && temp1.next) {
    arr.push(temp1.data);
    temp1 = temp1.next.next;
}

// last even node
if(temp1)
arr.push(temp1.data);

console.log(arr);

*/
/*

oddEven(node1);
function oddEven(head) {

if(!head || !head.next) return head;

let oddNode = head;
let evenStart = head.next;
let evenNode = head.next;


// adding only even, bcz odd ends before even
while(evenNode && evenNode.next) {

    oddNode.next = oddNode.next.next;
    evenNode.next = evenNode.next.next;

    oddNode = oddNode.next;
    evenNode = evenNode.next;

    // oddNode.next = evenNode.next;
    // oddNode = oddNode.next;

    // evenNode.next = oddNode.next;
    // evenNode = evenNode.next;
}

oddNode.next = evenStart;

console.log(JSON.stringify(head));
}

*/
// ======================================

/*

// sort 0's, 1's and 2's

// cnt the each numbers (0, 1, 2)
// re-write the node with cnt values

LLobj.push(2);
LLobj.push(1);
LLobj.push(1);
LLobj.push(1);
LLobj.push(2);
LLobj.push(0);

// console.log(JSON.stringify(LLobj));



sortNumbers(LLobj.head);

function sortNumbers(head) {
let cntZero = 0;
let cntOne = 0;
let cntTwo = 0;

let temp = head;

/*

while(temp) {
    if(temp.data === 0) cntZero++;
    else if(temp.data === 1) cntOne++;
    else cntTwo++;
    temp = temp.next;
}

let temp1 = head;
while(temp1) {
    if(cntZero) {
        temp1.data = 0;
        cntZero--;
    }
    else if(cntOne) { 
        temp1.data = 1;
        cntOne--;
    }
    else if(cntTwo) { 
        temp1.data = 2;
        cntTwo--;
    }
    temp1 = temp1.next;
}

*/

/*

// alternate approach

let cnt = [0, 0, 0];

while(temp) {
    cnt[temp.data]++;
    temp = temp.next;
}

let temp1 = head;
let i = 0;
while(temp1) {

    if(cnt[i] === 0) {
        i++
    } else {
        temp1.data = i;
        --cnt[i];
        temp1 = temp1.next;
    }

}

console.log(cnt);

console.log(JSON.stringify(head))
}
*/

// approach 2
// create a sepearate dummy node for 0, 1, 2, link them

/*

LLobj.push(2);
LLobj.push(1);
LLobj.push(1);
LLobj.push(1);
LLobj.push(2);
LLobj.push(0);

sortNumbers(LLobj.head);

function sortNumbers(head) {

    let zeroHead = new Node(-1);
    let oneHead = new Node(-1);
    let twoHead = new Node(-1);

    // looping
    let zeroNode = zeroHead;
    let oneNode = oneHead;
    let twoNode = twoHead;

    if (!head && !head.next) return head;

    let temp = head;

    while (temp) {
        // console.log(` - ${temp.data}`);

        switch (temp.data) {
            case 0: {
                zeroNode.next = temp;
                zeroNode = temp;
                break;
            }
            case 1: {
                oneNode.next = temp;
                oneNode = temp;
                break;
            }
            case 2: {
                twoNode.next = temp;
                twoNode = temp;
                break;
            }
            default: {
                console.log(`default - ${temp.data}`);
                break;
            }
        }

        temp = temp.next;
    }

    zeroNode.next = oneHead.next ? oneHead.next : twoHead.next;
    oneNode.next = twoHead.next;
    twoNode.next = null;
    let newHead = zeroHead.next;

    zeroHead = null;
    oneHead = null;
    twoHead = null;
    // console.table(zeroHead.next);
    console.log(JSON.stringify(newHead));

}
    */

// ===============================

// delete nth node from back

/*

LLobj.push(1);
LLobj.push(2);
LLobj.push(3);
LLobj.push(4);
LLobj.push(5);

let deleteNode = 3;


function deleteNnode(deleteNode) {

    let temp = LLobj.head;
    let length = 0;
    while(temp) {
        length++;
        temp = temp.next;
    }

    if(deleteNode < 0 || deleteNode > length) return 0;

    let temp1 = LLobj.head;
    // edge case for head 0

    if(length === deleteNode) return temp1.next;
    let deleteIndex = length-deleteNode;

    while(temp1) {
        deleteIndex--;
        if(deleteIndex === 0) {
            let deleteNode = temp1.next;
            temp1.next = deleteNode.next;
            return LLobj.head;
        }
        temp1 = temp1.next;
    }
}

console.log(`Before deleting node , ${JSON.stringify(LLobj)}`);

console.log()
console.log()
console.log()
console.log(`After deleting node , ${JSON.stringify(deleteNnode(deleteNode))}`);

*/

// fastPtr moves till delete node
// slowPtr will move prev of delete node

// TC - fastnode O(n) + slowNode O(n-k)

/*

function deleteNnode(N) {
    let temp = LLobj.head;

    let fastPtr = LLobj.head;
    let slowPtr = LLobj.head;

   for(let i = 0; i < N; i++) {
        fastPtr = fastPtr.next;
    }

    if(!fastPtr) return temp.next; 
    while(fastPtr.next) {
        fastPtr = fastPtr.next;
        slowPtr = slowPtr.next;
    }


    let deleteNode = slowPtr.next;
    slowPtr.next = deleteNode.next;

    return LLobj.head;
}

console.log(JSON.stringify(deleteNnode(deleteNode)));

*/


// reverse a linked list
// using stack TC - O(n) , SC - O(n)
// link changing TC - O(n)
// using recursion

// LLobj.push(1);
// LLobj.push(2);
// LLobj.push(3);
// LLobj.push(4);
// LLobj.push(5);
//even length
// LLobj.push(6);


// palindrome

// LLobj.push(1);
// LLobj.push(2);
// LLobj.push(3);
// LLobj.push(3);
// LLobj.push(2);
// LLobj.push(1);


// add one

// with last carry
// LLobj.push(1);
// LLobj.push(9);
// LLobj.push(9);

// o/p 2 -> 0 -> 0

// with carry
// LLobj.push(9);
// LLobj.push(9);
// LLobj.push(9);

// o/p 1 -> 0 -> 0 -> 0

// wihtout carry

// LLobj.push(9);
// LLobj.push(9);
// LLobj.push(8);

// o/p  9 -> 9 -> 9


/*

function reverseList() {

    let temp = LLobj.head;
    let stack1 = [];

    while(temp) {
        stack1.push(temp.data);
        temp = temp.next;
    }

    let temp1 = LLobj.head;

    while(temp1) {
        temp1.data = stack1.pop();
        temp1 = temp1.next;

    }

    return LLobj.head;
}

console.log(JSON.stringify(reverseList()));
*/

// recursion

/*

function reverseList(head) {

    if(!head || !head.next) return head;

    let newHead = reverseList(head.next);
    let prev = head.next;
    prev.next = head;
    head.next = null;
    return newHead;
}

console.log(JSON.stringify(reverseList(LLobj.head)));

*/

// ========================

// find middle of the linked list
// count the length, find mid with this formula (N/2+1)
// TC - O(n + n/2)


/*

function returnMiddleNode() {
    let temp = LLobj.head;
    let len = 0;

    while(temp) {
        len++;
        temp = temp.next;
    }

    let middleIndex = parseInt((len/2),10)+1;
    let temp1 = LLobj.head;


    while(middleIndex) {
        middleIndex--;
        if(middleIndex === 0) {
            return temp1;
        }
        temp1 = temp1.next;
    }
}

*/

// Tortoise and hare algorithm
// tortoise will be traveling  N distance
// hare will be traveling N/2, once tortoise reaches N, hare will be reaching N/2, return hare
// TC - O(n)

/*

function returnMiddleNode() {
    let fastPtr = LLobj.head;
    let slowPtr = LLobj.head;

    while(fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = slowPtr.next.next;
    }

    return slowPtr;
}
// odd index-3 of length 5
// even index-4 of length 6
console.log(JSON.stringify(returnMiddleNode()));
*/

// Check the given linked list is palindrome or not
// using tortoise and hare method
// find the middle, reverse 2nd half
// compare head with reversed New head
// reverse the 2nd half as its input, return true or false

/*

function palindromeOrNot() {

    let slowPtr = LLobj.head;
    let fastPtr = LLobj.head;

    // odd no.of.node fastPtr.next should be null
    // even no.of.node fastPtr.next.next should be null
    while(fastPtr.next && fastPtr.next.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }

    // step2: reverse the 2nd half
    let newNode = reverse(slowPtr.next);
let temp1 = LLobj.head;
let temp2 = newNode;
    while(temp2) {

        if(temp1.data !== temp2.data) {
            reverse(newNode);
            return false;
        }
        temp1 = temp1.next;
        temp2 = temp2.next;
    }

    reverse(newNode);
    return true;


}

function reverse(head) {

    let temp = head;
    let prev = null;
    let tempNext = temp.next;

    while(temp) {
        tempNext = temp.next;
        temp.next = prev;
        prev = temp;
        temp = tempNext;
    }
    head = prev;
    return head;
}

console.log(palindromeOrNot());
console.log(JSON.stringify((LLobj.head)));

*/

// Add 1 to LL


// add one

// with last carry
// LLobj.push(1);
// LLobj.push(9);
// LLobj.push(9);

// o/p 2 -> 0 -> 0

// with carry
// LLobj.push(9);
// LLobj.push(9);
// LLobj.push(9);

// o/p 1 -> 0 -> 0 -> 0

// wihtout carry

// LLobj.push(9);
// LLobj.push(9);
// LLobj.push(8);

// o/p  9 -> 9 -> 9

/*

function addone() {
    // let temp = LLobj.head;

    // reverse the LL, add starts from unit digits
    let reverseNode = reverse(LLobj.head);

    let temp = reverseNode;
    let carry = 1;

    while(temp) {
        temp.data = temp.data + carry;

        // if temp data is less than 10, only specific node will be updated, no carry to passed so break
        if(temp.data < 10) {
            carry = 0;
            break;
        }
        // max value can be 10, so storing last digit 0
        temp.data = 0;
        temp = temp.next;
    }

    let newNode = reverse(reverseNode);

    // if still we have carry, we need to create new node and append to head
    if(carry) {
        let carryNode = new Node(carry);
        carryNode.next = newNode;
        return carryNode;
    }

    return newNode;
}

console.log(JSON.stringify(addone()));
function reverse(head) {

    let temp = head;
    let prev = null;
    let tempNext = temp.next;

    while(temp) {
        tempNext = temp.next;
        temp.next = prev;
        prev = temp;
        temp = tempNext;
    }
    head = prev;
    return head;
}

*/

/*

function reverse(head) {

    function recursiveSum(head) {
    if(!head) return 1;

    const carry = recursiveSum(head.next);
    head.data = head.data + carry;
    if(head.data < 10) {
        return 0;
    }
    head.data = 0;
    return 1;
}
let temp = head;
let carry = recursiveSum(temp);

// create carry node if any
if(carry) {
    const newHead = new Node(carry);
    newHead.next = temp;
    return newHead;
}
return temp;
}

console.log(JSON.stringify(reverse(LLobj.head)));
*/

// Y intersection, find the first intersection pt

// put any single list to map, iterate and compare with another ll


// intersection at 4

// LLobj.push(1);
// LLobj.push(2);
// LLobj.push(3);
// LLobj.push(4);
// LLobj.push(5);
// LLobj.push(10);
// LLobj.push(11);

// let LLobj1 = new LL();

// LLobj1.push(12);
// LLobj1.push(4);
// LLobj1.push(5);
// LLobj1.push(10);
// LLobj1.push(11);

// no intersection

// LLobj.push(1);
// LLobj.push(2);
// LLobj.push(3);
// LLobj.push(4);
// LLobj.push(5);
// LLobj.push(10);
// LLobj.push(11);

// let LLobj1 = new LL();

// LLobj1.push(12);
// LLobj1.push(13);
// LLobj1.push(14);
// LLobj1.push(15);
// LLobj1.push(16);
// LLobj1.push(17);
// LLobj1.push(18);
// LLobj1.push(19);


// equal lenght, but no intersection

// LLobj.push(3);
// LLobj.push(4);
// LLobj.push(5);
// LLobj.push(10);
// LLobj.push(11);

// let LLobj1 = new LL();

// LLobj1.push(12);
// LLobj1.push(13);
// LLobj1.push(14);
// LLobj1.push(15);
// LLobj1.push(16);


// LLobj1.push(intersection);

// console.log(JSON.stringify(LLobj));
// console.log(JSON.stringify(firstIntersection()));

/*

// TC = O(n * set map operation) => O(n * constant time) or O(n * log n) bcz of collision
// SC = O(n) bcz of map

function firstIntersection() {
    let temp1 = LLobj.head;
    let temp2 = LLobj1.head;
    let ll1map = new Map();

    while(temp1) {
        ll1map.set(JSON.stringify(temp1, 1));
        temp1 = temp1.next;
    }

    // console.log((ll1map));
    while(temp2) {
        let t2 = JSON.stringify(temp2);
        if(ll1map.has(t2)) return JSON.parse(t2);
        temp2 = temp2.next;
    }

    // if no intersection found return null
    return null;

}

*/


// if both ll are same leng, its easy to compare return the node
// find length of both ll list, find the diff, move the min lengthed ll till diff

// TC = O(n) + O(n) => calculate len1 + len2
// move O(diff(l1, l2) + compare O(min(l1, l2))

/*


function firstIntersection() {
    let temp1 = LLobj.head;
    let temp2 = LLobj1.head;

    let ll1Len = 0;
    let ll2Len = 0;

    while(temp1) {
        ll1Len++;
        temp1 = temp1.next;
    }

    while(temp2) {
        ll2Len++;
        temp2 = temp2.next;
    }
    
    let compL1Head = LLobj.head;
    let compL2Head = LLobj1.head;

    if(ll1Len < ll2Len) {
        return intersectionNode(compL1Head, compL2Head, ll2Len - ll1Len);
    } else {
        return intersectionNode(compL2Head, compL1Head, ll1Len - ll2Len);
    }

}


function intersectionNode(head1, head2, d) {

    while(d) {
        d--;
        head2 = head2.next;
    }

    while(head1 && head2) {
        if(JSON.stringify(head1) === JSON.stringify(head2)) return head1;
        head1 = head1.next;
        head2 = head2.next;
    }
    // null
    return head1;
}
    */

// optimised approach

// TC - O(L1 + L2)

/*
function firstIntersection() {

    let temp1 = LLobj.head;
    let temp2 = LLobj1.head;

    if(!temp1 || !temp2) return null;

    let first = LLobj.head;
    let second = LLobj1.head;


   

    while(temp1 !== temp2) {

        if(JSON.stringify(temp1) === JSON.stringify(temp2)) return temp1;

        temp1 = temp1.next;
        temp2 = temp2.next;

        // if smallest LL reaches end, assign to another LL, so that once upon a time, we will start with equal length

        if(!temp1) temp1 = second;
        if(!temp2) temp2 = first;

    }
    // null, it reached end, if there is no intersection
    return temp1
}
*/

// Detect a loop in a ll

// brute force approach
// loop and find the node, if u already meet


class Node{
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function createCyclicNode(arr, cyclicIndex) {

let head = new Node(arr[0]);
let temp = head;
let cyclicNode = null;

for(let i = 0; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    temp.next = newNode;
    temp = temp.next;

    if(i === cyclicIndex) cyclicNode = temp;
}

temp.next = cyclicNode;

// console.log((head));
return head;
}

// const arr = [1, 2, 3 ,4, 5, 6, 7, 8];

const arr = [1, 2, 3];

// with cyclinc node
// const head = createCyclicNode(arr, 2);

// without cyclinc node
let head = createCyclicNode(arr, 0);

// console.log(head);

// while(head) {
//     console.log(head);
//     head = head.next;
// }
// console.log(detectCyclic(head));
// brute force approach, return true if they are cyclic or false

// loop the ll and store them in set and if u encounter next time, its cyclinc

// TC - O(n)
// SC - O(n)

/*

function detectCyclic(head) {

    let temp = head;
    let nodeMap = new Set();

    while(temp) {

        const currNode = temp;
        if(nodeMap.has(currNode)) return true;
        nodeMap.add(currNode);
        temp = temp.next;
    }

    return false;
}

*/

// with slow/ fast ptr
// TC - O(n)

// function detectCyclic(head) {

//     let slowPtr = head;
//     let fastPtr = head;

//     while (fastPtr && fastPtr.next) {

//         slowPtr = slowPtr.next;
//         fastPtr = fastPtr.next.next;

//         if (slowPtr === fastPtr) {
//             return true;
//         }
//     }

//     return false;
// }


// =======================================================

// find the length of the loop
// TC - O(n)
// SC - O(n)

// console.log(lengthOfLoop(head));

/*

function lengthOfLoop(head) {

    if(!head) return null;
    let temp = head;
    const nodeMap = new Map();
    let ind = 1;
    while(temp) {

        if(nodeMap.has(temp)) {
            return ind-nodeMap.get(temp);
        }

        nodeMap.set(temp, ind);
        temp = temp.next;
        ind++;
    }

    return 0;
}
    */

console.log(lengthOfLoop(head));

function lengthOfLoop(head) {

    if(!head) return null;
    let slowPtr = head;
    let fastPtr = head;
    let len = 0;

    while(fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;

        if(slowPtr === fastPtr) {
            len++;
            fastPtr = fastPtr.next;
            while(slowPtr !== fastPtr) {
                len++;
                fastPtr = fastPtr.next;
            }
            return len;
        }
    }
    return len;
}