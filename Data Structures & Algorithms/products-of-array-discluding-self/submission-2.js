class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;

        const arr1 = Array(n).fill(1), // left prod
        arr2 = Array(n).fill(1); // right prod


        let cur =1

        for(let i=0;i<n;i++){
            arr1[i] = cur;
            cur*=nums[i]
        }

        cur = 1;

        for(let i=n-1;i>=0;i--){
            arr2[i] = cur;
            cur*=nums[i]
            
        }

        const ans = Array(n).fill(1);

        for(let i=0;i<n;i++){
            ans[i] = arr1[i] * arr2[i]
        }

        return ans;
    }
}
