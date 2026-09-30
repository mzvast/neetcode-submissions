class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // toposort

        const inDeg = Array(numCourses).fill(0)
        const g = Array.from({length:numCourses},()=>[])

        for(let [to,from] of prerequisites){
            inDeg[to] +=1;
            g[from].push(to)
        }

        let sorted =0;

        const q = [];

        for(let i=0;i<numCourses;i++){
            if(inDeg[i]===0)q.push(i)
        }

        while(q.length){
            const cur = q.shift();
            sorted+=1;
            for(let x of g[cur]){
                inDeg[x] -=1;
                if(inDeg[x]===0) q.push(x)
            }
        }

        return sorted === numCourses
    }
}
