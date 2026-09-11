/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        let ans = true;

        function dfs(node, min, max) {
            if (!ans) return;
            if (!node) return;
            if (node.val <= min || node.val >= max) {
                ans = false;
                return;
            }

            dfs(node.left, min, node.val);
            dfs(node.right, node.val, max);
        }

        dfs(root, -Infinity, +Infinity);

        return ans;
    }
}
