class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // 第一个和最后一个不能同时抢
        // dp[i] := 到第i间的最大收益
        // dp[i] = max{dp[i-1], dp[i-2]+nums[i]}

        const n = nums.length;
        if (n === 1) return nums[0];

        const dp = Array(n).fill(0);

        // case 1 首间不抢
        dp[0] = 0;
        dp[1] = nums[1];

        for (let i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }

        let ans = dp[n - 1];

        // case 2 最后一间不抢
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0],nums[1]);

        for(let i=2;i<n-1;i++){
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }

        ans = Math.max(ans, dp[n-2])

        return ans
    }
}
