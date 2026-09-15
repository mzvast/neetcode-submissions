class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // dp[i][j] := 有多少种path
        // dp[i][j] = dp[i-1][j] + dp[i][j-1]
        // ans = dp[m][n]

        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        dp[0][1] = 1;

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        return dp[m][n]
    }
}
