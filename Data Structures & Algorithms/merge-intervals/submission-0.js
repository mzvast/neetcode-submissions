class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        // bus

        const tmp = [];// [point, dir]

        for(let [on,off] of intervals){
            tmp.push([on,+1],[off,-1])
        }

        tmp.sort((a,b)=>{
            if(a[0]<b[0]||(a[0]===b[0]&&a[1]>b[1])) return -1;
            return 1;
        })

        const ans = [];

        let cnt=0,pre;
        for(let [pos, dir] of tmp){
            cnt+=dir;
            if(dir===1&&cnt===1) pre=pos;
            if(cnt===0) {
                ans.push([pre,pos]);
            }
        }

        return ans;


    }
}
