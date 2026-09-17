class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        // bus problem

        intervals.push(newInterval);
       

        const tmp = [];

        for (let [on, off] of intervals) {
            tmp.push([on, +1]);
            tmp.push([off, -1]);
        }

         tmp.sort((a, b) => {
            if (a[0] < b[0]) return -1;
            else if (a[0] === b[0] && a[1] > b[1]) return -1;
            return 1;
        });

        const ans = [];

        let cnt=0,pre;

        for(let [pos, dir] of tmp){
            if(dir>0){
                cnt+=1;
                if(cnt===1) pre = pos
            }else{
                cnt-=1
                if(cnt===0) {
                    ans.push([pre,pos])
                }
            }
        }

        return ans;
    }
}
