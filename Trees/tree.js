// Trees

// Terms

// Root node
// leaf node
// Subtree
// ancester

// Full Tree - node which has no child or 2 childs
// Complete Binary Tree - leaf nodes are equally fulled, except last level. In last level if it has only left node
// Perfect Tree - all leaf nodes are at same level
// Balanced Tree - tree height should be 0(log n)
// Degenerated Tree - Skewed (has only 1 child)


// Tree Traversal Technique

// 1. InOrder             - left-root-right (bottom)
// 2. PreOrder            - root-left-right (top)
// 3. PostOrder           - left-right-root (bottom)
// 4. LevelOrder          - each level (top)

// recursion
// stack
// iterative


    //             1
    //     2              3
    // 4      5      6        7

    
    // InOrder - left-root-right
    
    // O/p
    // 4251637
    
    // PreOrder - Should follow root-left-right
        
    // Output
    // 1245367

    // PostOrder - left-right-root

    // O/p
    // 4526731


    // Level Order
    // 1234567

// We can traversal
// 1. recursion
// 2. stack
// 3. iterative

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);

// root.right.right = new Node(6);
// root.right.right.right = new Node(7);
// root.right.right.right.right = new Node(8);




// recursion

// function PrintPreOrder(node) {

//     if(node === null) return null;

//     console.log(node.data);

//     PrintPreOrder(node.left);
//     PrintPreOrder(node.right);
// }



// PrintPreOrder(root);


// function inOrder(node) {
//     if(node === null) return;

//     inOrder(node.left);
//     inOrder(node.right);
//     console.log(node.data +" ");
// }

// inOrder(root);


// function inOrder(node) {

//     if(node === null) return;

//     inOrder(node.left);

//     console.log(" ",node.data);

//     inOrder(node.right);
// }

// inOrder(root);



// stack


// function printInOrder(node) {

//     if(node === null) return;

//     let s = [];
//     let curr = node;

//     while(curr !== null || s.length > 0) {

//         while(curr !== null) {
//             s.push(curr);
//             curr = curr.left;
//         }

//         // now curr must be null

//         curr = s.pop();

//         console.log(curr.data+" ");

//         curr = curr.right;

//     }
// }

// printInOrder(root);


// Iterative


// Inorder Travasel
// var iterative = function(node) {

//     if (node === null) {
//         return;
//     }

//     let nodeStack = [];
//     nodeStack.push(root);

//     while(nodeStack.length > 0) {

//         let myNode = nodeStack[nodeStack.length-1];

//         console.log(myNode.data);
//         nodeStack.pop();

//         if(myNode.right != null) {
//             nodeStack.push(myNode.right);
//         }

//         if(myNode.left != null) {
//             nodeStack.push(myNode.left);
//         }
//     }

// }

// iterative(root);

// let S1 = [];
// let S2 = [];
// S1.push(node);

// while(S.length > 0) {

//     let ele = S1.pop();
//     S2.push(ele);

//     if(ele.left) {
//         S1.push(ele.left);
//     }

//     if(ele.right) {
//         S1.push(ele.right);
//     }

// }


// PostOrder (left right root) traversal with single stack

// 1. create a empty stack, traverse left and push the node in the stack till it reaches end
// 2. top the last node & check for right node, if no node exists pop and push the curr node to ans
// check for if top node right is the current node, so that we can push the root node
// 3. Similar to above step 2, repeat on right side of subtree


// function postOrderTraversal(root) {
//     let S = [];
//     let ans = [];

//     // S.push(root);
//     let curr = root;
//     while(curr !== null || S.length) {

//         if(curr) {
//             S.push(curr);
//             curr = curr.left;
//         } else {
//             // top the last node
//             let temp = S[S.length-1].right;

//             if(temp === null) {
//                 temp = S.pop();
//                 ans.push(temp.data);
               
//                 while(S.length && temp === S[S.length-1].right) {
//                     temp = S.pop();
//                     ans.push(temp.data);
//                 }
//             } else {
//                 curr = temp;
//             }
//         }
//     }
// console.log(ans.join(', '));
// }

// postOrderTraversal(root);


// InOrder Traversal with single stack

// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.left.right.left = new Node(9);
// root.left.right.right = new Node(10);

// root.right.right = new Node(6);
// root.right.right.right = new Node(7);
// root.right.right.right.right = new Node(8);

// inOrder(root);

// function inOrder(root) {
//     let S = [];
//     let ans = [];
//     // S.push(root);
//     let curr = root;
//     while (S.length || curr) {

