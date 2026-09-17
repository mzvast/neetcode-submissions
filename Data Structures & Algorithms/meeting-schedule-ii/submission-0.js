/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        // bus problem
        // ans = max people on bus

        const tmp = [];

        for (let {start:on,end:off} of intervals) {
            tmp.push([on, 1], [off, -1]);
        }

        let maxCnt = 0, cnt=0;

        tmp.sort((a,b)=>{
            if(a[0]<b[0]||(a[0]===b[0]&&a[1]<b[1])) return -1;
            return 1;
        })

        for(let [pos, dir] of tmp){
            if(dir>0){
                cnt+=1;
            } else{
                cnt-=1;
            }
            maxCnt = Math.max(maxCnt, cnt)
        }

        return maxCnt;

        
    }
}
