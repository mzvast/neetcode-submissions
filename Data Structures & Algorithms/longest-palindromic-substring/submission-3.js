class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // dp[i][j] := s[i..j]是否回文
        // dp[i][j] = (i+1<=j-1) && dp[i+1][j-1] && s[i]===s[j] || i===j
        // ans = max{dp[i][j]}

        const n = s.length,
            dp = Array.from({ length: n }, () => Array(n).fill(false));

        for (let i = 0; i < n; i++) {
            dp[i][i] = true; // single char
        }

        let ans = s[0];

        // k := step
        for (let k = 1; k < n; k++) {
            for (let i = 0, j = i + k; j < n; i++, j++) {
                if (k === 1) { // 2char
                    dp[i][j] = s[i] === s[j];
                } else if (dp[i + 1][j - 1] && s[i] === s[j]) {
                    dp[i][j] = true;
                }
                if (dp[i][j]) {
                    if (k + 1 > ans.length) {
                        ans = s.slice(i, j + 1);
                    }
                }
            }
        }

        return ans;
    }
}