//         while (curr) {
//             S.push(curr);
//             curr = curr.left;
//         }
//         curr = S.pop();
//         ans.push(curr.data);
//         curr = curr.right;
//     }

//     console.log(ans.join(', '));
// }


// Boundary - print the boundary

// need to get left subtree nodes except leaf nodes
// need to get leaf nodes
// need to get right subtree nodes except leaf nodes

// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);

// root.left.left = new Node(4);
// root.left.left.left = new Node(7);
// root.left.left.left.right = new Node(11);
// root.left.left.left.right.right = new Node(13);

// root.right.right = new Node(6);
// root.right.right.right = new Node(10);
// root.right.right.right.left = new Node(12);

// root.left.right = new Node(5);
// root.left.right.left = new Node(8);
// root.left.right.right = new Node(9);


// the idea is first run left subtree (without leaf), only leaf, right subtree (wihtout leaf)

// boundaryTraversal(root);

// function boundaryTraversal(root) {
//     let ans = [];

//     ans.push(root.data);

//     leftSubTree(root.left, ans);
//     leafNode(root, ans);
//     rightSubTree(root.right, ans);

//     console.log(ans.join('->'));
// }

// function leftSubTree(node, ans) {
//     if(node === null)
//         return;
        
//         // in case, if left node is not present, add right node
//         if(node.left !== null) {
//             ans.push(node.data);
//             leftSubTree(node.left, ans);
//         }
//         else if(node.right !== null) {
//             ans.push(node.data);
//             leftSubTree(node.right, ans);
//         }
//         // skip leaf node
// }

// function rightSubTree(node, ans) {
//     if (node === null)
//         return;

//     // in case, if right node is not present, add left node
//     if (node.right !== null) {
//         rightSubTree(node.right, ans);
//         ans.push(node.data);
//     }
//     else if(node.left !== null) {
//         rightSubTree(node.left, ans);
//         ans.push(node.data);
//     }
//     // skip leaf node

// }

// // in leaf node, first we need to print left leaf, mid, right left 
// function leafNode(node, ans) {

//     if(node === null) return;

//     leafNode(node.left, ans);

//     if(node.left === null && node.right === null)
//         ans.push(node.data);

//     leafNode(node.right, ans);
// }


// ========================== ========================== ==========================

// Vertical Line 

// need to print from left to right

    //          1
    //     2        3
    // 4       5 6      7


// 4, 2, 1, 5, 6, 3, 7

// Bruth Force Approach

// 1. to get left most to right most node, we need to find horizontal min , max
// 2. Loop from min to max horizontal lines, push the result for each horizontal line

// for skew Tree, it takes time complexity of O(n2) bcz width of the tree * no.of.nodes

// hd horizontal distance
/*
function findMinMax(node, minMax, hd) {

    if(node === null) return;

    if(minMax[0] > hd) minMax[0] = hd;
    else if(minMax[1] < hd) minMax[1] = hd;

    findMinMax(node.left, minMax, hd-1);
    findMinMax(node.right, minMax, hd+1);
}

function collectVerticalLine(node, lineNo, hd, result) {

    if(node === null) return;

    if(lineNo === hd) result.push(node.data);

    collectVerticalLine(node.left, lineNo, hd-1, result);
    collectVerticalLine(node.right, lineNo, hd+1, result);
}

function verticalLines(node) {

    if(node === null) return;

    let minMax = [0, 0];
    let result = [];

    // step1
    findMinMax(node, minMax, 0);

    for(let lineNo = minMax[0]; lineNo <= minMax[1]; lineNo++) {
        collectVerticalLine(node, lineNo, 0, result);
    }

    return result;
}
    */


// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);

// root.right.left = new Node(6);
// root.right.right = new Node(7);

// root.right.left.right = new Node(8);
// root.right.right.right = new Node(9);


// o/p

// 4
// 2
// 1 5 6
// 3 8
// 7
// 9

// or  [4, 2, 1, 5, 6, 3, 8]

// const result = verticalLines(root);
// console.log(result.join(', '));

// instead of looping many times

// in the first loop, will use map/obj to store hd as key, values as arrays
// {
//     "-2": [1, 2, 3]
// }


// function collectVeriticalLines(node, res, hd) {

//     if(node === null) return;

//     // in res, if we dont have hd key, insert it
//     if (!(hd in res)) {
//         res[hd] = [];
//     }
    
//     res[hd].push(node.data);
//     collectVeriticalLines(node.left, res, hd-1);
//     collectVeriticalLines(node.right, res, hd+1);
// }

// function verticalOrder(node) {

//     let res = {};

//     collectVeriticalLines(node, res, 0);

//     // the result we get, may be not sorted in order

