class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        // 按end早的排序

        intervals.sort((a, b) => (a[1] < b[1] ? -1 : 1));

        let preEnd = -Infinity;

        let toRemoveCnt = 0

        for(let [start,end] of intervals){
            if(start<preEnd){
                toRemoveCnt+=1
            }else{
                preEnd = end;
            }
        }

        return toRemoveCnt
    }
}
