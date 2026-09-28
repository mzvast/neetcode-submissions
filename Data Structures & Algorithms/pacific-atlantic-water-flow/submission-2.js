class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const m = heights.length,
            n = heights[0].length,
            visPac = Array.from({ length: m }, () => Array(n).fill(false)),
            visAtl = Array.from({ length: m }, () => Array(n).fill(false));

        function dfs(i, j, visited, preH) {
            if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || heights[i][j] < preH) return;

            visited[i][j] = true;
            dfs(i + 1, j, visited, heights[i][j]);
            dfs(i - 1, j, visited, heights[i][j]);
            dfs(i, j + 1, visited, heights[i][j]);
            dfs(i, j - 1, visited, heights[i][j]);
        }

        //pac [0][j] [i][0]
        // alt [m-1][j] [i][n-1]
        for (let j = 0; j < n; j++) {
            dfs(0, j, visPac, 0);
            dfs(m - 1, j, visAtl, 0);
        }

        for (let i = 0; i < m; i++) {
            dfs(i, 0, visPac, 0);
            dfs(i, n - 1, visAtl, 0);
        }

        const ans = [];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (visAtl[i][j] && visPac[i][j]) ans.push([i, j]);
            }
        }

        return ans;
    }
}
