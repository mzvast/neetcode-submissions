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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const ans = [] // in preorder and null as #

        function dfs(node){
            if(!node) {
                ans.push('#');
                return;
            }

            ans.push(node.val)

            dfs(node.left);
            dfs(node.right);
        }

        dfs(root)
        return ans.join(',')
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(data.length===0) return null;
        const values = data.split(',');
        let idx = 0;

        function dfs(){
            const value = values[idx++];
            if(value === '#') return null;

            const node = new TreeNode(+value);
            node.left = dfs();
            node.right = dfs()
            return node;
        }

        return dfs()
    }
}
