/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */
const h = new Map(); // old node -> new node
class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return node;

        if(h.has(node)) return h.get(node);
        
        const root = new Node(node.val);

         h.set(node,root);

        for(let neighbor of node.neighbors){
            root.neighbors.push(this.cloneGraph(neighbor))
        }

        return root;
    }
}
