class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        // dp[i] := 第i个元素结尾的sum
        // dp[i] = if dp[i-1]<=0 return nums[i]
        //          else dp[i-1] + nums[i]
        // ans = max{dp[i]}

        const n = nums.length;

        const dp = Array(n).fill(-Infinity);

        dp[0] = nums[0];

        let ans=dp[0]

        for(let i=1;i<n;i++){
            if(dp[i-1]<=0){
                dp[i] = nums[i];
            }else{
                dp[i] = dp[i-1] + nums[i]
            }
            ans= Math.max(ans,dp[i])
        }

        return ans;
    }
}
