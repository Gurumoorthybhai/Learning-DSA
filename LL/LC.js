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

// function createLinkedListWithCycle(arr, pos) {
//     let dummyNode = new Node();
//     let temp = dummyNode;
//     let cyclicNode = null;

//     for(let [ind, val] of arr.entries()) {
        
//         temp.next = new Node(val);
//         if(ind === pos) cyclicNode = temp.next;
//         temp = temp.next;
//     }

//     temp.next = cyclicNode;
// return dummyNode.next;
// }


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

// const head = createLinkedList([12, 15, 10, 11, 5, 6, 3, 2]);
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

/*

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

*/

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

  /*

class Solution {
    //Function to sort a linked list of 0s, 1s and 2s.
    segregate(head)
    {
        let zeroHead = new Node(-1);
        let zero = zeroHead;
        let firstHead = new Node(-1);
        let first = firstHead;
        let secondHead = new Node(-1);
        let second = secondHead;
        let temp = head;
        while(temp) {
            if(temp.data === 0) {
                let newNode = new Node(temp.data);
                zero.next = newNode;
                zero = newNode;
            } else if(temp.data === 1) {
                let newNode = new Node(temp.data);
                first.next = newNode;
                first = newNode;
            } else {
                let newNode = new Node(temp.data);
                second.next = newNode;
                second = newNode;
            }
            temp = temp.next;
        }
        
        zero.next = firstHead.next ? firstHead.next : secondHead.next;
        first.next = secondHead.next;

        console.log(JSON.stringify(zeroHead.next, getCircularReplacer(), 2));

        
    }   
}

const head = createLinkedList([2, 1, 0, 2, 1, 0, 2]);
const obj = new Solution();
// console.log(obj.segregate(head));
console.log(JSON.stringify(obj.segregate(head), getCircularReplacer(), 2));
*/

// class Solution {
//     //Function to remove duplicates from sorted linked list.
//     removeDuplicates(head)
//     {
//         let temp = head;
//         let head1 = head;
//         while(temp.next) {
//             let next = temp.next;
//             if(temp.data !== next.data) {
//                 head1.next = next;
//                 head1 = head1.next;
//             }
//             temp = temp.next;
//         }
//         if(head1) head1.next = null;
//         return head;
//     }
// }

/*

function duplicate(head) {
    if (head === null) {
        return head;
    }
    //your code here
    let temp = head;
    while (temp !== null && temp.next !== null) {
        if (temp.data === temp.next.data) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }

    }
    console.log(JSON.stringify(head));
    return head;
}

const head = createLinkedList([1, 1, 1, 2, 4, 5, 5]);

// const obj = new Solution();
console.log(duplicate(head));

*/

/*
class Solution {
    //Function to check whether the list is palindrome.
    isPalindrome(head)
    {
        if(!head || !head.next) return false;
        let temp = head;
        let middleNode = obj.returnMiddleNode(temp);
        let secondHalf = middleNode.next;
        middleNode.next = null;
        let reversedHead = obj.reverse(secondHalf);

        while(reversedHead) {
            if(temp.data !== reversedHead.data) return false;
                temp = temp.next;
                reversedHead = reversedHead.next;
            }
        return true;
    }
    
    returnMiddleNode(head) {
        let slowPtr = head;
        let fastPtr = head.next;
        
        while(fastPtr && fastPtr.next) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
            
        }
        
        return slowPtr;
    }

    reverse(head) {
        let prev = null;
        let temp = head;
        let next;

        while(temp) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return prev;
    }
    
}

const head = createLinkedList([1, 2, 2, 1]);

const obj = new Solution();
// console.log(obj.isPalindrome(head));

let a = {};

console
*/

// class Solution {
//     // Function to find intersection point in Y shaped Linked Lists.
//     intersectPoint(head1, head2) {
//         // your code here
//         if(!head1 || !head2) return -1;
//         let l1Len = 0;
//         let l2Len = 0;
//         let temp1 = head1;
//         let temp2 = head2;

//         while(temp1) {
//             l1Len++;
//             temp1 = temp1.next;
//         }
        
//          while(temp2) {
//             l2Len++;
//             temp2 = temp2.next;
//         }
        
