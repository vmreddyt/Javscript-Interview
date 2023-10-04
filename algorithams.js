// Algothima is an well-defined instruction to solve particalat given problem
// Time and Space Complexity
// ================================
// Amount of time taken to coplete
// Amount of memory taken to complete

// Asyptotic notations
// 1. Big-O Notation (O -notation) - Worst case complexity
// 2. Omega Notation () - Best case complexity - X
// 3. Theta Notation () - Average case complexity  - X


// ================================
// Big-O Notation
// Big-O Time omplexity is depend on the input size

// Time complexity n + 2 => n => O(n) Linear
// IF is there any loop then time compexxity is Linear
function sum(n) {
    let sum = 0; //1
    for (let i = 0; i < n; i++) {
        sum += I; //4 (n)
    }
    return i; // 1
}
// O(1) - Constant
 function constantComplexity(n){
    return (n * (n + 1)) /2;
 }
//  O(n2) - Quadratic // 3n2 + 5n + 1
function quadraticFunn(n) {
    for (let i = 0; i <= n; i++) {
       for (let j = 0; j <= i; j++) {
        
       }
    }
}
//  O(n3) Cubic
function cubicFunn(n) {
    for (let i = 0; i <= n; i++) {
       for (let j = 0; j <= i; j++) {
        for (let k = 0; k <= j; k++) {
        }
       }
    }
}
// Input size reduced by half every iteration is Logarithamic
// O(log n)

// Space (Memory) Compexity
// O(1) constant
// O(n) Linear
// O(log n) Logarithamic

// Big(O) of Object and Array Operation

// Object
// Object is a collection of key value pair
// 1. insert/remove/access - O(1) - Constant
// 2. Search/Object.keys()/Object.values()/Object.entries() - O(n) - Linear

// Array
// Arrray is an ordered coolection
// 1. Inser/remove at the end  - O(1) - Constant
// 2. Inser/remove at the begining  - O(n) - Linear
// 3. Acceess - O(1)
// 4. Search O(n)
// 5. push/pop O(1)
// 6. shift/unshift/splice/slice/contact - O(n)
// 7. forEach/map/reduce/filter - O(n)

// Math Algortithams
// 1. Fibonacci sequence
// 2. Factorial of a Number
// 3. Prime Number
// 4. Power of Two
// 5. Recurssion
// 6. Fibonacci sequence with Recurssion
// 7. Factorialof a  number with Recurssion

function fibonaciFun (n) {
    // Big O - O(n) - Linear
    // Option 1
    // let newArray = [];
    // for (let i = 0; i < n; i++) {
    //     if(i == 0 || i == 1 ) {
    //         newArray.push(i);
    //     } else {
    //         newArray.push(newArray[i - 1] +  newArray[i - 2]);
    //     }
        
    // }
    // return newArray;
    // Option 2
    const fib = [0,1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i -1] + fib [i - 2];

    }
    return fib;
}
function recursiveFibonaciFun(n){
if( n < 2) {
    return n;
}
return recursiveFibonaciFun(n-1) + recursiveFibonaciFun(n-2)
}
// console.log(fibonaciFun(20));

function factorialFun(n) {
    // Big 0 - O(n) - Linear
    // return n *  n > 1 ? factorialFun(n-1) : n;
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
// console.log(factorialFun(5))

function primeFun(n){
    // Big o - O(lsqrt(n)) - sqrt
    // if( n >2 ) {
    //     return ( n % 2 !== 0  );
    // } else if(n === 2){
    //     return true;
    // } else {
    //     // If given value is zero, or less than simply we return false
    //     return false;
    // }

    if(n < 2) {
        return false;
    } else {
        for (let index = 2; index < Math.sqrt(n); index++) {
            if(n % index === 0)  return false;
        }
        return true;
    }
}
// console.log(primeFun(2));

function powerOfTwo(n){
    // Big O - O(log n)
    if(n < 1) return false;
    while(n >1) {
        if(n % 2 !== 0) {
            return false;
        }
        n = n/2;
    }
    return true;

}
function ispoerofTwoBitwise(n){
    // Big o - O(1) - COnstant
if( n < 1) {
    return false;
}
 return ( n & (n-1)) === 0;
}
// console.log(powerOfTwo(1))