class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        // replace --- | with 'x'

        const m = matrix.length,
            n = matrix[0].length;

        function paint(i, j) {
            // row i,jj
            for (let jj = 0; jj < n; jj++) {
                if (matrix[i][jj] !== 0) matrix[i][jj] = "x";
            }

            // col ii,j
            for (let ii = 0; ii < m; ii++) {
                if (matrix[ii][j] !== 0) matrix[ii][j] = "x";
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === 0) paint(i, j);
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === "x") matrix[i][j] = 0;
            }
        }
    }
}
