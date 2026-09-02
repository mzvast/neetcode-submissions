class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const startCode = "a".charCodeAt(0);
        const seen = Array(26).fill(0)
        for(let x of s){
            const idx = x.charCodeAt(0) - startCode;
            seen[idx] +=1
        }

        for(let x of t){
            const idx = x.charCodeAt(0) - startCode;
            seen[idx] -=1
        }

        for(let x of seen){
            if(x !== 0 ) return false;
        }
        return true;
    }
}
