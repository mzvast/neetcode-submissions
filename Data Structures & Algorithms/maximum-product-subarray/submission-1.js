class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        // dp[i][0] := min prod for nums[..i]
        // dp[i][1] := max prod for nums[..i]
        // dp[i][0] = min{nums[i],dp[i-1][0]*nums[i],dp[i-1][1]*nums[i]}
        // dp[i][1] = max{nums[i],dp[i-1][0]*nums[i],dp[i-1][1]*nums[i]}
        // ans = max{dp[i][1]}

        const n = nums.length,dp = Array.from({length:n},()=>[Infinity,-Infinity]);

        dp[0][0] = dp[0][1] = nums[0];

        let ans = nums[0];

        for(let i=1;i<n;i++){
            dp[i][0] = Math.min(nums[i],dp[i-1][0]*nums[i],dp[i-1][1]*nums[i]);
            dp[i][1] = Math.max(nums[i],dp[i-1][0]*nums[i],dp[i-1][1]*nums[i]);
            if(dp[i][1]>ans) ans= dp[i][1]
        }

        return ans;
    }
}
