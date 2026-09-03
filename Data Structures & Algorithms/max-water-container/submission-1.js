class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length;
        let l = 0,
            r = n - 1;
        let ans = 0;
        while (l < r) {
            const cur = Math.min(heights[l], heights[r]) * (r - l);
            ans = Math.max(ans, cur);
            if(heights[l]<heights[r]) l+=1;
            else r-=1;
        }

        return ans;
    }
}
