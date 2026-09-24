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
        // inorder increase

        let isValid = true;

        let pre;

        function dfs(node) {
            if (!node) return;

            dfs(node.left);
            // check
            if (pre === undefined || pre < node.val) {
                pre = node.val;
            } else if (pre >= node.val) {
                isValid = false;
                return;
            }

            dfs(node.right);
        }

        dfs(root);

        return isValid;
    }
}
