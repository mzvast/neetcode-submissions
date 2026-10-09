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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        
        let cnt =0 ;// at most 1

        const arr = []

        for(let {start,end} of intervals){
            arr.push([start,1],[end,-1])
        }

        arr.sort((a,b)=>(a[0]<b[0])||(a[0]===b[0]&&a[1]<b[1])?-1:1);

        for(let [time,dir] of arr){
            cnt+=dir;
            if(cnt>1) return false;
        }

        return true;
    }
}
