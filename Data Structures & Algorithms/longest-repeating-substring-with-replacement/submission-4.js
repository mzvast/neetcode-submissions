class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // len - maxFreq <=k

        const win = {};

        let maxFreq = 0,
            len = 0,
            l = 0,
            r = 0;

        while (r < s.length) {
            const toAdd = s[r++];
            win[toAdd] = (win[toAdd] || 0) + 1;

            maxFreq = Math.max(maxFreq,win[toAdd])

            while(r-l-maxFreq>k){
                const toDel = s[l++];
                win[toDel] -=1;
            }

            // update ans
            len = Math.max(len,r-l)
        }

        return len
    }
}
