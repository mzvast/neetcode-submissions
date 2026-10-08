class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        // dp[i][j] := text1[..i] 和 text2[..j]的LCS
        // dp[i][j] =  if text1[i]===text2[j] return dp[i-1][j-1]+1
        //              return max{dp[i][j-1],dp[i-1][j]}
        // ans = dp[m][n]

        const m = text1.length,
            n = text2.length;

        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (text1[i - 1] === text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
                }
            }
        }

        return dp[m][n];
    }
}
