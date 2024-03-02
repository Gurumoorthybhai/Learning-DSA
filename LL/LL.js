class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LL {

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
    }

    pop() {

        if(!this.head) return undefined;
        
        let temp = this.head;
        let pre = this.head;
        
        while (temp.next) {
            
            pre = temp;
            temp = temp.next;

        }

            this.tail = pre;
            this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(value) {

        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            // console.log(" next ", this.head.next);
            
        }
        this.length++;
        return this;
    }

    shift() {

        if(!this.head) {
            return undefined;
        }
            const temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            this.length--;
            if(this.length === 0) {
                // this.head = null;
                this.tail = null;
            }
            return temp;
        }

    get(index) {

        if(index < 0 || index >= this.length) return undefined;

        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    set (index, value) {

        // this is taken care by get method
        // if(index < 0 || index >= this.length) return undefined;

        const getNode = this.get(index);
        if (getNode) {
            getNode.value = value;
            return true;
        }
        return false;
    }


    insert (index, value) {

        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.unshift(value);
        else if (index === this.length) return this.push(value);
        
        const newNode = new Node(value);
        const insertNode = this.get(index-1);

        // this case is handled by 1st condition
        // if (insertNode) {
            newNode.next = insertNode.next;
            insertNode.next = newNode;
            this.length++;
            return true;
        // }
        // return false;
    }


    remove(index) {

        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();

        const getPrevNode = this.get(index - 1);
        const temp = getPrevNode.next;
        getPrevNode.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    reverse() {

        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let prev = null;
        let next = temp.next;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
            
        }
        return this;
    }
}

const myLL = new LL(10);
// myLL.push(20);
// myLL.push(30);

// myLL.pop();

// myLL.unshift(20);

// shift cases

// empty Node
// 1 Node
// more than 2 Node

// more than 1 node
// myLL.push(20);



/*

// shift()

// empty

const deletedNode = myLL.shift();
console.log("deletedNode - ", myLL.shift());  // undefined

*/


/*

// get(index)

myLL.push(20);
myLL.push(30);

console.log(" Nodes - ", myLL);


// const getValueByIndex = myLL.get(2);
// console.log("Element at ", getValueByIndex);



console.log("Out of Bound index ", myLL.get(3));

*/

/*

// set value at Passed index

myLL.push(20);
myLL.push(30);

console.log(" Nodes - ", myLL);

// console.log(' Set by index', myLL.set(1, -20));

console.log('After update', myLL);

// console.log(' Out of bound Set by index', myLL.set(-1, -20)); 

// console.log(' Out of bound Set by index', myLL.set(10, -20));


*/


/*

// insert at specific index

myLL.push(30);

console.log(' Node Lists ', myLL );

// at index 1
// myLL.insert(1, 20);

// console.log(' After insert node lists ', myLL );

// at last
// myLL.insert(2, 40);

// at 0th index
// myLL.insert(0, 0);

// out of bound



console.log('Out of bound', myLL.insert(10, 100));
*/

/*
// remove at elemeny by index


myLL.push(20);
myLL.push(30);
myLL.push(40);

console.log(" Node List ", myLL);

// remove index at 0
// console.log(" remove node ", myLL.remove(0));

// console.log(" After remove node ", myLL);

// remove index at last
// console.log(" remove node ", myLL.remove(3));

// console.log(" After remove node ", myLL);


// remove index at 2
console.log(" remove node ", myLL.remove(1));

console.log(" After remove node ", myLL);

*/


// reverse

myLL.push(20);
myLL.push(30);
myLL.push(40);

console.log(" Node Lists ", myLL);

console.log(" After reverse ", myLL.reverse());

