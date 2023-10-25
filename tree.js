console.log("============== Tree - Binary Search Tree::Data Structures=============")
class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaraySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insertNode(value) {
        const newNode = new BinaryNode(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insert(this.root, newNode);


        }
    }
    insert(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insert(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insert(root.right, newNode);
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root?.value === value) {
                return true;
            } else if (value < root?.value) {
                return this.search(root?.left, value);
            } else {
                return this.search(root?.right, value);
            }
        }
    }
    removeNode() {

    }
    printTree() {
        console.log(this.root);
    }
    preOrderTraverse(root) {
        if (root) {
            console.log(root.value);
            this.preOrderTraverse(root.left);
            this.preOrderTraverse(root.right);
        }
    }
    inOrderTraversal(root) {
        if (root) {
            this.inOrderTraversal(root.right)
            console.log(root.value);
            this.inOrderTraversal(root.left)
        }
    }
    postOrderTraverser(root) {
        if (root) {
            this.postOrderTraverser(root.left)
            this.postOrderTraverser(root.right)
            console.log(root.value);
        }
    }
    levelOrder() {
        // Use the optimized quee implimentation
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
    findMinValue(root) {

        if (!root?.left) {
            return root.value;
        } else {
            return this.findMinValue(root.left);
        }
    }
    findMaxValue(root) {
        if (!root?.right) {
            return root.value;
        } else {
            return this.findMaxValue(root?.right)
        }
    }
    delete(value) {
        this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
               return null; 
            }
            if(!root.left){
                return root.right;
            } else if (!root.right) {
                return root.left;
            } 
            root.value = this.findMinValue(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}
const bst = new BinaraySearchTree();
console.log(`insertNode  : ` + bst.insertNode(10));
console.log(`insertNode  : ` + bst.insertNode(5));
console.log(`insertNode  : ` + bst.insertNode(15));
console.log(`insertNode  : ` + bst.insertNode(3));
console.log(`Tree is Empty : ` + bst.isEmpty());
console.log(`insertNode  : ` + bst.insertNode(7));

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 20));
bst.delete(15)
bst.printTree();

console.log('=========DFS (Depth First Search)==========');
console.log('=========preOrderTraverse==========');
bst.preOrderTraverse(bst.root);
console.log('==========inOrderTraversal=========');
bst.inOrderTraversal(bst.root);
console.log('==========postOrderTraverser=========');
bst.postOrderTraverser(bst.root);
console.log('=========BFS (Breadth First Search)==========');
// bst.levelOrder();
console.log(bst.findMinValue(bst.root));
console.log(bst.findMaxValue(bst.root));
