class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        //invalid: winLen - maxFreq > k

        const win = {};

        let l = 0,
            r = 0,
            maxFreq = 0;

        let ans = 0;

        while (r < s.length) {
            const toAdd = s[r];
            if (!win[toAdd]) win[toAdd] = 1;
            else win[toAdd] += 1;

            maxFreq = Math.max(maxFreq, win[toAdd]);

            while (r - l + 1 - maxFreq > k) {
                const toDel = s[l++];
                win[toDel] -= 1;
            }

            // update ans;
            ans = Math.max(ans, r - l + 1);

            r += 1;
        }

        return ans;
    }
}
