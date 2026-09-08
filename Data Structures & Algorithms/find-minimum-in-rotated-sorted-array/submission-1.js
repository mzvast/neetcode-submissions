class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // /｜
        //  ｜/｜

        const n = nums.length;

        let l = 0,
            r = n - 1;

        if (nums[l] < nums[r]) return nums[l];

        while (l < r) {
            const mid = (l + r) >> 1;
            if (nums[mid] > nums[r]) l = mid + 1;
            else r = mid;
        }

        return nums[l];
    }
}
