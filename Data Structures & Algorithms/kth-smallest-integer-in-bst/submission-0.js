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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        // inorder reverse is ascend

        let ans;

        function dfs(node) {
            if (ans !== undefined) return;
            if (!node) return;

            dfs(node.left);
            k -= 1;
            if (k === 0) {
                ans = node.val;
                return;
            }
            dfs(node.right);
        }

        dfs(root);

        return ans;
    }
}
