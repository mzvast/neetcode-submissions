class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        //prerequisite: a <- b

        // toposort

        // inDeg 每个点的入度
        // g每个点指向的其他节点

        const inDeg = Array(numCourses).fill(0);
        const g = Array.from({length:numCourses},()=> []);

        for(let pre of prerequisites){
            const [to,from] = pre;
            inDeg[to] +=1;
            g[from].push(to)
        }

        // BFS from 0 inDeg point

        const q = [];

        for(let i=0;i<inDeg.length;i++){
            if(inDeg[i] === 0) q.push(i)
        }

        let sorted = 0;

        while(q.length){
            const cur = q.shift();
            sorted +=1;
            // remove it
            for(let to of g[cur]){
                inDeg[to] -= 1;
                if(inDeg[to]===0) q.push(to);
            }

        }

        return sorted === numCourses
    }
}
