class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        // dp[i] := 从s[i..]解码数量
        // dp[i] = sum{dp[i+w.length]} if s[i,i+w.length]===w
        // ans = dp[0]
        const n = s.length;
        const dp = Array(n+1).fill(0);
        dp[n] = 1;
        const dict = Array.from({length:26},(_,i)=>i+1+'')
        for(let i=n-1;i>=0;i--){
            for(let w of dict){
                if(i+w.length<=n && s.slice(i,i+w.length)===w){
                    dp[i] += dp[i+w.length];
                }
            }
        }

        return dp[0]
    }
}
