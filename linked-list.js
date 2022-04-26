
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    unshift(val) {
        if (this.head === null) {
            this.head = {
                data: val,
                next: null
            }
        } else {
            let tempPtr = this.head;
            this.head = {
                data: val,
                next: tempPtr
            }
            this.size++;
            return this.head;
        }
    }
    push(val) {
        if (this.head === null) {
            this.head = {
                data: val,
                next: null
            }
        } else {
            let tempPtr = this.head;
            while (tempPtr.next !== null) {
                tempPtr = tempPtr.next;
            }
            let temp = {
                data: val,
                next: null
            }
            tempPtr.next = temp;
            this.size++;
            return this.head;
        }
    }
    print() {
        if (this.head === null) {
            console.log(null);
        } else {
            let tempPtr = this.head;
            while (tempPtr !== null) {
                console.log(tempPtr.data);
                tempPtr = tempPtr.next;
            }
        }
    }
    shift() {
        if (this.head === null) {
            return false;
        } else {
            let tempPtr = this.head;
            this.head = tempPtr.next;
            this.size--;
            return this.head;
        }
    }
    pop() {
        if (this.head === null) {
            return false;
        } else {
            let tempPtr = this.head;
            while (tempPtr.next.next !== null) {
                tempPtr = tempPtr.next;
            }
            tempPtr.next = null
            this.size--;
            return this.head;
        }
    }
    deleteTarget(value) {
        if (this.head === null) {
            return false;
        } else {
            let tempPtr = this.head;
            while (tempPtr !== null) {
                if (tempPtr.next !== null && tempPtr.next.data === value) {
                    let temp = tempPtr.next.next;
                    tempPtr.next.next = null;
                    let tempPtr3 = this.head;
                    while (tempPtr3.next.next !== null) {
                        tempPtr3 = tempPtr3.next;
                    }
                    tempPtr3.next = null;
                    let tempPtr2 = this.head;
                    while (tempPtr2.next !== null) {
                        tempPtr2 = tempPtr2.next;
                    }
                    tempPtr2.next = temp;
                    this.size--;
                    return true;
                }
                tempPtr = tempPtr.next;
            }
            return false;
        }
    }

}
