class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        // dp[i] :=  s[i..ending]的解码种数
        // dp[i] = sum{dp[i+w.length]} for w of dict and s[i..i+w.length] === w
        // ans = dp[0]
        const n = s.length;

        const dict = Array.from({ length: 26 }, (v, i) => i + 1 + "");
        const dp = Array(n + 1).fill(0);
        dp[n] = 1; // empty
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
