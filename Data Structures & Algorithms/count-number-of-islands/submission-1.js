class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const m = grid.length,
            n = grid[0].length;

        // from i,j 把相连的1改成x
        // ans = 几次开始进入

        let ans = 0;
        function dfs(i, j) {
            if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0" || grid[i][j] === "x") {
                return;
            }
            grid[i][j] = "x";
            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === "1") {
                    ans += 1;
                    dfs(i, j);
                }
            }
        }
        return ans;
    }
}
