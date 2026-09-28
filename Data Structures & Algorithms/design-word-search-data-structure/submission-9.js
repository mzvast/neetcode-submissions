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
        cur.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        // match from word[idx..]
        function dfs(node, idx) {
            if (idx === word.length) return node.word;

            const char = word[idx];
            if (char === ".") {
                for (let k in node.next) {
                    if (dfs(node.next[k], idx + 1)) return true;
                }
                return false;
            } else {
                if (!node.next[char]) return false;
                return dfs(node.next[char], idx + 1);
            }
        }

        return dfs(this.root, 0);
    }
}

class Node {
    constructor() {
        this.next = {};
        this.word = false;
    }
}
