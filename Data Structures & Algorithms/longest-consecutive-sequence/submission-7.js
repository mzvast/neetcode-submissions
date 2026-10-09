class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const h = new Set(nums)

        let ans = 0;

        for(let num of nums){
            if(h.has(num-1)) continue;
            let cnt = 1, cur = num;
            while(h.has(cur+1)){
                cnt+=1;
                cur+=1;
            }
            ans = Math.max(ans, cnt)
        }

        return ans;
    }
}
