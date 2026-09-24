class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const n = s.length;

        let l = 0,
            r = 0;

        const win = {};
        let ans = 0;

        while (r < n) {
            const toAdd = s[r++];

            if (!win[toAdd]) win[toAdd] = 0;
            win[toAdd] += 1;

            while (win[toAdd] > 1) {
                const toDel = s[l++];
                win[toDel] -= 1;
            }

            // update ans
            ans = Math.max(ans, r - l);
        }

        return ans;
    }
}
