class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const inDeg = Array(numCourses).fill(0);// 每个点的入度
        const g = Array.from({length:numCourses},()=>[]);// 每个点指向其他的点

        for(let [to,from] of prerequisites){
            inDeg[to] +=1;
            g[from].push(to)
        }

        const q =[];// inDeg ===0 point

        for(let i=0;i<numCourses;i++){
            if(inDeg[i]===0) q.push(i)
        }

        let sorted = 0;// 

        while(q.length){
            const cur = q.shift();
            sorted+=1;
            for(let to of g[cur]){
                inDeg[to] -=1;
                if(inDeg[to] === 0) q.push(to)
            }

        }

        return sorted === numCourses
    }
}
