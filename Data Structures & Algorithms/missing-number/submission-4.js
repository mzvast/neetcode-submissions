class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        //expect nums[i] === i

        const n = nums.length;

        function swap(i, j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        for (let i = 0; i < n; i++) {
            if (nums[i] === i) continue;
            // swap to correct place
            while (nums[i] < n && nums[i] !== i) {
                const toIdx = nums[i];
                swap(i, toIdx);
            }

            // [1,2]
            // [2,1]
        }

        for (let i = 0; i <= n; i++) {
            if (nums[i] !== i) return i;
        }
    }
}
