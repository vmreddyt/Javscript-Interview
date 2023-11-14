// console.log('hello');

let arr = [{ f: 'd', a: 30 }, { f: 'c', a: 50 }, { f: 'z', a: 24 }, { f: 'a', a: 26 }];
let out = arr.reduce((acc, val) => {
    if (val.a <= 30) {
        acc.push(val.f);
    }
    return acc;
}, []);

// console.log(out);
// ------------------------------------------------

var locations1 = {
    id: 2433,
    name: "Sunnyvale",
    parent: {
        id: 3434,
        name: "California",
        parent: {
            id: 4234,
            name: "US"
        }
    }
}

var locations2 = {
    id: 2433,
    name: "Beijing",
    parent: {
        id: 3434,
        name: "China"
    }
}

// soution
var result = [];
function getLocation(locations) {
    if (locations.name) {
        result.unshift(locations.name);
    }
    if (locations.parent) {
        getLocation(locations.parent);
    }
    return result;
}
// console.log(getLocation(locations1).join('=>'));
// ------------------------------------------------
//INPUT
var user = {
    id: 2433,
    name: "Somesh",
    address: {
        State: "Bangalore",
        country: "INDIA",
        phone: {
            number: "1234567890",
        }
    }
}

// Output
// {
//     user_id: 2433,
//     user_name: 'Somesh',
//     user_address_State: 'Bangalore',
//     user_address_country: 'INDIA',
//     user_address_phone_number: '1234567890'
// }
// Solution
var newObj = {}; //new Object();

function frameNewObj(obj, parent) {
    for (const key in obj) {

        if (typeof obj[key] === 'object') {
            frameNewObj(obj[key], parent + '_' + key);
        } else {
            newObj[parent + '_' + key] = obj[key];
            // console.log(newObj)
        }
    }
    return newObj;

}
// console.log(frameNewObj(user, 'user'))
// ------------------------------------------------


// Reverse string

// sol 1convert string to array
// split('')
// Reverse()
// join('')

var revers = 'venkat';
function rverseString(str){
    return str.split('').reverse().join('');
}
// console.log(rverseString(revers));

// sol 2 convert string to array
// create empty string
// loop though each cahrecter
// retrun the reversed
// console.log(reverseWithLoop(revers));

function reverseWithLoop(str){
    let reverseStr = '';
    for (const char of str) {
        reverseStr = char + reverseStr;
    }
    return reverseStr;
}

// ------------------------------------------------
// Palindrom
// palindrome("abba") == true
// palindrome("abcdefg") == false
var palin ='abddba';
function palindrome(str){
  console.log(rverseString(str) == str);
}
// palindrome(palin);
// ------------------------------------------------
// How to find the maximum charecter in as tring and how many times it appear
var randomString = 'ssfskdlfrsdfk###(((&&&srlllllll';
function findCharAppear(obj){
    var result = {};
    var max = 0;
    for (const char of obj) {
        if(result[char]) {
            result[char] = result[char] + 1;
        } else {
            result[char] = 1
        }
    }
    for (const count of Object.keys(result)) {
        if (max < result[count]){
            max = result[count];
        }
    }
    console.log(result, max);
}
// findCharAppear(randomString);

// ------------------------------------------------

// Reverse an Integer

// Convert to string, turn into array and revese back to string then number

var num  = 234567;
function reverseNUmber(num){
    return rverseString(num.toString());
}

// console.log( reverseNUmber(num))
// ------------------------------------------------

// FIzz buzz program

// Write a program to print to the screen number 1 to n, For multiples of e print fizz; for multiples of 5 rint buzz; for mutliples of 3 qnd 5 printfizzbuzz.
function fizzBuzz(num){
    for (let index = 1; index <= num; index++) {
    //    if(index %3 === 0 && index % 5  === 0) {
    //     console.log('fizzbuzz');
    //     ++index;
    //    }
    //    if( index % 3 === 0) {
    //     console.log('fizz');
    //     ++index;
    //    }
       if(index % 15 === 0) {
           console.log('fizzbuzz');
           ++index;
        }
       if(index % 5 === 0) {
           console.log('buzz');
           ++index;
        }
        if( index % 3 === 0) {
         console.log('fizz');
         ++index;
        }
       if(index > num) break; else
       console.log(index);
        
    }
}
// console.log(fizzBuzz(40));
// ------------------------------------------------
// Clasical chunked array
var chunnkeArrray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function chunnkAray(arr, n) {
    let finalArray = [];
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        var lastArray = finalArray[finalArray.length - 1];
        if(!lastArray || lastArray.length === n) {
            console.log('if' +index);
            finalArray.push([arr[index]])
        } else {
            console.log('else'+ index);
            lastArray.push(arr[index]);
        }
        // if (arr[index] % n === 0) {
        //     newArr.push(arr[index]);
        //     finalArray.push(newArr);
        //     newArr = [];
        // } else {
        //     newArr.push(arr[index]);
        //     if(arr.length === (1 + index)) {
        //         finalArray.push(newArr);
        //     }
        // }

    }
    // var lastArray = finalArray[finalArray.length - 1];
    return {finalArray, chunnkeArrray, lastArray};
}

// console.log(chunnkAray(chunnkeArrray, 3));
// ------------------------------------------------

// Impliment an ALgorithm to detarmine if a string  has all uniquee charectars
var uniqStr = 'abcdefghhi';

