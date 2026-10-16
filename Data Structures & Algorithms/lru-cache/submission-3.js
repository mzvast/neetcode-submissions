class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.h = new Map(); // key->value
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.h.has(key))  {
            const val = this.h.get(key);
            this.h.delete(key);
            this.h.set(key,val);
            return val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.h.has(key)){
            this.h.delete(key);
            this.h.set(key,value);
        }else{
            // new
            this.h.set(key,value);
            if(this.h.size>this.capacity){
                const delKey = this.h.keys().next().value;
                this.h.delete(delKey)
            }
        }
    }
}
