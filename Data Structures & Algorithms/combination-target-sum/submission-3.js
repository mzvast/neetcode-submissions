class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a,b)=>a-b);

        const ans = []

        function bt(path,idx,sum){
            if(sum===0){
                ans.push(path.slice());
                return;
            } else if(sum<0) return;
            if(idx===nums.length) return;
            for(let i=idx;i<nums.length;i++){
                const num = nums[i];
                path.push(num);
                bt(path,i,sum-num);
                path.pop()
            }
        }

        bt([],0,target)

        return ans;
    }
}
