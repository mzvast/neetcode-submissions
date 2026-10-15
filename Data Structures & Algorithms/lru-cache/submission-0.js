class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.h = new Map(); // key -> node
        this.list = new DoubleLinkList();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.h.has(key)) {
            const node = this.h.get(key);
            this.list.remove(node);
            this.list.addLast(node);

            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.h.has(key)) {
            const node = this.h.get(key);
            node.val = value;
            this.list.remove(node);
            this.list.addLast(node);
        } else {
            // new one
            const node = new Node(key, value);
            this.list.addLast(node);
            this.h.set(key,node);
            if (this.list.size() > this.capacity) {
                const removedNode = this.list.removeFrist();
                this.h.delete(removedNode.key);
            }
        }
    }
}

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.pre = null;
        this.next = null;
    }
}

class DoubleLinkList {
    // head<-> a<---> b<->tail
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.pre = this.head;
        this._size = 0;
    }

    removeFrist() {
        if (this.size() === 0) return;
        const ret = this.head.next;
        this.remove(this.head.next);
        return ret;
    }

    remove(x) {
        x.pre.next = x.next;
        x.next.pre = x.pre;

        this._size -= 1;
    }

    size() {
        return this._size;
    }

    addLast(x) {
        const last = this.tail.pre;
        last.next = x;
        x.pre = last;
        this.tail.pre = x;
        x.next = this.tail;
        this._size += 1;
    }
}
