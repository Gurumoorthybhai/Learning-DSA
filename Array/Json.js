/*
const obj = [
    {
        key: 'sample1',
        data: 'Data1'
    },
    {
        key: 'sample1',
        data: 'Data1'
    },
    {
        key: 'sample2',
        data: 'Data2'
    },
    {
        key: 'sample2',
        data: 'Data2'
    },
    {
        key: 'sample3',
        data: 'Data3'
    },
]

const ans = obj.reduce((acc, curr) => {
    const { key } = curr;
    if(acc?.[key]) {
        acc[key].push(curr);
    } else {
        acc[key] = [curr];
    }
    return acc;
}, {});

console.log(ans);


// {
//     'sample1': [
//         {

//         }
//     ]
// }

*/

/*
const add = (a,b) => a+b;

const cacheObj = {};
function memoizeOne(fn) {

    let cacheObj = {};

    return (...args) => {
        let args1 =  JSON.stringify(args);
        if(cacheObj[args1]) {
            console.log(" return memoized value");
            return cacheObj[args1];
        } else {
            // console.log(" return memoized value");

            cacheObj[args1] = fn(...args);
        }
        console.log(" return new value");

        return cacheObj[args1];
    }

}

// memoizeOne(10, 20);
// memoizeOne(10, 20);
const memoizedAdd = memoizeOne(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
*/

function flattenArray(a) {

    let result = [];

    a.forEach((num) => {
        if(Array.isArray(num)) {
            // let ans = flattenArray(num);
            result.push(...flattenArray(num));
        } else {
            result.push(num);
        }
    });

    return result;

}

// const nums = [1, 2, 3, [4, [5, 6], 7],8]
const nums = [1, 2, "abcd ", [4, [{key: "value"}, 6], 7],8]
const result = flattenArray(nums);
console.log(result);