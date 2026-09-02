class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const h = new Map() // num -> index
        for(let i=0;i<nums.length;i++){
            const cpNum = target - nums[i];
            if(h.has(cpNum)) return [i, h.get(cpNum)]
            h.set(nums[i],i)
        }
    }
}
