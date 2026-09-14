class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        // 中心扩展法，每次扩展都count+1

        let ans = 0;

        const n = s.length;

        function count(l, r) {
            if (l < 0 || r >= n) return;
            while (l >= 0 && r < n && s[l] === s[r]) {
                ans += 1;
                l -= 1;
                r += 1;
            }
        }

        for (let i = 0; i < n; i++) {
            count(i, i);
            count(i, i + 1);
        }

        return ans;
    }
}
