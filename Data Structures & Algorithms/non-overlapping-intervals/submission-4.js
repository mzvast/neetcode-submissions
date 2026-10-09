class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        // 按结束位置排序，尽量保留结束早的

        intervals.sort((a, b) => a[1] - b[1]);

        let preEnd = -Infinity,
            ans = 0;

        for (let [on, off] of intervals) {
            if (preEnd <= on) {
                // no overlap
                preEnd = off;
            } else {
                ans += 1;
            }
        }

        return ans;
    }
}
