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
        // sort by ending early

        intervals.sort((a, b) => a.end - b.end);

        let preEnd = -Infinity;

        for (let x of intervals) {
            if (x.start >= preEnd) {
                preEnd = x.end;
            } else {
                return false;
            }
        }

        return true;
    }
}
