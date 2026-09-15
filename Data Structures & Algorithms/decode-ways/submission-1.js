class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        // dp[i] := s[i..ending]的方法数
        // dp[i] = sum{for w in dict, dp[i+w.length] if s[i,i+w.length]===w}

        const n = s.length,
            dp = Array(n + 1).fill(0);

        const dict = Array.from({ length: 26 }, (_, i) => i + 1 + "");

        dp[n] = 1;

        for (let i = n - 1; i >= 0; i--) {
            for (let w of dict) {
                if (i + w.length <= n && s.slice(i, i + w.length) === w) {
                    dp[i] += dp[i + w.length];
                }
            }
        }

        return dp[0];
    }
}
