class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length;

        if(n===1 || nums[0]<nums[n-1]) return nums[0];

        /**
         * 
         * /|
         * ||/|
         */

        let l=0,r = n-1;

        while(r-l>2){
            const mid = (l+r)>>1;
            if(nums[mid]<nums[mid-1] && nums[mid]<nums[mid+1]) return nums[mid];
            else if(nums[l]<nums[mid]) l = mid+1
            else r = mid-1
        }
        let ans = nums[l];
        for(let i=l+1;i<=r;i++){
            ans = Math.min(ans,nums[i])
        }

        return ans;
    }
}
