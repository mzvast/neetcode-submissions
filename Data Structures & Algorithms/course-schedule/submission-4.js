class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // toposort

        const inDeg = Array(numCourses).fill(0);
        const g = Array.from({length:numCourses},()=>[]);// to other nodes

        for(let [to,from] of prerequisites){
            inDeg[to] +=1;
            g[from].push(to);
        }

        let cnt = 0;

        const q = [];// inDeg ===0

        for(let i=0;i<numCourses;i++){
            if(inDeg[i]===0) q.push(i)
        }

        while(q.length){
            const cur = q.shift();
            cnt+=1;
            for(let to of g[cur]){
                inDeg[to]-=1
                if(inDeg[to]===0) q.push(to)
            }
        }

        return cnt===numCourses;
    }
}
