class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {

        intervals.sort((a,b)=>{
            if(a[1]<b[1]) return -1;
            // if((a[0]<b[0])||(a[0]===b[0]&&a[1]<b[1])) return -1;
            return 1;
        })

        let preEnd=-Infinity;

        // [,preEnd]


        let ans = 0;

        for(let [on,off] of intervals){
            // no overlap
            if(on>=preEnd){
                preEnd = off;
            } else{
                ans+=1;
            }
        }

        return ans;
    }
}
