class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let ans = 0;

        for (let i = 0; i < 32; i++) {
            if ((n >>> i) & 1) {
                ans |= 1 << (31 - i);
            }
        }

        return ans >>> 0;
    }
}
