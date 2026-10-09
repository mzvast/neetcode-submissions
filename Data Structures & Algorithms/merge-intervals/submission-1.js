class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        const arr = [];

        for(let [on,off] of intervals){
            arr.push([on,1],[off,-1])
        }

        arr.sort((a,b)=>{
            if((a[0]<b[0])||(a[0]===b[0]&&a[1]>b[1])) return -1
            return 1;
        })

        const ans=[]

        let cnt=0,pre=0;

        for(let [time,dir] of arr){
            cnt+=dir;
            if(dir>0&&cnt===1) pre=time;
            if(dir<0&&cnt===0) {
                ans.push([pre,time])
            }
        }

        return ans;
    }
}
