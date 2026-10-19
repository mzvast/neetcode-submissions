class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;

        if(n ===1) return nums[0]===target?0:-1;

        let l=0,r= n-1;

        while(r-l>2){
            const mid = (l+r)>>1;
            if(nums[mid] === target) return mid;
            else if(nums[mid]<target) {
                l = mid+1
            }else{
                r = mid-1
            }
        }

        for(let i=l;i<=r;i++) if(nums[i]===target) return i;
        return -1;
    }
}
