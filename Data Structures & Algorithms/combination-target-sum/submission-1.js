class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        // nums.sort((a, b) => a - b);

        const ans = [];
        function bt(idx, path, target) {
            if (target === 0) {
                ans.push(path.slice());
                return;
            }
            if (target < 0) {
                return;
            }

            for (let i = idx; i < nums.length; i++) {
                path.push(nums[i]);
                bt(i, path, target - nums[i]);
                path.pop();
            }
        }

        bt(0, [], target);
        return ans;
    }
}