//         if(l2Len === l1Len) {
//             return this.returnIntersectionPt(head1, head2, l1Len-l2Len);
//         } else if(l2Len > l1Len) {
//             return this.returnIntersectionPt(head2, head1, l2Len-l1Len);
//         } else {
//             return this.returnIntersectionPt(head1, head2, l1Len-l2Len);
//         }
//     }
//     returnIntersectionPt(head1, head2, diff) {
//         let temp1 = head1;
//         let temp2 = head2;
//         while(diff) {
//             if(diff === 0) break;
//             temp1 = temp1.next;
//             diff--;
//         }
//         while(temp1) {
//             if(JSON.stringify(temp1) === JSON.stringify(temp2)) {
//                 return temp1;
//             }
//             temp1 = temp1.next;
//             temp2 = temp2.next;
//         }
//         return -1;
//     }
// }



// function Yintercept(head1, head2) {

//     if(!head1 || !head2) return -1;
//     let temp1 = head1;
//     let temp2 = head2;

//     while(temp1 !== temp2) {

//         temp1 = temp1.next;
//         temp2 = temp2.next;

//         // if(JSON.stringify(temp1) === JSON.stringify(temp2)) {
//         //     return temp1;
//         // }
//         if(!temp1) {
//             temp1 = head2;
//         }
//         if(!temp2) {
//             temp2 = head1;
//         }
// //         // let temp1 = head1;
// //         // let temp2 = head2;
    
// //         // Traverse both lists. When one pointer reaches the end, redirect it to the head of the other list.
//     }
// //     return temp1;
// }


// var removeNthFromEnd = function(head, n) {

//     // edge case, if n=5(head) of the node
//     let temp = head;
//     let len = 0;
//     while(temp) {
//         len++;
//         temp = temp.next;
//     }
//     if(n === len) return head.next;
//     let fastPtr = head;
//     while(fastPtr) {
//         if(n === 0) break;
//         fastPtr = fastPtr.next;
//         n--;
//     }

//     let slowPtr = head;
//     while(fastPtr.next) {
//         slowPtr = slowPtr.next;
//         fastPtr = fastPtr.next;
//     }

//     slowPtr.next = slowPtr.next.next;
//     return head;
// };


// var addTwoNumbers = function(l1, l2) {
//     let temp1 = l1;
//     let temp2 = l2;
//     let dummyNode = new Node(-1);
//     let sumNodes = dummyNode;
//     let carry = 0;

//     while(temp1 || temp2) {

//         let sum = carry;
//         carry = 0;
//         sum += temp1.data + temp2.data;

//         if(sum >= 10) {
//             let rem = sum % 10;
//             carry = 1;

//             sumNodes.next = new Node(rem);
//         } else {
//             sumNodes.next = new Node(sum);
//         }
//             sumNodes = sumNodes.next;
//             if(temp1)   temp1 = temp1.next;
//             if(temp2)   temp2 = temp2.next;
//     }

//     if(carry) {
//         sumNodes.next = new Node(carry);
//     }
//         return dummyNode.next;
    
// };


// var addTwoNumbers = function(l1, l2) {
//     let temp1 = l1;
//     let temp2 = l2;
//     let dummyNode = new Node(-1);
//     let sumNodes = dummyNode;
//     let carry = 0;

//     while(temp1 || temp2) {

//         let sum = carry;
//         carry = 0;

//         if(temp1) {
//             sum += temp1.data;
//             temp1 = temp1.next;
//         }
//         if(temp2) {
//             sum += temp2.data;
//             temp2 = temp2.next;
//         }

//         if(sum >= 10) {
//             let rem = sum % 10;
//             carry = 1;

//             sumNodes.next = new Node(rem);
//         } else {
//             sumNodes.next = new Node(sum);
//         }
//             sumNodes = sumNodes.next;
            
//     }

//     if(carry) {
//         sumNodes.next = new ListNode(carry);
//     }
//         return dummyNode.next;
    
// };

/*

  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }

var addTwoNumbers = function(l1, l2) {
    let temp1 = l1;
    let temp2 = l2;
    let dummyNode = new ListNode(-1);
    let sumNodes = dummyNode;
    let carry = 0;

    while(temp1 || temp2) {

        let sum = carry;
        carry = 0;

        if(temp1) {
            sum += temp1.data;
            temp1 = temp1.next;
        }
        if(temp2) {
            sum += temp2.data;
            temp2 = temp2.next;
        }

        if(sum >= 10) {
            let rem = sum % 10;
            carry = 1;

            sumNodes.next = new ListNode(rem);
        } else {
            sumNodes.next = new ListNode(sum);
        }
            sumNodes = sumNodes.next;
            
    }

    if(carry) {
        sumNodes.next = new ListNode(carry);
    }
        return dummyNode.next;
    
};

const head1 = createLinkedList([2, 4, 3]);
const head2 = createLinkedList([5, 6, 4]);

// const obj = new Solution();
console.log(addTwoNumbers(head1, head2));

*/


