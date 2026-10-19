class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.h = new Map(); // key-value
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.h.has(key)) return -1;
        const val = this.h.get(key);
        this.h.delete(key);
        this.h.set(key, val);
        return val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.h.has(key)) {
            this.h.delete(key);
            this.h.set(key, value);
        }else{
            // new one
            this.h.set(key, value);
            if(this.h.size>this.capacity){
                const k = this.h.keys().next().value;
                this.h.delete(k)
            }
        }
    }
}
