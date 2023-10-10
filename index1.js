// function Person(fName,lName){
//     this.firstName = fName;
//     this.lastName = lName;
// }
// Person.prototype.getFullName = function() {
//     return this.firstName + ' '+ this.lastName; 
// }

// function SuperHero(fName, lName) {
//     Person.call(this, fName, lName);
//     this.superHero  = true;
// }
// SuperHero.prototype.fightCrime = function() {
//     console.log("Fighting Crime");
//     return this.firstName + ' '+ this.lastName; 
// }
// SuperHero.prototype = Object.create(Person.prototype);
// SuperHero.prototype.constructor = SuperHero;

class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
class SuperHero extends Person {

    constructor(fName, lName) {
        super(fName, lName);
        this.superHero = true;
    }
    fightCrime() {
        console.log("Fighting Crime");
        return this.firstName + ' ' + this.lastName;
    }
}
SuperHero.prototype.fightCrime = function () {
    console.log("Fighting Crime");
    return this.firstName + ' ' + this.lastName;
}
let person1 = new Person('venkat', 'reddy')
let superHero1 = new SuperHero('Lokith', 'Reddy');
person1.address = 'Bangalore';
let person2 = new Person('venkat1', 'reddy1')

console.log(superHero1.getFullName());
console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person1.address);
console.log(person2);
console.log(superHero1);
console.log(superHero1.fightCrime());
console.log('index2'); 


// Pollyfill similar to mybind
var name1 = {
    firstName: 'Venkat',
    lastName: 'Reddy'
}

var printName  = function(surname, middlename) {
    console.log(this.firstName + ' ' + this.lastName + ' ' + surname + ' ' + middlename);
}
var printMYname = printName.bind(name1, 'Tamatam');
printMYname('Maheswara');

Function.prototype.mybind = function(...args) {
    let obj = this,
    params = args.slice(1);
    return function (...args1) {
        obj.apply(args[0], [...params, ...args1]);
    }
}
var printMYname1 = printName.mybind(name1, 'Tamatam');
printMYname1('Maheswara');