class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        // f(2n+1) = f(2n) +1
        // f(2n) = f(n)
        // f(0) = 0
        // f(1) = 1

        if(n===0) return [0]
        if(n===1) return [0,1];

        const dp = Array(n + 1).fill(0);
        dp[0] = 0;
        dp[1] = 1;

        for (let i = 2; i <= n; i++) {
            if (i % 2 === 1) {
                // odd
                dp[i] = dp[i - 1] + 1;
            } else {
                // even
                dp[i] = dp[i>>1]
            }
        }

        return dp;
    }
}
