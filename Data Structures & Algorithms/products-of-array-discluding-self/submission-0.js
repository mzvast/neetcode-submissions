class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // leftProd of i lp[i]
        // rightProd of i rp[i];
        // ans[i] = lp[i] * rp[i]
        const n = nums.length;
        const ans =  Array(n).fill(1), 
        lp = Array(n).fill(1),
        rp = Array(n).fill(1);

        // [1,2,4,6]
        // 1,2,8,48

        let cur = 1
        for(let i=0;i< n;i++){
            // update leftProd
            if(i-1>=0){
                cur *= nums[i-1]
                lp[i]  = cur
                
            }
        }

        
        cur = 1;
         for(let i=n-1;i>=0;i--){
            // update rightProd
            if(i+1<=n-1){
                cur  *= nums[i+1];
                rp[i] = cur;
            }
        }

        for(let i=0;i< n;i++){
            ans[i] = lp[i] * rp[i]
        }

        // console.log(lp,rp,ans)

        return ans;
    }
}
