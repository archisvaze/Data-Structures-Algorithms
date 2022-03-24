class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            this.size++;
        } else {
            this.insertNodeInTree(this.root, newNode);
            this.size++;
        }
    }
    insertNodeInTree(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNodeInTree(node.left, newNode);
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNodeInTree(node.right, newNode);
        }
    }
    inorder() {
        if (this.root === null) return null;
        let node = this.root;
        return this.inorderHelper(node);
    }
    inorderHelper(node) {
        if (node) {
            this.inorderHelper(node.left);
            console.log(node.data);
            this.inorderHelper(node.right);
        }
    }
    preoder() {
        if (this.root === null) return null;
        let node = this.root;
        return this.preoderHelper(node);
    }
    preoderHelper(node) {
        if (node) {
            console.log(node.data);
            this.preoderHelper(node.left);
            this.preoderHelper(node.right);
        }
    }
    postorder() {
        if (this.root === null) return null;
        let node = this.root;
        return this.postorderHelper(node);
    }
    postorderHelper(node) {
        if (node) {
            this.postorderHelper(node.left);
            this.postorderHelper(node.right);
            console.log(node.data);
        }
    }
    min() {
        if (this.root === null) return null;
        let node = this.root;
        return this.minHelper(node);
    }
    minHelper(node) {
        if (node.left === null)
            return node.data;
        else
            return this.minHelper(node.left);
    }
    max() {
        if (this.root === null) return null;
        let node = this.root;
        return this.maxHelper(node);
    }
    maxHelper(node) {
        if (node.right === null)
            return node.data;
        else
            return this.maxHelper(node.right);
    }
    search(val) {
        if (this.root === null) return null;
        let node = this.root;
        return this.searchHelper(node, val);
    }
    searchHelper(node, val) {
        if (node.left !== null && val < node.data) {
            return this.searchHelper(node.left, val)
        }
        else if (node.right !== null && val > node.data) {
            return this.searchHelper(node.right, val)
        }
        else if (val === node.data) {
            return node;
        }
        else return -1;
    }
    levelorder() {
        if (this.root === null) return { '-1': [] };
        let node = this.root;
        return this.levelOrderHelper(node, {}, 0);
    }
    levelOrderHelper(node, obj, level) {
        if (node) {
            if (obj[level]) {
                obj[level].push(node.data);
                level++;
            }
            else {
                obj[level] = [node.data];
                level++;
            }
            this.levelOrderHelper(node.left, obj, level);
            this.levelOrderHelper(node.right, obj, level);
        }
        return (obj);
    }
    levelorder2() {

    }
    getHeight() {
        let heigthArr = Object.keys(this.levelorder())
        let height = heigthArr[heigthArr.length - 1];
        return Number(height);
    }
    getParent(val) {
        if (this.tree === null) return null;
        let node = this.root;
        return this.getParentHelper(node, val)
    }
    getParentHelper(node, val) {
        if (node.left && val === node.left.data) {
            return node;
        }
        if (node.right && val === node.right.data) {
            return node;
        }
        if (node.left && val < node.data) {
            return this.getParentHelper(node.left, val);
        }
        if (node.right && val > node.data) {
            return this.getParentHelper(node.right, val);
        }
        else return -1;
    }
    areCousins(val1, val2) {
        let parent1 = this.getParent(val1);
        let parent2 = this.getParent(val2);
        if (parent1 === -1 || parent2 === -1) return false;
        if (parent1 === parent2) return false;
        let grandParent1 = this.getParent(parent1.data);
        let grandParent2 = this.getParent(parent2.data);
        if (grandParent1 === -1 || grandParent2 === -1) return false;
        if (grandParent1.data === grandParent2.data) return true;
        let greatGrandParent1 = this.getParent(grandParent1.data);
        let greatGrandParent2 = this.getParent(grandParent2.data);
        if (greatGrandParent1 === -1 || greatGrandParent2 === -1) return false;
        if (greatGrandParent1.data === greatGrandParent2.data) return true;
        else return false;
    }
}

let tree = new BinarySearchTree();
// let emptyTree = new BinarySearchTree();
// tree.add(20);
// tree.add(40);
// tree.add(50);
// tree.add(60);
// tree.add(30);
// tree.add(10);
// tree.add(15);
// tree.add(5);
// let tree2 = new BinarySearchTree();
// tree2.add(1);
// tree2.add(2);
// tree2.add(3);
// console.log(JSON.stringify(tree2))
// console.log(tree.getParent(60));
// console.log(tree.levelorder());
// console.log(tree.areCousins(15, 30))
// console.log(emptyTree.getHeight());
// console.log(JSON.stringify(tree))
// tree.inorder();
// console.log(`\n\n`)
// tree.preoder();
// console.log(`\n\n`)
// tree.postorder();
// console.log(tree.min())
// console.log(tree.max())
// console.log(tree.search(9));
tree.add(1);
tree.add(3);
tree.add(2);
tree.add(4);
tree.add(5);
tree.add(6);
tree.add(7);


console.log(JSON.stringify(tree))



function minDiff(root) {
    if (root === null) return null;
    let currNode = root;
    let min = Number.POSITIVE_INFINITY;
    function minDiffHelper(currNode) {
        if (currNode) {
            let leftNode = currNode.left;
            let rightNode = currNode.right;
            if (leftNode) {
                if (currNode.data - leftNode.data <= min) {
                    min = currNode.data - leftNode.data;
                }
                minDiffHelper(leftNode);
            }
            if (rightNode) {
                if (rightNode.data - currNode.data <= min) {
                    min = rightNode.data - currNode.data;
                }
                minDiffHelper(rightNode);
            }
        }
    }
    minDiffHelper(currNode);
    return min;
}

// console.log(minDiff(tree.root));

function sumRange(root, low, high) {
    let arr = [];
    let sum = 0;
    if (root === null) return null;
    let node = root;
    function sumRangeHelper(node) {
        if (node) {
            if (node.data < high && node.data > low) {
                arr.push(node.data);
            }
            sumRangeHelper(node.left);
            sumRangeHelper(node.right);
        }
    }
    sumRangeHelper(node);
    // console.log(arr);
    sum = arr.reduce((a, b) => a + b);
    return sum;
}

// console.log(sumRange(tree.root, 30, 90));



function leftView(tree) {
    function leftViewHelper(node, level) {
        if (node === null) return;
        if (left < level) {
            console.log(node.data);
            left = level;
        }
        leftViewHelper(node.left, level + 1);
        leftViewHelper(node.right, level + 1);
    }
    let left = 0;
    let node = tree.root;
    leftViewHelper(node, 1);
}


leftView(tree)


function bottomView(tree){
    let node  = tree.root;
    let obj = {};
    let level = 0;
    levelOHelper(node, obj, level)
    console.log(obj)
}

function levelOHelper(node, obj, level) {
    if (node) {
        if (obj[level]) {
            obj[level].push(node.value);
            level++;
        }
        else {
            obj[level] = [node.value];
            level++;
        }
        levelOHelper(node.left, obj, level);
        levelOHelper(node.right, obj, level);
    }
    else {
        if (obj[level]) {
            obj[level].push(null);
            level++;
        }
        else {
            obj[level] = [null];
            level++;
        }
    }
    return (obj);
}