class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // 可能是奇数个，也可能是偶数长度

        const n = s.length;

        let maxLen = 1,
            start = 0;

        function count(l, r) {
            if (r >= n) return;
            while (l >= 0 && r < n && s[l] == s[r]) {
                const len = r - l + 1;
                if (len > maxLen) {
                    maxLen = len;
                    start = l;
                }
                l -= 1;
                r += 1;
            }
        }

        for (let i = 0; i < n; i++) {
            count(i, i);
            count(i, i + 1);
        }

        return s.slice(start, start + maxLen);
    }
}
