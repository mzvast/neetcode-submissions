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
     * @return {number}
     */
    maxPathSum(root) {
        let ans = -Infinity;

        function dfs(node) {
            if (!node) return 0;

            const l = Math.max(0, dfs(node.left)),
                r = Math.max(0, dfs(node.right));

            if (node.val + l + r > ans) { // 作为根
                ans = node.val + l + r;
            }

            return Math.max(l,r) + node.val; // 作为边
        }

        dfs(root);

        return ans;
    }
}
