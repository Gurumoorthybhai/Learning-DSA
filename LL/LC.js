class Node {
    constructor(value = 0, next = null) {
        this.data = value;
        this.next = null;
    }
}

function createLinkedList(arr) {
    let dummyNode = new Node();
    let temp = dummyNode;

    for(let val of arr) {
        temp.next = new Node(val);
        temp = temp.next;
    }
return dummyNode.next;
}

// function printLinkedList(head) {
//     let temp = head;

//     while(temp) {
//         console.log(`${temp.data} -> `);
//         temp = temp.next;
//     }
// }
// const head = createLinkedList([1, 2, 3, 4, 5]);
// const head2 = createLinkedList([9, 12, 7, 8]);
// // printLinkedList(head);

// intersection(head, head2);

// function intersection(head, head1) {

//     let itr1 = head;
//     let itr2 = head1;
//     let dummyNode = new Node();
//     let res = dummyNode;
//     const set = new Set();

//     while(itr1) {
//         set.add(itr1.data);
//         itr1 = itr1.next;
//     }

//     while(itr2) {

//         if(set.has(itr2.data) && res.data !== itr2.data) {

//             // resuse existing node
//             res.next = itr2;
//             res = res.next;

//             // delete existing node to avoid duplicate
//             set.delete(itr2.data)
//         }
//         itr2 = itr2.next;
//     }

//     // to terminate last link
//     res.next = null;
//     console.log(dummyNode.next);
// }



// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// let arr = [4, 5, 3, 9];
// function createLinkedList(arr) {
//     let head = new ListNode(arr[0]);
//     let temp = head;
//     for (let i = 1; i < arr.length; i++) {
//     temp.next = new ListNode(arr[i]);
//     temp = temp.next;
//     }
// return head;
// }

// let head1 = createLinkedList(arr);
// deleteNode(head1);


// var deleteNode = function (node) {
//     while (temp) {
//         node.value = node.next.val;
//         node.next = node.next.next;
//         prev.next = deleteNode.next;
//         }
//         prev = temp;
//         temp = temp.next;
//     }

// deleteNode(5);

const head = createLinkedList([12, 15, 10, 11, 5, 6, 3, 2]);
// const head2 = createLinkedList([9, 12, 7, 8]);
// deleteNode(head);

/*

function deleteNode(head) {

    let dummyNode = new Node();
    dummyNode.next = head;
    let temp = dummyNode;

    while(temp.next) {
        let currentNode = temp.next;
        let nextNode = currentNode.next;
        let shouldDelete = false;
        while(nextNode) {
            if(currentNode.data < nextNode.data) {
                // temp = temp.next;
                shouldDelete = true;
                break;
            }
            nextNode = nextNode.next;
        }

        if(shouldDelete) temp.next = nextNode;
        temp = temp.next
        
    }
console.log(JSON.stringify(dummyNode.next));
}

*/

// function deleteNode(head) {

//     let dummyNode = new Node();
//     dummyNode.next = head;
//     let prev = dummyNode;    

//     while(prev.next) {

//         let temp = prev.next;
//         let temp1 = temp.next;
//         let shouldDelete = false;
//         while(temp1) {
//             if(temp.data < temp1.data) {
//                 // temp = temp.next;
//                 shouldDelete = true;
//                 break;
//             }
//             temp1 = temp1.next;
//         }

//         if(shouldDelete) prev.next = temp.next;
//         else prev = prev.next;
        
//     }
// console.log(dummyNode.next);
// }

// approach 2:

// 1. Reverse the given linked list
// 2. assign first ll node as max
// 3. then compare the max with upcoming node, if upcoming node is greater than max
// include the prev node to o/p, assign greater node as max
// 4. Reverse the o/p & return


/*
function deleteNode(head) {

    head = reverse(head);
    // console.log(JSON.stringify(reversedNodeList));
    // let temp = reversedNodeList;
    // let dummyNode = new createLinkedList();
    // let res = dummyNode;

    let maxVal = head.data;
    let current = head.next;
    let prev = head;

    while(current) {

        if(current.data >= maxVal) {
            prev = current;
            maxVal = current.data;
        } else {
            prev.next = current.next;
        }

        current = current.next;
    }

    head = reverse(head);
    return head;
}



function reverse(head) {
    let temp = head;
    let prev = null;
    let next;

    while(temp) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }
    return prev;
}
*/

var reverse = function(head) {
    let temp = head;
    let prev = null;
    let next;

    while(temp) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }

    return prev;
}
var removeNodes = function (head) {

    let reverseList = reverse(head);

    let max = reverseList.data;
    let prev = reverseList;
    let nextNode = reverseList.next;
    while (nextNode) {

        if (nextNode.data >= max) {
            prev = nextNode;
            max = nextNode.data;
        } else {
            prev.next = nextNode.next;
        }
        nextNode = nextNode.next;
    }

    return reverse(reverseList);
// console.log(dummyNode.next);
// return res ? dummyNode.next : head;
};

console.log(JSON.stringify(removeNodes(head)));
