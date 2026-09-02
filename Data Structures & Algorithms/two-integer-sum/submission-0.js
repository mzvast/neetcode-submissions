class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        // track num with index
        const xnums = Array(n);
        for (let i = 0; i < n; i++) {
            xnums[i] = [nums[i], i];
        }
        // sort
        xnums.sort((a, b) => (a[0] < b[0] ? -1 : 1));

        let l = 0,
            r = n - 1;
        while (l < r) {
            const sum = xnums[l][0] + xnums[r][0];
            if (sum === target) return [xnums[l][1], xnums[r][1]].sort((a, b) => a < b);
            else if (sum < target) l += 1;
            else if (sum > target) r -= 1;
        }
        return [];
    }
}
