class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    print() {
        if (this.head === null) {
            console.log(null);
        } else {
            let curr = this.head;
            while (curr != null) {
                console.log(curr.data);
                curr = curr.next;
            }
        }
    }


    push(val) {
        this.size++;
        if (this.head === null) {
            this.head = {
                prev: null,
                data: val,
                next: null
            }
        } else {
            let curr = this.head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            let node = {
                prev: curr,
                data: val,
                next: null
            }
            curr.next = node;
        }
        return (this.head);
    }
    unshift(val) {
        this.size++;
        if (this.head === null) {
            this.head = {
                prev: null,
                data: val,
                next: null
            }
        } else {
            let node = {
                prev: null,
                data: val,
                next: this.head
            }
            this.head.prev = node;
            this.head = node;
        }
        return (this.head);
    }
    pop() {
        if (this.head === null) return null;
        else {
            let curr = this.head;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.prev.next = null;
        }
        this.size--;
        return this.head;
    }
    shift() {
        if (this.head === null) return null;
        else {
            let curr = this.head.next;
            curr.prev = null;
            this.head = curr;
        }
        this.size--;
        return this.head;
    }
    addToDLL(val) {
        let curr = this.head;
        if (curr.data >= val) {
            let node = { data: val, prev: null, next: curr }
            curr.prev = node;
            return this.head;
        }
        while (curr.data <= val) {
            curr = curr.next;
        }
        let node = { data: val, prev: curr.prev, next: curr }
        curr.prev.next = node;
        curr.prev = node;
        this.size++;
        return this.head;
    }
    insertAt(index, val) {
        let curr = this.head;
        let count = 0;
        if (this.head === null) {
            this.head = {
                prev: null,
                data: val,
                next: null
            }
            this.size++;
        }
        while (count !== index) {
            curr = curr.next;
            count++;
        }
        let node = { data: val, prev: curr.prev, next: curr }
        curr.prev.next = node;
        curr.prev = node;
        this.size++;
        return this.head
    }
    bubbleSortLinkedList() {
        let l = this.size;
        while (l > 0) {
            let curr = this.head;
            while (curr.next !== null) {
                let current = curr;
                let next = curr.next;

                if (current.data > next.data) {
                    let tempData = current.data;
                    current.data = next.data;
                    next.data = tempData;
                }
                curr = curr.next;
            }
            l--;
        }
    }
}

let linkedlist = new DoublyLinkedList();
linkedlist.push(10);
linkedlist.push(20);   //push
linkedlist.push(30);
linkedlist.push(40);

linkedlist.addToDLL(25);
// linkedlist.print();

let myDLL = new DoublyLinkedList();
myDLL.push(10);
myDLL.push(5);
myDLL.push(2);
myDLL.push(8);


myDLL.insertAt(2, 7);
// myDLL.print(); // should print values: 3, 5, 7, 2, 8

myDLL.bubbleSortLinkedList();
myDLL.print();
