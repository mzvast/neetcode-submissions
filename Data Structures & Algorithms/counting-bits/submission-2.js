class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        // dp[n] := n的1个数
        // dp[2n+1] = dp[2n]+1
        // dp[2n] = dp[n]
        // dp[0] = 0
        // dp[1] = 1

        const dp = Array(n+1).fill(0);
        if(n>=1) dp[1] = 1;

        for(let i=2;i<=n;i++){
            if(i%2===0){
                dp[i] = dp[i>>1]
            }else{
                dp[i] = dp[i-1] +1;
            }
        }

        return dp;
    }
}
