class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        //invalid: winLen - maxFreq > k
        // ans = max{winLen}

        const win = {};

        let l = 0,
            r = 0,
            maxFreq = 0,
            ans = 0;

        while (r < s.length) {
            // add right
            if (!win[s[r]]) win[s[r]] = 1;
            else win[s[r]] += 1;

            maxFreq = Math.max(maxFreq, win[s[r]]);

            // check and move l

            while (r - l + 1 - maxFreq > k) {
                win[s[l]] -= 1;
                l += 1;
            }

            ans = Math.max(ans, r - l + 1);

            r += 1;
        }

        return ans;
    }
}
