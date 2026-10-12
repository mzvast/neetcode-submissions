/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const h = new Map();// old->new

        function dfs(node){
            if(!node) return node;
            if(h.has(node)) return h.get(node);
            const newNode = new Node(node.val);
            h.set(node,newNode);

            for(let x of node.neighbors){
                const y = dfs(x);
                newNode.neighbors.push(y);
            }

            return newNode;
        }

        return dfs(node);
    }
}
