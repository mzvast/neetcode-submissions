class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // hash(str) -> uuid, if uuid match put in bracket

        // store in map

        const h = new Map(); // hash-> []
        for(let str of strs) {
            const k = hash(str);
            if(!h.has(k)) h.set(k,[str])
            else {
                const cur = h.get(k)
                cur.push(str)
            }
        }

        // format result
        return Array.from(h.values())

        function hash(str){
            const ans = Array(26).fill(0);
            for(let x of str){
                const idx = x.charCodeAt(0) - "a".charCodeAt(0);
                ans[idx] +=1;
            }
            return ans.join('-')
        }
    }
}
