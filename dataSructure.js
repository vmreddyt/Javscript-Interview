console.log("==============START::Data Structures=============")
console.log("==============Array::Data Structures=============")

const array = [1,2,3, 'Venkat'];
array.push(4)
array.unshift(0)
array.pop()
array.shift();
for (const iterator of array) {
    console.log(iterator);
}
console.log("==============Object::Data Structures=============")
const obj = {
    name: 'Venkat',
    age:32,
    'key-there':true,
    sayMyName: function(){
        console.log(this.name);
    }
}
console.log(obj);
obj.hobbey = 'footbal';
const entries = Object.entries(obj);
const keys = Object.keys(obj);
const values = Object.values(obj);
console.log(entries);
console.log(keys);
console.log(values);
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element, key);
        
    }
}
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
  }
console.log("============== Set::Data Structures=============")
const set = new Set([1,2,3, 'Venkat'])
set.add(4);
set.add(4);
console.log(set.has(3));
set.delete(3)
console.log(set.size);
set.clear();
for (const iterator of set) {
    console.log(iterator);
}

console.log("============== MAp::Data Structures=============")
const map = new Map([['a',1],['b',2]]);
map.set('c', 9);
map.delete('b');
console.log(map.size);
console.log(map.has('a'));
// map.clear()
for (const [key, value] of map) {
    console.log(`${key}:${value}`);
}

console.log("============== END::Data Structures=============")