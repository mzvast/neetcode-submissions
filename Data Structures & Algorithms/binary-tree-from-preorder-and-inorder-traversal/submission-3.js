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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        function build(preStart, inStart, size) {
            if (size === 0) return null;

            const rootVal = preorder[preStart]
            const midIdxInorder = inorder.indexOf(rootVal);
            const leftSize = midIdxInorder - inStart;
            const rightSize = size - 1 - leftSize;

            const node = new TreeNode(rootVal);
            node.left = build(preStart + 1, inStart, leftSize);
            node.right = build(preStart + 1 + leftSize, midIdxInorder + 1, rightSize);
            return node;
        }

        return build(0, 0, inorder.length);
    }
}
