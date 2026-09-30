class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {

        const g = Array.from({length:n},()=>[]);
        const visited = Array(n).fill(false);

        for(let [a,b] of edges){
            g[a].push(b);
            g[b].push(a);
        }

        let cnt = 0;

        for(let i=0;i<n;i++){
            if(visited[i]) continue;
            // BFS and cnt for start

            cnt+=1;
            visited[i] = true;
            const q = [i];
            while(q.length){
                const cur = q.shift();
                for(let to of g[cur]){
                    if(visited[to]) continue;
                    visited[to] = true;
                    q.push(to)
                }
            }
        }

        return cnt;
    }
}