// var reverseLL = function(temp) {
//     let prev = null;
//     let next;

//     while(temp) {
//         next = temp.next;
//         temp.next = prev;
//         prev = temp;
//         temp = next;
//     }
//     return prev;
// }

// var returnKthNode = function(temp, k) {

//     while(temp) {
//         k--;
//         if(k===0) return temp;
//         temp = temp.next;
//     }
//     return temp;
// }


// var reverseKGroup = function(head, k) {
//     // split the group with given k elements
//     // reverse the group
//     if(!head || !head.next) return head;
//     let temp = head;
//     let prevNode;
//     while(temp) {

//         let kthNode = returnKthNode(temp, k);

//         if(!kthNode) {
//             if(prevNode) {
//                 prevNode.next = temp;
//             }
//             break;
//         }

//         let nextNode = kthNode.next;
//         kthNode.next = null;
//         let newList = reverseLL(temp);

//         if(head === temp) {
//             head = newList;
//         } else {
//             prevNode.next = newList;
//         }
//         prevNode = temp;
//         temp = nextNode;
//     } 
// console.log(JSON.stringify(head));
// };

// const head = createLinkedList([1, 2, 3, 4, 5, 6 ,7]);
// reverseKGroup(head, 2);


// var mergeNodes = function(head) {
//     let temp = head.next;
//     let dummyHead = new Node();
//     let tempHead = dummyHead;
//     let sum = 0;

//     while(temp) {
//         if(temp.data === 0) {
//             if(sum) {
//                 tempHead.next = new Node(sum);
//                 sum = 0;
//                 tempHead = tempHead.next;
//             }
//         }
//         sum += temp.data;
//         temp = temp.next;
//     }
//     console.log(dummyHead.next);
// };


// var mergeNodes = function(head) {
//     let sum =0;
//     let curr = head.next;
//     let result = curr;
//     while(curr){
//         if(curr.data == 0){
//             // curr.data = sum;
//             result.data = sum;
//             curr = curr.next;
//             result.next = curr;
//             result = result.next;
//             sum = 0;
//         }
//         else{
//           sum += curr.data;
//           curr = curr.next;
//         }
//     }
//     return head.next;
// };


// var hasCycle = function(head) {
//     let slowPtr = head;
//     let fastPtr = head;

//     while(fastPtr && fastPtr.next) {
//         fastPtr = fastPtr.next.next;
//         slowPtr = slowPtr.next;

//         if(fastPtr === slowPtr) return true;
//     }
//     return false;
// };


// var startingPtr = function(head) {
//     let slowPtr = head;
//     let fastPtr = head;

//     while(fastPtr && fastPtr.next) {
//         slowPtr = slowPtr.next;
//         fastPtr = fastPtr.next.next;

//         if(slowPtr === fastPtr) {
//             let cnt = 1;
//             fastPtr = fastPtr.next;
//             while(slowPtr !== fastPtr) {
//                 cnt++;
//                 fastPtr = fastPtr.next;
//             }
//             return cnt;
//         }
//     }
// }

// var reverveRecursive = function(head) {

//     if(head.next === null) return head;
    
//     let newHead = reverveRecursive(head.next);

//     let currentNext = head.next;
//     currentNext.next = head;

//     head.next = null;


//     return newHead;
// }


class WithRandomPtr {
    constructor(val = -1, next = null, random = null) {
        this.data = val;
        this.next = next;
        this.random = random;
    }
}

function LinkedListWithRandomPtr(arr, ind) {

    let nodes = arr.map(data => new WithRandomPtr(data));

    for(let i = 0; i < nodes.length; i++) {
        nodes[i].next = nodes[i+1];
    }

    for(let i = 0; i < nodes.length; i++) {
        if(ind[i] !== null && ind[i] < nodes.length)
        nodes[i].random = nodes[ind[i]];
    }
    
    return nodes[0];

}

var copyWithrandom = function(head) {


}
// let head = LinkedListWithRandomPtr([7, 13, 11, 10, 1], [null, 0, 4, 2, 0]);
// copyWithRandom(head);
// while(head) {
//     console.log(head.next.data)
//     head = head.next;
// }

// 1. create a map, key as original node, value as node's data
// 2. in next loop, set next and random ptr

