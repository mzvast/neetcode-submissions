class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        const ans = [];

        const dirs = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];

        let dir = 0;

        const m = matrix.length,
            n = matrix[0].length;

        const visited = Array.from({ length: m }, () => Array(n).fill(false));

        let x = 0,
            y = -1;
        while (ans.length < m * n) {
            const [dx, dy] = dirs[dir];
            x += dx;
            y += dy;
            // out of range or visited
            if (x < 0 || x >= m || y < 0 || y >= n || visited[x][y]) {
                // go back
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
