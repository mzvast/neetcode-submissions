class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;
        nums.sort((a, b) => a - b);

        const ans = [];

        // [i] < j < k

        for (let i = 0; i < n - 2; i++) {
            if(i>0 && nums[i]===nums[i-1]) continue;
            if (nums[i] > 0) break; //impossible

            const target = -nums[i];

            let l = i + 1,
                r = n - 1;
            while (l < r) {
                const sum = nums[l] + nums[r];
                if (sum === target) {
                    ans.push([nums[i], nums[l], nums[r]]);
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
