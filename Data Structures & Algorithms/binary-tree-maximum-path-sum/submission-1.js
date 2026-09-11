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
        function dfs(node){
            if(!node) return 0;

            const l = Math.max(0,dfs(node.left)),
            r = Math.max(0,dfs(node.right));


            // update answer
            ans = Math.max(ans, l+r+node.val);

            return Math.max(l,r) + node.val;
        }

        dfs(root);

        return ans;
    }
}
