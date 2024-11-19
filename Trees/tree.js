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

let maxi = Number.MIN_VALUE;

function findMaxUtil(node) {

    if(node === null) return 0;

    let l = findMaxUtil(node.left);
    let r = findMaxUtil(node.right);

    let maxiPath = Math.max(node.data, Math.max(l, r) + node.data);

    let nodeMaxi = Math.max(l+r+node.data, maxiPath);

    maxi = Math.max(nodeMaxi, maxi);


    return maxiPath;
}


function findMaxSum(root) {
    
    return findMaxUtil(root);
}
function findMaxsum() {
    findMaxSum(root)
    return maxi;
}


let root = new Node(10);
root.left = new Node(2);
root.right = new Node(10);
root.left.left = new Node(20);
root.left.right = new Node(1);
root.right.right = new Node(-25);
root.right.right.left = new Node(3);
root.right.right.right = new Node(4);
console.log(findMaxsum());



// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// let maxi = 0;
// maxPathSum(root, maxi);
// console.log(maxi);