class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        // a^b 计算本位
        // a&b<<1 计算进位

        while (b !== 0) {
            const newA = a ^ b;
            const newB = (a & b) << 1;
            a = newA;
            b = newB;
        }

        return a;
    }
}
