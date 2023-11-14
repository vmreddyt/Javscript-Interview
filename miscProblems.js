// Find cartesian product
// Big O Notataion O(n2) - Quadratic
function cartesiaonProduct(array1, array2){
    let cartesiaonProduct = [];
    for (let index = 0; index < array1.length; index++) {
        for (let index1 = 0; index1 < array2.length; index1++) {
            cartesiaonProduct.push([array1[index], array2[index1]]); 
        }
    }
console.log(cartesiaonProduct);
}
let array1 = [1,2], array2 = [3,4,5];
cartesiaonProduct(array1, array2);


// Climbing staircase problem
// Big O notataion - O(n) - LInear complexity
function climbingStaircase(n){
 const numberOfWays = [1,2];
for (let index = 2; index < n; index++) {
    numberOfWays[index] = numberOfWays[index - 1] + numberOfWays[index - 2];
}
 console.log('climbingStaircase ========', numberOfWays[n-1]);
}
// climbingStaircase(1);
climbingStaircase(2);
climbingStaircase(3);
// climbingStaircase(4);
// climbingStaircase(5);
// climbingStaircase(10);

// Tower of Hanoi
// BiG O notations - O(2+n)
function towerOfHonai(n, fromRod, toRod, usingRod){
    if(n === 1) {
        console.log(`Move Disk 1 from ${fromRod} to ${toRod}`);
        return;
    }
    towerOfHonai(n-1, fromRod, usingRod, toRod);
    console.log(`Move Disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHonai(n-1, usingRod, toRod, fromRod);
}
// Move Disk 1 from A to C
// Move Disk 2 from A to B
// Move Disk 1 from C to B
// Move Disk 3 from A to C
// Move Disk 1 from B to A
// Move Disk 2 from B to C
// Move Disk 1 from A to C
towerOfHonai(3, 'A', 'C', 'B');