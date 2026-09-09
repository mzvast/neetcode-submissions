class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;
        /**
         * 
         * /|
         * ||/|
         */


        if(nums[0] === target) return 0;
        if(nums[n-1] == target) return n-1;

        let l = 0, r = n-1;

        while(r - l >2){
            const mid = (r+l) >> 1;
            if(nums[mid] === target) return mid;
            if(nums[l]<nums[mid]){ // left ordered
                if(nums[l]<target && target < nums[mid]) r = mid - 1
                else l = mid +1;
            } else {
                // right ordered
                if(nums[mid]<target && target < nums[r]) l = mid +1;
                else r= mid - 1;
            }
        }

        for(let i=l;i<=r;i++){
            if(nums[i] === target) return i;
        }

        return -1;
    }
}
