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
    maxDepth(root) {
        function dfs(node, depth) {
            if (!node) return 0;

            const l = dfs(node.left, depth);
            const r = dfs(node.right, depth);
            return Math.max(l, r) + 1;
        }

        return dfs(root, 0);
    }
}
