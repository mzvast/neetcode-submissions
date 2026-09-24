class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // len - maxFreq <=k
        // ans = Max len

        const n = s.length,
            win = {};

        let l = 0,
            r = 0,
            maxFreq = 0,
            ans=0;

        while (r < n) {
            const toAdd = s[r++];
            if (!win[toAdd]) win[toAdd] = 1;
            else win[toAdd] += 1;

            maxFreq = Math.max(maxFreq, win[toAdd]);
            while (r - l - maxFreq > k) {
                // shrink
                const toDel = s[l++];
                win[toDel] -= 1;
                // update maxFreq
                maxFreq = Math.max(...Object.values(win))
            }

            ans = Math.max(ans, r - l);
        }

        return ans;
    }
}
