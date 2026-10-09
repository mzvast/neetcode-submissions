class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        // [cur][new]
        // [new][cur]

        const ans= []

        let [start,end] = newInterval;

        for(let i=0;i<intervals.length;i++){
            const [curStart,curEnd] = intervals[i];
            
            if(curEnd<start){
                ans.push([curStart,curEnd])
                continue;
            }

            if(end<curStart){
                ans.push([start,end],...intervals.slice(i))
                return ans;
            }

            // overlap
            start = Math.min(start, curStart);
            end = Math.max(end,curEnd);
        }

        ans.push([start,end])
        return ans;
    }
}
