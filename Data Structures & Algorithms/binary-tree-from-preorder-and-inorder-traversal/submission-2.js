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
        // if (preorder.length === 0) return null;
        // // if (preorder.length === 1) return new TreeNode(preorder[0]);
        // const root = preorder[0];
        // // slice := [a,b)
        // const idxOfRootInorder = inorder.indexOf(root);
        // const leftInorder = inorder.slice(0, idxOfRootInorder),
        //     rightInorder = inorder.slice(idxOfRootInorder + 1);

        // const leftPreorder = preorder.slice(1, 1 + leftInorder.length),
        //     rightPreorder = preorder.slice(1 + leftInorder.length);

        // const node = new TreeNode(root);
        // node.left = this.buildTree(leftPreorder, leftInorder);
        // node.right = this.buildTree(rightPreorder, rightInorder);
        // return node;

        const positions = new Map();

        for(let i=0;i<inorder.length;i++) positions.set(inorder[i],i);

        function build(preStart, inStart, size) {
            if (size === 0) return null;

            const rootVal = preorder[preStart];
            const rootIdxIn = positions.get(rootVal);

            const leftSize = rootIdxIn - inStart;
            const rightSize = size - leftSize - 1;

            const node = new TreeNode(rootVal);
            node.left = build(preStart + 1, inStart, leftSize);
            node.right = build(preStart + 1 + leftSize, rootIdxIn + 1, rightSize);
            return node;
        }

        return build(0, 0, preorder.length);
    }
}
