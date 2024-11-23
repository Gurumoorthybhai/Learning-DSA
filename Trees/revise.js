
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


// vertical order/line
// 1. find the width of the tree
// 2. loop the width from left to right
// for each distance width, create a map with {key, [values]} 

        //         1
        //     2       3
        // 4      5 6     7
        //             8
        //                9
        //                   10

// With DFS, the order of the node will not in expected way bcz if we see the 
// above node 10 is printed before 7, to solve this issue, we need to traverse with BFS

// function minMaxDistance(node, width, minMax) {

//     if(node === null) return;

//     if(width < minMax[0]) minMax[0] = width;
//     if(width > minMax[1]) minMax[1] = width;

//     minMaxDistance(node.left, width-1, minMax);
//     minMaxDistance(node.right, width+1, minMax);
// }

// function collectVerticalLine(node, width, obj) {

//     if(node === null) return;

//     if(!obj[width]) {
//         obj[width] = [];
//     }

//     obj[width].push(node.data);

//     collectVerticalLine(node.left, width-1, obj);
//     collectVerticalLine(node.right, width+1, obj);
// }

// let root = new Node(1);
// root.left = new Node(2);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right = new Node(3);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

// let minMax = [0, 0];
// minMaxDistance(root, 0, minMax);
// let obj = {};
// collectVerticalLine(root, 0, obj);
// let res= [];
// Object.keys(obj).sort((line1, line2) => (line1-line2)).forEach((key) => res.push(obj[key]));

// console.log(res);


function verticalLine(node) {

    const map = new Map();
    let hd = 0;
    let q = [[node, hd]];

    while(q.length) {

        let [node, hd] = q.shift();

        if(!map.has(hd)) {
            map.set(hd, []);
        }

        map.get(hd).push(node.data);

        if(node.left) {
            q.push([node.left, hd-1]);
        }

        if(node.right) {
            q.push([node.right, hd+1]);
        }
    }

    console.log([...map.keys()]);
    // [...map.keys()].sort((a, b) => (a-b)).forEach(key => console.log(map.get(key)))

    // for(let [key, val] of [...map.keys()].sort((a, b) => (a-b)))
    //     console.log(val);
}

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.left = new Node(6);
root.right.left.right = new Node(8);
root.right.left.right.right = new Node(9);
root.right.left.right.right.right = new Node(10);

root.right.right = new Node(7);

verticalLine(root);
