class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // dp[i] := 到第i间的最大收益，第1和最后一间不能同时，分别scan
        // dp[i] = max{dp[i-2]+nums[i-1],dp[i-1]}
        const n = nums.length;
        if(n===1) return nums[0]
        const dp = Array(n+1).fill(0);

        // not 1st one

        for(let i=2;i<=n;i++){
            dp[i] = Math.max(dp[i-2]+nums[i-1],dp[i-1]);
        }

        const ans1 = dp[n]

        // not last one
        dp[1] = nums[0]

         for(let i=2;i<n;i++){
            dp[i] = Math.max(dp[i-2]+nums[i-1],dp[i-1]);
        }

        return Math.max(ans1,dp[n-1]);
    }
}
