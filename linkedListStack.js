const linkedList = require('./linkedListDataSructure');
// import {linkedList} from './linkedListDataSructure.js'
class LinkedListStack {
    constructor(){
        this.list = new linkedList();
    }
    push(value){
        this.list.prepend(value);
    }
    pop(){
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
const stack = new LinkedListStack();
// console.log(stack.isEmpty())