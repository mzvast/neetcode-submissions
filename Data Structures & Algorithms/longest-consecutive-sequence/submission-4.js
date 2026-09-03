class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length ===0) return 0

        // save in Set
        const h = new Set(nums);

        let ans = 1;

        for(let x of h){
            // find the start point
            if(h.has(x-1)) continue;

            let cur = x, len = 1;
            while(h.has(cur+1)){
                cur+=1;
                len+=1;
            }
            ans = Math.max(ans, len);
        }


        return ans;
    }
}
