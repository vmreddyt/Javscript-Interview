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
function recursiveFactorialFun(n) {
    // Big 0 - O(n)- LInear - recursive fun
    if(n === 0){
        return 1;
    }
    return n * recursiveFactorialFun(n-1);
   
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
// ///////////////////////////////////////////////////////


// Search Algorithams
// 1. Linear Search
// 2. Binary search

// Linear Search
// Big O - O(n) - Linear
function linearSeasrch(array, item){
    for (let index = 0; index < array.length; index++) {
        if(item === array[index]){
           return  index;
        } 
    }
    return -1;
}
// console.log(linearSeasrch([15,2,3,10,30,4],4));
// Binary search
function binarySearch(array, item) {
    // Big o notation - O (log n)
    let sortedArray = array.sort((a, b) => a - b);
    // console.log(sortedArray);
    let leftIndex = 0;
    let rigthIndex = array.length - 1;
    while (leftIndex <= rigthIndex) {
        let midIndex = Math.floor((leftIndex + rigthIndex) / 2);
        if (item === sortedArray[midIndex]) {
            // console.log(midIndex);
            return midIndex;
        }
        if (item < sortedArray[midIndex]) {
            rigthIndex = midIndex - 1;
        } else {
            leftIndex = midIndex + 1;
        }
    }

    return -1;
}
// console.log(binarySearch([15,2,6,3,1,10,30,4],30));

function recursiveBinarySearch(array, target){
       // Big o notation - O (log n)
  return search(array, target, 0, array.length-1);
}
function search(array, target, leftIndex, rigthIndex){
    if(leftIndex > rigthIndex){
        return -1;
    }
    let midIndex = Math.floor((leftIndex + rigthIndex)/2);
    if(target === array[midIndex]){
        return midIndex;
    }
    if(target < array[midIndex]){
      return  search(array, target, leftIndex, midIndex - 1);
    } else {
       return search(array, target, midIndex + 1, rigthIndex);
    }
}
// console.log(recursiveBinarySearch([1,3,5,7,9,23,67,88,90], 90))

// Sorting Algoithams
// Bubble,Insertion, Quik and Merge sort

function bubbleSort(array){
     // Big o notation - O (n2)
    let swapped;
    do {
        swapped = false;
        for (let index = 0; index < array.length - 1; index++) {
    
            if(array[index] > array[index+1]){
                let temp = array[index];
                array[index] = array[index+1];
                array[index+1] = temp; 
                swapped = true;
            }
            
        }
    } while (swapped)
    return array;
}
// console.log(bubbleSort([23,-1,-67,5,5,-5,54,8,6,3,2,9]));

function insertSort(array){
      // Big o notation - O (n2)

    for (let index = 1; index < array.length; index++) {
        let nummberToInsert = array[index];
        let j = index - 1;
        while (j >= 0 && array[j] > nummberToInsert) {
            array[j+1] = array[j];
            j = j -1;
        }
        array[j+1] = nummberToInsert;
        
    }
    // return array;
}
let xx = [23,-1,-67,5,5,-5,54,8,6,3,2,9];
insertSort(xx);

// Quick sort
// 1. Pick First Element pivot
// 2. Pick last Element pivot(Our approach)
// 3. Pick Random Element pivot
// 4. Pick median as pivot

function quickSort(array){
    // worstcase complexity o(n2)
    // Avg case - O(nlogn)

    if(array.length < 2) {
        return array;
    }
    let pivot = array[array.length -1];
    let leftArray = [], rigthArray = [];
    for (let index = 0; index < array.length - 1; index++) {
       if(array[index] < pivot )  {
        leftArray.push(array[index]);
    } else{
        rigthArray.push(array[index]);
       }
    } 
    return [ ...quickSort(leftArray), pivot, ...quickSort(rigthArray)] 
}
quickSort(xx);


// Merge sort
// Big o Notation O(nlogn)
function mergeSort(array){
    if(array.length < 2) {
        return array;
    }
    let mid = Math.floor(array.length/2);
    let leftArray = array.slice(0, mid);
    let rigthArray = array.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rigthArray));
}
function merge(leftArray, rigthArray){
    const sortedArray = [];
    while(leftArray.length && rigthArray.length){
        if(leftArray[0] <= rigthArray[0]){
            sortedArray.push(leftArray.shift())
        } else {
            sortedArray.push(rigthArray.shift())
        }
    }
    return [...sortedArray, ...leftArray, ...rigthArray];
}
mergeSort(xx);
console.log(xx);

// Verify pass by reference
// function modifyObj(obj) {
//     console.log(obj);
//     obj['name'] = 'xyzddd';
// }
// let xyz = {
//     name: 'abc'
// }
// console.log(xyz);
// modifyObj(xyz);
// console.log(xyz)