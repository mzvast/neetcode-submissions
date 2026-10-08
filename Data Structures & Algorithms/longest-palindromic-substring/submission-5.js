class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        // 双指针
        const n = s.length;
        let ans = "";

        function count(l, r) {
            // <--l,r-->
            while (l >= 0 && r < n) {
                if (s[l] !== s[r]) break;
                if (ans === "" || r - l +1 > ans.length) ans = s.slice(l, r + 1);
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
