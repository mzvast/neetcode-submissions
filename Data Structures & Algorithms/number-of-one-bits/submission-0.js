class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let ans = 0;

        while(n>0){
            if(n&1) ans+=1;
            n = n>>>1
        }

        return ans;
    }
}
