class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        // 先\转置，再|翻转

        const n = matrix.length;

        // t

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                // matrix[i][j] <->matrix[j][i]
                let tmp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = tmp;
            }
        }

        // flip

        for (let j = 0; j < n / 2; j++) {
            for (let i = 0; i < n; i++) {
                // matrix[i][j] <-> matrix[i][n-1-j]
                let tmp = matrix[i][j];
                matrix[i][j] = matrix[i][n-1-j];
                matrix[i][n-1-j] = tmp;
            }
        }


    }
}
