class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        // dp[i] := s[i...end] is breakable
        // dp[i] = for w in wordDict, dp[i+w.length] && s[i,i+w.length] === w
        // ans = dp[0]

        const n = s.length,
            dp = Array(n + 1).fill(false);
        dp[n] = true; // empty ending

        for (let i = n - 1; i >= 0; i--) {
            for (let w of wordDict) {
                if (s.slice(i, i + w.length) === w) {
                    dp[i] = dp[i + w.length];
                }
                if(dp[i]) break;
            }
        }

        return dp[0];
    }
}
