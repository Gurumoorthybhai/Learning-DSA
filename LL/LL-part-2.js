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
const arr = [4, 8];

let head = LL(arr);

const arr1 = [1, 2, 3, 5, 6, 7];

let head2 = LL(arr1);

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