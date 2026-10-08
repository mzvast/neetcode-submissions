class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // dp[i] := 爬到i的方法数
        // dp[i] = dp[i-1] + dp[i-2]

        // dp[0] = 1

        const dp = Array(n + 1).fill(0);
        dp[0] = 1;
        dp[1] = 1;
        for(let i=2;i<=n;i++){
            dp[i] = dp[i-1] + dp[i-2]
        }

        return dp[n]
    }
}
