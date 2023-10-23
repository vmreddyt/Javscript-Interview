const linkedList = require('./linkedListDataSructure');
// import {linkedList} from './linkedListDataSructure.js'
class LinkedListQueue {
    constructor(){
        this.list = new linkedList();
    }
    emQueue(value){
        this.list.append(value);
    }
    deQuee(){
        return this.list.removeFromFront();
    }
    peek(){
        return this.list.head.value;
    }
    isEmpty(){
        return this.list.isEmpty();
    }
    getSize(){
        return this.list.getSize();
    }
    print(){
        return this.list.print();
    }
}
const stack = new LinkedListQueue();
// console.log(stack.isEmpty())