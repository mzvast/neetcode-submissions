class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const win = {};

        let maxLen = 0;

        let l = 0,
            r = 0;

        while (r < s.length) {
            // move r
            if (!win[s[r]]) win[s[r]] = 1;
            else {
                win[s[r]] += 1;
            }
         

            // move l
            while (win[s[r]] > 1 && l < r) {
                win[s[l]] -= 1;
                l += 1;
            }

            // check
            maxLen = Math.max(maxLen, r - l + 1);

            // next r
               r += 1;
        }

        return maxLen;
    }
}
