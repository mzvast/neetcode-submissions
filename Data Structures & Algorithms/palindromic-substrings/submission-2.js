class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        // dp[i][j] := s[i..j]是否回文
        // dp[i][j] = i===j, true
        //            i+1==j, s[i]===s[j]
        //            i+2<=j, dp[i+1][j-1] && s[i]===s[j]
        // ans = count for any i,j dp[i][j]===true

        const n = s.length,
            dp = Array.from({ length: n }, () => Array(n).fill(false));

        let cnt = 0;

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
                if (dp[i][j]) cnt += 1;
            }
        }

        return cnt;
    }
}
