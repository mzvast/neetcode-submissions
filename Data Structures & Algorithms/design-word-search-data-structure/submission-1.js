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
        cur.flag = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        // let cur = this.root;
        // for (let x of word) {
        //     if (x === ".") {
        //     } else {
        //         if (!cur.next[x]) return false;
        //         cur = cur.next[x];
        //     }
        // }

        let find = false;

        function dfs(node, idx) {
            for (let i = idx; i < word.length; i++) {
                const x = word[i];
                if (x === ".") {
                    for (let k in node.next) {
                        if (dfs(node.next[k], i + 1)) return true;
                    }
                    return false;
                } else {
                    if (!node.next[x]) return false;
                    node = node.next[x];
                }
            }
            return node.flag
        }

        return dfs(this.root, 0);
    }
}

class Node {
    constructor() {
        this.next = {};
        this.flag = false;
    }
}
