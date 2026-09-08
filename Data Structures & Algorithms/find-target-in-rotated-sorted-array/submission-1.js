class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // /|
        //| |/|

        const n = nums.length,
            head = nums[0],
            tail = nums[n - 1];

        if (target === head) return 0;
        else if (target === tail) return n - 1;

        let l = 0,
            r = n - 1;

        while (l <= r) {
            const mid = (l + r) >> 1;
            if (nums[mid] === target) return mid;
            // l mid r
            if (nums[l] <= nums[mid]) {
                if (nums[l] <= target && target < nums[mid]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[r]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }
        return -1;
    }
}
