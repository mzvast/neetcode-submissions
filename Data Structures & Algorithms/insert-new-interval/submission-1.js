class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        //bus 
        const arr = [];

        for(let [on,off] of [...intervals,newInterval]){
            arr.push([on,1],[off,-1])
        }

        arr.sort((a,b)=>{
            if(a[0]<b[0]) return -1;
            if(a[0]===b[0]&&a[1]>b[1]) return -1;
            return 1;
        })

        let cnt = 0,pre=0,ans = []

        for(let [time, dir] of arr){
            cnt+=dir;
            if(dir>0&&cnt===1) pre=time;
            if(dir<0&&cnt===0) {
                ans.push([pre,time])
            }
        }

        return ans;
    }
}
