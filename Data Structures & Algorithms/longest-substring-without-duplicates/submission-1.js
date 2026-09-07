class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const win = {};

        let ans = 0;

        let l = 0,
            r = 0;

        while (r < s.length) {
            // add right
            if (!win[s[r]]) win[s[r]] = 1;
            else win[s[r]] += 1;

            // check and move left
            while (win[s[r]] > 1 && l < r) {
                win[s[l]] -= 1;
                l += 1;
            }

            // update ans;
            ans = Math.max(ans, r - l + 1);

            r +=1;
        }

        return ans;
    }
}
