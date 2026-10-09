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
        // max cnt on bus

        const arr = [];

        for (let {start:on,end:off} of intervals) {
            arr.push([on, 1], [off, -1]);
        }

        arr.sort((a, b) => (a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]) ? -1 : 1));

        let cnt= 0,max = 0;

        for(let [time,delta] of arr){
            cnt+=delta;
            max = Math.max(max,cnt)
        }

        return max;
    }
}
