class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        // build trie to store words

        class Node {
            constructor() {
                this.next = {};
                this.word = null;
            }
        }

        class Trie {
            constructor() {
                this.root = new Node();
            }

            addWord(word) {
                let cur = this.root;

                for (let x of word) {
                    if (!cur.next[x]) cur.next[x] = new Node();
                    cur = cur.next[x];
                }

                cur.word = word;
            }
        }

        const t = new Trie();

        for (let word of words) t.addWord(word);

        // search

        const m = board.length,
            n = board[0].length,
            visited = Array.from({ length: m }, () => Array(n).fill(false));

        const ans = [];
        function dfs(i, j, node) {
            if (
                !node ||
                i < 0 ||
                i >= m ||
                j < 0 ||
                j >= n ||
                !node.next[board[i][j]] ||
                visited[i][j]
            )
                return;

                visited[i][j] = true;

            const nextNode = node.next[board[i][j]];

            if (nextNode.word) {
                ans.push(nextNode.word);
                nextNode.word = null
            }

            dfs(i + 1, j, nextNode);
            dfs(i - 1, j, nextNode);
            dfs(i, j + 1, nextNode);
            dfs(i, j - 1, nextNode);

              visited[i][j] = false;
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                dfs(i, j, t.root);
            }
        }

        return ans;
    }
}
