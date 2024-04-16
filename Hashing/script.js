// hashing, hashing is a technic used to store & retrive elements;

// creating a hashing constructor

/*

0   [
    ['bolts', 1000],
    ['screws', 2000]
    ]

1   []

*/

/*

class Hashing {
    constructor(size=7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash=0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)* 23) % key.length;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.dataMap[index]) {
                this.dataMap[index] = [[key, value]];
        } else {
        this.dataMap[index].push([key, value]);
        }
        return this;
    }

    get(key) {
        const index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }

        return undefined;
    }
}

const obj = new Hashing();
console.log("data obj", obj);

// obj.set('bolts', 1000);
*/

/*

function findDuplicates(arr) {


    // const duplicate = [];
    // const obj = {};
    
    // for (let i = 0; i < arr.length; i++) {

    //     obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    // }

    // for (let [key, val] of Object.entries(obj)) {
    //     if(val > 1) duplicate.push(parseInt(key));
    // }

    // return duplicate;

    const duplicate = [];
    const obj = new Map();

    arr.forEach(ele => {
        obj.set(ele , (obj.get(ele) || 0)+ 1);
    });

    obj.forEach((val, key) => {
        if(val > 1) duplicate.push(key);
    });

    return duplicate;
}


// ---------------
// No Duplicates
// ---------------
console.log("No Duplicates:");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 2, 3, 4, 5])));
console.log("---------------");

// ---------------
// Single Duplicate
// ---------------
console.log("Single Duplicate:");
console.log("Input: [1, 2, 2, 3, 4]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 2, 2, 3, 4])));
console.log("---------------");

// ---------------
// Multiple Duplicates
// ---------------
console.log("Multiple Duplicates:");
console.log("Input: [1, 1, 2, 2, 3, 4]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 1, 2, 2, 3, 4])));
console.log("---------------");

// ---------------
// Repeating Duplicates
// ---------------
console.log("Repeating Duplicates:");
console.log("Input: [1, 1, 1, 2, 2, 2, 3]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 1, 1, 2, 2, 2, 3])));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: []");
console.log("Output: ", JSON.stringify(findDuplicates([])));
console.log("---------------");

// ---------------
// Single Element
// ---------------
console.log("Single Element:");
console.log("Input: [1]");
console.log("Output: ", JSON.stringify(findDuplicates([1])));
console.log("---------------");

/*

const mapObj = new Map();

mapObj.set(1, 10);
mapObj.set(1, 20);
mapObj.set(20, 20);
mapObj.set(30, 30);

// for(let entry of mapObj) console.log(entry);
console.log(mapObj.keys());

*/

// function groupAnagrams(arrStr) {

//     const objMap = new Map();

//     arrStr.forEach(word => {

//         const sortedWord = word.split('').sort().join('');

//         if(!objMap.has(sortedWord)) {
//             objMap.set(sortedWord, []);
//         }

//         objMap.get(sortedWord).push(word);
//     });

//     // console.log(objMap);
//     console.log(Array.from(objMap.values()));
    

// }

/*

function groupAnagrams(arrStr) {
    
    const anagramGroups = new Map();
    
    arrStr.forEach(word => {

        let sortedWord = word.toLowerCase().split('').sort().join('');
        
       if(!anagramGroups.has(sortedWord)) {
            anagramGroups.set(sortedWord, []);
       }
       anagramGroups.get(sortedWord).push(word);
    });
    
    return Array.from(anagramGroups.values());
}

// anagram(['eat', 'ate', 'tea', 'xyz', 'yzx', 'zyx']);

console.log("Lowercase Anagrams:");
console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']");
// console.log("Output: ", JSON.stringify(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])));
console.log("Output: ", JSON.stringify(groupAnagrams(['Eat', 'Tea', 'Tan', 'Ate', 'Nat', 'Bat'])));
console.log("---------------");
*/

function TargetSum(arr, target) {

    if(arr.length === 0) return []
    const mapArr = new Map(arr.map((val, index) => [val, index]));
    
    // console.log(mapArr);
    
    for (let [val, key] of mapArr) {
        if(mapArr.has(target-val)) {
            return [key, mapArr.get(target-val)];
        }

    }
}

// TargetSum([2, 7, 11, 15], 9);

// / Duplicate Numbers
// ---------------
console.log("Duplicate Numbers:");
console.log("Input: [3, 3, 11, 15], Target: 6");
console.log("Output: ", JSON.stringify(TargetSum([3, 3, 11, 15], 6)));
console.log("---------------");

// ---------------
// No Solution
// ---------------
console.log("No Solution:");
console.log("Input: [2, 7, 11, 15], Target: 30");
console.log("Output: ", JSON.stringify(TargetSum([2, 7, 11, 15], 30)));
console.log("---------------");

// ---------------
// Negative Numbers
// ---------------
console.log("Negative Numbers:");
console.log("Input: [-1, -2, -3, -4, -5], Target: -8");
console.log("Output: ", JSON.stringify(TargetSum([-1, -2, -3, -4, -5], -8)));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: [], Target: 0");
console.log("Output: ", JSON.stringify(TargetSum([], 0)));
console.log("---------------");