const uniqStrMet = (str) => {
let newObj = {}
for (const char of str) {
    // console.log(char)
    if(newObj[char]) {
        newObj[char] = ++newObj[char];
    } else {
        newObj[char] =  1;
    }
} 
for (const key in newObj) {
    if (newObj[key] > 1) {
       return false;
    } else {
        return true;
    }
}
};
// console.log(uniqStrMet(uniqStr));

// ------------------------------------------------

// Given two string, Write a method to find the decide the permutaioan of others
// Algo
// Check if there are the exact strings -else
// Check the length of the both strings
//  Create objects of each one
// check if the objects count or equal - else
// return true
const getObj = (str) => {
    let obj = {};
    for (const char of str) {

        if (obj[char]) {
            obj[char] = ++obj[char];
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}
const isPermutaion = (str1, str2) => {
    if (str1 == str2) {
        return true;
    } else {
        if (str1.length != str2.length) {
            return false;
        } else {
            let obj1 = getObj(str1);
            let obj2 = getObj(str2);
            for (const key in obj1) {
                console.log(key);
                if (obj1[key] != obj2[key]) {
                    return false;
                }
            }
        }
    }
    return true;
}
// console.log(isPermutaion('abca', 'acca'));
// ------------------------------------------------
// Replace all spaces in a string with %20
// Assume there is a sufficinat space at the end

const URLify = ((str) => {
let newStr = '';
for (const i in str) {
    if(str[i] == ' ') {
        newStr += '%20';
    } else {
        newStr += str[i];
    }
}
// console.log(newStr);
})(' venakt reddy ');
// ------------------------------------------------

// Permutaion of palindrom
// remvoe the white spaces
// Create oj map
// Check if string is odd, retrun false if there is more than one odd number charecrter count
// Check if string is Even, return false if there is not an even number charecter count of each cahrecter
//  Return true
const permuPolindrome = (str) => {
    // Remove white space between string
    str = str.replace(/ +/g, '')
    // Get OBj
    let obj = getObj(str);

    // Check if string is Odd
    if (str.length % 2 == 1) {
        // Return false if more than one odd number chareter
        let counter = 0;
        for (const i of str) {
            if(obj[i]%2 ===1 || obj[i]===1)
            counter++;
            if(counter>1) 
            return false;
        }
    } else {
        // Check if string is even
        for (const i of str) {
            if(obj[i]%2 !== 0)
            return false;
        }

    }
    console.log(str, obj);
    return true;
}
// console.log(permuPolindrome('tact coa'))
// ------------------------------------------------
// If strings are identical - then return false -zer edit
//  Create charecter map for both the strings
// Check each charecter are of same type and value
// If they are not increase the counter
// If the coumter is 2 or more, then return false
// return true
const oneAway = (str1, str2) => {
    if (str1 === str2) {
        return false;
    } else {
        // Get OBj
        let obj1 = getObj(str1);
        let obj2 = getObj(str2);
        let counter = 0;
        for (const key in obj1) {
            if (obj1[key] !== obj2[key]) {
                counter++;
            } else  if(counter >=2 ) {
                return false;
            }
        }
        return true;
    }
}
// console.log(oneAway('pale', 'pales'));
// ------------------------------------------------

const stringCompression = (str) => {
    const n = str.length;
    let count = 1; output = ''; uniqCount = 0;
    for (let i = 0; i < n; i++) {
        if (str[i] === str[i+1]) {
            count++;
        } else {
            output += str[i]+count;
            count = 1;
            uniqCount++;
        }
    }
    if(uniqCount ===n) return str;
    else return output;
}
// console.log(stringCompression('aaabbbbbaaacsccddddddd'));
// ------------------------------------------------


const zeroMatrix = (matrix, n) => {
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] === 0) matrix[r][c] = true;
        }
    }

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] === true) {
                for (let i = 0; i < n; i++) {
                    matrix[r][i] = 0;
                }
                for (let i = 0; i < n; i++) {
                    matrix[i][c] = 0;
                }
            }
        }
    }
    return matrix;
}
let matrix = [[2,4,0],[1,4,4],[5,7,8]]
// console.log(zeroMatrix(matrix,3));
// ------------------------------------------------

function curry(a){
    // debugger;
    return function inner(b) {
        return b ? curry(a + b)  : a;
    }
}

console.log(curry(2)(3)(4)(5)(11)(4)())
// ------------------------------------------------


var a =  ['{','}','[','(',')',']'];

// function stackArray(s) {
//     let stack = [];
//     for (var i = 0; i < s.length; i++) {
//         let lastChar = stack[stack.length - 1];
//         if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
//             stack.push(s[i])
//         } else if (lastChar == '(' && s[i] == ')' || lastChar == '{' && s[i] == '}' || lastChar == '[' && s[i] == ']') {
//             stack.pop();
//         } else return false;
//     }
//     return stack.length ? false : true
// }
function stackArray(s) {
    let stack = [];
    let map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i])
        } else if (stack[stack.length - 1] == map[s[i]]){
            stack.pop();
        } else return false;
    }
    return stack.length ? false : true
}
console.log(stackArray(a))



function xyz(){
    var x = []
    var abc = ['Maheshwara Reddy','viswa reddy','sachine tendulakr'];
    abc.forEach(element => {
        result = { name: element, shortName: getFirstChar(element), imaage: 'sample'}
        x.push(result)
    });
    console.log(x)
}

function getFirstChar(obj){
    var newArray =obj.split(' ');
    return newArray[0].charAt(0) + newArray[1].charAt(0)
}
xyz();
