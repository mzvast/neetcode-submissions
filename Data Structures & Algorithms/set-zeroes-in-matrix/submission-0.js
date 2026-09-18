class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        //scan and set to 'x' and finally set to 0

        const m = matrix.length,
            n = matrix[0].length;

        function setCross(fi, fj) {
            // matrix[fi][..] matrix[..][fj]
            for (let i = fi, j = 0; j < n; j++) {
                if (matrix[i][j] === 0) continue;
                matrix[i][j] = "x";
            }

            for (let i = 0, j = fj; i < m; i++) {
                if (matrix[i][j] === 0) continue;
                matrix[i][j] = "x";
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === 0) {
                    setCross(i, j);
                }
            }
        }

        // replace x to 0

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === "x") {
                    matrix[i][j] = 0;
                }
            }
        }
    }
}
