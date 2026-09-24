class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;

        if (n === 1) return nums[0] === target ? 0 : -1;
        if(nums[0]===target) return 0
        if(nums[n-1]===target) return n-1;

        /**
         *
         * /|
         * ||/|
         */

        let l = 0,
            r = n - 1;

        const head = nums[0],
            tail = nums[n - 1];

        while (r - l > 2) {
            const mid = (l + r) >> 1;
            if (nums[mid] === target) return mid;
            if (head < nums[mid]) {
                // head->mid
                if (nums[l] < target && target < nums[mid]) r = mid;
                else l = mid;
            } else {
                // mid->tail ordered
                if (nums[mid] < target && target < nums[r]) l = mid;
                else r = mid;
            }
        }

        for (let i = l; i <= r; i++) {
            if (nums[i] === target) return i;
        }

        return -1;
    }
}
