class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;

        if (nums[0] === target) return 0;
        if (n === 1) return -1;
        if (nums[n - 1] === target) return n - 1;

        // search in binary

        let l = 0,
            r = n - 1;

        const head = nums[0],
            tail = nums[n - 1];

        /**
         *
         *
         * /|
         * ||/|
         */

        while (r - l > 2) {
            const mid = (r + l) >> 1;
            if (nums[mid] === target) return mid;
            if (head < nums[mid]) {
                if (head < target && target < nums[mid]) r = mid - 1;
                else l = mid + 1;
            } else if (nums[mid] < tail) {
                if (nums[mid] < target && target < tail) l = mid + 1;
                else r = mid - 1;
            }
        }

        for (let i = l; i <= r; i++) {
            if (nums[i] === target) return i;
        }

        return -1;
    }
}
