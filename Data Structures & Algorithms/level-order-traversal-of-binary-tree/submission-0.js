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
     * @return {number[][]}
     */
    levelOrder(root) {
        const ans = [];

        const q = []; // current level

        if (root) q.push(root);

        while (q.length) {
            const len = q.length;
            const tmp = [];
            for (let i = 0; i < len; i++) {
                const cur = q.shift();
                tmp.push(cur.val);
                if (cur.left) q.push(cur.left);
                if (cur.right) q.push(cur.right);
            }

            ans.push(tmp);
        }

        return ans;
    }
}
