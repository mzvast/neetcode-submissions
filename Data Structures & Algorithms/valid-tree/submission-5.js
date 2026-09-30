class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // point and edge
        if(n-1 !== edges.length) return false;

        const g = Array.from({length:n},()=>[]);
        const visited = Array(n).fill(false)

        for(let [a,b] of edges){
            g[a].push(b);
            g[b].push(a);
        }

        // BFS level order
        let cnt= 0;
        visited[0] = true;
        const q = [0];

        while(q.length){
            const cur = q.shift();
            cnt+=1; // dequeue
            for(let to of g[cur]){
                if(visited[to]) continue;
                visited[to] = true;
                q.push(to)
            }
        }


        return cnt === n
    }
}