// function copyWithRandom(head) {

//     let temp = head;
//     let nodeMap = new Map();
//     let dummyNode = new WithRandomPtr();
//     let currentNode = dummyNode;

//     while(temp) {
//         let newNode = new WithRandomPtr(temp.data);
//         nodeMap.set(temp, newNode);
//         temp = temp.next;
//     }

//     let temp1 = head;
//     while(temp1) {
//         let copiedNode = nodeMap.get(temp1);
//         copiedNode.next = nodeMap.get(temp1.next);
//         copiedNode.random = nodeMap.get(temp1.random);

//         currentNode.next = copiedNode;

//         temp1 = temp1.next;
//         currentNode = currentNode.next;
//     }

//     console.log(dummyNode.next);
// }




var copyRandomList = function(head) {

    let temp = head;
    let dummyNode = new WithRandomPtr(-1, null, null);
    let copiedNode = dummyNode;

    while(temp) {
        let newNode = new WithRandomPtr(temp.data, null, null);
        newNode.next = temp.next;
        temp.next = newNode;
        temp = temp.next.next;
    }
    
    let temp1 = head;
    while(temp1) {
        temp1.next.random = temp1.random.next;

        temp1 = temp1.next.next;
    }

     let temp2 = head;
    while(temp2) {
        copiedNode.next = temp2.next;
        temp2.next = temp2.next.next;

        temp2 = temp2.next;
        copiedNode = copiedNode.next;
    }

return dummyNode.next;
};


let head = LinkedListWithRandomPtr([7, 13, 11, 10, 1], [null, 0, 4, 2, 0]);
// console.log(copyRandomList(head));

// function copyRandomList(head) {
// let temp = head;
// let dummyNode = new WithRandomPtr();
// let copiedNode = dummyNode;


//     while(temp) {
//         let newNode = new WithRandomPtr(temp.data, null, null);
//         newNode.next = temp.next;
//         temp.next = newNode;
//         temp = temp.next.next;
//     }
//     let temp1 = head;
//     while(temp1) {
//         // temp1.next.random = temp1.random.next;

//         if(temp1.next.random) {
//             temp1.next.random = temp1.random.next;
//         } else {
//             temp1.next.random = null;
//         }

//         temp1 = temp1.next.next;
//     }

//      let temp2 = head;
//     while(temp2) {

//         copiedNode.next = temp2.next;
//         temp2.next = temp2.next.next;
//         temp2 = temp2.next;
//         copiedNode = copiedNode.next;
//     }
// }

// var copyRandomList = function(head) {
//     // Create a map to map new node with the old noe, the key will be the old node, the value will be 
//     // the new node
//     const nodeMap = new Map();

//     let curNode = head; 
//     let preNewNode = newHead = new Node(), curNewNode;

//     while (curNode) {
//       curNewNode = new Node(curNode.val);
//       nodeMap.set(curNode, curNewNode);

//       preNewNode.next = curNewNode;

//       curNode = curNode.next;
//       preNewNode = curNewNode;
//     }

//     nodeMap.forEach((newNode, oldNode) => {
//       newNode.random = nodeMap.get(oldNode.random) ?? null
//     })

//     return newHead.next
// }


// browser implementation

class DLLNode {

    constructor(url, next = null, prev = null) {
        this.current = url;
        this.next = next;
        this.prev = prev;
    }

}
class Browser {

    currentUrl;
    constructor(url, next = null, prev = null) {
        this.currentUrl = new DLLNode(url, next, prev);
    }

    visit(url) {
        let newNode = new DLLNode(url, null, this.currentUrl);
        this.currentUrl.next = newNode;
        this.currentUrl = this.currentUrl.next;
        return this.currentUrl;
    }

    moveForward(steps) {
        let temp = this.currentUrl;
        while(steps && temp) {
            steps--;
            if(steps === 0) {
                this.currentUrl = temp;
                return this.currentUrl;
            }
            temp = temp.next;
        }
        return null;
    }

    moveBackward(steps) {
        let temp = this.currentUrl;
        while(steps && temp) {
            steps--;
            if(steps === 0) {
                this.currentUrl = temp;
                return this.currentUrl;
            }
            temp = temp.prev;
        }
        return temp.data;
    }

}

let obj = new Browser('www.google.com');
obj.visit('www.takeyouforward.com');
obj.visit('www.takeyouforward-1.com');
obj.visit('www.takeyouforward-2.com');
// obj.visit()

obj.moveForward(1);
console.log(obj);