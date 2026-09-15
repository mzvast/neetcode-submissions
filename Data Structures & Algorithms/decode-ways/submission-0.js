class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const n = s.length;
        // dp[i] := 第i个数字到末尾的解码数
        // dp[i] = dp[i+1] + dp[i+2]
        // ans = dp[0]
        const dp = Array(n + 1).fill(0);
        dp[n] = 1; // empty ending

        for (let i = n - 1; i >= 0; i--) {
            // for 1 char
            const char = +s.slice(i, i + 1);
            if (char >= 1 && char <= 9) {
                dp[i] += dp[i + 1];
            }

            // for 2 char
            if (i + 2 <= n) {
                const char2 = +s.slice(i, i + 2);
                if (char2 >= 10 && char2 <= 26) {
                    dp[i] += dp[i + 2];
                }
            }
        }

        return dp[0];
    }
}
