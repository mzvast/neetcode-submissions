class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // /|
        //  |/|

        const n = nums.length;

        if (n === 1) return nums[0];
        if (n === 2) return nums[0] < nums[1] ? nums[0] : nums[1];

        let l = 0,
            r = n - 1;

        while (l < r) {
            const mid = (l + r) >> 1;
            // [2,1],[1,2]
            if (nums[mid] > nums[r]) l = mid + 1;
            else r = mid;
        }

        return nums[l];
    }
}
