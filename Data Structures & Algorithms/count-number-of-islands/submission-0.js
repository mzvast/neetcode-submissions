class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // mark visited as '0'

        // bfs

        let ans = 0;

        function bfs(i, j) {
            if (i < 0 || i >= m || j < 0 || j >= n) return;
            if (grid[i][j] === "0") return;

            grid[i][j] = "0";

            bfs(i - 1, j);
            bfs(i + 1, j);
            bfs(i, j + 1);
            bfs(i, j - 1);
        }

        const m = grid.length,
            n = grid[0].length;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === "0") continue;
                ans += 1;
                bfs(i, j);
            }
        }

        return ans;
    }
}
