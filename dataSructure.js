console.log("============== START::Data Structures=============")
console.log("============== Array::Data Structures=============")

const array = [1, 2, 3, 'Venkat'];
array.push(4)
array.unshift(0)
array.pop()
array.shift();
for (const iterator of array) {
    console.log(iterator);
}
console.log("============== Object::Data Structures=============")
const obj = {
    name: 'Venkat',
    age: 32,
    'key-there': true,
    sayMyName: function () {
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
const set = new Set([1, 2, 3, 'Venkat'])
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
const map = new Map([['a', 1], ['b', 2]]);
map.set('c', 9);
map.delete('b');
console.log(map.size);
console.log(map.has('a'));
// map.clear()
for (const [key, value] of map) {
    console.log(`${key}:${value}`);
}

console.log("============== Stack::Data Structures=============")
class Stack {
    constructor() {
        this.itemes = [];
    }
    push(element) {
        this.itemes.push(element);
    }
    pop() {
        return this.itemes.pop();
    }
    peek() {
        return this.itemes[this.itemes.length - 1];
    }
    isEmpty() {
        return this.itemes.length == 0;
    }
    size() {
        return this.itemes.length;
    }
    print() {
        console.log(this.itemes.toString());
    }
}
var newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(7);
console.log(newStack.size());
console.log(newStack.isEmpty());
console.log(newStack.peek());
console.log(newStack.pop());
newStack.print();
console.log("============== Queue With Array::Data Structures=============")

class Queue {
    constructor() {
        this.items = [];
    }
    enQueue(element) {
        this.items.push(element);
    }
    deQueue() {
        this.items.shift();
    }
    peek() {
        if (this.isEmpty) {
            return this.items[0];
        } else {
            return null;
        }
    }
    isEmpty() {
        return this.items.length == 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString());
    }
}
const queue = new Queue();
console.log(queue.isEmpty());
queue.enQueue(5)
queue.enQueue(4)
queue.enQueue(3)
queue.enQueue(2)
console.log(queue.size())
queue.print()
console.log(queue.peek())
console.log("============== Queue With Object::Data Structures=============")
class QueueObj {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    enQueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }
    deQueue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    isEmpty() {
        return this.front - this.rear === 0;
    }
    peek() {
        return this.items[this.front];
    }
    size() {
        return this.rear - this.front;
    }
    print() {
        console.log(this.items);
    }
}
const objQueue = new QueueObj();
console.log(objQueue.size());
objQueue.enQueue(2)
objQueue.enQueue(23)
objQueue.enQueue(4)
objQueue.enQueue(6)
objQueue.enQueue(3)
console.log(objQueue.size());
objQueue.print()
objQueue.peek()
console.log(objQueue.deQueue());
objQueue.print()
console.log("============== Circular Queuee::Data Structures=============")
class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }
    isFull() {
        return this.capacity === this.currentLength;
    }
    isEmpty() {
        return this.currentLength === 0;
    }
    enQueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }
    deQueue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }
    print() {
        if (this.isEmpty()) {
            console.log('Queue is Empty');
        } else {
            let i;
            let str = '';
            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + ' ';
            }
            str += this.items[i];
            console.log(str);
        }
    }
}
const queee = new CircularQueue(5);
queee.enQueue(10)
queee.enQueue(20)
queee.enQueue(30)
queee.enQueue(40)
queee.enQueue(50)
console.log(queee.isFull());
queee.print()
console.log(queee.deQueue());
queee.print()
console.log(queee.peek());
