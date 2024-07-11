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


const arr = [1, 2, 3, 4, 5, 6, 7];
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