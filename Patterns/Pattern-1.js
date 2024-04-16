 /*


 * * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 


 function printPattern(num) {
    let str = "";
    for (let row = 1; row <= num; row++) {
        for (let column = 1; column <= num; column++) {
            str= str +"* ";
        }
        str = str+"\n";
    }
console.log(str);
 }


printPattern(5);
*/

/*

* 
* * 
* * * 
* * * * 
* * * * * 

function PatternTriangle(num) {

    let str = '';
    for (let row=1;row<=num;row++) {
        for(let column=1; column <= row; column++) {
            str = str +"* ";
        }
        str = str+"\n";
    }

    console.log(str);
    
}


PatternTriangle(5);

*/

/*
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5

function TriangleNumberColumn(num) {

    let str = '';
    for (let row=1;row<=num;row++) {
        for(let column=1; column <= row; column++) {
            str = str +`${column} `;
        }
        str = str+"\n";
    }

    console.log(str);
    
}

TriangleNumberColumn(5);

*/

/*

function TriangleNumberRow(num) {

    let str = '';
    for (let row=1;row<=num;row++) {
        for(let column=1; column <= row; column++) {
            str = str +`${row} `;
        }
        str = str+"\n";
    }

    console.log(str);
    
}

TriangleNumberRow(5)

*/

/*


1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1 

function DecreaseColumnNumber(num) {

    let str = '';
    for (let row=num;row>=1;row--) {
        for(let column=1; column <= row; column++) {
            str = str +`${column} `;
        }
        str = str+"\n";
    }

    console.log(str);
    
}

DecreaseColumnNumber(5)

*/

/*

 *  
 *** 
*****

function star7Pattern(num) {

    let str = '';
    for (let row=0;row<num;row++) {
        
        for(let column=0; column < num-row-1 ; column++) {
            str = str.concat(" ");
        }

        for (let star = 0; star < 2*row+1; star++) {
            str = str.concat("*");
        }
        for(let column=0; column < num-row-1 ; column++) {
            str = str.concat(" ");
        }
        str = str.concat("\n");
        // console.log(str);

    }

    console.log(str);
    
}

star7Pattern(3);

*/

/*


*****
 ***
  *

function reverse7Star(num) {

    let str = '';
    for (let row = num; row>=1; row--) {

        for(let column=0; column<num-row; column++) {
            str = str.concat(' ');
        }

        for(let star=1 ; star<= 2*row-1; star++) {
            str = str.concat('*');
        }

        for(let column=num; column<num-row; column--) {
            str = str.concat(' ');
        }

        str = str.concat('\n');
    }
    console.log(str);
    
} 

reverse7Star(3);

*/

// half diamond

/*

*
**
***
**
*

function halfDiamond(num) {

    let str = '';
    for (let i = 1; i < 2*num; i++) {

        let star = i;

        if (i > num) {
            star = 2 * num - i;
        }
            
        for (let j=1 ;j <= star;j++) {
            str = str.concat("*");
        }

        str = str.concat("\n");
        
    }
    console.log(str);
    
}

halfDiamond(3);

*/

/*
function AlphaPattern(num) {

    let str = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i ; j++) {
            str = str.concat(String.fromCharCode('A'.charCodeAt(0) + j));
        }
        str = str.concat('\n');
    }
    console.log(str);
    
}

AlphaPattern(5);

*/

