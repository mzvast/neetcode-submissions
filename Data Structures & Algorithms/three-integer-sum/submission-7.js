class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // sort and 2 pointers
        nums.sort((a, b) => a - b);

        // i,l,r
        const n = nums.length;

        const ans = [];

        for (let i = 0; i < n - 2; i++) {
            if (nums[i] > 0) break;
            const target = -nums[i];
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i + 1,
                r = n - 1;
            while (l < r) {
                const sum = nums[l] + nums[r];
                if (sum === target) {
                    ans.push([nums[i], nums[l], nums[r]]);
                    // move
                    l += 1;
                    while (nums[l] === nums[l - 1]) l += 1;
                    r -= 1;
                    while (nums[r] === nums[r + 1]) r -= 1;
                } else if (sum < target) {
                    l += 1;
                    while (nums[l] === nums[l - 1]) l += 1;
                } else {
                    r -= 1;
                    while (nums[r] === nums[r + 1]) r -= 1;
                }
            }
        }

        return ans;
    }
}
