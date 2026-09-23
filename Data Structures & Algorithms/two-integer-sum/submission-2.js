class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const h = new Map();// num->idx

        for(let i=0;i<nums.length;i++){
            const remain = target - nums[i];
            if(h.has(remain)) return [i,h.get(remain)];
            h.set(nums[i],i);
        }

    }
}
