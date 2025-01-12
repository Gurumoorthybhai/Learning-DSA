// print zigzag if given tree

// https://www.geeksforgeeks.org/zigzag-tree-traversal/?ref=header_ind#using-two-stacks-on-time-and-on-space
// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/submissions/1506090454/?envType=problem-list-v2&envId=tree

// this can be solved by 3 ways

// 1. 2 stack (1 stack to iterate, 1 stack to push), why not single stack its not possible bcz push and iterate will go wrong
// 2. recursion, create a array with each level, if case of odd will push same, in case of even height index, will reverse
// 3. deque, based on flag, we will control the push

class TreeNode {
    constructor(val, left, right) {
        this.val = val ?? null;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

// ==================== ******** =====================
// 1. 2 stack



// var zigZag = function(root) {

//     const res = [];
//     if(!root) return res;
    
//     let currLevel = [root];
//     let nextLevel = [];
//     let flag = false;

//     while(currLevel.length) {

//         let size = currLevel.length;
//         let pair = [];
//         while(size--) {
//             let curr = currLevel.pop();
//             pair.push(curr.val);
            
//             if(flag) {
//                 if(curr.right) nextLevel.push(curr.right);
//                 if(curr.left) nextLevel.push(curr.left);
                
//             } else {
//                 if(curr.left) nextLevel.push(curr.left);
//                 if(curr.right) nextLevel.push(curr.right);
//             }
//         }

//         res.push(pair);
//         flag = !flag;
//         [currLevel, nextLevel] = [nextLevel, currLevel];
//     }

//     return res;
// }


// modularized way

// var zigZag = function(root) {

//     if(!root) return [];

//     const result = [];
//     let flag = false;
//     let currentLevel  = [];
//     currentLevel.push(root);

//     while(currentLevel.length) {
//         let pair = processCurrentLevel(currentLevel, flag);
//         result.push(pair.values);

//         flag = !flag;
//         currentLevel = pair.nextLevel;
//     }

//     return result;
// }

// function processCurrentLevel(currentLevel, flag) {
//     let nextLevel = [];
//     let values = [];

//     while(currentLevel.length) {

//         let curr = currentLevel.pop();
//         values.push(curr.val);
    
    
//         if(flag) addToNextLevel(curr.right, curr.left, nextLevel);
//         else addToNextLevel(curr.left, curr.right, nextLevel);
//     }

//     return {values, nextLevel};
// }

// function addToNextLevel(firstChild, secondChild, nextLevel) {
//     if(firstChild) nextLevel.push(firstChild);
//     if(secondChild) nextLevel.push(secondChild);
// }

// ==================== ******** =====================
// 2. recursion

// var zigZag = function(root) {

//     if(!root) return [];

//     let result = [];
//     const levelOrder = getLevelOrder(root);
//     const height = getTreeHeight(root);

//     for(let i = 0; i < height; i++) {

//         if(i%2 === 0) {
//             result.push(levelOrder[i]);
//         } else {
//             result.push(levelOrder[i].reverse());
//         }
//     }

//     console.log(result);
// }


// function getLevelOrder() {
//     const level = [];
//     collectNodesRecur(root, 0, level);
//     console.log(level);
//     return level;
// }

// function collectNodesRecur(root, height, level) {

//     if(!root) return;

//     if(!level[height]) level[height] = [];

//     level[height].push(root.val);

//     collectNodesRecur(root.left, height+1, level);
//     collectNodesRecur(root.right, height+1, level);
// }

// function getTreeHeight(root) {
//     if(!root) return 0;

//     let lh = getTreeHeight(root.left);
//     let rh = getTreeHeight(root.right);

//     return Math.max(lh, rh)+1; 
// }

// const root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);

// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(7);
// console.log(zigZag(root));

// ==================== ******** =====================

// 3. iterative

// we will deque,
// odd level -> shift and even -> pop

// var zigZag = function(root) {

//     const result = [];
//     let flag = false;
//     let deque = [root];

//     while(deque.length) {

//         let size = deque.length;

//         let pair = [];
//         while(size--) {
//             let curr;
//             if(flag) {
//                 curr = deque.pop();
//             } else {
//                 curr = deque.shift();
//             }

//             pair.push(curr.val);
//             if(flag) {
//                 if(curr.right) deque.unshift(curr.right); 
//                 if(curr.left) deque.unshift(curr.left);
//             } else {
//                 if(curr.left) deque.push(curr.left);
//                 if(curr.right) deque.push(curr.right);    
//             }
//         }
//         flag = !flag;
//         result.push(pair);
//     }

//     console.log(result);
// }


var zigzagLevelOrder = function (root) {

    if (!root) return [];
    const result = [];
    const dq = [];
    dq.push(root);
    let flag = true;

    while (dq.length) {
        let size = dq.length;
        const { values } = processCurrentLevel(dq, flag,size);
        flag = !flag;
        result.push(values);
    }

    return result;
}

function processCurrentLevel(dq, flag, size) {

    let values = [];
    while (size--) {
        let curr;
        if (flag) {
            curr = dq.shift();
        } else {
            curr = dq.pop();
        }
        values.push(curr.val);

        if (flag) {

            if(curr.left) dq.push(curr.left);
            if(curr.right) dq.push(curr.right);
        } else {
            if(curr.right) dq.unshift(curr.right);
            if(curr.left) dq.unshift(curr.left);
        }
    }

    return { values };
}

// function addToDeque(firstChild, secondChild, dq) {
//     if(firstChild) dq.push(firstChild);
//     if(secondChild) dq.push(secondChild);
// }

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log(zigzagLevelOrder(root));