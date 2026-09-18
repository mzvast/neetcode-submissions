class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length;
        // index i should be i

        function swap(i, j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        for (let i = 0; i < n; i++) {
            while (nums[i] < n && nums[i] !== i) {
                const toIdx = nums[i];
                swap(i, toIdx);
            }
        }

        // scan
        for (let i = 0; i < n; i++) {
            if (nums[i] !== i) return i;
        }

        return n;
    }
}
