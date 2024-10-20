// return cnt for each day, consecutive days) if the price is equal to or less than the current day


// var stockSpan = function(arr) {
//     this.arr = [];
//     this.result = [];
// }

// stockSpan.prototype.next = function(val) {
//     let cnt = 0;
//     this.arr.push(val);
//     let n = this.arr.length;
//     // this.result = [];
//     for(let i = n-1; i >= 0; i--) {
//             if(this.arr[i] <= val) {
//                 cnt++
//             } else {
//                 break;
//             }
//     }

//     this.result.push(cnt);
//     console.log(`Count of ${this.result}`);
// }

// const obj = new stockSpan();
// obj.next(100);
// obj.next(80);
// obj.next(60);
// obj.next(70);
// obj.next(60);
// obj.next(75);
// obj.next(85);


// celebrity problem

// celebrity should know no-one
// He should be know by everyone


// var celebrity = function(arr) {

//     let start = 0;
//     let end = arr.length-1;

//     while(start < end) {

//         if(arr[start][end] === 1) {
//             start++;
//         } else if(arr[end][start] === 1){
//             end--;
//         } else {
//             start++;
//             end--;
//         }
//     }

//     if(start > end) return -1;

//     for(let i = 0; i < arr[0].length; i++) {
//         if(start === i) continue;
//         if(arr[start][i] !== 0 || arr[i][start] !== 1) {
//             return -1;
//         }
//     }

//     return start;

// }

// const ip = [
//     [0, 0, 1, 1],
//     [1, 0, 1, 1],
//     [1, 0, 0, 1],
//     [0, 1, 0, 0],
// ];


// console.log(celebrity(ip));


// LRUCache (Least Resource Used) need to remove least used key

// insertAfterHead
// deleteKey


// class LLNode {
//     constructor(key=null, value=null, prev=null, next=null) {
//         this.key = key;
//         this.value = value;
//         this.next = next;
//         this.prev = prev;
//     }
// }


// class LRUCache {

//     constructor(capacity) {
//         this.capacity = capacity;
//         this.LRUMap = new Map();
//         this.head = new LLNode();
//         this.tail = this.head;
//         this.head.next = this.tail;
//         this.tail.prev = this.head;
//     }

//     put(key, value) {
//         if(this.LRUMap.has(key)) {
//             let node = this.LRUMap.get(key);
//             node.value = value;
//             this.deleteNode(node);
//             this.insertAfterHead(node);
//         } else {
//             if (this.capacity === this.LRUMap.size) {
//                 // get least used node, which is nothing but prev node of tail
//                 let deleteNode = this.tail.prev;
//                 // delete from map
//                 this.LRUMap.delete(deleteNode.key);
//                 // delete from linked list
//                 this.deleteNode(deleteNode);
//             }
//             // create new node for new pair
//             let newNode = new LLNode(key, value);
//             this.LRUMap.set(key, newNode);
//             this.insertAfterHead(newNode);
//         }
//     }

//     get(key) {
//         // key does not exists
//         if(!this.LRUMap.has(key)) return -1;
//         else {
//             if(this.LRUMap.has(key)) {
//             let node = this.LRUMap.get(key);
//             this.deleteNode(node);
//             this.insertAfterHead(node);
//         }
//     }
//     }

//     insertAfterHead(node) {
//         let headNext = this.head.next;
//         headNext.prev = node; 
//         node.next = headNext;
//         node.prev = this.head;
//         this.head.next = node;
//     }

//     deleteNode(node) {
//         let prevNode = node.prev;
//         let nextNode = node.next;

//         prevNode.next = nextNode;
//         nextNode.prev = prevNode;
//     }

//     printNode() {
//         let currNode = this.head.next;

//         while(currNode !== this.tail) {
//             console.log(`key : ${currNode.key}, value : ${currNode.value}`);
//             currNode = currNode.next;
//         }
//     }
// }

