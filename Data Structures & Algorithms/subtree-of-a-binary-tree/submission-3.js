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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSameTree(p, q) {
            if (!p && !q) return true;
            if (!p || !q) return false;
            if (p.val !== q.val) return false;
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        }

        let ans = false;

        function dfs(node) {
            if (!node || ans) return;
            if (isSameTree(node, subRoot)) {
                ans = true;
                return;
            }
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);

        return ans;
    }
}
