class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        // expect nums[i] === i

        const n = nums.length;

        function swap(i, j) {
            [nums[i], nums[j]] = [nums[j],nums[i]];
        }

        for(let i=0;i<n;i++){
            while(nums[i]!==i && nums[i]<n){
                const toIdx = nums[i];
                swap(i,toIdx);
            }
        }

        for(let i=0;i<n;i++) if(nums[i]!==i) return i;

        // all meet
        return n;
    }
}
