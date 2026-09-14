class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        // 从边出发，可以沿着数字从小到大走
        // 返回两组都可以到达的格子

        const m = heights.length,
            n = heights[0].length,
            visitedPac = Array.from({ length: m }, () => Array(n).fill(false)),
            visitedAtl = Array.from({ length: m }, () => Array(n).fill(false));

        function dfs(i, j, visited, preHeight) {
            if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) return;

            if (heights[i][j] < preHeight) return;

            visited[i][j] = true;

            dfs(i + 1, j, visited, heights[i][j]);
            dfs(i - 1, j, visited, heights[i][j]);
            dfs(i, j + 1, visited, heights[i][j]);
            dfs(i, j - 1, visited, heights[i][j]);
        }

        // go from left and top border -> pac
        // go from right and bottom -> alt

        // [i][0]
        // [i][n-1]
        for (let i = 0; i < m; i++) {
            dfs(i, 0, visitedPac, 0);
            dfs(i, n - 1, visitedAtl, 0);
        }
        // [0][j] j>0
        // [m-1][j] j<n-1
        for (let j = 0; j < n; j++) {
            dfs(0, j, visitedPac, 0);
            dfs(m - 1, j, visitedAtl, 0);
        }

        // get answer

        const ans = []

        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(visitedAtl[i][j] && visitedPac[i][j]) {
                    ans.push([i,j])
                }
            }
        }

        return ans;
    }
}
