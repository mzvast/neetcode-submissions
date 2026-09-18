class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length;

        // put nums to where it should be
        // num i should be in index i

        function swap(i, j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        for (let i = 0; i < n; i++) {
            while (nums[i] < n && nums[i] !== i) {
                swap(i, nums[i]);
            }
        }

        // scan who is not at its position

        for (let i = 0; i < n; i++) {
            if (nums[i] !== i) return i;
        }

        return n;
    }
}
