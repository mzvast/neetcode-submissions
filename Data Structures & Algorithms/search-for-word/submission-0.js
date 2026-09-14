class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const m = board.length,
            n = board[0].length,
            visited = Array.from({ length: m }, () => Array(n).fill(false));

        let ans = false;

        function dfs(i, j, wIdx) {
            if (ans) return;
            if (wIdx === word.length) {
                ans = true;
                return;
            }
            if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[wIdx] || visited[i][j])
                return;

            visited[i][j] = true;

            dfs(i + 1, j, wIdx + 1);
            dfs(i - 1, j, wIdx + 1);
            dfs(i, j + 1, wIdx + 1);
            dfs(i, j - 1, wIdx + 1);

            visited[i][j] = false;
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                dfs(i, j, 0);
                if (ans) return true;
            }
        }

        return ans;
    }
}
