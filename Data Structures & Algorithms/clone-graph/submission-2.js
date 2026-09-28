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
            const ret= new Node(node.val)
            h.set(node,ret)
            for(let nei of node.neighbors){
                const newNei = dfs(nei)
                ret.neighbors.push(newNei);
            }
            return ret;
        }

        return dfs(node)
    }
}
