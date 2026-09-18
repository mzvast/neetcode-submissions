class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const m = matrix.length,n = matrix[0].length;
        const visited = Array.from({ length: m }, () => Array(n).fill(false));

        const dirs = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];

        let dir = 0; // 0-3
        let x = 0,
            y = -1;
        // go and back if out of range

        const ans = [];

        while (ans.length < m * n) {
            const [dx, dy] = dirs[dir];
            x += dx;
            y += dy;
            if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) {
                x -= dx;
                y -= dy;
                dir = (dir + 1) % 4;
            } else {
                visited[x][y] = true;
                ans.push(matrix[x][y]);
            }
        }

        return ans;
    }
}
