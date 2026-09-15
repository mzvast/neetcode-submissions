class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // dp[i][j] := s[i..j]是否回文
        // dp[i][j] = if i===j then true
        //            if i+1==j then s[i]===s[j]
        //            if i+2<=j then dp[i+1][j-1] && s[i] === s[j]
        const n = s.length;

        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        let maxLen = 1,
            startIdx = 0;
        // k := index step
        for (let k = 0; k < n; k++) {
            for (let i = 0, j = i + k; j < n; i++, j++) {
                if (k === 0) {
                    dp[i][j] = true;
                } else if (k === 1) {
                    dp[i][j] = s[i] === s[j];
                } else {
                    dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
                }

                if (dp[i][j] && k + 1 > maxLen) {
                    maxLen = k + 1;
                    startIdx = i;
                }
            }
        }

        return s.slice(startIdx, startIdx + maxLen);
    }
}
