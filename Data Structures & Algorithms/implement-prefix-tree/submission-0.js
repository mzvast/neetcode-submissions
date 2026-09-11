class PrefixTree {
    constructor() {
        this.root = new Node()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root;
        for(let x of word){
            if(!cur.next[x]) cur.next[x] = new Node();
            cur = cur.next[x];
        }
        cur.flag = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;
        for(let x of word){
            if(!cur.next[x]) return false;
            cur = cur.next[x]
        }
        return cur.flag;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;
        for(let x of prefix){
            if(!cur.next[x]) return false;
            cur = cur.next[x]
        }
        return true;
    }
}
class Node {
    constructor(){
        this.val = null
        this.next = {}
        this.flag = false; // end of word
    }


}