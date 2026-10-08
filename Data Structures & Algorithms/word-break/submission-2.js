class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        // dp[i] := s[i..ending] 是否可以构成
        // dp[i] = for w of wordDict, 存在dp[i+w.length] ===true && s[i..i+w.length]===w;
        // ans = dp[0]
        const n = s.length;
        const dp = Array(n + 1).fill(false);
        dp[n] = true; // empty ending

        for (let i = n - 1; i >= 0; i--) {
            for (let w of wordDict) {
                if (i + w.length <= n && s.slice(i, i + w.length) === w && dp[i + w.length]) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[0];
    }
}
