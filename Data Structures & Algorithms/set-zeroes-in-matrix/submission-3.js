class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const m = matrix.length,
            n = matrix[0].length;
        const zrows = Array(m).fill(false),
            zcols = Array(n).fill(false);

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (matrix[i][j] === 0) {
                    zrows[i] = true;
                    zcols[j] = true;
                }
            }
        }

        for (let i = 0; i < m; i++) {
            if (zrows[i]) {
                for (let j = 0; j < n; j++) {
                    matrix[i][j] = 0;
                }
            }
        }
         for (let j = 0; j < n; j++) {
            if (zcols[j]) {
                for (let i = 0; i < m; i++) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
}
