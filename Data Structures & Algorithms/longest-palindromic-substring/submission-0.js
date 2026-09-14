class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // dp[i][j] := s[i..j]是否回文
        // dp[i][j] = dp[i+1][j-1] && s[i]===s[j]

        const n = s.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        for (let i = 0; i < n; i++) {
            dp[i][i] = true;
        }

        let l = 0;

        let ans = 1;

        for (let len = 1; len < n; len++) {
            for (let i = 0, j = i + len; i < n && j < n; i++, j++) {
                dp[i][j] = s[i] === s[j] && (len === 1 || dp[i + 1][j - 1]);
                if (dp[i][j] && len + 1 > ans) {
                    ans = len + 1;
                    l = i;
                }
            }
        }

        return s.slice(l, l + ans);
    }
}
