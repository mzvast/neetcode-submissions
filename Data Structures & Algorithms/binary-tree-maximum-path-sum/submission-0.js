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

            ans = Math.max(ans, l + node.val + r); // as root

            return node.val + Math.max(l, r); // as leaf
        }

        dfs(root);

        return ans;
    }
}
