class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // save in set
        // count

        if (nums.length === 0) return 0;

        const h = new Set(nums);

        let ans = 1;

        for (let x of h) {
            if (h.has(x - 1)) continue; // skip not start point
            let len = 1,
                cur = x;
            while (h.has(cur + 1)) {
                len += 1;
                cur += 1;
            }
            ans = Math.max(ans, len);
        }

        return ans;
    }
}