//     // res = {
//     //     '-2': [],
//     //     '-1': [],
//     //     '0' : [],
//     //     '1' : [],
//     //     '2' : []
//     // }

//     // console.log(res);

//     Object.keys(res).sort((a, b) => (a-b)).forEach(key => {
//         console.log(res[key].join(','));
//     })

// }


// to simplify the above sorting, we can find the min, max of hd and run a loop


// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);

// root.right.left = new Node(6);
// root.right.right = new Node(7);

// root.right.left.right = new Node(8);
// root.right.right.right = new Node(9);

// root.right.right.right.left = new Node(10);
// root.right.right.right.right = new Node(11);
// root.right.right.right.right.right = new Node(12);

// verticalOrder(root);

// With DFS, the order of the node will not in expected way bcz if we see the 
// above node 10 is printed before 7, to solve this issue, we need to traverse with BFS

// function verticalLine(node) {

//     const map = new Map();
//     let hd = 0;
//     let q = [[node, hd]];

//     while(q.length) {

//         let [node, hd] = q.shift();

//         if(!map.has(hd)) {
//             map.set(hd, []);
//         }

//         map.get(hd).push(node.data);

//         if(node.left) {
//             q.push([node.left, hd-1]);
//         }

//         if(node.right) {
//             q.push([node.right, hd+1]);
//         }
//     }

//     console.log([...map.keys()]);
//     // [...map.keys()].sort((a, b) => (a-b)).forEach(key => console.log(map.get(key)))

//     // for(let [key, val] of [...map.keys()].sort((a, b) => (a-b)))
//     //     console.log(val);
// }

// let root = new Node(1);
// root.left = new Node(2);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right = new Node(3);
// root.right.left = new Node(6);
// root.right.left.right = new Node(8);
// root.right.left.right.right = new Node(9);
// root.right.left.right.right.right = new Node(10);

// root.right.right = new Node(7);

// verticalLine(root);



// Boundary Tree - Revise

// print left subtree
// print leaf node
// print right subtree

// function leftSubTree(node, res) {
//     if(node === null) return;

//     if(node.left) {
//         res.push(node.data);
//         leftSubTree(node.left, res);
//     } else if(node.right) {
//         res.push(node.data);
//         leftSubTree(node.right, res);
//     }
// }

// function rightSubTree(node, res) {
//     if(node === null) return;

//     if(node.right) {
//         rightSubTree(node.right, res);
//         res.push(node.data);
//     } else if(node.left) {
//         rightSubTree(node.left, res);
//         res.push(node.data);
//     }
// }

// function leafNode(node, res) {
//     if(node === null) return;

//     if(node.left === null && node.right === null)
//         res.push(node.data);
//     leafNode(node.left, res)
//     leafNode(node.right, res)
// }

// function boundaryOrder(node) {

//     let res = [];

//     res.push(node.data);

//     leftSubTree(node.left, res);
//     leafNode(node, res);
//     rightSubTree(node.right, res);

//     return res;
// }

// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);

// root.right.left = new Node(6);
// root.right.right = new Node(7);

// root.right.left.right = new Node(8);
// root.right.right.right = new Node(9);

// root.right.right.right.left = new Node(10);
// root.right.right.right.right = new Node(11);
// root.right.right.right.right.right = new Node(12);

// console.log(boundaryOrder(root).join(', '));


// ========================== ========================== ==========================

// 14. Find the depth of the binary tree

// what is the depth of the binary tree ? => the longest path from root to the leaf node

//             1
//         2       3
//     4      5 6     7
// 8
// o/p => 4

// from the above tree, we use the formaula 1 + max(depth of left, depth of right)

// this can be solved by 
// 1. recursive => 
    // worst case is skew tree, where store auxiliary space of we O(n), O(n) time complexity
// 2. level order
    // worst case is complete tree, where store auxiliary space of we O(n), O(n) time complexity

// function depthOfTree(node) {

//     if(node === null) return 0;

//     let leftDepth = depthOfTree(node.left);
//     let rightDepth = depthOfTree(node.right);

//     return 1 + Math.max(leftDepth, rightDepth);
// }

// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.left.left = new Node(8);

// root.right.left = new Node(6);
// root.right.right = new Node(7);

// console.log(depthOfTree(root));



// level order approach

// on each level completion, increment the heigth (h)

// function depthOfTree(node) {
//     let q = [];
//     let h = 0;

//     q.push(node);

//     while(q.length) {
//     for(let i = 0; i < q.length; i++) {
//         let temp = q.shift();

//         if(temp.left) q.push(temp.left);
//         if(temp.right) q.push(temp.right);
//     }
//     h++;
// }
// return h;
// }

// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.left.left = new Node(8);

// root.right.left = new Node(6);
// root.right.right = new Node(7);

// console.log(depthOfTree(root));


// ========================== ========================== ==========================


// L.15 check the given binary tree is balanced or not

// balanced tree => At each Node, the diff of left subtree node, right subtree node should be <= 1
// so the idea is in the previous prb we have solved to get the height of tree, in that will add condition to check the height diff, if its left subtree and right subtree is greater than 1, return -1 and stop recursion


// depth first search
// function dfs(node) {

//     if(node === null) return 0;

//     let lh = dfs(node.left);

//     if(lh === -1) return -1;

//     let rh = dfs(node.right);

//     if(rh === -1) return -1;

//     if(Math.abs(lh-rh) > 1) return -1;

//     return 1 + Math.max(lh, rh);
// }

// function isBalancedTree(node) {
//     return dfs(node) !== -1 ;
// }

// not a balance tree - o/p false

// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(6);
// root.left.left.left = new Node(5);

// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(6);
// root.left.left.left = new Node(5);

// root.right.right = new Node(6);

// console.log(`The given binary tree is a balanced - ${isBalancedTree(root)}`);


// Maxi Path Sum - return max path sum btw 2 nodes
// 2 things
// 1. each node should take care of max path sum mean return sum max (node + left subtree + right subtree)
// 2. track the max sum (it can be only node, max(left + right) + node, l+r+node)

// let maxi = Number.MIN_VALUE;

// function findMaxUtil(node) {

//     if(node === null) return 0;

//     let l = findMaxUtil(node.left);
//     let r = findMaxUtil(node.right);

//     let maxiPath = Math.max(node.data, Math.max(l, r) + node.data);

//     let nodeMaxi = Math.max(l+r+node.data, maxiPath);

//     maxi = Math.max(nodeMaxi, maxi);


//     return maxiPath;
// }


// function findMaxSum(root) {
    
//     return findMaxUtil(root);
// }
// function findMaxsum() {
//     findMaxSum(root)
//     return maxi;
// }


// let root = new Node(10);
// root.left = new Node(2);
// root.right = new Node(10);
// root.left.left = new Node(20);
// root.left.right = new Node(1);
// root.right.right = new Node(-25);
// root.right.right.left = new Node(3);
// root.right.right.right = new Node(4);
// console.log(findMaxsum());



// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// let maxi = 0;
// maxPathSum(root, maxi);
// console.log(maxi);


// ========================== ========================== ==========================

// L.16 Check the given BT is same or not

// eg: 

// tree1

//             1
//     2               3
// 4       5       6        7


// tree2

    //         1
    //  2               3
    //      5       6        7

    // o/p false

    // idea is traversal both trees with left subtree and right subtree, if both node values are same continue with recursion
    // if any of the node returns false, return & stop the recursion

// function isSameTree(node1, node2) {
//     if(node1 === null || node2 === null) return node1 === node2

//     return (node1.data === node2.data) && isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right);
// }

// let root1 = new Node(1);
// root1.left = new Node(2);
// root1.right = new Node(3);

// let root2 = new Node(1);
// root2.left = new Node(2);
// root2.right = new Node(3);


// let root1 = new Node(1);
// root1.left = new Node(2);
// root1.right = new Node(3);

// let root2 = new Node(1);
// root2.left = new Node(2);
// root2.right = new Node(2);

// console.log(isSameTree(root1, root2));

// Implement above with level oreder traversal

// function isSameTree(node1, node2) {

//     if(node1 === null || node2 === null) return node1 === node2;

//     let queue1 = [node1];
//     let queue2 = [node2];

//     while (queue1.length > 0 && queue2.length > 0) {
//         let node1 = queue1.shift();
//         let node2 = queue2.shift();

//         // Check if the current nodes' data are not equal
//         if (node1.data !== node2.data)
//             return false;

//         // Check left children
//         if (node1.left && node2.left) {
//             queue1.push(node1.left);
//             queue2.push(node2.left);
//         } 
//         else if (node1.left || node2.left) {
//             return false;
//         }

//         // Check right children
//         if (node1.right && node2.right) {
//             queue1.push(node1.right);
//             queue2.push(node2.right);
//         } 
//         else if (node1.right || node2.right) {
//             return false;
//         }
//     }
//     return true;

// }


// same tree

// let root1 = new Node(1);
// root1.left = new Node(2);
// root1.right = new Node(3);

// let root2 = new Node(1);
// root2.left = new Node(2);
// root2.right = new Node(3);

