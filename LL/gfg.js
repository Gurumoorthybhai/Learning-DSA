{/* <script> */}
// javascript program to segregate even and odd nodes in a
// Linked List
var head; // head of list

    /* Linked list Node */
     class Node {
            constructor(val) {
                this.data = val;
                this.next = null;
            }
        }

    function segregateEvenOdd() {
        var end = head;
        var prev = null;
        var curr = head;

        /* Get pointer to last Node */
        while (end.next != null)
            end = end.next;

        var new_end = end;

        // Consider all odd nodes before getting first even node
        while (curr.data % 2 != 0 && curr != end) {
            new_end.next = curr;
            curr = curr.next;
            new_end.next.next = null;
            new_end = new_end.next;
        }

        // do following steps only if there is an even node
        if (curr.data % 2 == 0) {
            head = curr;

            // now curr points to first even node
            while (curr != end) {
                if (curr.data % 2 == 0) {
                    prev = curr;
                    curr = curr.next;
                } else {
                    /* Break the link between prev and curr */
                    prev.next = curr.next;

                    /* Make next of curr as null */
                    curr.next = null;

                    /* Move curr to end */
                    new_end.next = curr;

                    /* Make curr as new end of list */
                    new_end = curr;

                    /* Update curr pointer */
                    curr = prev.next;
                }
            }
        }

        /* We have to set prev before executing rest of this code */
        else
            prev = curr;

        if (new_end != end && end.data % 2 != 0) {
            prev.next = end.next;
            end.next = null;
            new_end.next = end;
        }
    }

    /*
     * Given a reference (pointer to pointer) to the head of a list and an int, push
     * a new node on the front of the list.
     */
    function push(new_data) {
        /*
         * 1 & 2: Allocate the Node & Put in the data
         */
        var new_node = new Node(new_data);

        /* 3. Make next of new Node as head */
        new_node.next = head;

        /* 4. Move the head to point to new Node */
        head = new_node;
    }

    // Utility function to print a linked list
    function printList() {
        var temp = head;
        while (temp != null) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
        console.log();
    }

    /* Driver program to test above functions */
    
        // push(11);
        // push(10);
        // push(8);
        // push(6);
        push(6);
        push(8);
        push(3);
        console.log("Original Linked List ");
        printList();
        console.log("<br>");


        segregateEvenOdd();

        console.log("Modified Linked List ");

        segregateEvenOdd();


// This code contributed by umadevi9616
