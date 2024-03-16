// Greatest Common Divisor | GCD
// Highest Common Factor | HCF

function GCD(a,b) {

    while (a>0 && b>0) {

        if (a>b) {
            a = a%b;
        } else {
            b = b%a;
        }
    }
    if (a==0) return b;
    return a;
}

// console.log(GCD(15,40));
console.log(GCD(2,1));