class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const m = heights.length,
            n = heights[0].length;

        const visitedPac = Array.from({ length: m }, () => Array(n).fill(false));
        const visitedAtl = Array.from({ length: m }, () => Array(n).fill(false));

        const ans = [];

        function dfs(i, j, visited, preH) {
            if (i < 0 || i >= m || j < 0 || j >= n || heights[i][j] < preH||visited[i][j]) return;
            visited[i][j] = true;
            dfs(i + 1, j, visited, heights[i][j]);
            dfs(i - 1, j, visited, heights[i][j]);
            dfs(i, j + 1, visited, heights[i][j]);
            dfs(i, j - 1, visited, heights[i][j]);
        }

        // pac
        // [i][0]
        // [0][j]
        // atl
        // [i][n-1]
        // [m-1][j]

        for (let i = 0; i < m; i++) {
            dfs(i, 0, visitedPac, 0);
            dfs(i, n - 1, visitedAtl, 0);
        }

        for (let j = 0; j < n; j++) {
            dfs(0, j, visitedPac, 0);
            dfs(m - 1, j, visitedAtl, 0);
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (visitedAtl[i][j] && visitedPac[i][j]) {
                    ans.push([i, j]);
                }
            }
        }

        return ans;
    }
}
