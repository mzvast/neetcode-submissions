class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const n = nums.length;
        let farthest = nums[0]

        for(let i=1;i<n;i++){
            if(farthest<i) return false;
            farthest = Math.max(farthest,i+nums[i])
        }

        return true
    }
}