// diff
// let root1 = new Node(1);
// root1.left = new Node(2);

// let root2 = new Node(1);
// root2.left = new Node(2);

// console.log(isSameTree(root1, root2));

// L.19 Zig-Zag traversal

//              1
//     2               3
// 4       5       6        7

// ask is for odd level, print from L -> R
// for even level, print from R -> L

// for even levels, push right left, so that the next odd level
// will get first

// odd  -> 1 -> 2, 3
// even -> 3 -> 7, 6
//      -> 2 -> 5, 4     => 7 6 5 4
// odd -> 4, 5, 6, 7

// if(temp.right) {
//     q.unshift(temp.right);
// }
// if(temp.left) {
//     q.unshift(temp.left);
// }

// why did unshift, if we use push, in pop, we will get the pushed value

// function zigZag(node) {

//     if(node === null) return;

//     let q = [node];
//     let odd = true;
//     let ans = [];

//     while(q.length) {
//         let size = q.length;
//         for(let i = 0; i < size; i++) {
//             let curr;

//             if(odd) {
//                 curr = q.shift();
//                 if(curr.left) {
//                     q.push(curr.left);
//                 }
//                 if(curr.right) {
//                 q.push(curr.right);
//                 }
//             } else {
//                 curr = q.pop();

//                 if(curr.right) {
//                     q.unshift(curr.right);
//                 }
//                 if(curr.left) {
//                     q.unshift(curr.left);
//                 }
//             }

//             ans.push(curr.data);
//         }

        
//         odd = !odd;
//     }

//     console.log(ans.join(', '));
// }

// let root = new Node(1);
// root.left = new Node(2);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right = new Node(3);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

// o/p -> 1, 3, 2, 4, 5, 6, 7
// console.log(zigZag(root));

// approach2- we can solve this with 2 stack

// L.22 Top-view of the tree

// similar to vertical line, level order approach we followed, but here each vertical line we will be having 1 node

// function topView(node, hd) {
//     let map = new Map();
//     let q = [[node, hd]];

//     while(q.length) {

//         let [node, hd] = q.shift();

//         if(!map.has(hd)) {
//             map.set(hd, node.data);
//         }

//         if(node.left) {
//             q.push([node.left, hd-1]);
//         }

//         if(node.right) {
//             q.push([node.right, hd+1]);
//         }
//     }

//     [...map.keys()].sort((a, b) => a-b).forEach(key => console.log(map.get(key)));
// }

// let root = new Node(1);
// root.left = new Node(2);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right = new Node(3);
// root.right.left = new Node(6);
// root.right.left.right = new Node(8);
// root.right.left.right.right = new Node(9);
// root.right.left.right.right.right = new Node(10);

// root.right.right = new Node(7);

// topView(root, 0);


// find max width of the BT, max width of 2 nodes in a level

// level order transversing, bcz we need max width at each level

// approach 1: use max var to get max length of each level


// function maxWidth(node) {

//     if(node === null) return 0;

//     let max = 0;

//     let q = [node];

//     while(q.length) {

//         max = Math.max(max, q.length);
//         let size = q.length;
        
//         for(let i = 0; i < size; i++) {
//             q.shift();
//         }

//         if()
//     }
// }


// L.30 Print all the nodes at a distance of 'k', with give k = 3, target=4


// function printAllNodes(nodes, k, target) {
//     let ans = [];

//     kDistanceRecur(node, k, target, ans);
// }

// function kDistanceRecur(node, k, target, ans) {

//     if(node === null) return -1;

//     if(node.data === target) {
//         findNodes(node, k, ans);
//         return 1;
//     }

//     let left = kDistanceRecur(node.left, k, target, ans);

//     if(left !== -1) {
//         if(k-left === 0) {
//             ans.push(node.data);
//         } else {
//             findNodes(node, k-left-1, ans);
//         }
//     }
// }

// function findNodes(node, dis, ans) {

//     if(node === null) return;

//     if(dis === 0) {
//         ans.push(node.data);
//         return;
//     }

//     findNodes(node.left, dis-1, ans);
//     findNodes(node.right, dis-1, ans);
// }

// approach 2: with parent node with level order traversal
// 1. create a parentmap => by travering in level order
// 2. create a visited map => to avoid already visited nodes


// function findTarNode(root, target, parent) {
//     let left = null;
//     let right = null;

//     if (root.left) {
//         parent.set(root.left, root);
//         left = findTarNode(root.left, target, parent);
//     }

//     if (root.right) {
//         parent.set(root.right, root);
//         right = findTarNode(root.right, target, parent);
//     }

//     if (root.data === target) {
//         return root;
//     }

