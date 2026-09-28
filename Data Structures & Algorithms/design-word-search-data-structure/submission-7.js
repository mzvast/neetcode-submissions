class WordDictionary {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;

        for (let x of word) {
            if (!cur.next[x]) cur.next[x] = new Node();
            cur = cur.next[x];
        }
        cur.word = word;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(node,idx){
            if(idx===word.length) return node.word !== null;
            const char = word[idx];
            if(char === '.'){
                for(let k in node.next){
                    if(dfs(node.next[k], idx+1)) return true;
                }
                return false; // not found
            }else {
                if(!node.next[char]) return false;
                return dfs(node.next[char],idx+1);
            }
        }

        return dfs(this.root,0)
    }
}

class Node {
    constructor() {
        this.next = {};
        this.word = null;
    }
}
