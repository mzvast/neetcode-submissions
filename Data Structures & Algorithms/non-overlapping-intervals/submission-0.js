class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        // sort ending early
        intervals.sort((a, b) => {
            if (a[1] < b[1]) return -1;
            return 1;
        });

        let ans = 0;

        let preEnd = -Infinity;

        for (let [on, off] of intervals) {
            if (on >= preEnd) {
                preEnd = off;
            } else {
                ans += 1;
            }
        }

        return ans;
    }
}