//     else if (root.left !== null) {
//         return left;
//     }

//     return right;
// }

// function kDistranceNode(root, target, k) {

//     let ans = [];
//     if(root === null) return ans;

//     let parent = new Map();
//     parent.set(root, null);

//     let q = [root];
//     let tar = null;
    
//     while(q.length) {
//         let curr = q.shift();

//         if(curr.data === target) {
//             tar = curr;
//         }

//         if(curr.left) {
//         q.push(curr.left);
//             parent.set(curr.left, curr);
//         }

//         if(curr.right) {
//             q.push(curr.right);
//             parent.set(curr.right, curr);
//         }
//     }

//     q.push(tar);

//     // visited map
//     let visitedMap = new Map();
//     visitedMap.set(tar, true);

//     while(q.length) {

//         // nodes inside q are at a distance of 'k'
//         if(k === 0) {
//             while(q.length) {
//                 ans.push(q.shift().data);
//             }
//             break;
//         }

//         let size = q.length;
        
//         while(size-- > 0) {
//             let curr = q.shift();

//             if(curr.left && !visitedMap.has(curr.left)) {
//                 q.push(curr.left);
//                 visitedMap.set(curr.left, true);
//             }

//             if(curr.right && !visitedMap.has(curr.right)) {
//                 q.push(curr.right);
//                 visitedMap.set(curr.right, true);
//             }

//             //parent node
//             let parNode = parent.get(curr);
//             if(parNode && !visitedMap.has(parNode)) {
//                 q.push(parNode);
//                 visitedMap.set(parNode, true);
//             }
//         }
//         k--;
//     }

//     ans.sort((a, b) => a-b);
//     return ans;
// }

// function printNodes(nodes) {
//     console.log(nodes.join(', '));
// }

// const root = new Node(20);
// root.left = new Node(7);
// root.right = new Node(2);
// root.left.left = new Node(4);
// root.left.right = new Node(3);
// root.left.right.left = new Node(24);

// const target = 7, k = 2;
// // o/p => 2, 24
// let ans = kDistranceNode(root, target, k);
// printNodes(ans);


// approach:
// 1. with recursion, store the nodes in array
// 2. find the leaf node, apply pathlen-k-1, to stored array and get the respective node

// visited array to avoid already visited node


// function kDistanceFromLeaf(node, path, pathLen, visited, k) {

//     if(node === null) return null;

//     path[pathLen] = node.data;
//     visited[pathLen] = false;
//     pathLen++;

//     if(node.left === null && node.right === null && (pathLen-k-1) >= 0 && visited[pathLen-k-1] === false) {
//         ans.push(path[pathLen-k-1]);
//         visited[pathLen-k-1] = true;
//         return;
//     }


//     kDistanceFromLeaf(node.left, path, pathLen, visited, k);
//     kDistanceFromLeaf(node.right, path, pathLen, visited, k);
// }


// function printNodes(nodes) {
//     console.log(nodes.join(', '));
// }

// const root = new Node(20);
// root.left = new Node(7);
// root.right = new Node(2);
// root.left.left = new Node(4);
// root.left.right = new Node(3);
// root.left.right.left = new Node(24);

// const k = 2;
// // // o/p => 7
// let path = new Array(1000);
// path.fill(0);
// let visited = new Array(1000);
// visited.fill(false);
// let pathLen = 0;
// let ans = [];

// kDistanceFromLeaf(root, path, pathLen, visited, k, ans);
// printNodes(ans);



// L.31 min time required to burn the BT, given target
// rules
// 1. it takes constant time to burn each node
// 2. it spreads with connected nodes

// approach
// will use level order traversal
// 1. create parent child mapping
// 2. find target, apply parent, child mapping to traverse, take the time and increment with each level

// function findTarNode(root, target, parent) {

//     if(root === null) return null;
//     let q = [root];
//     let tar = null;
//     let time = 0;

//     parent.set(root, null);

//     while(q.length) {
//         let node = q.shift();

//         if(node.data === target) {
//             tar = node;
//         }

//         if(node.left) {
//             parent.set(node.left, node);
//             q.push(node.left);
//         }

//         if(node.right) {
//             parent.set(node.right, node);
//             q.push(node.right);
//         }
//     }

//     q.push(tar);
//     let visitedMap = new Map();
//     visitedMap.set(tar, true);

//     while(q.length) {
//         let size = q.length;
//         // count only if any of the adjacent node is burnt
//         let burnt = 0;
//         while(size-- > 0) {
//             let node = q.shift();
//             // ans.push(node.data);
            