/*
class Node {
    constructor(key = null, value = null, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.LRUMap = new Map();
    this.head = new Node();
    this.tail = this.head;
    this.head.next = this.tail;
    this.tail.prev = this.head;
};
 
LRUCache.prototype.get = function(key) {
    if(!this.LRUMap.has(key)) return -1;
    else {
        let node = this.LRUMap.get(key);
        this.deleteNode(node);
        this.insertAfterHead(node);
        return node.value;
    }
};

LRUCache.prototype.put = function(key, value) {
    if(this.LRUMap.has(key)) {
        let node = this.LRUMap.get(key);
        node.value = value;
        this.LRUMap.set(key, node);
        this.deleteNode(node);
        this.insertAfterHead(node);
    } else {
        if(this.capacity === this.LRUMap.size) {
            let deleteNode = this.tail.prev;
            this.LRUMap.delete(deleteNode.key);
            this.deleteNode(deleteNode);
        }
        let node = new Node(key, value);
        this.LRUMap.set(key, node);
        this.insertAfterHead(node);
    }
};

LRUCache.prototype.deleteNode = function(node) {
    let prevNode = node.prev;
    let nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
}

LRUCache.prototype.insertAfterHead = function(node) {
    let currHeadNext = this.head.next;
    currHeadNext.prev = node;
    node.next = currHeadNext;
    node.prev = this.head;
    this.head.next = node;
}


LRUCache.prototype.printNode = function() {
    let node = this.head.next;

    while(node.next !== this.tail) {
        console.log(`key = ${node.key}, Val = ${node.value}`);
        node = node.next;
    }
}

const obj = new LRUCache(2);
// console.log(obj)

obj.put(1, 1);
obj.put(2, 2);

console.log(obj.get(1));

obj.put(3, 3);

console.log(obj.get(2));

obj.put(4, 4);

console.log(obj.get(1));

console.log(obj.get(3));

console.log(obj.get(4));


// obj.put(4, 50);
// obj.printNode();
// console.log(obj)

*/


// Pre-request: LRUCache
// LFUCache, similar to LRUCache, here we need to remove LFU pair, in case of if we have more than1 pair, 
// then we need to look for LRU pair

// so Here, we need to track min frequency why ?, if capacity is full then, we need to use the min frequency map
//  from above, its seems we need 2 Map
//  1. Frequency Map - <freq, DD linkedlist pair>, why we need DDL, in case if same freq, we need to remove LRU pair
//  2. Pair Map - <key, pair>


// class Node {
//     constructor(key = null, value = null) {
//         this.key = key,
//         this.value = value,
//         this.freq = 1,
//         this.next = null,
//         this.prev = null
//     }
// }

// class DLL {
//     constructor() {
//         this.head = new Node();
//         this.tail = this.head;
//         this.head.next = this.tail;
//         this.tail.prev = this.head;
    
//         this.size = 0; // this is expliticly declared, its helps minor performance optimization 
//     }

//     insertAfterHead(node) {
//         let currHeadAfter = this.head.next;
//         node.next = currHeadAfter;
//         node.prev = this.head;
//         currHeadAfter.prev = node;
//         this.head.next = node;
//         this.size++;
//     }

//     deleteNode(node) {
//         // this.lruNode.next = this.tail;
//         // this.tail.prev = lruNode;
//         node.prev.next = node.next;
//         node.next.prev = node.prev;
//         this.size--;
//     }

//     deleteLRUNode() {
//         let lruNode = this.tail.prev;
//         this.deleteNode(lruNode);
//         return lruNode;
//     }

//     printList() {
//         let current = this.head.next;
//         let result = [];

//         while(current !== this.tail) {
//             result.push(`(key = ${current.key}, value = ${current.value}, freq = ${current.freq})`);
//             current = current.next;
//         }

//         return result.join('->'); 
//     }
// }

// var LFUCache = function(capacity) {
//     this.capacity = capacity;
//     this.pairMap = new Map();
//     this.freqMap = new Map();
//     this.size = 0;
//     this.minFreq = 0;

//     // printNodes() {
//     //    let node = this.head.next;

//     //    while(node !== this.)
//     // }
// }

// LFUCache.prototype.get = function(key) {

//     if(!this.pairMap.has(key)) return -1;
//     // get the existing node, & update the freq
//     let node = this.pairMap.get(key);
//     this.updateFreq(node);
//     return node.value; 
// }

// LFUCache.prototype.put = function(key, value) {

//     // edge case, if capacity is zero, we should not add the node
//     if(this.capacity === 0) return null;

//     if(this.pairMap.has(key)) {
//         let node = this.pairMap.get(key);
//         node.value = value;
//         // we need to update the freq
//         this.updateFreq(node);
//     } else {
//         if(this.capacity === this.size) {

