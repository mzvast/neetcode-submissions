class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        // \ => y
        const n = matrix.length;

        function swap(i, j, i2, j2) {
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[i2][j2];
            matrix[i2][j2] = tmp;
        }

         // \
         for (let i = 0; i < n; i++) {
            for (let j = 0; j < i; j++) {
                swap(i,j,j,i)
            }
        }
        // y
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n / 2; j++) {
                swap(i,j,i,n-1-j)
            }
        }

       
    }
}
