class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

function LL(arr) {

    let head = new Node(arr[0]);
    let temp = head;
    for(let i = 1; i < arr.length; i++) {
        const newNode = new Node(arr[i]);
        temp.next = newNode;
        temp = temp.next;
    }

    return head;
}


/*

// const arr = [1, 2, 3, 4, 5, 6, 7];

// less than k size
const arr = [1, 2];
let head = LL(arr);

// reverse K-group
// 1. find the head and kth node, pass to reverse method
// 2. preserve the next group for linking

console.log(reverseKGroup(head, 3));
function reverseKGroup(head, k) {
    let temp = head;
    let prevNode = null;
    while(temp) {

        let kthNode = KthNode(temp, k);

        // if group's node length is less than K 
        if(kthNode === null) {

            // if we have prevNode, it shows we already have a node list
            if(prevNode) {
                prevNode.next = temp;
            } 

            break;
        } 
        // preserve next group's starting node
        let nextSet = kthNode.next;

        // end the kth node link
        kthNode.next = null;

        reverse(temp);
        
        // first group
        if(head === temp) {
            head = kthNode;
        } else {
            prevNode.next = kthNode
        }

        prevNode = temp;
        temp = nextSet;
    }

    return head;

}

function KthNode(temp, k) {
    // let temp1 = temp;

    while(temp && k) {
        k--;
        if(k === 0) return temp;
        temp = temp.next;
    }

    return null;
}

function reverse(head) {

    let temp = head;
    let next = null;
    let prev = null;

    while(temp) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }
    return prev;
}

*/

// ========================================================

// reverse the linked list k times
// get length of the ll, if k > length, take k = k%length
// get len - k node, bcz new last node make its next to null
// join the last node next to head of ll

// const arr = [1, 2, 3, 4, 5, 6, 7];

// TC - O(2n) 
// O(n) - len, O(n) - find new last node


// less than k
// const arr = [4, 8];

// let head = LL(arr);

// const arr1 = [1, 2, 3, 5, 6, 7];

// let head2 = LL(arr1);

// console.log(reverseKtime(head, 3));

// len, k are same

/*

console.log(reverseKtime(head, 2));

function reverseKtime(head, k) {

    if(!head) return head;

    let len = 0;
    let temp = head;

    while(temp.next) {
        len++;
        temp = temp.next;
    }
    len++;

    // no rotation change
    if(k % len === 0) return head;
    
    k = k % len;
    let temp2 = head;
    let lastNode = len-k;
    temp.next = head;
    while(temp2 && lastNode) {
        lastNode--;
        if(lastNode === 0) {
            head = temp2.next;
            temp2.next = null;
            return head;
        }
        temp2 = temp2.next;
    }

}

*/

// Merge the sorted 2 linked list

// initialize a dummy node, iterate and compare ll1, ll2

// console.log(JSON.stringify(head2));

/*
console.log(JSON.stringify(mergeLL(head, head2)));

function mergeLL(head, head2) {

    if(!head) return head2;
    if(!head2) return head;

    let dummyNode = new Node(-1);
    let temp = dummyNode;

    while(head && head2) {

        if(head.data >= head2.data) {
            temp.next = head2;
            // temp = head2;
                head2 = head2.next;

        } else {
            temp.next = head;
            // temp = head;
            head = head.next;
        }

        temp = temp.next;
    }

    if(head) {
        temp.next = head;
    }

    else {
        temp.next = head2;
    }

    return dummyNode.next;
}
    */

// =====================================================================================

// flat the child LL -> build a vertical node as child

// we can use recursion to merge from last


// i/p

// 1   2   3   4   5

// 8   9   7   10  6

// 12  15  14  11  13

// o/p

// vertically
// 1
// 2
// 3
// .
// .

/*

function childNode(...args) {

    // let args = arguments;
    let dummyHead = new Node(args[0][0]);

    let temp = dummyHead;
    // console.log(arguments);
    for(let j = 0; j < arguments.length; j++) {

        let ll = arguments[j];
        let head = new Node(ll[0]);

        let temp1 = head;
    for(let i = 1; i < ll.length; i++) {
        const newNode = new Node(ll[i]);
        temp1.child = newNode;
        temp1 = newNode;
    }
    temp.next = head;
    temp = head;
    }



    return dummyHead.next;
    // console.log(JSON.stringify(dummyHead.next));
}

let ll1 = [1, 5, 9, 13, 16];
let ll2 = [2, 6, 10, 14];
let ll3 = [3, 7, 11, 15];
let ll4 = [4, 8, 12];

const head = childNode(ll1, ll2, ll3, ll4);
console.log(JSON.stringify(flatLL(head)));

// N parent, M child
// TC -  O(N).2M(last 2 col) + 3M(last 3 col) + 4M(last 4 col)
// - O(N).M(2+3+4+...) => arithmic series => M*(M+1)/2, neglnating constant 1/2
// - O(N).M2+M => O(NM2)
function flatLL(head) {

    if(!head || !head.next) return head;

    let newHead = flatLL(head.next);

    return mergeChild(head, newHead);

}

function mergeChild(head, head2) {

let dummyNode = new Node(-1);
let temp = dummyNode;

while(head && head2) {

    if(head.data <= head2.data) {
        temp.child = head;
        temp = head;
        head = head.child;
    } else {
        temp.child = head2;
        temp = head2;
        head2 = head2.child;
    }
    temp.next = null;
}
 
if(head) {
    temp.child = head;
} else {
    temp.child = head2;
}

return dummyNode.child;

}

*/

// Merge the sorted k ll

// approach 1:
// loop all the ll and push into a new array
// sort the array and convert the array to ll nodes

// TC - O(n) + O(nlogn) + O(n)
// SC - O(n)

// approach 2:
// similar to previous prb recursion, will do with loop

let ll1 = [1, 5, 9, 13, 16];
let ll2 = [2, 6, 10, 14];
let ll3 = [3, 7, 11, 15];
let ll4 = [4, 8, 12];

let nodeLL1 = LL(ll1);
let nodeLL2 = LL(ll2);
let nodeLL3 = LL(ll3);
let nodeLL4 = LL(ll4);

console.log(mergeKsortedLL(nodeLL1, nodeLL2, nodeLL3, nodeLL4));

// O(n) + m(1+2+3+...) => n.m2 ~ n3
function mergeKsortedLL(...args) {

    let head = args[0];
    for(let i = 1; i < args.length; i++) {
        if(args[i].length === 0) {
            continue;
        }
        head = mergeLL(head, args[i]);
    }
    return head;
}

function mergeLL(head, head2) {

    let dummyNode = new Node(-1);
    let temp = dummyNode;
    
    while(head && head2) {
    
        if(head.data <= head2.data) {
            temp.next = head;
            temp = head;
            head = head.next;
        } else {
            temp.next = head2;
            temp = head2;
            head2 = head2.next;
        }
        temp.next = null;
    }
     
    if(head) {
        temp.next = head;
    } else {
        temp.next = head2;
    }
    
    return dummyNode.next;
    
    }

// approach 3: priority queue

// create a pq(priority queue) with only head
// create a dummy node and add by top() pair (integer, node) to get smallest number
// assign dummy next to top().second to get node and pop() to remove from pq
// move to next pq of specific node
// return dummynode.next

// TC - pq operation log k
// diff ll -> k * log k insertion to pq
// top & pop -> k * n * 3 log k

// TC - (k * log k) + k * n * log k
// SC - O(k * n)