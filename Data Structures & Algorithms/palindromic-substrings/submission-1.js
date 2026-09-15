class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        // 中心
        const n = s.length;

        let ans = 0; // count

        function count(l, r) {
            if (l < 0 || r >= n) return;

            while (l >= 0 && r < n && s[l] === s[r]) {
                ans += 1;
                l -= 1;
                r += 1;
            }
        }

        for (let i = 0; i < n; i++) {
            count(i, i); // odd
            count(i, i + 1); // even
        }

        return ans;
    }
}
