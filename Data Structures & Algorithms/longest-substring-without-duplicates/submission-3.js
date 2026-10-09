class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const win = {};

        let l = 0,r = 0, ans = 0;

        while (r < s.length) {
            const toAdd = s[r];
            win[toAdd] = (win[toAdd] ?? 0) + 1;
            
            while(win[toAdd]>1){
                const toDel = s[l++]
                win[toDel]-=1;
            }
            // update ans
            ans = Math.max(ans,r-l+1)
            r+=1;
        }

        return ans;
    }
}