//             if(node.left && !visitedMap.get(node.left)) {
//                 burnt = 1;
//                 visitedMap.set(node.left, true);
//                 q.push(node.left);
//             }
//             if(node.right && !visitedMap.get(node.right)) {
//                 burnt = 1;
//                 visitedMap.set(node.right, true);
//                 q.push(node.right);
//             }

//             let parentNode = parent.get(node);
//             if(parentNode && !visitedMap.get(parentNode)) {
//                 burnt = 1;
//                 q.push(parentNode);
//                 visitedMap.set(parentNode, true);
//             }
//         }
//         // catch is count only when any of the adjacent node is burned
//         if(burnt)
//             time++;
//     }
//     return time;
// }

// function findTarNode(root, target, parent) {

//         if(root === null) return null;
//         let q = [root];
//         let tar = null;
//         let time = 0;
    
//         parent.set(root, null);
    
//         while(q.length) {
//             let node = q.shift();
    
//             if(node.data === target) {
//                 tar = node;
//             }
    
//             if(node.left) {
//                 parent.set(node.left, node);
//                 q.push(node.left);
//             }
    
//             if(node.right) {
//                 parent.set(node.right, node);
//                 q.push(node.right);
//             }
//         }
//     }



// function parentMap(node, parent) {

//     if(node === null) return null;

//     if(!parentMap1.has(node)) {
//         parentMap1.set(node, []);
//         if(parent) {
//             parentMap1.get(node).push(parent);
//             parentMap1.get(parent).push(node)
//         }
//     }
//     parentMap(node.left, node);
//     parentMap(node.left, node);
// }


// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.left.right = new Node(4);

// root.right.left = new Node(5);
// root.right.right = new Node(6);

// let parentMap1 = new Map();

// parentMap(root, null);
// // const target = 2;
// // findTarNode(root, target, parentMap);
// console.log(parentMap1);




// L32. Count no.of.nodes in given complete tree, complete BT - except last left node, all the nodes are filled, in last level nodes are filled from left

// approach 1:

// recursively call the left & right subtree to cnt

// TC - O(n) -> need to visit every nodes
// SC - O(h) for complete BT -> O(logN) -> tree is mostly filled

// approach 3: Best approach
// so, we can utilitze the given complete tree property, we can apply 2pow(h) - 1, we need to know height

    //             1
    //     2               3            h = 3 => 2pow(3) -1 => 8 - 1 => 7 nodes
    // 4       5        6      7     


    //             1
    //     2               3            h = 3 => 2pow(3) -1 => 8 - 1 => 7 nodes (no) actually now we have 6 nodes
    // 4       5        6          
// to cacluclate the height, we are not using recursion
// from top, we will try to check the both left & right height, if they are same, apply formula & return the cnt
// if not, check next level

// TC - O(logn)^2
// We traverse logN nodes, for each node we calculate height logN
// SC - O(logn) recursive stack

// function countNodes(root) {

//     if(root === null) return 0;

//     let lh = leftHeight(root.left);
//     let rh = leftHeight(root.right);

//     if(lh === rh) {
//         return Math.pow(2, lh)-1;
//     }

//     return countNodes(root.left) + countNodes(root.right) + 1;
// }

// function leftHeight(root) {

//     let lheight = 1;
//     while(root) {
//         lheight++;
//         root = root.left
//     }
//     return lheight;
// }

// function rightHeight(root) {

//     let rheight = 1;
//     while(root) {
//         rheight++;
//         root = root.right
//     }
//     return rheight;
// }

// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);

// root.left.left = new Node(4);
// root.left.right = new Node(5);

// root.right.left = new Node(6);
// root.right.right = new Node(7);

// root.left.left.left = new Node(8);
// root.left.left.right = new Node(9);

// root.left.right.left = new Node(10);
// root.left.right.right = new Node(11);

// const totNodes = countNodes(root);
// console.log(totNodes);


// construct unique binary tree with given preOrder and InOrder


//         0
//     1        2
// 3      4   5

// from above 

/* 
[ left Root right]
inOrder -  [3 1 4 0 5 2]

[Root left right]
PreOrder - [0 1 3 4 2 5]
*/

// find root from  - preOrder
// find left, right from - inOrder

// step 1 - with recursion loop preOrder, make it a root element from it, 
// find the respect element inOrder, to its left are left subtree, to its right are right subtree
// will be using indexing to find element



// function buildTree(preOrder, preOrderStart, preOrderEnd, inOrder, inOrderStart, inOrderEnd) {

//     if(preOrderStart > preOrderEnd || inOrderStart > inOrderEnd) return null;

