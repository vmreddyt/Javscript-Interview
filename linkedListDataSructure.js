console.log("============== Linked List (Linear)::Data Structures=============")
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    // O(1) - constant
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    // O(n) linear
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }
   

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }
    removeIndex(index) {

        if (index < 0 || index > this.size) {
            return;
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;

        }
        this.size--;
        return removedNode.value;

    }
    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                const removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }

    print() {
        if (this.isEmpty()) {
            console.log(`List is empaty`);
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr != null) {
                // console.log(curr);
                listValues += curr.value + ' ';
                curr = curr?.next;
            }
            console.log(listValues);
            console.log(this);
        }
    }
    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    removeNodeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }
    removeNodeFromEnd() {
        if (this.isEmpty()) {
            return null;
        }
        let value = this.tail.value;
        if (this.size == 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }

    

}
const list = new LinkedList();
console.log(`List is Empty`, list.isEmpty());
list.prepend(90)
list.prepend(30)
list.prepend(10)
list.insert(13, 1);
//   console.log(list.removeIndex(2))
// console.log(list.removeValue(1388));
list.print()
console.log(`List Size`, list.getSize());
console.log(`List search`, list.search(13));
list.removeNodeFromEnd();
list.removeNodeFromFront()
// console.log(`List reverse`, list.reverse());
list.print()
console.log("============== END::Data Structures=============")