class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.h = new Map();// key -> Node
        this.list = new DoubleLinkList();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.h.has(key)){
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
        if(this.h.has(key)){
            const node = this.h.get(key);
            node.val = value;
            this.list.remove(node);
            this.list.addLast(node);
        }else{
            // new node;
            const node= new Node(key,value);
            // update Map
            this.h.set(key,node);
            this.list.addLast(node);
            // check capacity
            if(this.list.size()> this.capacity){
                const first = this.list.removeFirst();
                this.h.delete(first.key);
            }
        }
    }
}

class Node{
    constructor(key,val){
        this.key = key;
        this.val = val;
        this.pre = null;
        this.next = null;
    }
}

class DoubleLinkList{
    // head - a - b - tail
    constructor(){
        this.head = new Node(0,0);
        this.tail = new Node(0,0);
        this.head.next = this.tail;
        this.tail.pre = this.head;
        this._size = 0;
    }

    size(){return this._size}

    addLast(x){
        const last = this.tail.pre;

        last.next = x;
        x.pre = last;
        x.next = this.tail;
        this.tail.pre= x;
        this._size+=1;
    }

    remove(x){
        x.pre.next = x.next;
        x.next.pre = x.pre;
        this._size -=1;
    }

    removeFirst(){
        const first = this.head.next;

        this.remove(first);

        return first;
    }
}