//             // we need to delete the minFreq LRU
//             let lruList = this.freqMap.get(this.minFreq);
//             // now we need to get LRU pair from list, 
//             let nodeToEvict = lruList.deleteLRUNode();
//             this.pairMap.delete(nodeToEvict.key);
//             this.size--;
//         }
       
//         // create new Node
//         let newNode = new Node(key, value);
//         this.pairMap.set(key, newNode);

//         // create or add to the existing list
//         if(!this.freqMap.has(1)) {
//             this.freqMap.set(1, new DLL());
//         }

//         this.freqMap.get(1).insertAfterHead(newNode);
        
//         this.minFreq = 1;
//         this.size++;
//     }
// }

// LFUCache.prototype.updateFreq = function(node) {
//     let oldFreq = node.freq;

//     let oldFreqList = this.freqMap.get(oldFreq);

//     // first, we need to remove curr node with old value
//     oldFreqList.deleteNode(node);

//     // next, we need to check, current node is the only node, with this freq value

//     if(oldFreqList.size === 0 && this.minFreq === oldFreq) {
//         // we dont have any pair with current minFreq, so we need to increment the minFreq
//         this.freqMap.delete(oldFreq);
//         this.minFreq++;
//     }

//     node.freq++;
//     // if we dont have any other DLL list with new Freq
//     if(!this.freqMap.has(node.freq)) {
//         this.freqMap.set(node.freq, new DLL());
//     }

//     this.freqMap.get(node.freq).insertAfterHead(node);

// }

// LFUCache.prototype.printPairMap = function() {

//     console.log(`Print Pair Map`);

//     for(let [key, node] of this.pairMap) {
//         console.log(`key - ${key}, value - ${node.value}, freq - ${node.freq}`)
//     }
// }

// LFUCache.prototype.printFreqMap = function() {
//     console.log(`Print Freq Map`);

//     for(let [freq, dll] of this.freqMap) {
//         console.log(`Frequency - ${freq}, Node - ${dll.printList()}`);
//     }
// }




class Node {
    constructor(key = null, value = null) {
        this.key = key;
        this.value = value;
        this.freq = 1;
        this.prev = null;
        this.next = null;
    }
}

class DLL {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }


    insertAfterHead(node) {
        let currHeadNext = this.head.next;
        node.next = currHeadNext;
        node.prev = this.head;
        currHeadNext.prev = node;

        this.head.next = node;
        this.size++;
    }

    removeLRUNode() {
        let node = this.tail.prev;
        this.deleteNode(node);
        return node;
    }

    deleteNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }
}



/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.minFreq = 0;
    this.nodeMap = new Map();
    this.freqMap = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(!this.nodeMap.has(key)) return -1;

    let node = this.nodeMap.get(key);
    this.updateFreq(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.capacity === 0) return null;

    if(this.nodeMap.has(key)) {
        let node = this.nodeMap.get(key);
        node.value = value;

        this.updateFreq(node);
    } else {

        if(this.size === this.capacity) {
            let lruList = this.freqMap.get(this.minFreq);
            let nodeToEvict = lruList.removeLFUNode();
            this.nodeMap.delete(nodeToEvict.key);
            this.size--;
        }

        let newNode = new Node(key, value);
        this.nodeMap.set(key, newNode);

        if(!this.freqMap.has(1)) {
            this.freqMap.set(1, new DLL());
        }

        this.freqMap.get(1).insertAfterHead(newNode);
        this.size++;
        this.minFreq = 1;
    }
};


LFUCache.prototype.updateFreq = function(node) {
    let oldFreq = node.freq;

    let oldFreqList = this.freqMap.get(oldFreq);
    oldFreqList.deleteNode(node);

    if(oldFreqList.size === 0 && this.minFreq === oldFreq) {
        this.freqMap.delete(oldFreq);
        this.minFreq++;
    }

    node.freq++;
    if(!this.freqMap.has(node.freq)) {
        this.freqMap.set(node.freq, new DLL());
    }

    this.freqMap.get(node.freq).insertAfterHead(node);
}
/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


let Obj = new LFUCache(3);

Obj.put(1, 10);
Obj.put(2, 20);
Obj.put(3, 30);
console.log(Obj.get(1));
console.log(Obj.get(3));
// Obj.put(4, 40);
console.log(Obj.get(2));
// Obj.put(5, 50);
// Obj.printPairMap();
// Obj.printFreqMap();

// console.log(Obj.printpairMap());