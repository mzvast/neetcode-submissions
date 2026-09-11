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
        // 从node开始，匹配word[startIdx..]
        function dfs(node, startIdx) {
            for (let i = startIdx; i < word.length; i++) {
                const char = word[i];
                if (char === ".") {
                    for (let k in node.next) {
                        if (dfs(node.next[k], i + 1)) return true;
                    }
                    return false;
                } else {
                    if (!node.next[char]) return false;
                    node = node.next[char];
                }
            }
            return node.flag;
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
