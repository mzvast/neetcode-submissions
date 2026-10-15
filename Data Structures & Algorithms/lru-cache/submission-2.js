class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.h = new Map(); // key -> Node
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.h.has(key)) {
            const node = this.h.get(key);
            this.h.delete(key);
            this.h.set(key, node);
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
            this.h.delete(key);
            this.h.set(key, node);
        } else {
            // new one
            this.h.set(key, new Node(key, value));
            if (this.h.size > this.capacity) {
                const firstKey = this.h.keys().next().value;
                this.h.delete(firstKey);
            }
        }
    }
}

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}
