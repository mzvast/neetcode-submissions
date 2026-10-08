class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        // dp[i][0] := 以第i个结尾的最大
        // dp[i][1] := 以第i个结尾的最小
        // dp[i][0] = max{dp[i-1][0] * nums[i], dp[i-1][1] * nums[i], nums[i]}
        // ans = max{dp[i][0]}

        const n = nums.length;

        const dp = Array.from({length:n},()=>[-Infinity,Infinity]);

        dp[0][0] = nums[0]
        dp[0][1] = nums[0];

        let ans = dp[0][0];

        for(let i=1;i<n;i++){
            dp[i][0] = Math.max(dp[i-1][0] * nums[i], dp[i-1][1] * nums[i], nums[i]);
            ans = Math.max(ans,dp[i][0]);
            dp[i][1] = Math.min(dp[i-1][0] * nums[i], dp[i-1][1] * nums[i], nums[i]);
        }


        return ans;

    }
}