//     let rootEle = preOrder[preOrderStart];
//     let root = new Node(rootEle);
//     let rootIndex = getRootIndex(rootEle, inOrder);

//     let leftElements = rootIndex - inOrderStart;

//     root.left = buildTree(preOrder, preOrderStart+1, preOrderEnd, inOrder, inOrderStart, rootIndex-1);

//     root.right = buildTree(preOrder, preOrderStart+leftElements+1, preOrderEnd, inOrder, rootIndex+1, inOrderEnd);

//     return root;
// }

// function getRootIndex(rootEle, Inorder) {

//     for(let i = 0; i < Inorder.length; i++) {
//         if(Inorder[i] === rootEle) return i;
//     }
// }


// const preOrder = [0, 1, 3, 4, 2, 5];
// const inOrder =  [3, 1, 4, 0, 5, 2];

// let end = preOrder.length;
// buildTree(preOrder, 0, end, inOrder, 0, end);

// Best Approach
// TC - O(nlogn)

// with preOrder and inOrder

// iStart -> inOrder start index
// iEnd-> inOrder end index

// function buildTree(preOrder, inOrder, iStart, iEnd, preIndex, map) {

//     if(iStart > iEnd) return null;

//     console.log(preOrder[preIndex]);
//     let root = new Node(preOrder[preIndex]);
//     preIndex[0]++;  // this is the mandary place to incresment, if we incresement at method call, it will not work
//     if(iStart === iEnd) return root;

//     let rootIndex = getRootIndex(map, preOrder[preIndex-1]); // sub -1 bcz we have incresmented in 1609

//     root.left = buildTree(preOrder, inOrder, iStart, rootIndex-1, preIndex, map);  // preIndex+1 this will not work
//     root.right = buildTree(preOrder, inOrder, rootIndex+1, iEnd, preIndex, map);

//     return root;
// }

// function returnTree(preOrder, inOrder) {

//     const iStart = 0;
//     const iEnd = preOrder.length;
//     const preIndex = [0];

//     let map = new Map();
//     inOrder.forEach((element, ind) => {
//         map.set(element, ind);
//     })
//     return buildTree(preOrder, inOrder, iStart, iEnd-1, preIndex, map);
// }

// function getRootIndex(map, preIndex) {
//     return map.get(preIndex) ?? -1;
// }

// const preOrder = [0, 1, 3, 4, 2, 5];
// const inOrder =  [3, 1, 4, 0, 5, 2];

// let bt = returnTree(preOrder, inOrder);
// console.log(JSON.stringify(bt));

// L36. Serialize and De-Serialize

// Serialize    -> convert given tree -> array of strings
// De-Serialize -> convert array of strings -> tree

// this prb can be solved in many approaches, now will try to solve by  level order traversal

// 1. how we will identify if node has no left or right child node
        // so to indicate push -1 for respective node




// function serialize(root) {
//     if (root === null) return null;

//     let arr = [];
//     let q = [];
//     q.push(root);

//     while (q.length) {
//         let node = q.shift();

//         if (node === null) {
//             arr.push(-1);
//             continue;
//         }
//         arr.push(node.data);

//         q.push(node.left);
//         q.push(node.right);
//     }

//     return arr;
// }

// function deSerialize(arr) {

//     if(arr.length === 0) return null;

//     let root = new Node(arr[0]);
//     let q = [root];
//     let i = 1;

//     while(q.length) {
//         let curr = q.shift();

//         if(arr[i] !== -1) {
//             let left = new Node(arr[i]);
//             curr.left = left;
//             q.push(left);
//         }
//         i++;
//         if(arr[i] !== -1) {
//             let right = new Node(arr[i]);
//             curr.right = right;
//             q.push(right);
//         }
//         i++;

//     }
//     return root;
// }


// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.right.left = new Node(6);

// let arr = serialize(root);
// // console.log(arr);
// let ans = deSerialize(arr);
// console.log(ans);



// ---------------------------- ** -------------------
//  Approach 2 - preorder
// traverse and collect all node elements

function serialize(root, arr) {

    if(root === null) {
        arr.push(-1);
        return null;
    }

    arr.push(root.data);
    serialize(root.left, arr);
    serialize(root.right, arr);
}

function deserialize(arr1, i) {

    if(arr1[i[0]] === -1) {
        i[0]++;
        return null;
    } 

    let root = new Node(arr1[i[0]]);
    i[0]++;
    root.left = deserialize(arr1, i);
    root.right = deserialize(arr1, i);

    return root;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(6);
let arr = [];
serialize(root, arr);
let i = [0];
let ans = deserialize(arr, i);

console.log(ans);