class LinkedListIterator {
    constructor(list) {
        this.list = list;
        this.currentElem = null;
    }

    next() {
        this.currentElem = this.currentElem
            ? this.currentElem.next
            : this.list.head
        return {
            value: this.currentElem ? this.currentElem.value : undefined,
            done: !this.currentElem,
        }
    }
}

class MyDummyIterator {
    constructor(list) {
        this.list = list;
        this.currentElem = null;
    }

    next() {
        return {
            value: "You are fool",
            done: false
        }
    }
}

class ListItem {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value
    }
}

class LinkedList {
    constructor(...args) {
        this.length = 0;
        this.head = null;
        this.tail = null;
        for (const argument of args) {
            this.push(argument);
        }
    }

    push(argument) {
        const newItem = new ListItem(argument);
        if (this.length === 0) {
            this.head = newItem;
            this.tail = newItem;
        } else {
            this.tail.next = newItem;
            newItem.prev = this.tail;
            this.tail = newItem;
        }
        return ++this.length;
    }

    pop() {
        if (this.length === 0) {
            return null
        }
        let elem = this.tail
        let newTail = this.tail.prev
        newTail.next = null
        this.tail = newTail
        this.length = this.length - 1
        return elem.value
    }

    [Symbol.iterator]() {
        return new MyDummyIterator(this);
    }
}